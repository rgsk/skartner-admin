FROM python:3.9-slim

WORKDIR /app

COPY ./dist ./

CMD ["python","-m","http.server","4173"]