// let free= false
// validarCliente(time) {
//     let edad = prompt("¿sos mayor de edad?")
//     if (edad == "si" || edad > 18) {
//         if (time == {
//             let free= true
//             alert ("podes pasar gratis")
//         } else {
//             alert ("Podes pasar")}
//     }else {
//         alert ("no podes pasar")}
//     }

// validarCliente (4)
// validarCliente (
// validarCliente (3)
// validarCliente (2.1)

// let cantidad = prompt ("¿cuantos alumnos son?");
// let alumnosTotales = [];

// for (i =0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno" + (i +1)), 0]
// }
// const asistencia= (nombre,p)=> {
//     let presencia =prompt (nombre);
//     if (presencia== "p"){
//         alumnosTotales[p][1]++;
//     }
// }
// for (i= 0; i < 30; i++){
//     for (alumno in alumnosTotales) {
//         asistencia(alumnosTotales[alumno][0],alumno);
//     }
// }
// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//               Presentes: ${alumnosTotales[alumno][1]}<br>
//               Ausentes: ${30- alumnosTotales[alumno][1]}`;
//     if (30- alumnosTotales[alumno][1]> 18){
//         resultado+= " Repobado por inasitencias <br>";
//     } else {resultado+= "<br>"}
//     document.write(resultado)}
// class Calculadora {
// sumar (n1,n2) {
//     return parseInt (n1) + parseInt(n2)
// }
// restar (n1,n2) {
//     return parseInt(n1) - parseInt (n2)
// }
// dividir (n1,n2) {
//     return parseInt (n1) / parseInt (n2)
// }
// multiplicar (n1,n2) {
//     return parseInt (n1) * parseInt (n2)
// }
// potencia (n1,n2) {
//     return parseInt (n1) ** parseInt (n2)
// }
// raizCuadrada (n1) {
//     return Math.sqrt (n1)
// }
// raizCubica (n1) {
//     return Math.cbrt (n1)
// }}
// const calculadora = new Calculadora
// alert ("¿que tipo de operacion?");
// let operacion = prompt ("1: suma, 2: resta, 3: division, 4: multiplicación, 5: potencia, 6: raiz cuadrada, 7: raiz cubica")
//  if (operacion==1){
//     let n1=prompt ("cual es el primer n");
//     let n2=prompt ("cual es el segundo n");
//     resultado=calculadora.sumar (n1, n2)
//     alert (`tu resultado es ${resultado}`);
//  }
//  if (operacion== 2){
//     let n1=prompt ("cual es el primer n");
//     let n2=prompt ("cual es el segundo n");
//     resultado=calculadora.restar (n1, n2)
//     alert (`tu resultado es ${resultado}`);
//  }
//  if (operacion==3){
//     let n1=prompt ("cual es el primer n");
//     let n2=prompt ("cual es el segundo n");
//     resultado =calculadora.dividir (n1, n2)
//     alert (`tu resultado es ${resultado}`);
//  }
//  if (operacion==4){
//     let n1=prompt ("cual es el primer n");
//     let n2=prompt ("cual es el segundo n");
//     resultado=calculadora.multiplicar (n1, n2)
//     alert (`tu resultado es ${resultado}`);
//  }
//  if (operacion==5){
//     let n1=prompt ("cual es el primer n");
//     let n2=prompt ("cual es el segundo n");
//     resultado=calculadora.potencia (n1, n2)
//     alert (`tu resultado es ${resultado}`);
//  } if (operacion==6){
//     let n1=prompt ("cual es el primer n");
//     resultado=calculadora.raizCuadrada (n1)
//     alert (`tu resultado es ${resultado}`);
//  }if (operacion==7){
//     let n1=prompt ("cual es el primer n");
//     resultado=calculadora.raizCubica (n1)
//     alert (`tu resultado es ${resultado}`);
//  }

// class celular {
//     constructor (color,peso,rdp,rdc,ram){
//          this.color = color;
//          this.peso = peso;
//          this.resolucionDePantalla = rdp;
//          this.resolucionDeCamara = rdc;
//          this.memoriaRam = ram;
//          this.prendido = false;
//     }
//     presionarBotonPrendido (){
//         if (this.prendido == false){
//         alert ("this phone is on");
//         this.prendido = true;
//     } else {
//         alert ("this phone is off");
//         this.prendido =false;
//     }
//     };
//     reiniciarCelular (){
//         if (this.prendido == true) {
//             alert ("phone restarting");
//         } else {
//             alert ("this phone is off and cannot restart");
//         }
//     };
//     sacarUnaFoto (){
//         if (this.prendido == true) {
//             alert (`phone is taking a picture with a resolution of ${this.resolucionDeCamara}`)
//         }
//     };
//     grabarUnVideo (){
//         if (this.prendido == true) {
//             alert (`phone is recording a video with a resolution of ${this.resolucionDeCamara}`)
//         }
//     };
//     mobileInfo(){
//         return `
//         color: ${this.color} <br>
//         peso: ${this.peso}<br>
//         rdp: ${this.resolucionDePantalla}<br>
//         rdc: ${this.resolucionDeCamara}<br>
//         ram: ${this.memoriaRam} <br>`
//     }
// }

