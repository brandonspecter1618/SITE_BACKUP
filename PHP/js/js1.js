function calcNum(num){

    if(typeof gvisor == 'undefined'){

        document.calcform.visor.value = '';
    }

    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
}

function calcLimpar(){

    document.calcform.visor.value = '';
    delete gvisor;
    delete goper;
    delete gvalor; 
}

function calcOper(oper, valor1, valor2){

    if(oper == 'somar'){

        var valor = parseInt(valor1) + parseInt(valor2);
    
    }else
        if(oper == 'subtrair'){
            
            var valor = valor1 - valor2;
        
        }else
            if(oper == 'multiplicar'){

                var valor = valor1 * valor2;
            
            }else{

                    var valor = valor1 / valor2;
            }

return(valor);                

}

function calcParse(oper){

    var valor = document.calcform.visor.value;
    delete gvisor;

    if(typeof goper !== 'undefined' && oper == 'resultado'){

        gvalor = calcOper(goper, gvalor, valor);
        document.calcform.visor.value = gvalor;
        delete oper;
        delete gvalor;
        return(0);
    }

    if(typeof gvalor !== 'undefined'){

        gvalor = calcOper(goper, gvalor, valor);
        goper = oper;
        document.calcform.visor.value = gvalor;
        
    }else{

        gvalor = valor;
        goper = oper;
    }
}