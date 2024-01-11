from django.db import models

class Year(models.Model):
    year = models.IntegerField(unique=True)

    def __str__(self):
        return str(self.year)

class Project(models.Model):
    name = models.CharField(max_length=200)
    year = models.ForeignKey(Year, on_delete=models.CASCADE)
    link = models.URLField(blank=True)

    def __str__(self):
        return self.name
