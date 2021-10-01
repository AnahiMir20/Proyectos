CREATE DATABASE presupuestos;
GO

CREATE TABLE users
(
  id_user int NOT NULL,
  [name] text NOT NULL,
  last_name text NOT NULL,
  email varchar(35) NOT NULL,
  adress text NOT NULL,
  [password] text NOT NULL,
  tel int NOT NULL,
  PRIMARY KEY (email)
)
SELECT *
FROM users

INSERT INTO users
  (id_user,[name],last_name,email,adress,[password],tel)

VALUES
   (2, 'anahi', 'miranda', 'anahi@mail.com', 'calle 1', 'cinthyapass', 22222222),
  (3, 'eevan', 'bastida', 'eevan@mail.com', 'calle 1', 'edgarpass', 33333333);

