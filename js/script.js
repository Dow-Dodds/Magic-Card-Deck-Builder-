
const magicArray = [
    {
        id: 0,
        name: "Dark Ritual",
        manaColour: ["swamp"],
        imgUrl: "img/dark-ritual.jpeg",
        spellType: "Instant",
        altArt: "img/dark-ritual-alt-art.jpeg",
        cost:"1 swamp mana",
        description: "Add 3 swamp mana cards to your mana pool.",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: "Legal"
    } ,
    {
        id: 1,
        name: "Goldspan Dragon",
        manaColour: ["mountain"],
        imgUrl: "img/Goldspan-Dragon.jpeg",
        spellType: "Creature - Dragon",
        altArt: "img/goldspan-dragon-alt-art.jpeg",
        cost:"2 mountains + 3 colourless mana",
        description: "Flying, haste. Whenever Goldspan Dragon attacks or becomes the target of a spell, create a Treasure token. Treasures you control have the ability to 'tap to Sacrifice this artifact: Add two mana of any one color.",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: "Legal"
    },
    {
        id: 2,
        name: "Esika, God of the Tree",
        manaColour: ["forrest"],
        imgUrl: "img/esika-god.jpeg",
        spellType: "Legendary Creature - God",
        altArt: "img/esika-god-of-the-tree-alt-art.jpeg",
        cost:"2 forrest + 1 colourless mana",
        description: "Vigilance. Ability 1: Tap once to add one mana of any colour. Ability 2: Other Legendary creatures you control have vigilance and the ability to tap to add one mana of any colour",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: "Legal"
    },
    {
        id: 3,
        name: "Unsummon",
        manaColour: ["island"],
        imgUrl: "img/unsummon-cropped.jpeg",
        spellType: "Instant",
        altArt: "img/unsummon-alt-art.jpeg",
        cost:"1 island mana",
        description: "Return target creature to its owner's hand.",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: "Legal"
    },
    {
        id: 4,
        name: "Myojin of Blooming Dawn",
        manaColour: ["plains"],
        imgUrl: "img/Myojin-of-Blooming-Dawn.jpeg",
        spellType: "Legendary Creature - Spirit",
        altArt: "img/myojin-of-blooming-dawn-alt-art.jpeg",
        cost:"3 plains + 5 colourless mana",
        description: "Ability 1: Myojin of Blooming Dawn enters the battlefield with an indestructable counter on it if you cast it from your hand. Ability 2: Remove an indestructable counter from Myojin of Blooming Dawn: Create a 1/1 colorless Spirit creature token for each permanent you control.",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: ""
    },
    {
        id: 5,
        name: "Oona Queen of the fae",
        manaColour: ["swamp","island"],
        imgUrl: "img/oona-queen-of-the-fae.jpeg",
        spellType: "Legendary Creature — Faerie Wizard",
        altArt: "img/oona-queen-of-the-fae-altart.jpeg",
        cost:"3 Swamps or Islands + 3 colourless mana",
        description: "Creature had Flying. Tap x number of Swamp or Island type mana: Choose a color. Target opponent exiles the top X cards of their library. For each card of the chosen color exiled this way, create a 1/1 blue and black Faerie Rogue creature token with flying.",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: ""
    },
    {
        id: 6,
        name: "Bitterblossom",
        manaColour: ["swamp"],
        
        imgUrl: "img/bitterblossom.jpeg",
        spellType: "Tribal Enchantment — Faerie",
        altArt: "img/bitterblossom-altart.jpeg",
        cost:"3 Swamps or Islands + 3 colourless mana",
        description: "At the beginning of your upkeep, you lose 1 life and create a 1/1 black Faerie Rogue creature token with flying",
        legacy: "Legal",
        vintage: "Legal",
        commander: "Legal",
        historic: ""
    },

];

const result = document.getElementById("result");

showAllCards();



function showAllCards(){
    for (let i = 0; i < magicArray.length; i++){
        result.innerHTML += `
        <div class="card-display">
      
           <img class="card" src="${magicArray[i].imgUrl}" alt="${magicArray[i].name}">    
           <div id="holographic" onmousemove="handleMouseMove(event)"></div>

            <div class="content-wrapper">
            <h4>${magicArray[i].name}</h4>
            <p><strong>Mana Type/s: </strong>${magicArray[i].manaColour}</p>
            <p><strong>Spell Type: </strong>${magicArray[i].spellType}</p>
            <a class="button details-button" id="${magicArray[i].id}">DETAILS <i class="bi bi-chevron-right"></i></a>

            <div>
        </div>
        `;
    }
}
   
