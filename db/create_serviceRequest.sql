insert into servreqs
  (
    submitted,
    request,
    type,
    permissions,
    status,
    newnotification,
    renterid,
    aptid,
    citiesid,
    orgid
  )
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
