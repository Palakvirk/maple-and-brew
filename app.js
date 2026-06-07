const reserveBtns =
document.querySelectorAll(".reserve-btn");

const popup =
document.getElementById("popup");

reserveBtns.forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        e.preventDefault();

        popup.style.display="flex";

    });

});

function closePopup(){

    popup.style.display="none";

}