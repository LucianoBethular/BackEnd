const options = {
    client:"sqlite3",
    connection: {
        filename: "./db.mensajes"
    },
    useNullAsDefault: true
}

module.exports = {
    options
}