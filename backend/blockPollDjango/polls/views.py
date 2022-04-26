from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from polls.serializers import PollSerializer, BucketSerializer
from polls.models import Poll, Bucket
import polls.rippleDao as rippleDao

@api_view(['GET', 'POST'])
def poll_list(request):
    authentication_classes = []
    permission_classes = []
    if request.method == 'GET':
        polls = Poll.objects.all()
        serializer = PollSerializer(polls, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PollSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_buckets_of_poll(request, poll_id):
    """
    Get buckets of a particular poll
    """
    authentication_classes = []
    permission_classes = []
    try:
        buckets = Bucket.objects.filter(actual_poll_id=poll_id)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = BucketSerializer(buckets, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_recent_polls(request):
    """
    Get all recent polls
    """
    authentication_classes = []
    permission_classes = []
    try:
        polls = Poll.objects.order_by('-poll_id')[:10]
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PollSerializer(polls, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_votes(request, poll_id, bucket_name):
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll_id, bucket_name=bucket_name)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(rippleDao.retrieve_votes(bucket.wallet_address))

@api_view(['POST'])
def cast_vote(request, poll_id, bucket_name):
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll_id, bucket_name=bucket_name)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    rippleDao.cast_vote(bucket.wallet_address)

    return Response()

@api_view(['POST'])
def bucket_create(request, poll, bucket_name):
    """
    Create a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
        return Response(status=status.HTTP_409_CONFLICT)
    except Bucket.DoesNotExist:
        pass
    try:    
        poll_obj = Poll.objects.get(poll_id=poll)
        print(poll_obj)
    except Poll.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    print(poll_obj.poll_id)
    wallet_address = rippleDao.create_bucket()
    bucket=Bucket(poll=poll_obj, actual_poll_id = poll, bucket_name=bucket_name, wallet_address='******')
    print(bucket.poll.poll_id)
    Bucket.objects.create(poll=poll_obj, actual_poll_id = poll, bucket_name=bucket_name, wallet_address=wallet_address)
    serializer = BucketSerializer(bucket)
    print(serializer.data)
    return Response(serializer.data)
    
@api_view(['DELETE'])
def bucket_delete(request, poll, bucket_name):
    """
    Delete a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def poll_delete(request, poll_id):
    """
    Delete a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
    except Poll.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    poll.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def poll_create(request, poll_id, poll_text):
    """
    Create a poll
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
        return Response(status=status.HTTP_409_CONFLICT)
    except Poll.DoesNotExist:
        pass

    poll=Poll(poll_id=poll_id, poll_text=poll_text)
    Poll.objects.create(poll_id=poll_id, poll_text=poll_text)
    serializer = PollSerializer(poll)
    return Response(serializer.data)

@api_view(['PUT'])
def bucket_update_name(request, poll, bucket_name, bucket_new_name):
    """
    Update a bucket's name
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoestNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.bucket_name = bucket_new_name
    bucket.save()
    serializer = BucketSerializer(bucket)
    return Response(serializer.data)
    
@api_view(['GET'])
def bucket_details(request, poll, bucket_name):
    """
    Retrieve a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def poll_delete(request, poll_id):
    """
    Delete a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
    except Poll.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    poll.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def poll_create(request, poll_id, poll_text):
    """
    Create a poll
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
        return Response(status=status.HTTP_409_CONFLICT)
    except Poll.DoesNotExist:
        pass

    poll=Poll(poll_id=poll_id, poll_text=poll_text)
    Poll.objects.create(poll_id=poll_id, poll_text=poll_text)
    serializer = PollSerializer(poll)
    return Response(serializer.data)

@api_view(['PUT'])
def bucket_update_name(request, poll, bucket_name, bucket_new_name):
    """
    Update a bucket's name
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoestNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.bucket_name = bucket_new_name
    bucket.save()
    serializer = BucketSerializer(bucket)
    return Response(serializer.data)
    
@api_view(['GET'])
def bucket_details(request, poll, bucket_name):
    """
    Retrieve a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def poll_delete(request, poll_id):
    """
    Delete a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
    except Poll.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    poll.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def poll_create(request, poll_id, poll_text):
    """
    Create a poll
    """
    authentication_classes = []
    permission_classes = []
    try:
        poll = Poll.objects.get(poll_id=poll_id)
        return Response(status=status.HTTP_409_CONFLICT)
    except Poll.DoesNotExist:
        pass

    poll=Poll(poll_id=poll_id, poll_text=poll_text)
    Poll.objects.create(poll_id=poll_id, poll_text=poll_text)
    serializer = PollSerializer(poll)
    return Response(serializer.data)

@api_view(['PUT'])
def bucket_update_name(request, poll, bucket_name, bucket_new_name):
    """
    Update a bucket's name
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoestNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    bucket.bucket_name = bucket_new_name
    bucket.save()
    serializer = BucketSerializer(bucket)
    return Response(serializer.data)
    
@api_view(['GET'])
def bucket_details(request, poll, bucket_name):
    """
    Retrieve a bucket
    """
    authentication_classes = []
    permission_classes = []
    try:
        bucket = Bucket.objects.get(actual_poll_id=poll, bucket_name=bucket_name)
    except Bucket.DoestNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = BucketSerializer(bucket)
    return Response(serializer.data)

class PollViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows polls to be viewed or edited.
    """
    authentication_classes = []
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = []

class BucketViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows buckets to be viewed or edited.
    """
    authentication_classes = []
    queryset = Bucket.objects.all()
    serializer_class = BucketSerializer
    permission_classes = []