// variables

const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const menuBurger = document.getElementById("menu-burger");
const navOverlay = document.getElementById("nav-overlay");


// navigation pop up phone 

menuBurger.onclick = function(){
    navOverlay.classList.toggle("active");
}

// card detail modal section (open and close)
const infoModalOverlay = document.getElementById("infomodal-overlay");
const infoContentCard = document.getElementById("info-contentcard");
const infoCloseBtn = document.getElementById("infoclose-button");
const infoData = document.getElementById("card-detail-container");
//get all the modal buttons to generate ids 
const detailsButtonArray = document.getElementsByClassName("details-button");


generateButtons();
// function to toggle modal to active and insert data
console.log(infoData);

function openModal(id) {
    infoData.innerHTML = "";
    infoData.innerHTML += `
<h3>${magicArray[id].name} Detail</h3>
 

<div id="big-details">
    <div id="bd-image-wrapper">
      <img id="alt-art" src="${magicArray[id].altArt}">
    </div>

    <div class="detsdata-wrapper">
        <div class="details-data">
            <p><strong>Cost: </strong> ${magicArray[id].cost}</p>
            <p><strong>Description:</strong> ${magicArray[id].description}</p>
        </div>

        <div class="details-data">
        <h4>Legality</h4>
       
        <p><strong>Legacy:</strong> ${magicArray[id].legacy}</p>
        <p><strong>Vintage: </strong>${magicArray[id].vintage}</p>
        <p><strong>Commander: </strong>${magicArray[id].commander}</p>
        <p><strong>Historic: </strong>${magicArray[id].historic}</p>
        
        </div>
    </div>
</div>
     
     
    `;

    infoModalOverlay.classList.toggle("active");
    
    let delayAnimation = setTimeout(fadeIn, 300);
    function fadeIn(){
        infoContentCard.classList.toggle("active");
        }
} //end of open modal



function generateButtons(){
    for (let i=0; i < detailsButtonArray.length; i++) {
//         //show the individual button
        detailsButtonArray[i].onclick = function(){
            console.log("you clicked me");
            let currentDetailButtonId = this.id;
            console.log(currentDetailButtonId);
            openModal(currentDetailButtonId);
        }
        
    }
}

// close card detail modal 
infoCloseBtn.onclick = function(){
    closeDetailModal();
}

function closeDetailModal() {
    infoContentCard.classList.toggle("active");
    
    let delayAnimation = setTimeout(fadeIn, 300);
    function fadeIn(){
        infoModalOverlay.classList.toggle("active");
        }
}



//-----------------filtering via genre--------------------
const filterBtn = document.getElementById("mana-filter-button");
filterBtn.onclick = function(){
  filterMana();

}
function filterMana() {
    result.innerHTML = "";
    //grab the checked boxes
    let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked");
    //declare an array to contain all checked genres 
    const selectedMana = [];

    for (let i = 0; i < checkedBoxes.length; i++) {
        // grab each individual genre value
    selectedMana.push(checkedBoxes[i].value)
    }
    console.log(selectedMana);
   
    if (selectedMana.length == 0) {
        result.innerHTML += `
        <div class="card-display">
            <div class="add-new-wrapper">
                <h3>ADD NEW CARD</h3>
                <i id="add-button" class="bi bi-plus-square-fill"></i>
            </div>
        </div>  
        `;
        showAllCards();
        generateButtons();
   } 

   for (let i = 0; i < selectedMana.length; i++) {

       if(selectedMana[i] == "island") {
        // loop through the magiccards array and compare the mana type that
        // the user chose to the mana type of each magic card 
        for (let x = 0; x < magicArray.length; x++) {
            
            let match = magicArray[x].manaColour.includes(selectedMana[i]);
           
            if (match == true) {
                generateMagicCard(x);
            }
        }
     } //end of if statement for island mana 

     if(selectedMana[i] == "mountain") {
        // loop through the magiccards array and compare the mana type that
        // the user chose to the mana type of each magic card 
        for (let x = 0; x < magicArray.length; x++) {
            
            let match = magicArray[x].manaColour.includes(selectedMana[i]);
           
            if (match == true) {
                generateMagicCard(x);
            }
        }
       } //end of if statement for mountains 

       if(selectedMana[i] == "forrest") {
        // loop through the magiccards array and compare the mana type that
        // the user chose to the mana type of each magic card 
        for (let x = 0; x < magicArray.length; x++) {
            
            let match = magicArray[x].manaColour.includes(selectedMana[i]);
           
            if (match == true) {
                generateMagicCard(x);
            }
        }
       } //end of if statemen for forrest 
   
       if(selectedMana[i] == "plains") {
        // loop through the magiccards array and compare the mana type that
        // the user chose to the mana type of each magic card 
        for (let x = 0; x < magicArray.length; x++) {
            
            let match = magicArray[x].manaColour.includes(selectedMana[i]);
           
            if (match == true) {
                generateMagicCard(x);
            }
        }
           
       }//end of if ststament for plains 

       if(selectedMana[i] == "swamp") {
        // loop through the magiccards array and compare the mana type that
        // the user chose to the mana type of each magic card 
        for (let x = 0; x < magicArray.length; x++) {
            
            let match = magicArray[x].manaColour.includes(selectedMana[i]);
           
            if (match == true) {
                generateMagicCard(x);
               
            }
        }
       } //end of if ststament for swamp 
       generateButtons();
   } // end of loop checking through all cards 
} // end of filter by mana function 

