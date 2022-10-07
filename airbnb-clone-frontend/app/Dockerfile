FROM node:18.10.0

WORKDIR /app

ADD ./ /app/

RUN chmod 777 /app/runserver.sh

EXPOSE 5001

CMD ["/app/runserver.sh"]