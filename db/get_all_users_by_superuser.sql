select users.* from users
join apartments
on users.aptid = apartments.id
where users.orgid = $1
