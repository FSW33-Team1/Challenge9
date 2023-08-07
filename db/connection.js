module.exports = async function dbConnection(){
    const client = new client({
        user:"postgres",
        password:"12345",
        host:"localhost",
        port:5432,
        databas:"c9_game",
    });
    await client.connect();
    return client;
}