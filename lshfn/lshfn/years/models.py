from django.db import models

class AvailableFont(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

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

class startPage(models.Model):
    content1 = models.CharField(max_length=100000)
    content2 = models.CharField(max_length=100000)
    name = models.CharField(max_length=200)
    font = models.ForeignKey(AvailableFont, on_delete=models.CASCADE) 
    def __str__(self):
        return str(self.name)
