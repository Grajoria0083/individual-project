import { nav, category, foot } from "../component/navbar.js";

document.getElementById("navbar").innerHTML = nav()
document.querySelector("#category").innerHTML = category()
document.querySelector("footer").innerHTML = foot()




let arr_items = [{
    Image: "https://www.reliancedigital.in/medias/Kushi-Tempered-Glass-Screen-Guard-for-Lenovo-Tab-2-A7-30-491183243-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODgyN3xpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGViLzg5NjQwMTczODk1OTguanBnfGJkNGU0MDY3NmU2NmNlMDU1YzAxZGE4MTFhZDM1YTdkNWVkNmJjZWQ1ZGZjMGNiOGFjYmY5ZjE0Njg0Mjk0MWY",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "20%(₹8,019)",
},
{
    Image: "https://www.reliancedigital.in/medias/5d5f2a0c-2e93-4c0b-9959-fef95ffcad84-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDIyOHxpbWFnZS9qcGVnfGltYWdlcy9oOWQvaDRhLzg4MDY4MTgyODM1NTAuanBnfDc1MWVkOGViOWE2NmEzOWJhYWEyOTA1ZjJjYzM0MDIzODU4OWFiMTczOTFkNDE5ZmYxYTBlZThiMjJjYjQ3MTg",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹25,590.00",
    m_r_p: "₹32,159.00",
    save_p: "17%(₹9,219)",
},
{
    Image: "https://www.reliancedigital.in/medias/491098967-447-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODI3MnxpbWFnZS9wbmd8aW1hZ2VzL2g1Zi9oMzcvODkzMjc5OTU0NTM3NC5wbmd8M2RiYTU2YjE5ZmVhZTgyYWIzOWVmNmNlMzM5NDg0ZDJjNzljNzFiMmIxNTBmNTZmNjZmYzUwM2VkMWE2N2U1NQ",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹47,490.00",
    m_r_p: "₹52,420.00",
    save_p: "15%(₹8,009)",
},
{
    Image: "https://www.reliancedigital.in/medias/Scratchgard-Screen-Guards-Protectors-491183338-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDAwMHxpbWFnZS9qcGVnfGltYWdlcy9oZjQvaGQ5Lzg5NjQwNDE3MDM0NTQuanBnfDdhMDg2ZjU0NDcyMDM4OWUxMTM5MmQ4ZWQ5ZjRjNzg2OTNkMjZiZDYwOTY2MTIzNzc1NGU2YTQ2MTQ1ZjM3MGI",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "19%(₹12,015)",
},
{
    Image: "https://www.reliancedigital.in/medias/Asus-L1262TS-Laptops-492574076-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MjY2MnxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaDVmLzk3MzE2MDgyMTU1ODIuanBnfGU0YTVjYTMzMjAyODA1NWZhZmQxZDhlNDcyOTNjOTg0MTMzYmVlMTI0ZjdlZTVlZDM3OWE0NmY0YjVlNzlmYzI",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "20%(₹8,019)",
},
{
    Image: "https://www.reliancedigital.in/medias/HP-16-e0075AX-Laptops-492573433-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODUzMXxpbWFnZS9qcGVnfGltYWdlcy9oMWIvaGU5Lzk2ODYyOTYxMDA4OTQuanBnfGI2YWNjZTViODUyYTcyNDg4NGZiMzk0ZTg1NjY0MzlmODIyYTU2Y2E2YTE5ZTc3OTI2MGYxNTdmYmViM2NjZTE",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹25,590.00",
    m_r_p: "₹32,159.00",
    save_p: "17%(₹9,219)",
},
{
    Image: "https://www.reliancedigital.in/medias/HP-14-eb0019TX-Laptops-491998726-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NzI3OXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDY1Lzk2NTM5NjA0MDkxMTguanBnfDYxYTcwMWMzZTRiNmFiMjRlODdkYjQwMzM1ZTY1NTA3ZjFhYzdjOTc3NWYxNDU2YmVjZjM2NjZkN2RlMWZjOTQ",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹47,490.00",
    m_r_p: "₹52,420.00",
    save_p: "15%(₹8,009)",
},
{
    Image: "https://www.reliancedigital.in/medias/HP-14-eb0021TX-Laptops-491998725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTI1M3xpbWFnZS9qcGVnfGltYWdlcy9oNmIvaGU0Lzk2NTM5NTc0NTk5OTguanBnfDE4YjQ3YjM2ZDdhZGI2ODkyOWY0ZTNjZTJkYzkyMDViYjFiZTg5MjlkNmIzMzNkNjkzYTEzMDg0MzVlM2I3MTI",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "19%(₹12,015)",
},
{
    Image: "https://www.reliancedigital.in/medias/HISENSE-WFVB6010MS-Washing-Machines-492664299-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIxOXxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaDQ4Lzk3ODI1NDEwOTA4NDYuanBnfGNiMzJlNjNmZDgyZGRlODU0MThlODA3NjcwZWIzZDBkYTdhNmM4ODRkMjFhN2I1YjljYzAzZDU3OWJlYWViNGI",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹34,490.00",
    m_r_p: "₹39,990.00",
    save_p: "20%(₹7,019)",
},
{
    Image: "https://www.reliancedigital.in/medias/Samsung-WW60R20GLSS-TL-FAFL-492864817-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTIxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDIvaGNkLzk4MTMxNDMwOTMyNzguanBnfDI0ZTQ2NTZhNDU2ZDk5ZDc0ZmNjNzE3NDdiODg1MDU0NTM4YTFkMTkxMDgwNzgzZmFjYzdkNDcyNjI4NmJiNTE",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹24,490.00",
    m_r_p: "₹37,790.00",
    save_p: "20%(₹9,019)",
},
{
    Image: "https://www.reliancedigital.in/medias/LG-FHM1408BDL-Washing-Machine-492664432-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjE2NnxpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGQzLzk3NzczODM0NDA0MTQuanBnfDU4M2ZlNjcwNzU5YWQwNjU5NWNmNWEyYmU1ODZjZjc0OTczODRlNWNjOTIzMTQyZTcxZmMwOWM1OWQ1MzM5NWQ",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹27,490.00",
    m_r_p: "₹42,990.00",
    save_p: "22%(₹15,100)",
},
{
    Image: "https://www.reliancedigital.in/medias/IFB-SENATOR-WSS-STEAM-8.0-Kg-Washing-Machine-491903107-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDQ2MnxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaGU5Lzk0NDM2MDI4MjUyNDYuanBnfDA1N2E4NzA4NzExZTQ0ZDk0ZTVmZDc3OTg0MTRhMjI1YTkyMGM2YzI0ZDdmYjQyMGM4ZjMyMWYxNTlmNjc1Mjc",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹29,490.00",
    m_r_p: "₹35,880.00",
    save_p: "21%(₹6,011)",
},

{
    Image: "https://www.reliancedigital.in/medias/Toshiba-50U5050-Televisions-491893301-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDc0MXxpbWFnZS9wbmd8aW1hZ2VzL2hlNS9oZTAvOTgyMDI0OTI5MjgzMC5wbmd8MjI1OGE3ODAyNjc2OGMxMzNkYmNlYWEzOGVjOGQwZGZjNDM0ZmNiZWQ2ZTRjZWExODBhMmUyMjgyNDZkZmNiMg",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "20%(₹8,019)",
},
{
    Image: "https://www.reliancedigital.in/medias/Kodak-43CA2022-Television-492166175-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODUwMnxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaDEwLzk1MTIxMDYyMjk3OTAuanBnfDgwNTMwNDExYzI5MjkyNDJkZmZlMTI0ODAwYmM4OGNlZTZiM2U3MWQzM2FhNWI1ZDJmOGE5ZDJhYzg3ZjkxZGM",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹25,590.00",
    m_r_p: "₹32,159.00",
    save_p: "17%(₹9,219)",
},
{
    Image: "https://www.reliancedigital.in/medias/Hisense-43A71F-LED-Televisions-491893292-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODU3NnxpbWFnZS9qcGVnfGltYWdlcy9oZmYvaGQ4Lzk3ODkyNDA0NDI5MTAuanBnfDNlNjc4MzI3N2FhOTljYmMyOWJmMWJkMDIwMTc3OTY4NTMyYWYzNjMzNjFhY2EyNmE2MjA3OGM2NWE3MWI4MGY",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹47,490.00",
    m_r_p: "₹52,420.00",
    save_p: "15%(₹8,009)",
},
{
    Image: "https://www.reliancedigital.in/medias/Kodak-43UHDX7XPRO-Television-492166143-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MzM0NHxpbWFnZS9qcGVnfGltYWdlcy9oMWIvaGY4Lzk1MTE0NzE2Nzc0NzAuanBnfGU5OWFmNDFlYTcwYTllZTU4ZTYzMTMxNjgzOWZkMjFiNDI2MzY5ZDU2ZDhhOTY3ZWIyNGU3ZTQzMGEwMzMxYmQ",
    title: "Asus L1262TS Vivobook Pro 15 Gaming Laptop",
    price: "₹23,490.00",
    m_r_p: "₹37,990.00",
    save_p: "19%(₹12,015)",
},

]

let i = 0;

arr_items.map(function (el) {
    // let container = document.getElementsByClassName("c_1")
    let container1 = document.querySelector(".c_1")
    let container2 = document.querySelector(".c_2")
    let container3 = document.querySelector(".c_3")
    let container4 = document.querySelector(".c_4")

    let img_box = document.createElement("div")
    let image = document.createElement("img")
    image.src = el.Image;
    let title = document.createElement("h6")
    title.innerText = el.title
    let offer = document.createElement("p")
    offer.innerText = `offer price: ${el.price}`

    let mrp = document.createElement("p")
    mrp.innerText = `M.R.P: ₹${el.m_r_p}`
    let save = document.createElement("p")
    save.innerText = `You Save: ₹${el.save_p}`
    let box = document.createElement("div")
    box.setAttribute("id", "items")
    let btn = document.createElement("button")
    btn.innerText = "OFFER AVALIBLE"
    btn.setAttribute("id", "offerBtn")

    img_box.append(image)
    box.append(img_box, title, offer, mrp, save, btn)
    if (i <= 3)
        container1.append(box)
    else if (i <= 7)
        container2.append(box)
    else if (i <= 11)
        container3.append(box)
    else if (i <= 15)
        container4.append(box)
    i++;



})