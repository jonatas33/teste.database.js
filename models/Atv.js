const db = require('./db')

const Atv = db.sequelize.define('projeto_senac',{
    equipe: {
        type: db.Sequelize.STRING
    },
    atividade: {
        type: db.Sequelize.TEXT
    },
    lider: {
        type: db.Sequelize.STRING
    }
})

//Atv.sync({force:true})//Executar apenas uma vez e depois apagar ou deixar como comentário
module.exports = Atv //acesso ao models Atv através de outros arquivos