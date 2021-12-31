interface persona{
    Nombre:string;
    Apellido:string;
    Acercade:string;
    Titulo:[string,string];
}
let pofolios: persona ={
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulo:["",""]
}
function TomarNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}
function TomarApellido(apellido:string):string{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return pofolios.Apellido=apellido;
}
function TomarAcercade(acercade:string):string{
    const a = document.getElementById("text-acercade");
    a.textContent=acercade;
    return pofolios.Acercade=acercade;
}
function TomarTitulos(titulo1:string,titulo2:string):string{
    const a = document.getElementById("Titulos");
    a.textContent=titulo1,titulo2;
    return pofolios.Titulo[0]=titulo1,pofolios.Titulo[1]=titulo2;
}
function showFile(input):void {
    let file=input.files[0];
    let reader= new FileReader();
    reader.readAsText(file);
    reader.onload=function(prgressEvent){
        let s=reader.result.toString()
        console.log(s);
        let arr=s.split('\n');
        TomarAcercade(arr[0]);
        TomarNombre(arr[1]);
        TomarApellido(arr[2]);
        TomarTitulos(arr[3],arr[4]);
    };
};
