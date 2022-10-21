#!/bin/bash
while ! nc -z "db" "5432"; do
    echo "DB not ready, wait please"
    sleep 0.1
done

echo "db started"
python manage.py makemigrations
python manage.py migrate

python manage.py flush --noinput -v 2
python manage.py loaddata init/init.json
python manage.py collectstatic --noinput
gunicorn --bind 0.0.0.0:4002 config.wsgi:application --reload