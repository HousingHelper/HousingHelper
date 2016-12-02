insert into organizations
(
  org_name,
  org_address,
  org_city,
  org_state,
  org_zipcode,
  org_phone,
  org_website
)
 values
 ($1, $2, $3, $4, $5, $6, $7)

returning id
