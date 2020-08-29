CREATE DATABASE imagecarousel;
\c imagecarousel;

CREATE TABLE images (
  ID SERIAL PRIMARY KEY,
  hostel_id INT NOT NULL,
  url VARCHAR(225),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COPY images(hostel_id, url)
FROM '/Users/mpw/S-D-C/imageCarousel/server/data/imageCarousel.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX hostel_id ON images (hostel_id);
