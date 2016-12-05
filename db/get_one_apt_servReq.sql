select distinct servReqs.*, servreq_notes.note
from servReqs
join servreq_notes
on servreq_notes.servreqid = servReqs.id
join apartments
on servReqs.aptId = apartments.id
join users
on users.aptId = apartments.id
where users.id != (
  select id
  from users
  where id = $1
)
and servReqs.aptId = $2
