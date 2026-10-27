require('./models/rel')
const conn = require('./db/conn')

async function syncDatabase() {
    try {
        await conn.sync({ force: true })
        console.log('Sincronização do banco concluída.')
    } catch (erro) {
        console.error('Não foi possível sincronizar o banco:', erro)
    } finally {
        await conn.close()
        console.log('Conexão com o banco encerrada.')
    }
}

syncDatabase()
