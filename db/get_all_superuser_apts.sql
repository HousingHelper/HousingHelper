select distinct users.email, users.firstname, users.lastname,
  apartments.title, apartments.address, apartments.city, apartments.state, apartments.zipcode
from apartments
join locations
on locations.id = apartments.citiesid
join users
on users.orgid = locations.orgid
where users.orgid = $1 and users.isadmin = false and users.issuperuser = false
