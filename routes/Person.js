const router = require('express').Router()
const conn = require('../db/conn')
// criação de dados
router.post('/register', async (req, res) => {

    const {user, password} = req.body

    if(!user){

        res.status(422).json({error: 'O nome é obrigatorio'})

    }

    if(!password){

        res.status(422).json({error: 'O password é obrigatorio'})

    }

    const person = {

        user,
        password

    }

    try{

        const createPerson = `INSERT INTO PESSOA (nome, senha) VALUES ('${person.user}', '${person.password}')`
        conn.query(createPerson, function(err){
            if(err){
                console.log(err)
            }
        })

        res.status(201).json({message: 'Pessoa inserida com sucesso no banco de dados'})

    } catch (error){

        res.status(500).json({ error: error })

    }
})

module.exports = router