// class celularAltaGama extends celular{
//     constructor (color,peso,rdp,rdc,ram,rdce){
//     super(color,peso,rdp,rdc,ram);
//     this.resolucionDeCamaraExtra = rdce};
//     grabarEnCamaraLenta (){
//         alert ("estas grabando en camara lenta")
//     }
//     reconocimientoFacial (){
//         alert ("We are doing a facial recognition")
//     }
//     AltaGamaInfo (){
//         return this.mobileInfo() + `rdce: ${this.resolucionDeCamaraExtra}`
//     }
// }

// phone1 = new celularAltaGama("rojo", "200g", "5", "hd", "4gb", "4k")
// phone2 = new celular("azul","148g","5,5","4k","8gb" );
// phone3 = new celular("negro","150g","5,7","fullhd","2gb" );
 

// document.write (`
// ${phone1.AltaGamaInfo()} <br>
// ${phone2.mobileInfo()}<br>
// ${phone3.mobileInfo()}`);

// class Apps {
//     constructor (cantDesgargas,puntuacion,peso)
//         {this.descargas = cantDesgargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.instalada = false;
//         this.abierta = false;
//     }

//     installApp (){
//         if (this.instalada ==false){
//             this.instalada =true
//             alert ("la aplicaion se esta instalando")
//         }
//     };
//     OpenApp (){
//         if (this.instalada==true && this.abierta == false) {
//             this.abierta =true
//         alert ("la aplicaion se esta abriendo")}
//     };
//     closeApp (){
//         if (this.instalada ==true && this.abierta==true){
//             this.abierta =false
//         alert ("la aplicaion se esta cerradno")}
//     };
//     desinstallApp (){
//         if (this.instalada==true){
//             this.instalada=false
//         alert ("la aplicaion se esta desinstalando")}
//     };
//     appsInfo (){
//         return `
//         descargas: ${this.descargas} <br>
//         puntuacion: ${this.puntuacion} <br>
//         peso: ${this.peso}`
//     }
// };

// pokemon=new Apps ("1000","4 estrellas", "500mb");
// pokemon.installApp ();
// pokemon.OpenApp();
// pokemon.closeApp();
// pokemon.desinstallApp();

// document.write (pokemon.appsInfo ())

// let materias = {
//     1: ["c","d","s","a","l","p"],
//     2: ["c","s","a","l","p"],
//     3: ["s","a","l","x","f"],
//     4: ["c","d","l","p"]
// }

// // const informacionMaterias = (materia)=>{
  
// //     if (materias[materia]!== undefined){
// //         return [materias[materia], materia,materia];
// //     } else {
// //         return "la materia no existe<br>"
// //     }
// // }
// // const mostrar = (materia)=>{
// //     const info =informacionMaterias (materia);
// //     let alumnos= informacionMaterias (materia)[0];
// //     console.log("alumnos: ", alumnos)
// //     alumnos.shift()
// //     let profesor = informacionMaterias (materia)[0][0];
// //     document.write (`alumnos presentes en ${info[1]}: ${alumnos}<br>
// //     profesor: ${profesor}<br>`)
// // }
// // const cntDeClases = (alumno)=>{
// //     if(!alumno.trim()) return "Todo mal<br>"
    
// //     let cantidad = 0;
// //     for (info in materias){
// //         if (materias[info].includes(alumno)){
// //             cantidad++;
// //         }
// //     }
// //     return `${alumno} esta en ${cantidad} clases<br>`
// // }
// // // document.write ( `p esta en ${cantidad} de clases`)
// // //document.write (cntDeClases("p<br>"));
// // document.write (cntDeClases("c"))

// // mostrar(1);
// // mostrar(2);
// // mostrar(3);
// // mostrar(4);

