CREATE TABLE stars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  distance DECIMAL(5,2),
  constellation TEXT,
  description TEXT,
  image TEXT
);

INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Hamal', 'K1 IIIb', 65.81, 'Aries', 'Hamal is the brightest star in the Aries constellation, and among the brightest stars in the night sky. It is a giant star that may host an orbiting planet with a mass greater than Jupiter.', 'http://www.astrotx.com/Star%20Kocab%2004-14-09.jpg');
INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Aldebaran', 'K5 III', 65.3, 'Taurus', 'Aldebaran is the brightest star in the Taurus constellation and the fourteenth brightest star in the night sky. The name is Arabic and means the follower.', 'http://astropixels.com/stars/images/Aldebaran-01w.jpg');
INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Castor', 'A1V', 51.3, 'Gemini', 'Castor is the second brightest star in the Gemini constellation and one of the brightest stars in the night sky. The name Castor refers specifically to Castor, one of the twin sons of Zeus and Leda.', 'http://astropixels.com/stars/images/Castor-01w.jpg');
INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Al Tarf', 'K4 III', 290, 'Cancer', 'Al Tarf is the brightest star in the constellation Cancer. The name can be translated from Arabic as end or edge. There is evidence to suggest that a planet is orbiting Al Tarf, with an orbit of 605 days.', 'http://stars.astro.illinois.edu/sow/cnc-jup.jpg');
INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Regulus', 'B8IVn', 79.3, 'Leo', 'Regulus is the brightest star in the constellation Leo and one of the brightest stars in the night sky. It is a multiple star system composed of four stars that are organised into two pairs.', 'http://astropixels.com/stars/images/Regulus-01w.jpg');
INSERT INTO stars (name, type, distance, constellation, description, image) VALUES ('Auva', 'M3 III', 198, 'Virgo', 'Delta Virginis has the traditional name Auva, which means barking dog. It is bright enough to be seen with the naked eye.', 'http://en.es-static.us/upl/2014/04/Spica-01w.jpg');
