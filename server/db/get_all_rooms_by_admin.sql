select *, apartments.id as apartmentsid from rooms
join apartments
on rooms.aptid = apartments.id
where rooms.citiesid in (
  select citiesid from users
  where id = $1
)
