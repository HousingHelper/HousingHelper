select * from users
join apartments
on users.aptid = apartments.id
where users.citiesid in (
  select citiesid from users
  where id = $1
)
