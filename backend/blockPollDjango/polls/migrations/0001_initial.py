# Generated by Django 4.0.4 on 2022-04-26 12:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Poll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('poll_id', models.IntegerField()),
                ('poll_text', models.CharField(max_length=2000)),
            ],
        ),
        migrations.CreateModel(
            name='Bucket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actual_poll_id', models.IntegerField()),
                ('bucket_name', models.CharField(max_length=200)),
                ('wallet_address', models.CharField(max_length=500)),
                ('poll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.poll')),
            ],
        ),
    ]
