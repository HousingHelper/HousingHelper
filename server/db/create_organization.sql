insert into organizations
(
  org_name,
  org_phone
)
 values
 ($1, $2)

returning id
