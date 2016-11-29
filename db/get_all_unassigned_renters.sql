select id, firstName, lastName, gender, DOB, private_room
from renters
where aptId is null or
roomId is null;
