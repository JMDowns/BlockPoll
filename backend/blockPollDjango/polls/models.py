from django.db import models

# Create your models here.

class Poll(models.Model):
    poll_id=models.IntegerField()
    poll_text=models.CharField(max_length=2000)

    def __str__(self):
        return self.poll_text

class Bucket(models.Model):
    poll=models.ForeignKey(Poll, on_delete=models.CASCADE)
    actual_poll_id = models.IntegerField()
    bucket_name=models.CharField(max_length=200)
    wallet_address=models.CharField(max_length=500)

    def __str__(self):
        return self.bucket_name
