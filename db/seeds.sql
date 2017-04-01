INSERT INTO movies (title, genre, rating) VALUES ("Patrick's Toga Party", 'comedy', 6);
INSERT INTO movies (title, genre, rating) VALUES ("TylerCop", 'comedy/action', 6);
INSERT INTO movies (title, genre, rating) VALUES ("Vinny Wars", 'action', 7);

INSERT INTO users (name, username, fav_movie_id) VALUES ('pavan', 'pavankat', 3);
INSERT INTO users (name, username, fav_movie_id) VALUES ('rich', 'giantsfan327', 2);

INSERT INTO actors (name, movie_id) VALUES ('al pachino', 1);
INSERT INTO actors (name, movie_id) VALUES ('will smith', 1);
INSERT INTO actors (name, movie_id) VALUES ('denzel washington', 1);
INSERT INTO actors (name, movie_id) VALUES ('pee wee herman', 1);
INSERT INTO actors (name, movie_id) VALUES ('patrick', 1);

INSERT INTO actors (name, movie_id) VALUES ('tyler', 2);
INSERT INTO actors (name, movie_id) VALUES ('jacky chan', 2);
INSERT INTO actors (name, movie_id) VALUES ('jet li', 2);
INSERT INTO actors (name, movie_id) VALUES ('bruce lee', 2);

INSERT INTO actors (name, movie_id) VALUES ('Vinny', 3);
INSERT INTO actors (name, movie_id) VALUES ('Alec Guinnes', 3);
INSERT INTO actors (name, movie_id) VALUES ('Bruce Willis', 3);

INSERT INTO movie_reviews (movie_id, user_id, review) VALUES (1, 1, 'it was great');


INSERT INTO actor_reviews (actor_id, user_id, review) VALUES (1, 1, 'he was great');
