update renters
  set aptId = $2,
  roomId = $3
  where id = $1;
