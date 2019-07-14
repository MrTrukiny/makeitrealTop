const readlineSync = require('readline-sync');
 
// Wait for user's response.

function comparar(){
  let val = Math.floor(1000 + Math.random() * 9000);
  val = val.toString();
  console.log(val);
  let picas=0;
  let fijas=0;
  while(fijas<4){
    console.log("Picas: "+ picas+ " y Fijas: "+ fijas); 
    picas=0;
    fijas=0;
    let num = readlineSync.question('Ingresa un numero de 4 digitos: ');
    for(let i=0;i<val.length;i++){
      for(let j=0;j<num.length;j++){
        if(val[i]===num[j]&&i===j){
          fijas++;
        }
        else if(val[i]===num[j]){
          picas++;
        }
      } 
    }
  }
  console.log("Picas: "+ picas+ " y Fijas: "+ fijas);
  if(fijas === 4){
    console.log("Ganaste!")
    if (readlineSync.keyInYN('Quieres jugar otra vez? ')) {
      comparar()
    } else {
      console.log('Game Over');
    }
  }
}
comparar()