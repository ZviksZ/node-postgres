1 - в папке programfiles/postgres/13/bin - открываем консоль
2 - psql -U postgres
3 - \l
4 - create database NAME;
5 - \connect NAME;
6 - \dt

7 ------------------
create TABLE person
(
  id      SERIAL PRIMARY KEY,
  name    VARCHAR(255),
  surname VARCHAR(255)
);

create TABLE post
(
  id      SERIAL PRIMARY KEY,
  title   VARCHAR(255),
  content VARCHAR(255),
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES person (id)
);

