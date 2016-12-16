select id, firstName, lastName, gender, DOB, private_room
from users
where id != $3 and
users.orgid = $1 and
users.citiesid = $2 and
users.isadmin = false and
users.roomid is null
