class Questionarios {
    constructor(){
        this.questionarios = []
    }

    adiciona(questionario){
        this.questionarios.push(questionario)
    }

    paraArray() {
        return [].concat(this.questionarios);
    }

    listaMeusQuestionarios(user){
        let questionario = this.questionarios.filter((questionario) => {
            return questionario.user.User == user
        })
        return questionario
    }

    
    buscaPorTitulo(titulo){
        let quest = this.questionarios.filter((questionario) => {
            return questionario.titulo == titulo
        })
        return quest
    }





}

module.exports = Questionarios