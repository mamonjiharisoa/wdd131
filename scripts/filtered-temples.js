const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Antananarivo Madagascar",
        location: "Ambohibao, Antehiroka",
        dedicated: "2024, November, 19",
        area: 10000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/antananarivo-madagascar-temple/antananarivo-madagascar-temple-57245-main.jpg"
      },
      {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires,",
        dedicated: "2017, January, 10",
        area: 30659,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4089-thumb.jpg"
      },
      {
        templeName: "Cedar City Utah",
        location: "Cedar City Utah,United States",
        dedicated: "1983, December, 2",
        area: 5931,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-47.jpg"
      },
];



const HomeLink= document.querySelector("#Home");
const NewLink = document.querySelector("#New")
const LargeLink = document.querySelector("#Large")
const SmallLink = document.querySelector("#Small")
const OldLink = document.querySelector("#Old") 

const welcome= temples;
createTempleCard(welcome);

 HomeLink.addEventListener("click", () => {
    const filteredTemples = temples
    createTempleCard(filteredTemples);});

LargeLink.addEventListener("click", () => {
    const LargeTemples = temples.filter(temple => temple.area > 10000);
    createTempleCard(LargeTemples);});

SmallLink.addEventListener("click", () => {
    const SmallTemples = temples.filter(temple => temple.area < 10000 );
    createTempleCard(SmallTemples);});   
 
NewLink.addEventListener("click", () => {
      const Newemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000);
      createTempleCard(Newemples);});

OldLink.addEventListener("click", () => {
    const OldTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
    createTempleCard(OldTemples);});









function createTempleCard(filteredTemples) {
    const gridContainer = document.querySelector(".res-grid");
    gridContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.append(name, location, dedication, area, img);
        gridContainer.appendChild(card);
    });
}

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
