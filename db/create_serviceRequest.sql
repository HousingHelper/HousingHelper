insert into servreqs
  (
    submitted,
    request,
    type,
    permissions,
    status,
    renterid,
    aptid
  )
  values ($1, $2, $3, $4, $5,$6,$7)
