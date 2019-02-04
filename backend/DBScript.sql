DROP DATABASE IF EXISTS mindnote;
CREATE DATABASE mindnote;
USE mindnote;

CREATE TABLE user (
    user_id int auto_increment,
    username VARCHAR(25) NOT NULL unique,
    email varchar(50) not null unique,
    name VARCHAR(35) NOT NULL,
    password VARCHAR(250) NOT NULL,
    surname1 VARCHAR(45) NOT NULL,
    surname2 VARCHAR(45) NULL,
    genre ENUM('male','female') NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE post (
    user_id int not null,
    post_id int auto_increment,
    content longtext not null,
    name VARCHAR(150) NOT NULL,
    date date NOT NULL,
    image varchar(250) null,
    PRIMARY KEY(post_id),
    FOREIGN KEY post_user_fk(user_id) REFERENCES user(user_id)
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
    FOREIGN KEY goal_user_fk(user_id) REFERENCES user(user_id)
);

CREATE TABLE comparison (
    user_id int not null,
    comparison_id int auto_increment,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY(comparison_id),
    FOREIGN KEY comparison_user_fk(user_id) REFERENCES user(user_id)
);

CREATE TABLE compare_item (
    comparison_id int not null,
    item_id int auto_increment,
    side ENUM('left','right') NOT NULL,
    name VARCHAR(150) NOT NULL,
    content longtext null,
    PRIMARY KEY(item_id),
    FOREIGN KEY item_comparison_fk(comparison_id) REFERENCES comparison(comparison_id)
);

CREATE TABLE graphic (
    user_id int not null,
    graphic_id int auto_increment,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY(graphic_id),
    FOREIGN KEY graphic_user_fk(user_id) REFERENCES user(user_id)
);

CREATE TABLE graphic_item (
    graphic_id int not null,
    item_id int auto_increment,
    value bigint not null,
    name VARCHAR(150) NOT NULL,
    PRIMARY KEY(item_id),
    FOREIGN KEY item_graphic_fk(graphic_id) REFERENCES graphic(graphic_id)
);

CREATE TABLE todolist (
    user_id int not null,
    list_id int auto_increment,
    name VARCHAR(150) NOT NULL,
	description text null,
    PRIMARY KEY(list_id),
    FOREIGN KEY list_user_fk(user_id) REFERENCES user(user_id)
);

CREATE TABLE list_item (
    list_id int not null,
    item_id int auto_increment,
    name VARCHAR(150) NOT NULL,
    state ENUM('todo','inprogress','completed') NOT NULL,
	description text null,
    PRIMARY KEY(item_id),
    FOREIGN KEY item_list_fk(list_id) REFERENCES todolist(list_id)
);





