-- select firstName, lastName, gender, DOB, private_room
-- from users
-- where
-- (aptId is null or roomId is null)
-- and isadmin = false
-- and issuperuser = false
-- and id = $1;


-- SELECT *
-- FROM your_table
-- WHERE ip_address IN (SELECT ip_address
--                      FROM your_table
--                      WHERE user_name = 'peter')
--     AND user_name <> 'peter'

select id, firstName, lastName, gender, DOB, private_room
from users
where id != (
  select id
  from users
  where id = $1
)
and (aptId is null or roomId is null);
