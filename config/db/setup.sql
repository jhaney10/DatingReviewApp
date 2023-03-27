CREATE DATABASE datingApp

/* create sandbox schema if does not already exists */
CREATE SCHEMA IF NOT EXISTS dating_review;

CREATE TYPE status AS ENUM ('online', 'away');

/* create accounts table */
CREATE TABLE IF NOT EXISTS dating_review.reviews (
    id serial primary key,
    username text,
    review text,
    user_id integer REFERENCES dating_review.users (id),
    created_at timestamp default CURRENT_TIMESTAMP
);

/* create wallets table */
CREATE TABLE IF NOT EXISTS dating_review.comments (
    id serial primary key, 
    comment text, 
    review_id integer references dating_review.reviews(id),
    created_at timestamp default CURRENT_TIMESTAMP
);

/* create transanctions table */
CREATE TABLE IF NOT EXISTS dating_review.users (
    id serial primary key, 
    username text not null,
    state text,
    country text,
    current_status status,
    created_at  timestamp default CURRENT_TIMESTAMP
);
