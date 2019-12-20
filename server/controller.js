module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        
        db.product.post(name, price, img)
            .then(result => res.status(200).send(result))
            .catch(err => {
                console.log('Error adding item', err)
                res.status(500).json('Error adding item')
            })
    },
    read: (req, res) => {
        const db = req.app.get('db')
        if(req.params.id) {
            db.product.get_one(req.params.id)
                .then(result => res.status(200).json(result))
                .catch(err => {
                    console.log('Error sending one item', err)
                    res.status(500).json('Error sending one item')
                })
        } else {
            db.product.get_all()
                .then(result => res.status(200).json(result))
                .catch(err => {
                    console.log('Error sending all items', err)
                    res.status(500).json('Error sending all items')
                })
        }
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.product.put(req.params.id, name, price, img)
            .then(result => res.status(200).json(result))
            .catch(err => {
                console.log('Error updating item', err)
                res.status(500).json('Error updating item')
            })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        db.product.delete(req.params.id)
            .then(result => res.status(200).json(result))
            .catch(err => {
                console.log('Error deleting item', err)
                res.status(500).json('Error deleting item')
            })
    }
}