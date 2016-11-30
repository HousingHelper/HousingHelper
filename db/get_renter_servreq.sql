select servreqs.* from servreqs
join renters
on servreqs.renterId = renters.id
where renters.id = $1;
