
 
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


const Boards = [
    {
      Material: "Brown Ash Burl & Maple Veneer & Wood Composites",
      Finish: "High Gloss Polyurethane",
      Square: 2 ,
      size: '19.5" x .5" Thick',
      Championship: "Approuved",
      
      imageUrl:
      "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/4779/29808/chess-set-wood-staunton-fke350-brown-ash-burl-board-boxwood-pieces-view-1500X810__02451.1613759770.jpg?c=2"
    },
    {
        Material: "Black Stained Wood & Ash Burl Veneer & Wood Materials",
        Finish: "High Gloss Polyurethane",
        Square: 2,
        size: '19.5" x 19.5" x .5',
        Championship: "Approuved",
        
        imageUrl:
        "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/3234/8959/chess_sets_black_ash_burl_fierce_knight_ebony_boxwood_view_1400x720__26537.1650315731.jpg?c=2"
      },
      {
        Material: "Brown Stained Ash Burl & Maple Veneer & Wood Materials",
        Finish: "High Gloss Polyurethane ",
        Square: 2,
        size: '19.5" x 19.5" x .5',
        Championship: "Not",
        
        imageUrl:
        "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/4528/25482/dcp15-chess-set-brown-ash-burl-chess-board-silver-view-1500x770__50673.1561736860.jpg?c=2"
      },

      {
        Material: "Boxwood",
        Finish: "High Gloss Lacquer",
        Square: 2,
        size: '19.5" x 19.5" x .5',
        Championship: "Approuved",
        
        imageUrl:
        "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/2255/8707/chess_sets_black_ash_burl_burnt_parker_burnt_view_1400x720__75192.1646062489.jpg?c=2"
      },
      {
        Material: "Walnut & Maple Veneer over Wood Composite",
        Finish: "Satin Polyurethane",
        Square: 2,
        size: '17.5" x .5" Thick"',
        Championship: "Not",
        
        imageUrl:
        "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1000x1318/products/6413/64679/theme-chess-set-zulu-ntd-zulu-pieces-view-1500x850__11932.1686175810.jpg?c=2"
      },



      {
        Material: "Gray Stained Ash Burl and Erable Veneer over Wood Composite",
        Finish: "High Gloss Polyurethane",
        Square: 2,
        size: '17.5" x .5" Thick',
        Championship: "Not",
        
        imageUrl:
        "https://cdn11.bigcommerce.com/s-5p6k1/images/stencil/1280x1280/products/6426/64956/theme-chess-set-napoleon-russia-gye-russian-pieces-view-1500x865__92106.1686186383.jpg?c=2"
      },



];



const Contacts = [
    {
      Contact1: "Contact",  
      Email: "GaryKasparovchessclub@gmail.com",
      Phone: "+265784509856",
      Facebook: "Gary Kasparov Chess club ",
      Website: "chessKarparov.com",
      imageUrl:"https://www.capakaspa.info/wp-content/uploads/2016/04/garry-kasparov-04-1024x639.jpg"

    },]


   
    creatContactCard(Contacts)

    function creatContactCard(AllContacts) {
        const gridContainer = document.querySelector(".res-grid_2");
        gridContainer.innerHTML = "";
    

     AllContacts.forEach ( Contact => {
        const card = document.createElement("section");
        const ContactTitle  = document.createElement("h4");
        const Email = document.createElement("p");
        const Phone = document.createElement("p"); 
        const Facebook =document.createElement("p");
        const Website =  document.createElement("p");
        const img1 = document.createElement("img");
       
        ContactTitle.textContent = Contact.Contact1; 
        Email.innerHTML = `<span class="label"><strong> Email </strong>  :</span> ${Contact.Email}`;
        Phone.innerHTML = `<span class="label"><strong>   Phone </strong>   :</span> ${Contact.Phone}`;
        Facebook.innerHTML = `<span class="label"> <strong>  Facebook </strong> :</span> ${Contact.Facebook} `
        Website.innerHTML = `<span class="label"> <strong>  Website </strong>  :</span> ${Contact.Website}  `;
       

        img1.setAttribute("src", Contact.imageUrl);
        img1.setAttribute("alt", ` Garry Kasparov`);
        img1.setAttribute("loading", "lazy");

        card.append(ContactTitle ,Email, Phone, Facebook, Website,img1 );
        gridContainer.appendChild(card);

} )}







createTempleCard(Boards);

function createTempleCard(AllBoard) {
    const gridContainer = document.querySelector(".res-grid");
    gridContainer.innerHTML = "";

    AllBoard.forEach(Board => {
        const card = document.createElement("section");
        const MaterialMade = document.createElement("h3");
        const Finish = document.createElement("p");
        const Square = document.createElement("p");
        const size = document.createElement("p");
        const img = document.createElement("img");

        MaterialMade.textContent = Board.Material;
        Finish.innerHTML = `<span class="label">Finish:</span> ${Board.Finish}`;
        Square.innerHTML = `<span class="label">Square:</span> ${Board.Square}`;
        size.innerHTML = `<span class="label">Size:</span> ${Board.size} `;

        img.setAttribute("src", Board.imageUrl);
        img.setAttribute("alt", `${Board.Material} Board`);
        img.setAttribute("loading", "lazy");

        card.append(MaterialMade, Finish, Square, size, img);
        gridContainer.appendChild(card);
    });
}



const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;

localStorage.setItem("numVisits-ls", numVisits);




const Home = document.querySelector("#Home")
const Championship = document.querySelector("#Championship")
const Class = document.querySelector("#Class")
const Contact = document.querySelector("#Contact") 



  

 Contact.addEventListener( "click" , () =>  {
    const Contact = Boards.filter(Board => Board.Championship.includes("Noti"));
    createTempleCard(Contact);});  
  
 Home.addEventListener("click", () => {
    const filteredBoards = Boards
    createTempleCard(Boards);});

 Championship.addEventListener("click", () => {
    const ChampionshipBoard = Boards.filter(Board => Board.Championship.includes("Approuved"));
    createTempleCard(ChampionshipBoard);});

 Class.addEventListener("click", () => {
        const ClassBoard = Boards.filter(Board => Board.Championship.includes("Not"));
        createTempleCard(ClassBoard);});   



        const mainnav = document.querySelector('.nav_1')
        const hambutton = document.querySelector('#menu')


   hambutton.addEventListener('click', ()=> {
   mainnav.classList.toggle('show') 
   hambutton.classList.toggle('show');

} );