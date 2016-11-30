select rooms.id as RoomId,
rooms.currentocc as CurrentOcc, rooms.totalocc as TotalOcc,
apartments.apt_num as aptNum,
apartments.title as title,
apartments.city as city,
apartments.female_only_housing,
apartments.male_only_housing
from apartments
join rooms
on rooms.aptid = apartments.id
where (rooms.currentocc < rooms.totalocc) and admin_id = $1
