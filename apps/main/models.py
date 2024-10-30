from django.db import models
from apps.utils import custom_upload_path
from django.utils import timezone

# Create your models here.
class Main(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name='Заголовок сайта'
    )
    description = models.TextField(
        verbose_name='Описание сайта'
    )
    logo = models.ImageField(
        upload_to=custom_upload_path
    )
    instagram = models.URLField(
        verbose_name='Ссылка на instagram',
        blank=True, null=True
    )
    facebook = models.URLField(
        verbose_name='Ссылка на facebook',
        blank=True, null=True
    )
    youtube = models.URLField(
        verbose_name='Ссылка на youtube',
        blank=True, null=True
    )
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Основная настройка"
        verbose_name_plural = "Основные настроки"
        
class Artist(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name="Имя артиста"
    )
    location = models.CharField(
        max_length=255,
        verbose_name="Адрес"
    )
    description = models.TextField(
        verbose_name="Описание артиста"
    )
    photo = models.ImageField(
        upload_to=custom_upload_path,
        verbose_name="Фото артиста"
    )
    
    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = "Артист"
        verbose_name_plural = "Артисты"
        
        
class Event(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Названия события"
    )
    description = models.TextField(
        verbose_name="Описание события"
    )
    image = models.ImageField(
        upload_to=custom_upload_path,
        verbose_name="Фото"
    )
    date = models.DateTimeField(
        default=timezone.now,
        verbose_name="Время события"
    )
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Событие"
        verbose_name_plural = "Событии"
        
        

class Contact(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name="Имя отправителя"
    )
    number = models.CharField(
        max_length=255,
        verbose_name="Номер телефона отправителя"
    )
    email = models.EmailField(
        verbose_name="email"
    )
    subject = models.CharField(
        max_length=255,
        verbose_name="Тема отправителя"
    )
    message = models.TextField(
        verbose_name="Сообщение"
    )
    
    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = "Оставленный отзыв"
        verbose_name_plural = "Оставденные отзывы"