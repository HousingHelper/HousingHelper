select * from servReq
join renters
on servReq.renterId = renters.id
where renters.id = $1;
