insert into users
  (
    email,
    password,
    isadmin,
    issuperuser,
    orgid
  )
  values ($1, $2, $3, $4, $5)
