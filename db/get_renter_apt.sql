select apartments.* from apartments
join users
on users.aptid = apartments.id
where users.id = $1;