// const inscribir = (alumno,materia)=>{
//     personas = materias[materia];
//     personas.shift();
//     alumnos = personas;
//     if (alumnos.length >= 4){
//         document.write ("la clase esta llena<br>");
//     }else{
//         alumnos.push(alumno)
//         if (materia == 1){materias = {
//             1: alumnos,
//             2: materias[2],
//             3: materias[3],
//             4: materias[4]
//         }}
//         else if (materia == 2){
//             materias = {
//             1: materias[1],
//             2: alumnos,
//             3: materias[3],
//             4: materias[4]
//         }}
//         else if (materia == 3){
//             materias = {
//             1: materias[1],
//             2: materias[2],
//             3: alumnos,
//             4: materias[4]
//         }}    
//         else if (materia == 4){
//             materias = {
//             1: materias[1],
//             2: materias[2],
//             3: materias[3],
//             4: alumnos
//         }}
//         document.write  (`${alumno} te inscribiste en la materia ${materia}<br>`)
//     }
// }
// inscribir ("h",1)
// document.write( `<br> ${materias[3]} `)

// function pasar(hora) {
//     let edad = prompt ("cuantos años tenes");
//     if (edad >= 18){
//         if (hora == 2){
//             alert ("puedes pasar gratis");
//     } else {alert ("tenes que pagar la entrada")};
// }
// else {alert ("no podes pasar");}
// }
// pasar(1);
// pasar(1,8);
// pasar(2);
// pasar(2.1);

// let info = clases.shift
// .push
// const clases = {
//     clase1: ["profe","juan","carlos","simon","matias"],
//     clase2: ["teacher","lujan","carlos","carla","esteban"],
//     clase3: ["maestro","simona","mateo","alejandra","matias"],
//     clase4: ["seño","valentina","sofia","simon","ines","dionisio"]
//    }
// const mostrar = (clase)=>{
//     if (clases[clase].includes("simon")){
//     if(clases[clase] !== undefined){
//     let profe = clases[clase][0];
//     clases[clase].shift();
//     const alumnos = clases[clase];
//     document.write(`los alumnos son:<b> ${alumnos}</b><br>`);
//     document.write(`el profe es:<b> ${profe}</b><br><br>`);}
//     else {document.write ("la materia no existe<br>"); }}
// }

// mostrar("clase1");
// mostrar("clase2");
// mostrar("clase6");
// mostrar("clase4");

// const clases = {
//     clase1: ["profe","juan","carlos","simon","matias"],
//     clase2: ["teacher","lujan","carlos","carla","esteban"],
//     clase3: ["maestro","simona","mateo","alejandra","matias"],
//     clase4: ["seño","valentina","sofia","simon","ines","dionisio"]
//    }

// const inscripcion =(alumno)=>{
//     let clase = prompt ("en que clase te queres anotar");
//     let alumnos = clases[clase];
//     if (clase !== undefined && alumnos.length < 6){
//         clases[clase].push(alumno);
//         document.write (`te has inscripto a la clase ${clase} y los alumnos son ${alumnos}`)
//     }
//     else {document.write ("la clase esta llena<br>")}
// }
// inscripcion("cofla");

// let materias= {
//     fisica: ["9","7","3"],
//     matematica: ["6","8","2"],
//     ipc: ["4","8","2"],
//     algebra: ["8","3","3"]
// }

// const graduacion = (materia)=>{
//     let asistencias =materias[materia][0];
//     let promedio =materias[materia][1];
//     let trabajos =materias[materia][2];
//     if (asistencias >= 5 && promedio >=6 && trabajos >=3){
//         console.log (`%caprobaste ${materia}`,"color:green");
//     } else if (asistencias < 5)
//         {console.log (`%cdesaprobaste ${materia} x inasistencias`, "color:red")}
//       else if (promedio < 6)
//         {console.log (`%cdesaprobaste ${materia} x bajo promedio`, "color:red")}
//       else if (trabajos < 3)
//         {console.log (`%cdesaprobaste ${materia} x falta de trabajos`, "color:red")}
// }
// graduacion("fisica");
// graduacion("matematica");
// graduacion("ipc");
// graduacion("algebra");


// const nombre= document.getElementById("nombre");
// const gmail= document.getElementById("mail");
// const materia= document.getElementById("subject");
// const enviar= document.getElementById("enviar");

// enviar.addEventListener("click",(e)=>{
//     e.preventDefault();
//     let validacion= validarCampos();
//     if(validacion==true){
//         alert ("enviado correctamente");
//     }
//     else{return validacion}
// });

