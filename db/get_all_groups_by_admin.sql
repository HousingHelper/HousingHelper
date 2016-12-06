select * from groups
where citiesid in (
  select citiesid from users
  where id = $1
)
