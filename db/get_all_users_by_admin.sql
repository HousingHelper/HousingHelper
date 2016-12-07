select * from users
where citiesid in (
  select citiesid from users
  where id = $1
) 
