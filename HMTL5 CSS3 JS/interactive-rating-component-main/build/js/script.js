function start(){selection(),enter()}function selection(){document.querySelectorAll(".rating-card__rating a").forEach(e=>{e.addEventListener("click",(function(t){removeSelection(),e.classList.add("selected")}))})}function removeSelection(){document.querySelectorAll(".rating-card__rating a").forEach(e=>{e.classList.remove("selected")})}function enter(){document.querySelector(".submit").addEventListener("click",(function(e){const t=document.querySelector(".selected");if(null==t)console.log("rating no seleccionado");else{const e=document.querySelector(".rating-card"),n=document.querySelector(".thank-you-card");document.querySelector(".number").textContent=t.textContent,e.classList.add("hide"),n.classList.remove("hide")}}))}document.addEventListener("DOMContentLoaded",(function(){start()}));
//# sourceMappingURL=script.js.map