// const validarCampos=()=>{
//     let validacion = true;
//     if(nombre.value.length > 40 || nombre.value.length < 5){
//         validacion= false;
//         document.write (`el nombre es invalido <br>`);
//     }
//     else if(gmail.value.length > 40 || gmail.value.length < 5){
//         validacion =false;
//         document.write (`el email es invalido <br>`);
//     }
//     else if(materia.value.length > 40 || materia.value.length < 4){
//         validacion =false;
//         document.write (`la materia es invalida <br>`);
//     }
//     else{return validacion = true}
// }

// console.log (`el nombre es ${nombre}, el gmail es ${gmail} y la materia es ${materia}`);

// const primera = document.querySelector(".fecha1");
// const segunda = document.querySelector(".fecha2");
// const div= document.querySelector(".div");

// primera.addEventListener("click",(e)=>{
//     e.preventDefault();
//      div.innerHTML+= (`se ha seleccionado la fecha ${primera.value}<br>`);
// })
// segunda.addEventListener("click",(e)=>{
//     e.preventDefault();
//     div.innerHTML+= (`se ha seleccionado la fecha ${segunda.value}<br>`);
// })

// alumnos= [{
//     nombre: "ariana",
//     gmail:"ari@gmial.com",
//     materia:"fisica cbc"
// },{
//     nombre: "martu",
//     gmail:"martina@gmial.com",
//     materia:"icse cbc"
// },{
//     nombre: "felipe",
//     gmail:"felss@gmial.com",
//     materia:"quimica cbc"
// }];

// for(alumno in alumnos){
//     let elementos= alumnos[alumno];
//     let nombre= elementos["nombre"];
//     let gmail= elementos["gmail"];
//     let materia= elementos["materia"];
//     let html= `
//     <div class="div nombre">${nombre}</div>
//     <div class="div gmail">${gmail}</div>
//     <div class="div materia">${materia}</div>
//     <div class="div fecha">
//         <select class="eleccion">
//             <option value="fechax">fechax</option>
//             <option value="fechaz">fechaz</option>
//         </select>
//         </div>`;
//     let elegir= document.querySelector(".conteiner").innerHTML +=html;
// }

// const confirmar= document.querySelector(".boton");

// confirmar.addEventListener("click",()=>{
//     let datos= document.querySelectorAll(".fecha");
//     let semanaElegida= document.querySelectorAll(".eleccion");
//     for (dato in datos){
//         let semana=datos[dato];
//         semana.innerHTML = semanaElegida[dato].value;
//     }
// })

// const notasCofla=[7,6,8]

// const nota= document.querySelector(".nota");

// const promedio=()=>{
//     let trabajo= notasCofla[0]+notasCofla[1]+notasCofla[2];
//     let trabajos= trabajo/3;
//     let numero =nota.value;
//     let promedioFinal= (trabajos + parseInt(numero))/2;
//     return(promedioFinal);
// }
// const boton=document.querySelector(".boton");
// const div=document.querySelectorAll(".conteiner");
// console.log(div.innerHTML)

// boton.addEventListener("click",(e)=>{
//     if(promedio() >= 7){
//         div.innerHTML=`aprobaste`;
//         document.write(`${div.innerHTML}`)
//     }
//     else{div.innerHTML="desaprobaste"
//     document.write(`${div.innerHTML}`);}
//     e.preventDefault();
// })

// try{
//     if (isNaN(nota.value)){
//         throw new Error("proba escribiendo un numero");
//     }
// }
// catch(error){
//     document.write("error: "+ error.message)

// class persona{constructor(nickname, ig){
//     this.nickname=nickname;
//     this.ig=ig
// }}
// const info=[
//     ["pedro","@pedro"],
//     ["sandra","@sandi"],
//     ["agus"],
//     [,"@tich"]
// ];
// const Personas=[]
// for (let i = 0; i < info.length; i++) {
//     Personas[i]= new persona(info[i][0],info[i][1]);

// const promesa = new Promise((resolve,reject)=>{
//     if (Personas[i].nickname == undefined){reject ("has no nickname")}
//     else resolve (`their nickname is ${Personas[i].nickname}`)
// })
// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch ((e)=>{
//     console.log(e)
// })

// const promesaI = new Promise((resolve,reject)=>{
//     if(Personas[i].ig == undefined) reject ("no tiene ig")
//         else resolve (`el ig es ${Personas[i].ig}`)
// })
// promesaI.then((resultado)=>{
//     console.log(resultado)
// }).catch ((e)=>{
//     console.log(e)
// })
// }

const texto= (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{resolve(text)},Math.random()*300)
    })
}

const f= async ()=>{
    one= await texto("uno");
    two=await texto("dps");
    three=await texto("tres");
    console.log(one);
    console.log(two);
    console.log(three)
}
f()