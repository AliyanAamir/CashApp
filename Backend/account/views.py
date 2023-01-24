from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import  *
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from account.models import *

# Create your views here.

def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user =serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token':token,'msg':'Registration Successful'},
        status=status.HTTP_201_CREATED)
        

class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer =UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        cashtag=serializer.data.get('cashtag')
        password=serializer.data.get('password')
        user = authenticate(username=cashtag,password=password)
            
        if user:
            token =get_tokens_for_user(user)
            return Response({'token': token,'msg':'Login Success'},status=status.HTTP_200_OK)
        else:
            return Response({'errors':{'non_field_errors':['Email or password is not Valid']}},status=status.HTTP_404_NOT_FOUND)
               
class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
    
class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)

class Payment(APIView):

  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]

  def post(self, request, format=None):

    cashtag = request.data.get("cashtag")
    balance = request.data.get("balance")

      # Validation
    if not balance:
        return Response({'errors':{'msg': 'Please provide balance'}}, status=status.HTTP_403_FORBIDDEN)
    if not cashtag:
        return Response({'errors':{'msg': 'Please provide cashtag'}}, status=status.HTTP_403_FORBIDDEN)

      # Main Logic Works Here
    payment_sender = request.user
    payment_sender.balance = float(payment_sender.balance) - float(balance)
    payment_sender.save()

    payment_reciever = User.objects.filter(cashtag=cashtag)[0]
    if not payment_reciever:
        return Response({'errors':{'msg': 'User with this cashtag does not exist'}}, status=status.HTTP_403_FORBIDDEN)

    payment_reciever.balance = float(payment_reciever.balance) + float(balance)
    payment_reciever.save()
    
    Transaction_Details.objects.create(sender=payment_sender,reciever=payment_reciever,amount=balance,status_for_sender='credit',status_for_reciever='debit')

    return Response({'msg': f'{payment_sender} sent {payment_reciever} ${balance}'}, status=status.HTTP_200_OK)

  # def get(self, request, format=None):

class TransactionView(APIView):
  enderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request,format=None):
    current_user = request.user
    transaction_details = Transaction_Details.objects.filter(sender=current_user)
    p = Transaction_Details.objects.filter(reciever = current_user)
    r = p | transaction_details
    print(transaction_details)

    serializer = TransactionViewSerializer(r,many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
    
    # receiever = Transaction_Details.objects.filter(sender=sender)

