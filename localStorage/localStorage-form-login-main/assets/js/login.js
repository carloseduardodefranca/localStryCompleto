const inputUser = document.querySelector("#alog-usuario")
const inputPassword = document.querySelector("#alog-senha")
const btnLogin = document.querySelector("#SignInBtn")

const login = () => {
     let user = inputUser.value
     let passsword = inputPassword.value

     let localUser = localStorage.getItem("user")
     let localPassword = localStorage.getItem("password") 

     if(user == localUser && passsword == localPassword) {
        localStorage.setItem
        window.location.href = `../../pages/home.html`
        alert("login Efetuado com sucesso!")
        return
     }
}

btnLogin.addEventListener("click", login)