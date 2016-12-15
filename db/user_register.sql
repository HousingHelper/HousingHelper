INSERT INTO users (password, email, isadmin, orgid, issuperuser)
  values ($1, $2, false, $3, true);
