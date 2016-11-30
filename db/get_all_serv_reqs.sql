select servreqs.*, servreq_notes.note from servreqs
join servreq_notes
on servreq_notes.servreqid = servreqs.id
where adminid = $1
