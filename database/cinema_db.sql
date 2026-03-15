-- Cinema & Film Industry Portal Database Schema
-- MySQL Database: cinema_db

CREATE DATABASE IF NOT EXISTS cinema_db;
USE cinema_db;

-- Movies Table
CREATE TABLE movies (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_year INT,
    director VARCHAR(255),
    description TEXT,
    rating DECIMAL(3,1),
    poster VARCHAR(255)
);

-- Actors Table
CREATE TABLE actors (
    actor_id INT AUTO_INCREMENT PRIMARY KEY,
    actor_name VARCHAR(255) NOT NULL,
    movie_id INT,
    image VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

-- Reviews Table
CREATE TABLE reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    username VARCHAR(255),
    comment TEXT,
    rating INT,
    FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

-- Sample Data
INSERT INTO movies (title, genre, release_year, director, description, rating, poster) VALUES
('RRR', 'Action', 2022, 'S.S. Rajamouli', 'A tale of two revolutionaries and their journey away from home before they started fighting for their country.', 7.8, 'images/rrr.jpg'),
('Baahubali: The Beginning', 'Action', 2015, 'S.S. Rajamouli', 'In ancient India, an adventurous man becomes involved in a decades-old feud between two warring peoples.', 8.0, 'images/baahubali.jpg'),
('KGF Chapter 2', 'Action', 2022, 'Prashanth Neel', 'Rocky, a young man, seeks power and wealth in order to fulfill a promise to his dying mother.', 8.3, 'images/kgf2.jpg'),
('3 Idiots', 'Comedy', 2009, 'Rajkumar Hirani', 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend.', 8.4, 'images/3idiots.jpg'),
('Dangal', 'Biography', 2016, 'Nitesh Tiwari', 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.', 8.4, 'images/dangal.jpg');

INSERT INTO actors (actor_name, movie_id, image) VALUES
('Ram Charan', 1, 'https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=Ram+Charan'),
('N.T. Rama Rao Jr.', 1, 'https://via.placeholder.com/200x200/4ECDC4/FFFFFF?text=NTR+Jr'),
('Prabhu Deva', 2, 'https://via.placeholder.com/200x200/45B7D1/FFFFFF?text=Prabhu+Deva'),
('Rana Daggubati', 2, 'https://via.placeholder.com/200x200/96CEB4/FFFFFF?text=Rana+Daggubati'),
('Yash', 3, 'https://via.placeholder.com/200x200/FFEAA7/000000?text=Yash'),
('Srinidhi Shetty', 3, 'https://via.placeholder.com/200x200/DDA0DD/FFFFFF?text=Srinidhi+Shetty'),
('Aamir Khan', 4, 'https://via.placeholder.com/200x200/98D8C8/FFFFFF?text=Aamir+Khan'),
('Kareena Kapoor', 4, 'https://via.placeholder.com/200x200/F7DC6F/000000?text=Kareena+Kapoor'),
('Aamir Khan', 5, 'https://via.placeholder.com/200x200/98D8C8/FFFFFF?text=Aamir+Khan'),
('Sakshi Tanwar', 5, 'https://via.placeholder.com/200x200/BB8FCE/FFFFFF?text=Sakshi+Tanwar'),
('Alia Bhatt', 5, 'https://via.placeholder.com/200x200/85C1E9/FFFFFF?text=Alia+Bhatt'),
('Sharukh Khan', 4, 'https://via.placeholder.com/200x200/F8C471/000000?text=Sharukh+Khan');

INSERT INTO reviews (movie_id, username, comment, rating) VALUES
(1, 'User1', 'Amazing action sequences!', 9),
(1, 'User2', 'Great story and performances.', 8),
(2, 'User3', 'Epic movie!', 9),
(3, 'User4', 'Yash is brilliant.', 8),
(4, 'User5', 'Hilarious and inspiring.', 9),
(5, 'User6', 'Heartwarming story.', 9);