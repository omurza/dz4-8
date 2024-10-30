from django.shortcuts import render, redirect
from apps.main.models import Main, Artist, Event, Contact
from apps.telegram.views import get_text

# Create your views here.

def main(request):
    main = Main.objects.latest('id')
    return render(request, 'index.html', locals())

def artist(request):
    artist = Artist.objects.all()
    return render(request, 'artist.html', locals())

def event(request):
    event = Event.objects.all()
    return render(request, 'event-list-3.html', locals())

def event_detail(request, id):
    event_detail = Event.objects.get(id=id)
    return render(request, 'event-detail.html', locals())


def contact(request):
    main = Main.objects.latest('id')
    if request.method == "POST":
        name = request.POST.get('name')
        number = request.POST.get('number')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        Contact.objects.create(name=name, number=number, email=email, subject=subject, message=message)
    
    
        get_text(f""" Оставлен отзыв 
        Имя пользователя: {name}
        Номер телефона: {number}
        Адрес(email): {email}
        Тема сообщения: {subject}
        Сообщение: {message}
        """)
        
        return redirect('main')

    return render(request, "contact-us.html", locals())