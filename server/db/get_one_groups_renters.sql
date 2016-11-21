select renters.firstName, renters.lastName, apartments.apt_num, groups.title
from renters
join groups
on renters.groupId = groups.id
join apartments
on renters.aptId = apartments.id
where groups.title = $1;
