const customExpress = require('./config/customExpress')

app = customExpress()

app.listen(1000, () => console.log('Servidor rodando na porta 1000'))