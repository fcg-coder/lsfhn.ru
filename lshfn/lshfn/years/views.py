from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from .models import Year, Project,startPage,AvailableFont



def index(request):
    years = Year.objects.all()
    projects = Project.objects.all()
    font = startPage.objects.filter(id=1).first().font
    content1 = startPage.objects.filter(id=1).first().content1
    content2 = startPage.objects.filter(id=1).first().content2
    print(font)
    return render(request, 'index.html', {'years':years   , 'projects':projects, 'font':font , 'content1':content1,'content2':content2,  })



def polunochnoe(request):

    return render(request, 'polunochnoe1.html')

