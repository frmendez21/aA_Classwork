PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NUll,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    parent_reply INTEGER,
    user_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    FOREIGN KEY (parent_reply) REFERENCES replies(id), 
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  likes INTEGER,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname,lname)
VALUES
  ('Frank', 'Mendez'), 
  ('Lamar', 'Poole');

INSERT INTO 
  questions (title, body, user_id)
VALUES
    ('Hmm', 'Whats a good question?', (SELECT id FROM users WHERE fname = 'Frank' AND lname = 'Mendez')),
    ('Lets see', 'What another good question?', (SELECT id FROM users WHERE fname = 'Lamar' AND lname = 'Poole'));

INSERT INTO 
    question_follows (user_id, question_id)
VALUES 
    ((SELECT id FROM users WHERE fname = 'Frank' AND lname = 'Mendez'),
    (SELECT id FROM users WHERE fname = 'Lamar' AND lname = 'Poole'));

INSERT INTO 
    replies (question_id, parent_reply, user_id, body)
VALUES 
    ((SELECT id FROM questions WHERE title = 'Hmm'),
    NULL,
    (SELECT id FROM users WHERE fname = 'Frank' AND lname = 'Mendez'),
    "I dont know");

INSERT INTO 
    replies (question_id, parent_reply, user_id, body)
VALUES 
    ((SELECT id FROM questions WHERE title = 'Lets see'),
    NULL,
    (SELECT id FROM users WHERE fname = 'Lamar' AND lname = 'Poole'),
    "I have no clue");

INSERT INTO 
    question_likes (likes, user_id, question_id)
VALUES 
    (4,
    (SELECT id FROM users WHERE fname = 'Frank' AND lname = 'Mendez'),
    (SELECT id FROM questions WHERE title = 'Hmm'));

INSERT INTO 
    question_likes (likes, user_id, question_id)
VALUES 
    (4,
    (SELECT id FROM users WHERE fname = 'Lamar' AND lname = 'Poole'),
    (SELECT id FROM questions WHERE title = 'Lets see'));
--     CREATE TABLE question_likes (
--   id INTEGER PRIMARY KEY,
--   likes INTEGER,
--   user_id INTEGER NOT NULL,
--   question_id INTEGER NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (question_id) REFERENCES questions(id)
-- );