select users.id, users.firstName, users.lastName, users.gender, users.DOB, users.private_room, groups.title
from users
join groups
on users.groupid = groups.id
where users.id != $3 and
users.orgid = $1 and
users.citiesid = $2 and
users.isadmin = false and
users.roomid is null
