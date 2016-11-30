insert into renter_notes
  (note)
  values ($2)
  where renterId = $1
