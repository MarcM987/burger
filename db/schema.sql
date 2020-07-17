DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);