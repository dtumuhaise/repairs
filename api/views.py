# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status

# from .models import Repairs
# from .serializers import *


# @api_view(['GET', 'POST'])
# def repairs_list(request):
#     if request.method == 'GET':
#         data = Repairs.objects.all()
#         serializer = RepairsSerializer(
#             data, context={'request': request}, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = RepairsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['PUT', 'DELETE'])
# def repairs_detail(request, pk):
#     try:
#         data = Repairs.objects.get(id=pk)
#     except Repairs.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = RepairsSerializer(data, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         data.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


from rest_framework import generics
from .models import Repairs
from .serializers import RepairsSerializer


class repairs_list(generics.ListCreateAPIView):
    serializer_class = RepairsSerializer
    queryset = Repairs.objects.all()


class repairs_detail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RepairsSerializer
    queryset = Repairs.objects.all()
