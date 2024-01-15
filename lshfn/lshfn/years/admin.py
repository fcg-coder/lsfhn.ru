from django.contrib import admin
from .models import Year, Project,AvailableFont,startPage


@admin.register(Year)
class YearAdmin(admin.ModelAdmin):
    list_display = ['year']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'year']


@admin.register(AvailableFont)
class AvailableFontAdmin(admin.ModelAdmin):
    pass


@admin.register(startPage)
class startPageAdmin(admin.ModelAdmin):
    pass
