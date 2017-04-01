CREATE DATABASE im_db;
USE im_db;

/*movies
	id, rating, title, genre*/
CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	genre varchar(255) NOT NULL,
	rating int NOT NULL,
	PRIMARY KEY (id)
);

/*users
id, name, username, fav_movie_id*/
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	fav_movie_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (fav_movie_id) references movies(id)
);

/*actors
	id, name, movie_id*/
CREATE TABLE actors
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	movie_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (movie_id) references movies(id)
);

/*movie_reviews
	id, movie_id, user_id, review*/
CREATE TABLE movie_reviews
(
	id int NOT NULL AUTO_INCREMENT,
	movie_id int NOT NULL,
	user_id int NOT NULL,
	review text NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (movie_id) references movies(id),
	FOREIGN KEY (user_id) references users(id)
);

/*actor_reviews
	id, actor_id, user_id, review*/
CREATE TABLE actor_reviews
(
	id int NOT NULL AUTO_INCREMENT,
	actor_id int NOT NULL,
	user_id int NOT NULL,
	review text NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (actor_id) references actors(id),
	FOREIGN KEY (user_id) references users(id)
);


SELECT * a.name m.title
FROM actors a
LEFT JOIN movies m
ON a.movie_id = m.id



