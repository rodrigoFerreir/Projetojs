// Uma factory retorna um novo Objeto

module.exports = () =>{
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}