from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cuisine, Restaurant
from rest_framework import status
from .serializers import RestaurantSerializer, CuisineSerializer
import pandas as pd


@api_view(["GET"])
def searchRestaurant(request):
    """Search for the restaurants and return it
    request params:
    :name: Name of the restaurant, exact or partial
    :rating: Rating of the restaurant, equals or greater than
    :distance: Distance of the restaurant, equals or lower than
    :price: Price of the restaurant, equals or lower than
    :cuisine: Name of the cuisine, exact or partial
    :return: the first five best restaurants from the gived params
    """

    # get the params with default values
    name = request.query_params.get("NAME", default="")
    rating = request.query_params.get("RATING", default=0)
    distance = request.query_params.get("DISTANCE", default=99999)
    price = request.query_params.get("PRICE", default=99999)
    cuisine = request.query_params.get("CUISINE", default="")

    # check if the int fields were passed as int fields
    try:
        int(rating)
        int(distance)
        int(price)
    except ValueError:
        return Response(
            "Rating, Distance and Price needs to be an int number",
            status=status.HTTP_400_BAD_REQUEST,
        )

    # make the query
    restaurants = Restaurant.objects.filter(
        name__icontains=name,
        customer_rating__gte=rating,
        distance__lte=distance,
        price__lte=price,
        cuisine__name__icontains=cuisine,
    ).order_by("distance", "-customer_rating", "price", "?")[:5]

    # serialize and return the data
    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def initdata(request):
    """Check if the data were imported from the cuisine and restaurant csv files
    :return: initialized, if no error occurs
    """
    try:
        if not Cuisine.objects.all():
            new_cuisines = pd.read_csv("backend/cuisines.csv")
            row_iter = new_cuisines.iterrows()
            objs = []
            for index, row in row_iter:
                objs.append(Cuisine(id=row["id"], name=row["name"]))
            Cuisine.objects.bulk_create(objs)

        if not Restaurant.objects.all():
            new_restaurants = pd.read_csv("backend/restaurants.csv")
            row_iter = new_restaurants.iterrows()
            objs = []
            for index, row in row_iter:
                objs.append(
                    Restaurant(
                        name=row["name"],
                        customer_rating=row["customer_rating"],
                        distance=row["distance"],
                        price=row["price"],
                        cuisine=Cuisine.objects.get(id=row["cuisine_id"]),
                    ),
                )
            Restaurant.objects.bulk_create(objs)
    except:
        return Response(
            "something wrong occur", status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    return Response("initialized", status=status.HTTP_200_OK)
