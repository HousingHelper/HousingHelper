select users.*, apartments.* from users
join apartments
on apartments.id = $2
where users.citiesid = $1
and isadmin = true
and issuperuser = false
