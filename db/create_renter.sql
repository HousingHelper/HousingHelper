insert into renters
  (
    firstName,
    lastName,
    gender,
    DOB,
    hometown,
    phone,
    email,
    private_room,
    carMake,
    carModel,
    carYear,
    leaseStart,
    leaseEnd,
    payDate,
    rentAmt,
    monthPaid,
    checkInTime,
    checkOutTime,
    aptId,
    roomId,
    groupId
  )
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
