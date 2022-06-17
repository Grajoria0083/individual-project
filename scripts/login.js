import { nav, category, foot } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = nav()
document.querySelector("#category").innerHTML = category()
document.querySelector("footer").innerHTML = foot()

function login() {
    let email = document.getElementById("form3Example3").value
    let password = document.getElementById("form3Example4").value
    if (email == "gaurav@gmail.com" && password == "123456") {
        alert("User login successfully")
        // document.querySelector(".login_G").innerText = null
        // document.querySelector(".login_G").innerText = get_ids
        window.location.href = "index.html"
    }
    else {
        alert("Invalid candidate")
    }
    document.getElementById("form3Example3").value = null;
    document.getElementById("form3Example4").value = null;
}

document.querySelector(".btn-lg").addEventListener("click", login)