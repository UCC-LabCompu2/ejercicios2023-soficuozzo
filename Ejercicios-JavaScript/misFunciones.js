/**
 * Descripción
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */

function cambiarUnidades(id, valor){
    var metro,pulgada,pie,yarda;

    if(valor.includes(",")){
        valor=valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        metro=" ";
        pulgada=" ";
        pie=" ";
        yarda=" ";

    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }
    else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.0833333*valor;
        yarda=0.0277778*valor;
    }
    else if(id=="pie"){
        pie=valor;
        metro= 0.3048*valor;
        pulgada=12*valor;
        yarda=0.333333*valor;
    }
    else if(id=="yarda"){
        yarda=valor;
        metro=0.9144*valor;
        pie=3*valor;
        pulgada=36*valor;
    }
    document.LasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.LasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.LasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.LasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById(grados).value = grad;
    document.getElementById(radianes).value = rad;
}
function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = "block";
    }
    else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = "none";
    }
}

function calcularSuma(){
    var num1, num2;
    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=Number(num1)+Number(num2);
}
function calcularResta(){
    var num1, num2;
    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=Number(num1)-Number(num2);
}
function calcularMulti(){
    var num1,num2;
    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=Number(num1)*Number(num2);
}
function calcularDiv(){
    var num1, num2;
    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=Number(num1)/Number(num2);
}
function cargarWeb(){
    var cant, unidad, urlComp;
    cant=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlComp="segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);

}
function cargarResultado(){
    var urlComp, can, un;

    urlComp=window.location.href.split("/")[5];
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];
    document.getElementById("dist").value=can + " " + un;
}

function guardarLS(){
    let distancia, unidad;
    distancia=document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLs", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2_Web.html");
}
function cargarLS(){
    let cant, un;
    cant=localStorage.getItem("distanciaLS");
    un=localStorage.getItem("unidadesLS")
    document.getElementById("dist").value = cant + " " + un;
}
function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    const xMax=canvas.width;
    const yMax=canvas.height;
    var margen=5;
    ctx.fillStyle="#333899"
    ctx.fillRect(0+margen,yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
var bandera;
function dibujar(event){
    var canvas=document.getElementById("canvasadibujar");
    var ctx=canvas.getContext("2d");

    var posX=event.clientX;
    var posY=event.clientY;
    console.log(posX, posY);
    canvas.onmousedown=function (){bandera=true};
    canvas.onmouseup=function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5,5);
        ctx.fill;
    }
}

function limpiarcanvas(){
    var canvas=document.getElementById("canvasadibujar");
    var ctx=canvas.getContext("2d");
    canvas.width=canvas.width;
}
function dibujarcuadriculado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font="10pt Verdana";
    ctx.fillStyle = "blue";

    console.log("Se comenzara a dibujar!!!");
    const xMax = canvas.width;
    const yMax = canvas.height;

    let paso = 20;
    let ejeX=-15;
    let ejeY=-25;
    let despl = 2;

    //Dibujar Líneas Horizontales

    for(let i=0;i<yMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#a19797"
        ctx.stroke();
        ctx.fillText(ejeX, xMax/2+despl, i+4);
        ejeX +=1;
        ctx.closePath();
    }

    //Dibujar Líneas Verticales
    for(let i=0;i<xMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8"
        ctx.fillText(ejeY, i, yMax/2 - 6);
        ejeY +=1;
        ctx.stroke();
        ctx.closePath();
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#830303"
    ctx.stroke();
    ctx.closePath();
}



function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    console.log(posX, posY);
    var img = new Image();
    img.src="images/auto.png";

    canvas.width=canvas.width;

    img.onload=function(){
        var width = this.naturalWidth;
        var height = this.naturalHeight;
        console.log(width, height);
        if(posY<0 || posX<0){
            openDialog();
        }else if(canvas.width-width<posX || canvas.height-height<posY){
            openDialog();
        }else{
            ctx.drawImage(img, posX, posY);
        }
    }

    }

let closeDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}
x=0;
dx=2;
function animarauto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

    var img = new Image();
    img.src="images/auto.png";

    img.onload=function(){
       ctx.drawImage(img, x, 100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}
var intervalId;
let detenerauto=()=>{
    console.log("Se detuvo el auto");
    clearInterval(intervalId);
}
let comenzaranimacion=()=>{
    console.log("Se llamo a comenzar animacion")
    intervalId = setInterval(animarauto, 10);
    setTimeout(detenerauto, 6000);
}

let animarNuevo=()=>{
    setTimeout(cancelarAnimacion, 6000);
    requestAnimationFrame(animarauto);
}
let cancelarAnimacion = () => {
    cancelAnimationFrame(animationId);
};