create table area (
	id serial not null primary key,
	area_name text not null
);

create table spaza (
	id serial not null primary key,
	shop_name text not null,
    code text not null,
    area_id int not null,
    foreign key (area_id) references area(id)
);

create table spaza_client (
	id serial not null primary key,
	username text not null,
    code text not null
);

create table suggestion (
	id serial not null primary key,
	product_name text not null,
    area_id int not null,
    client_id int not null,
    foreign key (area_id) references area(id),
    foreign key (client_id) references spaza_client(id)
);

create table accepted_suggestion(
    id serial not null primary key,
    suggestion_id int not null,
    spaza_id int not null,
    accepted_at timestamp DEFAULT NOW(),
    foreign key (suggestion_id) references suggestion(id),
    foreign key (spaza_id) references spaza(id)
);

-- create table liked_suggestion(
--     id serial not null primary key,
--     suggestion_id int not null,
--     client_id int not null,
--     accepted_at timestamp DEFAULT NOW(),
--     foreign key (suggestion_id) references suggestion(id),
--     foreign key (client_id) references spaza_client(id)
-- );