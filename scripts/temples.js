const mainnav = document.querySelector('.nav_1')

const hambutton = document.querySelector('#menu')


hambutton.addEventListener('click', ()=> {

    mainnav.classList.toggle('show') 
    hambutton.classList.toggle('show');

} );



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