//------ end of filterting section --------

// ---- add new card -----
const addBtn = document.getElementById("add-button");
const newOverlay = document.getElementById("new-overlay");
const containerNewCard = document.getElementById("container-newcard");
const newCardData = document.getElementById("new-card-data");
const addNewCloseButton = document.getElementById("addnew-closebutton");

addBtn.onclick = function() {
    newCardModal();
    console.log("bigbug");
}

addNewCloseButton.onclick = function() {
    closeNewCardModal();
}

function newCardModal() {
    newOverlay.classList.toggle("active");
    let delayAnimation = setTimeout(fadeIn, 300);
    function fadeIn(){
    containerNewCard.classList.toggle("active");
    console.log("you clicked me")
  }
}

function closeNewCardModal() {
    containerNewCard.classList.toggle("active");
    let delayAnimation = setTimeout(fadeOut, 300);
    function fadeOut(){
    newOverlay.classList.toggle("active");
    console.log("you closed the modal");
  }
}

//-----end of add new card ------
//submit new card to array 
const submitNewCard = document.getElementById("submit-newcard");
const newName = document.getElementById("new-name");
const newManaColour = document.getElementById("manaColour-new");
const newimgUrl = document.getElementById("new-imgUrl");
const newSpellType = document.getElementById("new-spellType");

submitNewCard.onclick = function() {
    collectNewData();
    result.innerHTML = "";
    result.innerHTML = `
    <div class="card-display">
        <div class="add-new-wrapper">
            <h3>ADD NEW CARD</h3>
            <i id="add-button" class="bi bi-plus-square-fill"></i>
        </div>
    </div>  
    `;
    showAllCards();
    generateButtons();
    closeNewCardModal()
    console.log("you have submitted a new card data");
}

function collectNewData() {
    let newCard = {
        id: magicArray.length,
        name: newName.value,
        manaColour: newManaColour.value.toLowerCase(),
        imgUrl: newimgUrl.value,
        spellType: newSpellType.value
    }
    magicArray.push(newCard);
    console.log(magicArray);

    const jsonObj = JSON.stringify(magicArray);
    // save to localStorage
    localStorage.setItem("magicArray", jsonObj);

    // get the string
    // from localStorage
    const str = localStorage.getItem("magicArray");
    // convert string to valid object
    const parsedObj = JSON.parse(str);

    console.log(parsedObj);
}
//-----end of submit new card ------
// ----- search function ------
function mouseOver() {
    let searchInput = document.getElementById("search-input");
    document.getElementById("search-button").style.margin = "0";


    let delayAnimation = setTimeout(fadeIn, 300);
    function fadeIn(){
        document.getElementById("search-input").style.opacity = "1";
        document.getElementById("search-input").style.left = "0";
        document.getElementById("search-input").style.display = "block";
        }
  }

//---searh card ----
// this variable will become true if we find a card 
let cardIsFound;

searchBtn.onclick = function() {
    filterSearchWord();
  }

