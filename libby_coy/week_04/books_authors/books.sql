
CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  image TEXT,
  author_id INTEGER
);

INSERT INTO books (name, genre, image) VALUES ('Alice in Wonderland', 'Fiction', 'https://s-media-cache-ak0.pinimg.com/236x/27/91/f1/2791f11d4ccb1eef5b616629d19d3272.jpg');
INSERT INTO books (name, genre, image) VALUES ('The Reader', 'Historial Fiction', 'https://upload.wikimedia.org/wikipedia/en/f/f7/The_Reader_cover.jpg');
INSERT INTO books (name, genre, image) VALUES ('Ulysses', 'Fiction', 'http://www.james-joyce-music.com/images/cover_ulysses.jpg');

CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT
);

INSERT INTO authors (name, image) VALUES ('Lewis Carrol', 'https://upload.wikimedia.org/wikipedia/commons/f/fb/LewisCarrollSelfPhoto.jpg');
INSERT INTO authors (name, image) VALUES ('James Joyce', 'http://www.martellotowersutton.com/files/Jamesjoyce1926.jpg');
INSERT INTO authors (name, image) VALUES ('Bernhard Schlink', 'https://si.wsj.net/public/resources/images/PT-AK668_READER_DV_20090108164028.jpg');
