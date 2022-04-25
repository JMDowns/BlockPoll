"""blockPollDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path
from rest_framework import routers
from polls import views

router = routers.DefaultRouter()
router.register(r'polls', views.PollViewSet)
router.register(r'buckets', views.BucketViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth', include('rest_framework.urls', namespace='rest_framework')),
    path('poll_list', views.poll_list),
    path('get_recent_polls', views.get_recent_polls),
    path('bucket_details/<int:poll>/<str:bucket_name>', views.bucket_details),
    path('get_buckets_of_poll/<int:poll_id>', views.get_buckets_of_poll),
    path('bucket_create/<int:poll>/<str:bucket_name>', views.bucket_create),
    path('poll_create/<int:poll_id>/<str:poll_text>', views.poll_create),
    path('bucket_delete/<int:poll>/<str:bucket_name>', views.bucket_delete),
    path('bucket_update_name/<int:poll>/<str:bucket_name>/<str:bucket_new_name>', views.bucket_update_name),
    path('get_votes/<int:poll_id>/<str:bucket_name>', views.get_votes),
    path('cast_vote/<int:poll_id>/<str:bucket_name>', views.cast_vote),
    path('poll_delete/<int:poll_id>', views.poll_delete),
    
]
