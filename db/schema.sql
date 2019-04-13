CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);

-- jaws DB info 

DROP DATABASE w7nnmhsxtrwwn73r;

CREATE DATABASE w7nnmhsxtrwwn73r;

USE w7nnmhsxtrwwn73r;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt	TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

