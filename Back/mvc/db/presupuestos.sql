USE presupuestos

CREATE TABLE users
(
  id_user int NOT NULL IDENTITY(1,1),
  [user] CHAR(30) NOT NULL,
  [name] CHAR(30) NOT NULL,
  last_name CHAR(30) NOT NULL,
  email CHAR(35) NOT NULL,
  [password] CHAR(100) NOT NULL,
  tel int NOT NULL,
  PRIMARY KEY (email)
)
SELECT *
FROM users


INSERT INTO users
  ([user],[name],last_name,email,[password],tel)

VALUES
  
  ('cinthyaUser','cinthya', 'miranda', 'cinthya@mail.com',  'cinthyapass', 22222222),
  ('edgarUser','edgar', 'bastida', 'edgar@mail.com',  'edgarpass', 33333333);

SELECT [user],email,[name] FROM users WHERE [user] ='anahiUser' AND [password] = 'cinthyapass'