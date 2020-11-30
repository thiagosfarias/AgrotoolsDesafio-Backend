const Questionarios = require('../models/questionarios')



const questionarios = new Questionarios()



module.exports = app => {
    app.get('/questionarios', (req, res) => res.send(questionarios))

    app.post('/questionario', (req, res) => {
            questionarios.questionarios.push(req.body)
            questionarios.questionarios.map(quest => console.log(quest.respostas))
        }
    )

    
    
    app.patch('/questionario/:id', (req, res) =>{
        if(questionarios.questionarios[req.params.id]) {
            res.status(404).send()
        }
        questionarios.questionarios[req.params.id].respostas.push(req.body)
        res.status(204).send()
    })


   

}
