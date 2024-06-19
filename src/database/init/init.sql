CREATE DATABASE IF NOT EXISTS branchesdb;
USE branchesdb;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM('owner', 'employee') NOT NULL
);

INSERT INTO users (username, password, role) VALUES
('owner', 'owner123', 'owner'),
('employee', 'employee123', 'employee');

DROP TABLE IF EXISTS branches;

CREATE TABLE branches 
(
    branch_id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    full_address varchar(255),
    longitude varchar(255) NOT NULL,
    latitude varchar(255),
    phone varchar(255) 
);

