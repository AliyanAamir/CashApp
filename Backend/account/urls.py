
from django.urls import path,include
from account.views import *

urlpatterns = [
     path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('payment/', Payment.as_view(), name='payment'),
    path('transaction_view/', TransactionView.as_view(), name='transaction view'),
    path('get_user_info/', UserInfoView.as_view(), name='amount show'),

]
