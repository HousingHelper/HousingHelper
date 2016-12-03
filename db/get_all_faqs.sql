select DISTINCT  faqs.question, faqs.answer from faqs
join users
on users.orgid = faqs.orgid
where users.id = $1
