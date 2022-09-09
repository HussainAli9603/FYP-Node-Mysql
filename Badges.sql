SELECT * FROM `cyc-fyp`.badges;

INSERT INTO `cyc-fyp`.`badges` (`badge_id`, `badge_name`, `badge_description`)
VALUES ('1', 'JavaScript', 'This is a JavaScript'),
('2', 'Java', 'This is a Java'),
('3', 'Python', 'This is a Python');

INSERT INTO `cyc-fyp`.`badges` (`badge_id`, `badge_name`, `badge_description`)
VALUES ('4', 'A_Badge', 'This is a badge desc');

DELETE FROM `badges` WHERE `badge_id` = '4';

SELECT * 
FROM badges
WHERE badge_name = 0;