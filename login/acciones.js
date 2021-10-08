

var btnAgregar = document.getElementById("iniciar");
btnAgregar.addEventListener("click", function(){

var parametros = new URLSearchParams();
var usuario = document.getElementById("nombre").value;
var contra = documen.getElementById("contra").value;
parametros.append("usuario", usuario);
parametros.append("contra", contra);
console.log(parametros.get("usuario"));
axios.get("http://localhost:4557/accion?"+ parametros).then(
    function (rs){
        console.log(rs.data);
        alert(rs.data)
    }
)

});

var btnRegistrar = document.getElementById("btnenviar1");
btnRegistrar.addEventListener("click", function(){
    var params = new URLSearchParams();
    var nombre = document.getElementById("nombre").value;
    var contra = document.getElementById("contra").value;
    var contra2 = document.getElementById("contra2").value;
    if(pass.value === pass2.value){
        params.append("usuario", nombre);
        params.append("pass", contra);
        console.log(params.get("nombre"));
        axios.get("http://localhost:4567/accion2?"+params).then(
            function (rs) {
                console.log(rs.data);
                alert(rs.data);
            }
        )
    }else{
        console.error("la contraseña no coincide ");
    }
    
});