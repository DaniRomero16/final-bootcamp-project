DROP DATABASE IF EXISTS mindnote;
CREATE DATABASE mindnote;
USE mindnote;

CREATE TABLE user (
    user_id int auto_increment,
    name VARCHAR(35) NOT NULL,
    surname VARCHAR(45) NOT NULL,
    username VARCHAR(25) NOT NULL unique,
    email varchar(50) not null unique,
    password VARCHAR(250) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE post (
    user_id int not null,
    post_id int auto_increment,
    content longtext not null,
    name VARCHAR(150) NOT NULL,
    date timestamp default current_timestamp,
    image varchar(250) null,
    PRIMARY KEY(post_id),
    FOREIGN KEY post_user_fk(user_id) REFERENCES user(user_id) on delete cascade
);

CREATE TABLE goal (
    user_id int not null,
    goal_id int auto_increment,
    name VARCHAR(150) NOT NULL,
	content longtext null,
    deadline date NULL,
    progress tinyint not null default 0,
    image varchar(250) null,
    PRIMARY KEY(goal_id),
    FOREIGN KEY goal_user_fk(user_id) REFERENCES user(user_id) on delete cascade
);

CREATE TABLE comparison (
    user_id int not null,
    comparison_id int auto_increment,
    name VARCHAR(150) NOT NULL,
    leftC VARCHAR(150) NOT NULL,
    rightC VARCHAR(150) NOT NULL,
    PRIMARY KEY(comparison_id),
    FOREIGN KEY comparison_user_fk(user_id) REFERENCES user(user_id) on delete cascade
);

CREATE TABLE compare_item (
    comparison_id int not null,
    item_id int auto_increment,
    side ENUM('left','right') NOT NULL,
    name VARCHAR(150) NOT NULL,
    content longtext null,
    PRIMARY KEY(item_id),
    FOREIGN KEY item_comparison_fk(comparison_id) REFERENCES comparison(comparison_id) on delete cascade
);

CREATE TABLE graphic (
    user_id int not null,
    graphic_id int auto_increment,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY(graphic_id),
    FOREIGN KEY graphic_user_fk(user_id) REFERENCES user(user_id) on delete cascade
);

CREATE TABLE graphic_item (
    graphic_id int not null,
    item_id int auto_increment,
    value int not null,
    date timestamp default current_timestamp,
    PRIMARY KEY(item_id),
    FOREIGN KEY item_graphic_fk(graphic_id) REFERENCES graphic(graphic_id) on delete cascade
);

CREATE TABLE task (
    user_id int not null,
    task_id int auto_increment,
    name VARCHAR(150) NOT NULL,
	description text null,
    state ENUM('todo','progress', 'completed') NOT NULL default 'todo',
    color varchar(30) not null default 'primary',
    date timestamp default current_timestamp,
    PRIMARY KEY(task_id),
    FOREIGN KEY task_user_fk(user_id) REFERENCES user(user_id) on delete cascade
);


use mindnote;
alter table task
drop column color;
ALTER TABLE task
add COLUMN date timestamp default current_timestamp ;
insert into task (user_id,state, name) values (1,'completed','comp');
select * from user;
select * from post;
select * from goal;
select * from comparison;
select * from compare_item;
select * from task;


