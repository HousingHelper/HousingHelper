select * from apartments
join locations
on locations.id = apartments.citiesid
join users
on users.citiesid = locations.id
where users.id = $1
