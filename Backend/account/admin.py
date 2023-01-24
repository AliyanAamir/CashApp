from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from account.models import *
# Register your models here.

class UserAdmin(UserAdmin):
    # The forms to add and change user instances
    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('cashtag', 'date_of_birth', 'name','balance','is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        ('User Credentials' ,{'fields': ('cashtag', 'password')}),
        ('Personal info', {'fields': ('date_of_birth','name','balance')}),
        ('Permissions', {'fields': ('is_admin',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('cashtag', 'date_of_birth','name', 'password1', 'password2'),
        }),
    )
    search_fields = ('cashtag',)
    ordering = ('cashtag',)
    filter_horizontal = ()


# Now register the new UserAdmin...
admin.site.register(User, UserAdmin)


class Trasaction_admin(admin.ModelAdmin):
    list_display = ("id","sender","reciever","amount","status_for_sender","status_for_reciever","date")
admin.site.register(Transaction_Details,Trasaction_admin)   