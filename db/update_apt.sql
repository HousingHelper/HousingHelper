update apartments
  set
    title = $2,
    address = $3,
    apt_num = $4,
    city = $5,
    state = $6,
    zipcode = $7,
    squareft = $8,
    bedrooms = $9,
    baths = $10,
    parkingspace = $11,
    currentOcc = $12,
    totalOcc = $13,
    wifiname = $14,
    wifipwd = $15,
    trashDay = $16,
    owner = $17
  where id = $1;
