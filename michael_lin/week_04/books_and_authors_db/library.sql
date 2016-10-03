CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  publish_year INTEGER,
  cover_image TEXT
);

INSERT INTO books (title, publish_year) VALUES ('Ready Player One', 2011 );
INSERT INTO books (title, publish_year) VALUES ('Galveston', 2010 );
INSERT INTO books (title, publish_year) VALUES ('The Call of Cthulu', 1928 );


CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year_of_birth INTEGER,
  image TEXT
);

INSERT INTO authors (name, year_of_birth) VALUES ('Ernest Cline', 1972 );
INSERT INTO authors (name, year_of_birth) VALUES ('Nic Pizzolatto', 1975 );
INSERT INTO authors (name, year_of_birth) VALUES ('H.P. Lovecraft', 1890 );
