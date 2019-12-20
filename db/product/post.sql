INSERT INTO product
(name, price, img)
values
($1, $2, $3)
RETURNING *;