function filterSearchWord(){
    // get search word
  let searchString = searchInput.value;
    // check if the search was empty 
  if (searchString == "") {
    notifications.classList.toggle("active");
    notifications.innerHTML = `
    <div class="alert">
    Please enter a valid search term
    </div>
    `
    result.innerHTML = "";
    result.innerHTML += `
    <div class="card-display">
        <div class="add-new-wrapper">
            <h3>ADD NEW CARD</h3>
            <i id="add-button" class="bi bi-plus-square-fill"></i>
        </div>
    </div>  
    `;
    showAllCards();
  } else {
    runSearch(searchString);
  }
}

function runSearch(string){
// artist is not found by default pre search 
    cardIsFound= false;
    let cardsFoundNumber = 0;

    result.innerHTML = "";
   
    for (let i = 0; i < magicArray.length; i++) {
        //user search convered to lowercase 
        let lowerCaseString = string.toLowerCase();
        //convert each artist name to lowercase 
        let lowerCaseCardName = magicArray[i].name.toLowerCase();
        //declare variable called match - it will be true if artist nam includes anything in the search term 
        let match = lowerCaseCardName.includes(lowerCaseString);
        console.log(lowerCaseCardName);
        console.log(match);
        if (match == true) {
        

            cardsFoundNumber++;
            cardIsFound = true;
            generateMagicCard(i); 
            generateButtons();
            
            if (cardsFoundNumber == 1) {
                notifications.classList.toggle("active");

                notifications.innerHTML = `
                  <div class="alert">
                  Your search term "${string}" returned 1 result
                  </div>
                  `;
                  console.log(cardsFoundNumber);
              } else {
                notifications.classList.toggle("active");

                notifications.innerHTML = `
                <div class="alert">
                Your search term "${string}" returned "${cardsFoundNumber}" results
                 </div>
                `;
              }

            }

    }

if (cardIsFound == false) {
    document.getElementById("notifications").style.backgroundColor = "rgba(255, 105, 97, .7);";
    document.getElementById("notifications").style.color = "white";
    notifications.innerHTML = `
    <div class="alert">
    Your search term "${string}" returned no results
    </div>
    `;
  }
  notifications.classList.toggle("active");

} //end of run search on string function 


searchInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-button").click();
  }
});
//---- end of search section ----

  //expand filtr section 
  let filterDropdown = document.getElementById("filter-dropbutton");
  let filterContainer = document.getElementById("filter-checkbox");

  filterDropdown.onclick = function() {
    
    filterDropdown.classList.toggle("active");

    let delayAnimation = setTimeout(fadeIn, 300);
    function fadeIn(){
        filterContainer.classList.toggle("active");    
        console.log("you clicked me")
  }
  }



//-------end of search function --------

function generateMagicCard(index){ 
    
    result.innerHTML += `
    <div class="card-display">
        
        <img class="card" src="${magicArray[index].imgUrl}" alt="${magicArray[index].name}">
        <style class="hover"></style>

      
        <div class="content-wrapper">
        <h4>${magicArray[index].name}</h4>
        <p><strong>Mana Type/s:</strong> ${magicArray[index].manaColour}</p>
        <p><strong>Spell Type:</strong> ${magicArray[index].spellType}</p>
        <a class="button details-button" id="${magicArray[index].id}">DETAILS <i class="bi bi-chevron-right"></i></a>

        <div>
    </div>
    `;
}


generateButtons();

// -------holographic card styles ------------!!!!

var x;
var $cards = $(".card");
var $style = $(".hover");

$cards
  .on("mousemove touchmove", function(e) { 
    // normalise touch/mouse
    var pos = [e.offsetX,e.offsetY];
    e.preventDefault();
    if ( e.type === "touchmove" ) {
      pos = [ e.touches[0].clientX, e.touches[0].clientY ];
    }
    var $card = $(this);
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.height();
    var w = $card.width();
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    var pa = (50-px)+(50-py);
    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var px_spark = (50+(px - 50)/7);
    var py_spark = (50+(py - 50)/7);
    var p_opc = 20+(Math.abs(pa)*1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;
    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}%;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    var opc = `opacity: ${p_opc/100};`
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    // need to use a <style> tag for psuedo elements
    var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
    // set / apply css class and style
    $cards.removeClass("active");
    $card.removeClass("animated");
    $card.attr( "style", tf );
    $style.html(style);
    if ( e.type === "touchmove" ) {
      return false; 
    }
    clearTimeout(x);
  }).on("mouseout touchend touchcancel", function() {
    // remove css, apply custom animation on end
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");
    x = setTimeout(function() {
      $card.addClass("animated");
    },2500);
  });




