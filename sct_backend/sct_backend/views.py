from django.shortcuts import render

def home(request):
    return render(request, "index.html")
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def home(request):
    return render(request, "index.html")
