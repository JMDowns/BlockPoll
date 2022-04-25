from polls.models import Poll, Bucket
from rest_framework import serializers

class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = ['poll_id', 'poll_text']

class BucketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bucket
        fields = ['poll', 'bucket_name', 'wallet_address']
