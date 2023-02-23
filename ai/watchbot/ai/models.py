from django.db import models

# Create your models here.
class Premise(models.Model):

    class Meta:
        db_table = "Premise"

    id = models.CharField(max_length=6,primary_key=True)
    name = models.TextField()
    
    
    def __str__(self):
        return self.name