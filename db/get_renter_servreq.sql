select servreqs.*, servreq_notes.note from servreqs
join users
on servreqs.renterId = users.id
join servreq_notes
on servreqs.id = servreq_notes.servreqid
where users.id = $1;
