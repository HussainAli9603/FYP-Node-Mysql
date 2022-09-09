SELECT * FROM users;
SELECT * FROM tracks;
SELECT * FROM user_tracks;
SELECT * FROM junction_trackstags;
SELECT * FROM tracktags;

DELETE FROM `users` WHERE `user_id` = '5';

SELECT users.username, tracks.track_name, tracks.track_description, tracks.track_provider
FROM users
INNER JOIN user_tracks On users.user_id = user_tracks.username
INNER JOIN tracks On user_tracks.track_id = tracks.tracks_id
WHERE users.user_id = 1;

SELECT users.username, tracks.track_name, tracks.track_description, tracks.track_provider
FROM tracks
INNER JOIN user_tracks On tracks.tracks_id = user_tracks.track_id
INNER JOIN users On user_tracks.username = users.user_id
WHERE users.user_id = 1;

SELECT * 
FROM users
WHERE role = "admin" & "student";

INSERT into users (first_name, last_name, username, role, school_email, gender, organisation, age, password)
VALUE ("Tom", "Jerry", "TomAndJerry", "Admin","Tom@tester.com", "Male", "HOD", 18, "P4ssw0rdTom"),
("Peter", "Tan", "PeterTan", "Student","Peter@tester.com", "Male", "CYC", 28, "P4ssw0rdPeter"),
("Thomas", "Train", "ThomasTheTrain", "Admin","Train@tester.com", "Male", "YEP", 14, "P4ssw0rdThomas"),
("Sally", "Loh", "SallyLoh", "Student","Sally@tester.com", "Female", "AStart", 21, "P4ssw0rdSally");

INSERT into users (first_name, last_name, username, role, school_email, gender, organisation, age, password)
VALUE ("Delete", "WillRemove", "DestoryMehaha", "Admin","Destory@tester.com", "Female", "MY", 16, "P4ssw0rdDestory");

INSERT into users (first_name, last_name, username, role, school_email, gender, organisation, age, password)
VALUE ("Number", "Five", "ImAlways5", "Admin","High5@tester.com", "Female", "OBS", 20, "P4ssw0rdHigh5");

INSERT into users (first_name, last_name, username, role, school_email, gender, organisation, age, password)
VALUE ("Admin", "Admin", "Admin", "Admin","Admin@tester.com", "Female", "OBS", 20, "Admin");

INSERT INTO `cyc-fyp`.`tracks` (`tracks_id`, `track_name`, `track_description`, `track_provider`) 
VALUES ('1', 'RP', 'RPcanteen', 'SubWay'),
('2', 'SP', 'SPcanteen', 'Mcdonald'),
('3', 'TP', 'TPcanteen', 'KFC'),
('4', 'NP', 'NPcanteen', 'EachACup'),
('5', 'NYP', 'NYPcanteen', 'Bagus');

INSERT INTO `cyc-fyp`.`user_tracks` (`username`, `track_id`) 
VALUES ('1', '1'),
('1', '2'),
('1', '3'),
('2', '2'),
('5', '1'),
('4', '3'),
('4', '1');

UPDATE users 
SET firstname = 'Delete', last_name = 'WillRemove', username = 'DestoryMe2', role = 16, school_email = 'F', gender = NULL, orgranisation ='MY', age = 'Admin'
WHERE user_id = 9;