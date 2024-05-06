export default function render() {
    let localstorage = window.localStorage;
    let quantity = 0;
    if (localstorage.getItem('cart') !== null) {
      let objectItem = JSON.parse(localstorage.getItem('cart'));
      for (let index = 0; index < objectItem.value.length; index++) {
        quantity += element.productQuantity;
      }
    }
    document.getElementById("cart").innerHTML = quantity;
}