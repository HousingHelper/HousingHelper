select users.*, apartments.title, apartments.apt_num from users
join apartments
on users.aptid = apartments.id
where users.citiesid = $1
