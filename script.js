
document.getElementById("btn").setAttribute("disabled", "disabled")
var valueCount
var price =document.getElementById("quantity").innerText
function priceTotal() {
    var total= valueCount*price
    console.log("price")
    document.getElementById("quantity").innerText = total;
}
document.getElementById("btnn").addEventListener("click", function(){
    valueCount= document.getElementById("input").value;
    valueCount++
    document.getElementById("input").value=valueCount

    if(valueCount >1){
        document.getElementById("btn").removeAttribute("disabled");
        document.getElementById("btn").classList.remove("disabled");
    }
    priceTotal()
    
})

document.getElementById("btn").addEventListener("click", function(){
    valueCount= document.getElementById("input").value;
    valueCount--
    document.getElementById("input").value=valueCount

    if(valueCount ==1){
        document.getElementById("btn").setAttribute("disabled","disabled");
    }
    priceTotal()
    
})
const wrapper =document.querySelector(".wrapper")
const preloader =document.querySelector(".example")

function openPopup(){
    wrapper.classList.add("close-popup");
    preloader.classList.add("open-popup")

    setTimeout(() => {
    window.location.href ="./index1.html"
        
    }, 5000);

}
