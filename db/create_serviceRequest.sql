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
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id


-- SELECT id
-- FROM servreqs
-- ORDER BY id DESC
-- Limit 1

  --  with rows as (
