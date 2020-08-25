CREATE DATABASE IF NOT EXISTS image-carousel;

USE image-carousel;
DROP USER 'traveler'@'localhost';
FLUSH PRIVILEGES;
CREATE USER 'traveler'@'localhost' IDENTIFIED BY 'travel';


DROP TABLE IF EXISTS hostels;
CREATE TABLE hostels (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(120),
  address VARCHAR(120),
  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS images;
CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  file_name VARCHAR(20),
  url VARCHAR(255),
  description VARCHAR(255),
  hostel_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY(hostel_id)
    REFERENCES hostels(id)
    ON DELETE CASCADE
);

GRANT ALL ON image-carousel.* to 'traveler'@'localhost';

