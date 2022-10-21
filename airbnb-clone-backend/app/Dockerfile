FROM python:3.10.7

RUN pip install --upgrade pip
ARG requirements=requirements.txt

WORKDIR /app

ADD ./ /app/

RUN pip install --upgrade pip
RUN pip install -r ${requirements}

RUN apt update
RUN apt install -y netcat

RUN chmod 777 /app/runserver.sh

EXPOSE 4002

CMD ["/app/runserver.sh"]