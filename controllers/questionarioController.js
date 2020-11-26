let questionario = {
        "titulo":"terrenos",
        "pergunta1":"qual a condição do terreno?",
        "pergunta2":"quantos hectares?"        
}
        

module.exports = app => {
    app.get('/questionarios-pendentes', (req, res) => res.send(questionario))

    app.get('/questionarios-respondidos', (req, res) => res.send(teste))

    app.post('/criar-questionario', (req, res) => {
            
            questionario.push(req.body)
            res.send(questionario)
        }
    )

    app.patch('/atualiza-status-questionario', (req, res) => res.send('ATUALIZADO'))

}