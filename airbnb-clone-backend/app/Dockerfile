FROM python:3.10.7

WORKDIR /app

ADD ./ /app/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# RUN chmod 777 /app/runserver.sh

EXPOSE 4001

# CMD ["/app/runserver.sh"]