select users.* from users
join apartments
on users.aptid = apartments.id
where users.citiesid = $1
and isadmin = true
-- and issuperuser = false
