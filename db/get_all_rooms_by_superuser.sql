select * from rooms
join apartments
on rooms.aptid = apartments.id
where rooms.orgid = $1
