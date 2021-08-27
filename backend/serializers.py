from rest_framework import serializers
from .models import Cuisine, Restaurant


class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = "__all__"


class RestaurantSerializer(serializers.ModelSerializer):
    cuisine = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Restaurant
        fields = ["id", "name", "customer_rating", "distance", "price", "cuisine"]

    def get_cuisine(self, obj):
        serializer = CuisineSerializer(obj.cuisine, many=False)
        return serializer.data
