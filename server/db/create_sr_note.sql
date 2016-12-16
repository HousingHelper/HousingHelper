insert into servreq_notes
  (
    note,
    servreqid,
    orgid,
    citiesid,
    submitted
  )
  values ($1, $2, $3, $4, $5)
