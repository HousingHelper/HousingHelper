select rooms.id as RoomId,
rooms.currentocc as CurrentOcc, rooms.totalocc as TotalOcc,
apartments.apt_num as aptNum,
apartments.title as title,
apartments.city as city,
apartments.female_only_housing,
apartments.male_only_housing,
apartments.apt_num
from apartments
join rooms
on rooms.aptid = apartments.id
join locations
on apartments.citiesid = locations.id
join organizations
on locations.orgid = organizations.id
join users
on users.orgid = organizations.id
where (rooms.currentocc < rooms.totalocc) and users.id = $1
