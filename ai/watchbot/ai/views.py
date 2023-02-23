from django.shortcuts import render
from rest_framework.decorators import api_view
import cv2
import numpy as np
from .detector import processImage
from rest_framework.response import Response
from .models import Premise
# Create your views here.


@api_view(["GET"])
def hello(request):
    return Response({"status":True})
@api_view(["POST"])
def ai(request):
    try:
        data = request.data.get("data")
        # premise_id = request.data.get("id")
        # pm = Premise.objects.all()
        # if Premise.objects.filter(id=premise_id).first() or True:
        array = np.array(data,dtype="uint8").reshape((416,416,-1))
        array = cv2.cvtColor(array,cv2.COLOR_RGB2BGR)
        out = processImage(array)
        return Response({"status":True,"data":out})

        # else:
        #     return Response(status=400)

    except Exception as e:
        return Response({"status":False,"error":str(e)})




