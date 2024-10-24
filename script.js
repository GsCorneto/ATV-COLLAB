let podeVotar  = function(idade){
    if (idade >= 16){
      return true
    }
   else{
     return false
   }
  
  }
  
  let deveVotar = function(idade){
    if((idade >= 18)&&(idade <= 65)){
     return true
    }
    else{
      return false
    }
  }
  
  let domicilioEleitoral = function (bairro){
    if(bairro == "Capilé"){
      return "Local: EEPSG Austrílio Capilé Castro"
    }
    if(bairro == "Irman Ribeiro"){
      return "Local: EEPSG Irman Ribeiro de Almeida"
    }
    if(bairro == "Vila Operária"){
      return "Local: EEPSG Padre Anchieta"
    }
    if(bairro == "Vila Beatriz"){
      return "Local: EEPSG Profa. Nair Palácio"
    }
  }
  
  let votaEleitor = function (idade, bairro){
    let pv = podeVotar(idade)
    let dv = deveVotar(idade)
    let onde = domicilioEleitoral(bairro)
    
     if ((pv == true)&&(dv == true)){
       return "Você DEVE votar no(a)" + onde
     }
    if ((pv == true)&&(dv == false)){
       return "Você PODE votar no(a)" + onde
     }
    else{
      return "Você ainda não pode votar"
    }
  }
  
  let eleitor1 = votaEleitor(33, "Capilé")
  console.log(eleitor1)
  let eleitor2 = votaEleitor(16, "Vila Beatriz")
  console.log(eleitor2)