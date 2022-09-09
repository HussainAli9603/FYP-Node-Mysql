SELECT * FROM playgrounds;

SELECT * FROM playgrounds
WHERE playground_id = 1;

INSERT INTO `cyc-fyp`.`playgrounds` (`playground_id`, `playground_title`, `playground_description`, `playground_etc`) 
VALUES ('1', 'Play_1', 'This is Play 1', '0'),
("2", "Play_2", "This is Play 2", "0"),
("3", "Play_3", "This is Play 3", "0"),
("4", "Play_4", "This is Play 4", "0");

INSERT INTO `cyc-fyp`.`playgrounds` (`playground_id`, `playground_title`, `playground_description`, `playground_etc`) 
VALUES ('5', 'Play_5', 'This is to test delete', '0');

DELETE FROM `playgrounds` WHERE `playground_id` = '1';