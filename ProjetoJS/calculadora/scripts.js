function inserirNumero(){
    document.form.textview.value = document.form.textview.value+num
}

function somar(num1,num2){
    res = num1 + num2
    return res
}

function subtrair(num1, num2){
    res = num1 - num2
    return res
}

function dividir(num1, num2){
    res = num1/num2
    if(num2 == 0){
        res = -1
    }
    return res
}

function multiplicar(num1, num2){
    res= num1 * num2
    return res
}

function porcentagem(perc, num1){
    res = (num1 * perc)/100
    return res
}

function fatorial(num1){
    res = 1
    for(var i = 1; i <= num1, i++;){
        res = res * i
    }
    return res //erro!
}



console.log(porcentagem(23, 15000))
