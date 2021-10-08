var BotonValidar = document.getElementById("iniciar");
BotonValidar.addEventListener("click", function () {
    var params = new URLSearchParams();
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    params.append("usu", usuario);
    params.append("pass", password);
    console.log("---------------------------------------")
    console.log("{" + "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'}");
    //var params2 = "{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}";  // forma de equívoca de construir el objeto, ya que le sobran las llaves
    var params3 =  "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'";
    axios.post("http://localhost:4567/holaJson", { "usu": params.get("usu"), pass: params.get("pass") } )
        .then(function (rs) {
            console.log(rs.data);
            //alert(rs.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        //Validar si los datos son correctos

                if(params.get("usu") == "juan"){
                    if(params.get("pass") == "123"){
                        console.log("Si entro a los if´s");
                        window.location.replace('lista.html'); 
                    }
                }else{
                    window.location.replace('Registrarse.html');  
                    
                }



});

/*
var btnRegistrar = document.getElementById("btnenviar1");
btnRegistrar.addEventListener("click", function(){
    var params = new URLSearchParams();
    var usuario = document.getElementById("nombre").value;
    var contra = document.getElementById("contra").value;
    var contra2 = document.getElementById("contra2").value;
    if(pass.value === pass2.value){
        params.append("usuario", nombre);
        params.append("contra", contra);
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
    
});*/