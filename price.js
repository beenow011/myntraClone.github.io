let priceDivElement = document.querySelector('.paymentDetails');
let TotalMrp=0;
let discountPrice=0;
let TotalAmount=99;
function displayPriceBlock(){
    priceDivElement.innerHTML=
    `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${selectedItemId.length} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${TotalMrp}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${discountPrice}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${TotalAmount}</span>
    </div>
    </div>
    <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
    ;

}

function checkEmpty(){
    if(selectedItemId.length!=0)
    calculatePrice()
    
}
checkEmpty();

function calculatePrice(){
    selectedItems.forEach(item=>{
        let index=item[0];
        TotalMrp+=index.original_price;
        discountPrice+=index.original_price-index.current_price;
        TotalAmount+=index.current_price;
    })
    displayPriceBlock();
}