from rest_framework import serializers
from account.models import *



class UserRegistrationSerializer(serializers.ModelSerializer):
    

    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model=User
        fields=['cashtag','name','date_of_birth','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }

    def validate(self,attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        return attrs



    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    cashtag = serializers.CharField(max_length=12)
    class Meta:
        model=User
        fields= ['cashtag','password']
        
class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['cashtag', 'name']

class UserChangePasswordSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  class Meta:
    fields = ['password', 'password2']

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    user = self.context.get('user')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    user.set_password(password)
    user.save()
    return attrs

class TransactionViewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Transaction_Details
    fields =  ['date','sender','reciever','amount']
      
  def to_representation(self, attrs):
      user = User.objects.get(cashtag=attrs.cashtag)
      # {date:'13 Nov 2022',sender:'Leena Kamran',amount:'100',isDebit:true}
      sender=Transaction_Details.objects.filter(sender=user)
      reciever = Transaction_Details.objects.filter(reciever=user)

      all_data={'data':[]}
      for x in sender:
        
        all_data['data'].append({'date':x.date,'sender':x.reciever.cashtag,'amount':x.amount,'isDebit':True})
      for y in reciever:
        all_data['data'].append({'date':y.date,'reciever':y.sender.cashtag,'amount':y.amount,'isDebit':False})
      return all_data

class UserInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['name','balance','date_of_birth',"cashtag"]


