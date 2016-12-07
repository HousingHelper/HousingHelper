insert into apartments
  (title,
  address,
  apt_num,
  city,
  state,
  zipcode,
  female_only_housing,
  male_only_housing,
  squareft,
  bedrooms,
  baths,
  parkingspace,
  currentOcc,
  totalOcc,
  wifiname,
  wifipwd,
  trashDay,
  citiesid,
  orgid
)
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,$16,$17,$18,$19)
