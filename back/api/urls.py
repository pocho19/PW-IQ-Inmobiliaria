from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import StateViewSet, SalesViewSet, RentalsViewSet, RegisterView, me

router = routers.DefaultRouter()
router.register(r'states', StateViewSet)
router.register(r'states_sales', SalesViewSet)
router.register(r'states_rentals', RentalsViewSet)
# router.register(r'activity', ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', RegisterView.as_view()),
    path('me/', me),
]
