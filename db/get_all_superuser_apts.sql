select * from apartments
join locations
on locations.id = apartments.citiesid
join users
on users.orgid = locations.orgid
where users.id = $1
