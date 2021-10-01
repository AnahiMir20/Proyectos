function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}


async function login() {
    userUser = document.getElementById('loginUser').value;
    if (validateText(userUser)) {
        userPassword = document.getElementById('loginPassword').value;
        if (validateText(userPassword)) {
            let login = { user: userUser, password: userPassword }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "user": userUser,
                "password": userPassword
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };

            fetch("http://localhost:3000/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    localStorage.setItem("token", result)
                })
                .then(() => {
                    alert('Bienvenido!!')
                    window.location.href = "./shop.html";
                })
                .catch(error =>{ console.log('error', error)});
                            

        } else {
            alert('Introdusca su Contraseña')
        }
    } else {
        alert('Introdusca su Usuario Correctamente')
    }
}

console.log("holiwi")
