from django.db import models
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)
# Create your models here.
class Person(models.Model):
    main_head=models.CharField(default='default_value',max_length=30)
    sub_head= models.CharField(default='default_value',max_length=30)
    content=models.CharField(default='default_value',max_length=600)
    date = models.CharField(default='default_value',max_length=30)
    image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    

  