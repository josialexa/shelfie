UPDATE PRODUCT
SET name = $2,
    price = $3,
    img = $4
where id = $1
RETURNING *;