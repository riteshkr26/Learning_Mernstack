const h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
    console.log(dets);
    if (dets.key === " ") {
        h1.textContent = "SPC";
    } else {
        h1.textContent = dets.key;
    }
});


let btn  = document.querySelector("#btn");
let fileinp= document.querySelector("#inptype");

btn.addEventListener("click", () =>{
    fileinp.click();
});


fileinp.addEventListener("change", (dets)=>{
    const file = dets.target.files[0];
if(file){
    btn.textContent= file.name;
}    

    //btn.textContent=dets.target.files[0].name;
});