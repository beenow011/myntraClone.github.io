console.log("Welcome to your bag's console")
let bagItemContainer = document.querySelector(".bag-items-container");
let bagItemCount = document.querySelector(".bag-items");
let selectedItems=[] ;
let result ;
let selectedItemId;
let msgdiv = document.querySelector(".msg");


onload();
function onload(){
    let jsonstr = localStorage.getItem("bagItems")
    selectedItemId = jsonstr? JSON.parse(jsonstr):[];
    deriveSelectedObjects();
    displayItemsToBagPage();
    displayBagIcon();
    displayMsg();

}
function deriveSelectedObjects(){
    selectedItemId.forEach(element => {
         result = items.filter(obj=>{
            if(obj.id == element)
            return obj;
        })
        selectedItems.push(result);
    });
    // console.log(selectedItems);
}

function displayItemsToBagPage(){
    let innerHTML = "";
    selectedItems.forEach(item=>{
        let index = item[0];
        innerHTML+=` <div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src="../${index.image}">
        </div>
        <div class="item-right-part">
          <div class="company">${index.company}</div>
          <div class="item-name">
          ${index.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs ${index.current_price}</span>
            <span class="original-price">Rs ${index.original_price}</span>
            <span class="discount-percentage">(${index.discount_percentage}% OFF)</span>
          </div>
          <div class="return-period">
            <span class="return-period-days">${index.return_period} days</span> return available
          </div>
          <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${index.delivery_date}</span>
          </div>
        </div>
        
        <div class="remove-from-cart" onclick="removeCard(${index.id})">X</div>
        </div>
        `
    })
    bagItemContainer.innerHTML=innerHTML;
}

function displayBagIcon(){
    
    // console.log(count);
    if( selectedItemId.length > 0){
        bagItemCount.style.display = "inline";
        bagItemCount.innerText = selectedItemId.length;
    }
else{
    bagItemCount.style.display = "none";
}
}

function removeCard(card){
    let count=0;
    selectedItemId=selectedItemId.filter(ele=>{
        if(ele==card)count++;
    if(count<=1){
        if(ele!=card)
        return ele;
    }else{
        return ele;
    }
    })
    console.log(selectedItemId)
    localStorage.removeItem("bagItems");
    localStorage.setItem("bagItems",JSON.stringify(selectedItemId))
    displayBagIcon();
    bagItemContainer.innerHTML ="";
    deriveSelectedObjects();
    displayItemsToBagPage();
    location.reload(true);
}

function displayMsg(){
    if(selectedItemId.length!=0){
        msgdiv.style.display="none";
    }else{
        msgdiv.style.display="flex";

    }
}