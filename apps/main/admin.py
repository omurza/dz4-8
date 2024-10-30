from django.contrib import admin
from apps.main.models import Main, Artist, Event, Contact
# Register your models here.

@admin.register(Main)
class MainAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'logo', 'facebook', 'instagram', 'youtube']
    
@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    fields = ['name', 'location', 'description', 'photo']
    
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'image', 'date']
    # readonly_fields = ['date']
    
    
admin.site.register(Contact)