from django.urls import include, path
from rest_framework import routers

from api.views import StateViewSet, SalesViewSet, RentalsViewSet

router = routers.DefaultRouter()
router.register(r'states', StateViewSet)
router.register(r'states_sales', SalesViewSet)
router.register(r'states_rentals', RentalsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
