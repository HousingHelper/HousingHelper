select id, firstName, lastName, gender, DOB, private_room
from renters
where adminid = $1 AND (aptId is null or roomId is null);
