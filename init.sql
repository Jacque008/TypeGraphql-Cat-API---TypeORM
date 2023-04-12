CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  breed TEXT NOT NULL,
  color TEXT NOT NULL,  
  energy_level INTEGER DEFAULT 0,
  created_at TIMESTAMP NOT NULL,
  temperament TEXT[] NOT NULL

);