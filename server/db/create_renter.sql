insert into users
  (
    email,
    password,
    firstname,
    lastname,
    dob,
    gender,
    phone,
    hometown,
    private_room,
    aptid,
    roomid,
    carmake,
    carmodel,
    caryear,
    leasestart,
    leaseend,
    -- paydate,
    rentamt,
    -- monthpaid,
    checkintime,
    checkouttime,
    isadmin,
    issuperuser,
    orgid,
    citiesid
  )
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
  -- , $24, $25
