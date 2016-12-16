update users
  set
    email = $1,
    phone = $2,
    carmake = $3,
    carmodel = $4
  where id = $5
