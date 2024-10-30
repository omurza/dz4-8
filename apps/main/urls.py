from django.urls import path
from apps.main.views import main, artist, event, event_detail, contact

urlpatterns = [
    path('', main, name='main'),
    path('artist/',artist, name='artist'),
    path('event/', event, name='event'),
    path('event_detail/<int:id>/', event_detail, name='event_detail'),
    path('contact/', contact, name='contact'),
    path('contact-us.html', contact, name='contact_us'),
]
