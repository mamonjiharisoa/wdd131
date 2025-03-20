
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






let temperature = 9;
let Wind = 7;

function chillWind( temperature, Wind){

formula = 13.12 + 0.6215 * (temperature )- 11.37 * (Wind)**0.16 + 0.3965 * (temperature) * (Wind)**0.16;

return formula}

document.querySelector('#WindChill').innerHTML = chillWind(temperature, Wind);

;
 
