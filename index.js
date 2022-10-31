let diagnostico = " ";
let voluntarios = parseInt(prompt( "Cuantos voluntarios queres sumar a mi proyecto? Te recomiendo poner pocos jajajaj"))

for (let i = 1; i <= voluntarios; i++) {    
     let paciente =  prompt("Ingrese nombre y apellido");
         if (paciente != " ") {
         } else {
            prompt("ingrese su nombre")
         }
             let tuPeso = parseFloat(prompt("Ingrsa tu peso en Kg"));     
             let tuAltura = parseFloat(prompt("Ingresa tu altura en Mts"));
             let imc = tuPeso / (tuAltura * tuAltura);
         if (imc <18.5){
            diagnostico = "Peso inferior a los parametros normales";
         } else if (imc > 25.0 ) {
            diagnostico = "Peso superior a los parametros normales";
         } else {
            diagnostico = "Tu peso esta entre los parametos normales";
         }
         console.log ("Voluntario N°: " + i + "\nNombre: " + paciente + "\nAltura: "+ tuAltura + "mts" + "\nPeso: " + tuPeso + "kg" + "\nIMC: " + imc + "\nDiagnostico: " + diagnostico ); 
}  
