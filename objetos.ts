interface persona{
    Nombre:string;
    Apellido:string;
    Acercade:string;
    Titulo:[string,string];
}
let pofolio: persona={
    Nombre:"",
    Apellido:"",
    Acercade:"",
    Titulo:["",""]
}
function GetNombre(nombre:string):void{
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}
function GetApellido(apellido:string):string{
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return pofolio.Apellido=apellido;
}
function GetAcercade(acercade:string):string{
    const a = document.getElementById("text-acercade");
    a.textContent=acercade;
    return pofolio.Acercade=acercade;
}
function GetTitulos(titulo1:string,titulo2:string):string{
    const a = document.getElementById("Titulos");
    a.textContent=titulo1,titulo2;
    return pofolio.Titulo[0]=titulo1,pofolio.Titulo[1]=titulo2;
}
function showFile(input):void {
    let file=input.file[0];
    let reader= new FileReader();
    reader.readAsText(file);
    reader.onload=function(prgressEvent){
        let s=reader.result.toString()
        console.log(s);
        let arr=s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3],arr[4]);
    };
};
