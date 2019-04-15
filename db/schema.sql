CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

-- jaws DB info 

DROP DATABASE c7ezlmoayt9o3bf4;

CREATE DATABASE c7ezlmoayt9o3bf4;

USE c7ezlmoayt9o3bf4;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt	TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

