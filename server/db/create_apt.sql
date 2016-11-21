insert into apartments
  (title,
  address,
  apt_num
  city,
  state,
  zipcode,
  squareft,
  bedrooms,
  baths,
  parkingspace,
  currentOcc,
  totalOcc,
  wifiname,
  wifipwd,
  trashDay,
  owner)
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
