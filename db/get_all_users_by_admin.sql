select users.*, apartments.* from users
join apartments
on users.aptid = apartments.id
where users.citiesid = $1
