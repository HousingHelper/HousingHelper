SELECT users.aptid, users.citiesid FROM users
 JOIN servreqs
 ON users.id = servreqs.renterid
 WHERE servreqs.renterid = $1;
 -- ALEX DID STUFF
