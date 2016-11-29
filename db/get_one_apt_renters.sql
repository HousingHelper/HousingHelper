select * from renters
where aptId = $1
order by leaseStart;
