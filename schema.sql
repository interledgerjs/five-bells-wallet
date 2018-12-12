CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR, secretHash VARCHAR);
CREATE TYPE tdirection AS ENUM('IN', 'OUT');
CREATE TYPE tstatus AS ENUM('pending', 'accepted', 'rejected');
CREATE TABLE transactions (id SERIAL PRIMARY KEY, user_id INT, contact_id INT, direction tdirection, msgId INT, amount INT, description VARCHAR, status tstatus, requested_at timestamp without time zone, responded_at timestamp without time zone, request_json VARCHAR, response_json VARCHAR);
CREATE TABLE contacts (id SERIAL PRIMARY KEY, user_id INT, name VARCHAR, url VARCHAR, token VARCHAR, min INT, max INT, landmark VARCHAR);
CREATE TABLE preimages (user_id INT, hash VARCHAR, preimage VARCHAR);
CREATE TABLE forwards (user_id INT, incoming_peer_id INT, incoming_msg_id INT, outgoing_peer_id INT, hash VARCHAR);
CREATE TABLE routes (user_id INT, contact_id INT, landmark VARCHAR, approach VARCHAR, max_to INT, max_from INT);
