select apartments.* from apartments
join renters
on renters.aptId = apartments.id
where renters.id = $1;
