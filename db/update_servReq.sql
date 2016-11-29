update servReqs
  set servReqs.status = $2,
  servReq_notes.note = $3
  from servReq_notes
  where servReqs.id = $1
