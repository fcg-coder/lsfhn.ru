from django.contrib import admin
from .models import Year, Project


@admin.register(Year)
class YearAdmin(admin.ModelAdmin):
    list_display = ['year']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'year']
