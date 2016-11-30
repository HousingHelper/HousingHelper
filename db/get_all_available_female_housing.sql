select * from apartments
join rooms
on rooms.aptId = apartments.id
where apartments.female_only_housing = true
and rooms.currentOcc < rooms.totalOcc
and apartments.admin_id = $1
order by city;
