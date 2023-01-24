from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class UserManager(BaseUserManager):
    def create_user(self, cashtag,name, date_of_birth,balance=0,password=None,password2=None):
        """
        Creates and saves a User with the given cashtag,balance,name, date of
        birth and password.
        """
        if not cashtag:
            raise ValueError('Users must have an cashtag')

        user = self.model(
            cashtag=self.normalize_email(cashtag),
            date_of_birth=date_of_birth,
            name = name,
            balance= balance,

        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,  cashtag,name, date_of_birth,balance=0, password=None):
        """
        Creates and saves a superuser with the given cashtag,balance,name, date of
        birth and password.
        """
        user = self.create_user(
            cashtag,
            password=password,
            date_of_birth=date_of_birth,
            name=name,
            balance= balance,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    cashtag = models.CharField(max_length=12,unique=True, primary_key=True)
    balance = models.FloatField(default=0)
    date_of_birth = models.DateField()
    name= models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)



    objects = UserManager()

    USERNAME_FIELD = 'cashtag'
    REQUIRED_FIELDS = ['date_of_birth','name']

    def __str__(self):
        return self.cashtag

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

choices=(('debit','Debit'),('credit','Credit'),('none','None'))
class Transaction_Details(models.Model):
    
    sender = models.ForeignKey(User,on_delete=models.CASCADE, related_name="sender")
    reciever = models.ForeignKey(User,on_delete=models.CASCADE,related_name="reciever")
    amount= models.FloatField(default=0)
    date=models.DateField(auto_now_add=True)
    status_for_sender=models.CharField(choices=choices, max_length=6,default='none')
    status_for_reciever=models.CharField(choices=choices, max_length=6,default='none')
    isDebit = models.BooleanField(default=False)


