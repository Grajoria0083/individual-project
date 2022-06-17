import { nav, category, foot } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = nav()
document.querySelector("#category").innerHTML = category()
document.querySelector("footer").innerHTML = foot()


let getCart = JSON.parse(localStorage.getItem("cart"))
console.log(getCart)

let container = document.getElementById("container")

getCart.map(function (el, ind) {

    let img_box = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.Image;
    let title = document.createElement("h6")
    title.innerText = el.title
    let offer = document.createElement("p")
    offer.innerText = `offer price: ${el.price}`

    let mrp = document.createElement("del")
    mrp.innerText = `M.R.P: ${el.m_r_p}`
    let save = document.createElement("p")
    save.innerText = `You Save: ${el.save_p}`
    let box = document.createElement("div")
    box.setAttribute("id", "item")

    let cart = document.createElement("button")
    cart.innerText = "remove"
    cart.setAttribute("id", "rmv_Btn")
    cart.addEventListener("click", function () {
        remove(el, ind);
    })


    img_box.append(image)
    box.append(img_box, title, offer, mrp, save, cart)
    container.append(box)



})

function remove(el, ind) {
    getCart.splice(ind, 1);
    localStorage.setItem("cart", JSON.stringify(getCart))
    window.location.reload()
}


document.getElementById("total").innerText = `Total items: ${getCart.length}`;