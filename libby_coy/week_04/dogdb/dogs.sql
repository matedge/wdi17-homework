CREATE TABLE dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  breed TEXT,
  age INTEGER,
  derp_level INTEGER,
  enthusiasm INTEGER
);

INSERT INTO dogs (name, breed, age, derp_level, enthusiasm) VALUES ('Ralph', 'Golden Retriever', 3, 5, 90);
INSERT INTO dogs (name, breed, age, derp_level, enthusiasm) VALUES ('Rex', 'Blue Heeler', 1, 1, 20);
INSERT INTO dogs (name, breed, age, derp_level, enthusiasm) VALUES ('Becky', 'Terrier', 6, 5, 40);
