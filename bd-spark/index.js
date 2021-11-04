var btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", () => {
    axios.post("http://localhost:4567/usuario", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
        .then(function (res) {
            alert("Usuario:" + res.data.status + " id:" + res.data.id);
        })
        .catch(function (error) {
            console.log(error)
        })
});

var btnLista = document.getElementById("btnLista");
btnLista.addEventListener("click", function () {
    axios.get("http://localhost:4567/usuarios")
    .then(function (res) {
        let json = res.data;
        let listaTareas = document.getElementById("usuarios");
        for (var clave in json) {
            // Controlando que json realmente tenga esa propiedad
            if (json.hasOwnProperty(clave)) {
                // Mostrando en pantalla la clave junto a su valor
                // alert("La clave es " + clave + " y el valor es " + json[clave]);
                let tarea = document.createElement("li");
                tarea.textContent = clave + " " + json[clave].email;
                listaTareas.appendChild(tarea);
            }
        }
    })
    .catch()
});
            var btnEliminar = document.getElementById("prueba");
btnEliminar.addEventListener("click", function () {
    let Nombre = document.getElementById("txtID").value;
    axios.get("http://localhost:4567/BuscarUsuario", {
        params: {
            Nombre: Nombre
        }
    })
        .then(function (res) {
            let bool = res.data;
            if (bool == true) {
                axios.get("http://localhost:4567/Borrar?txtID=" + document.getElementById("txtID").value)

                    .then(function (res) {
                        alert(res.data)
                    })
            } else {
                alert("El usuario no existe");
            }
        })
});

var btnModificar2 = document.getElementById("Modificar");
btnModificar2.addEventListener("click", function () {
    let Nombre = document.getElementById("txtNombre").value;
    let Nombrenew = document.getElementById("txtNombrenew").value;
    let Pass = document.getElementById("txtPass").value;
    let Pass2 = document.getElementById("txtPass2").value;
    if (Nombre != "") {
        axios.get("http://localhost:4567/BuscarUsuario", {
            params: {
                Nombre: Nombre
            }
        })
            .then(function (res) {
                let resul = res.data;
                if (resul == true) {
                    if (Nombrenew != "") {
                        if (Pass != "") {
                            if (Pass == Pass2) {
                                axios.get("http://localhost:4567/ModificarCompleto", {
                                    params: {
                                        Nombre: Nombre,
                                        Nombrenew: Nombrenew,
                                        Pass: Pass,
                                        Pass2: Pass2
                                    }
                                })
                                    .then(function (res) {
                                        alert(res.data);
                                    })
                            }
                        } 
                        
                    } 
                } 
                else {
                    alert("El usuario No existe")
                }
            })

    } else {
    }
})