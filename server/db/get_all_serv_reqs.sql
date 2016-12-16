select distinct servreqs.*, servreq_notes.note from servreqs
join servreq_notes
on servreq_notes.servreqid = servreqs.id
join apartments
on servreqs.aptid = apartments.id
join locations
on apartments.citiesid = locations.id
join organizations
on locations.orgid = organizations.id
join users
on organizations.id = users.orgid
where users.id = $1
