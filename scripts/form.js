const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];





const ProductSelect = document.getElementById("select");





products.forEach( product => {

const option = document.createElement("option")
option.value = product.name
option.textContent = product.name
document.getElementById("select").appendChild(option)

}) 







 
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML=` © ${today.getFullYear()}`;

const fulldate = document.querySelector("#lastModified")

fulldate.innerHTML = `Last Modification : <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
        timeStyle: "medium" ,
       
	}
).format(today)}</span>`   



const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;

localStorage.setItem("numVisits-ls", numVisits);