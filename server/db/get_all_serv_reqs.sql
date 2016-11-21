select servReqs.*, servReq_notes.note from servReqs
join servReq_notes
on servReq_notes.servReqId = servReqs.id
