console.log("Welcome to Myntra's console");

let itemsContainer = document.querySelector(".items-container");
let bagItemCount = document.querySelector(".bag-count");
let bagItems;
let ratingElement;
let discountElement;

onload();
function onload(){
    let jsonstr = localStorage.getItem("bagItems")
    bagItems = jsonstr? JSON.parse(jsonstr):[];
    displayItemsToHomePage();
    displayBagIcon();
}

function displayItemsToHomePage(){

    let innerHTML = ""
    items.forEach(item=>{
    
        innerHTML+= `  <div class="item-container">
        <img src="${item.image}" alt="item image" class="item-img">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">
            
            ${item.company}
        </div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs. ${item.current_price}</span>
            <span class="orginal-price">Rs. ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick ="addToBag(${item.id})" >Add to Bag</button>
        </div>`;
    })
    itemsContainer.innerHTML = innerHTML;
}
function addToBag(item){
    bagItems.push(item);
    // console.log(bagItems);
    localStorage.setItem("bagItems",JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon(){
    
    // console.log(count);
    if( bagItems.length > 0){
        bagItemCount.style.display = "inline";
        bagItemCount.innerText = bagItems.length;
    }
else{
    bagItemCount.style.display = "none";
}
}



