insert into renters
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
    carmake,
    carmodel,
    caryear,
    leasestart,
    leaseed,
    -- paydate,
    rentamt,
    -- monthpaid,
    checkintime,
    checkouttime,
    -- aptid,
    -- roomid,
    groupid
  )
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
  -- , $20, $21
