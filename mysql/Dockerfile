FROM mysql:8.0.17

CMD [ "--innodb-use-native-aio=0" ]

COPY create_table.sql /docker-entrypoint-initdb.d/