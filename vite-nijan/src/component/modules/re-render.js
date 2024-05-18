export default function render() {
    let localstorage = window.localStorage;
    let quantity = 0;
    if (localstorage.getItem('cart') !== null) {
      let objectItem = JSON.parse(localstorage.getItem('cart'));
      for (let index = 0; index < objectItem.length; index++) {
        let element = objectItem[index];
        quantity += Number(element.productQuantity);
      }
    }
    document.getElementById("cart").innerHTML = Number(quantity);
}