select groups.title, users.firstname, users.lastname, apartments.apt_num from groups
join users
on groups.id = users.groupid
join apartments
on users.aptid = apartments.id
where users.id != $1
order by groups.title
