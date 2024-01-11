from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .models import Year, Project



def index(request):
    years = Year.objects.all()
    projects = Project.objects.all()

    return render(request, 'index.html', {'years':years   , 'projects':projects })



def polunochnoe(request):

    return render(request, 'polunochnoe1.html')

