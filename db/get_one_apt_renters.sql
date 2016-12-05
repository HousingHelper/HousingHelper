select rooms.id, users.firstName, users.lastName, groups.title
from users
join groups
on users.groupid = groups.id
join apartments
on apartments.id = users.aptid
join rooms
on users.roomid = rooms.id
where users.id != (
  select id
  from users
  where id = $1
)
and apartments.id = $2
order by leaseStart;
