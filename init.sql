\c postgres;

create table if not exists contacts (
  id_contact int generated always as identity,
  contact_name text,
  contact_email text,
  contact_phone_number text,
  contact_cpf text
);

create table if not exists users (
  id_user int generated always as identity,
  user_name text,
  user_email text,
  user_password text
);

