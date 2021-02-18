1 - в папке programfiles/postgres/13/bin - открываем консоль <br>
2 - psql -U postgres <br>
3 - \l <br>
4 - create database NAME; <br>
5 - \connect NAME; <br>
6 - \dt <br>

7 ------------------ <br>
create TABLE person ( <br>
  id      SERIAL PRIMARY KEY, <br>
  name    VARCHAR(255), <br>
  surname VARCHAR(255) <br>
  ); <br>

create TABLE post ( <br>
  id      SERIAL PRIMARY KEY, <br>
  title   VARCHAR(255), <br>
  content VARCHAR(255), <br>
  user_id INTEGER, <br>
  FOREIGN KEY (user_id) REFERENCES person (id) <br>
  ); <br>

