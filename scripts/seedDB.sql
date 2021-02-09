-- Seeds for tictactoeDB SQL database --
USE tictactoeDB;

-- Inserting USERS into user table --

-- Inserting ONE TICTACTOE into tictactoe table as a test --
INSERT INTO Tictactoes (tictactoe_title, unit_title)
VALUES ('Jeff Koons Tic-Tac-Toe', 'Animals in Art')

USE tictactoeDB;

INSERT INTO Users (firstName, lastName, email, password, userType)
VALUES ('Steph', 'Thomas', 'steph.thomas@gmail.com', 'StephsP4ssw0rd', 'teacher'),
('Jake', 'Compton', 'jake.compton@gmail.com', 'JakesP4ssw0rd', 'teacher'),
('Lily', 'Hook', 'lily.hook@gmail.com', 'LilysP4ssw0rd', 'student'),
('Ella', 'Tindal', 'ella.tindal@gmail.com', 'EllasP4ssw0rd', 'student');


--Inserting NINE ACTIVITIES into activities table as a test --
INSERT INTO Activities (activityName, difficultyLevel, taskDescription, hints, resources, tictactoeID)
VALUES ('What do you know?', 1, 'Provide three facts you remember about Jeff Koons from class', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1),
('Annotate Art', 1, 'Click on the resource link and annotate 5 of the key features of the artwork', 'Research online if you need more images or info', 'Worksheet: https://docs.google.com/document/d/1gLEzVeWQpIrwDntvt5WC4Xkt2FXfrlBosm9okpwfpPY/edit?usp=sharing', 1),
('Responding to Art', 1, 'Describe your response to Jeff Koons' 'Puppy in a paragraph', 'How does it make you feel? Do you like the artwork? Start by writing down some dot points', 'Worksheet: https://docs.google.com/document/d/1gLEzVeWQpIrwDntvt5WC4Xkt2FXfrlBosm9okpwfpPY/edit?usp=sharing', 1),
('Artist Practice', 2, 'Create a GoogleDoc and collect a series of images that show how Puppy was made. Write a short paragraph to describe this process', 'Refer to your notes from class', 'Link: https://blog.ferrovial.com/en/2017/10/flower-puppy-bilbao-guggenheim-museum/', 1),
('What is Postmodern Art?', 2, 'Research and identify three characteristics that are unique to Postmodern art', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1),
('The audience', 2, 'How does the audience view Puppy and why is this unique', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1),
('Why is Jeff Koons Postmodern?', 3, 'Provide three facts you remember about Jeff Koons from class', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1),
('Why is Jeff Koons Puppy such a controversial artwork?', 3, 'Provide three facts you remember about Jeff Koons from class', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1),
('Debate: Is Puppy art?', 3, 'Create a table with two columns in GoogleDocs: Puppy is Art / Puppy is not art and provide arguments for both arguments', 'Refer to your notes from class', 'Ppt: https://docs.google.com/presentation/d/1Jd7Gp8gNoyvrn9jIVqR4O_sVg1ibRQMMtGRz0hFM5xE/edit?usp=sharing', 1);

