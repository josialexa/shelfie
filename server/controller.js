module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
    },
    read: (req, res) => {
        const db = req.app.get('db')
        
    },
    update: (req, res) => {
        const db = req.app.get('db')
    },
    delete: (req, res) => {
        const db = req.app.get('db')
    }
}