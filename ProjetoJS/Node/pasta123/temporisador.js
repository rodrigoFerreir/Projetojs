const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 1', function () {//roda de 5 em 5 segundos as 19 horas na segunda feira
    console.log('Executando Tarefa 1', new Date().getSeconds())
})


setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
},20000)//milisegundos

const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 19//hora
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})