select renters.*, groups.title from renters
join groups
on renters.groupid = groups.id
where aptId = $1
order by leaseStart;
