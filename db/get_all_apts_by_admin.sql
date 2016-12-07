select * from apartments
where citiesid in (
  select citiesid from users
  where id = $1
)
