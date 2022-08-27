// class Product {
//     name;
//     price;
//
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }
//
// let cafe = new Product("cafe", 35000);
// let socola = new Product("socola", 45000);
// let bo = new Product("bo", 45000);
// let chanh = new Product("chanh", 30000);
// let suachua = new Product("suachua", 35000);
//
// let products = [cafe, socola, bo, chanh, suachua];
// let indexEdit = -1;
//
// function show() {
//     let str = "";
//     for (let i = 0; i < products.length; i++) {
//         str += `
//               <tr>
//                 <td>${products[i].name}</td>
//                 <td>${products[i].price}</td>
//                 <td><button onclick="deleteProduct(${i})">Delete</button></td>
//             </tr>`
//     }
//     document.getElementById("show").innerHTML = str;
// }
//
// function deleteProduct(index) {
//     products.splice(index, 1);
//     show();
// }

const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function (event){
        let btnItem = event.target
        let product = btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productName = product.querySelector("H3").innerText
        let productPrice = product.querySelector("H4").innerText
        // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)
    })
})
    function addcart(productPrice,productImg,productName){
        let addtr = document.createElement("tr")
        let trcontent = '<tr>\n' +
            '                        <td style="display: flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt="">'+productName+'</td>\n' +
            '                        <td><p><span>'+productPrice+'</span><sup>đ</sup></p></td>\n' +
            '                        <td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td>\n' +
            '                        <td style="cursor: pointer">Xóa</td>\n' +
            '                    </tr>'
        addtr.innerHTML = trcontent //gán ngược lại các giá trị được gọi vào thẻ chờ.
        let cartTable = document.querySelector("tbody");
        // console.log(cartTable)
        cartTable.append(addtr) //thêm vào khi dùng sự kiện
        carttotal()
    }
    function carttotal(){
        let cartItem = document.querySelectorAll("tbody tr")// gán biến = thẻ chờ
        let sum=0;
        for (let i=0; i<cartItem.length; i++){
            let inputValue = cartItem[i].querySelector("input").value
            let productPrice = cartItem[i].querySelector("span").innerHTML
            sum += inputValue*productPrice*1000
            // console.log(sum)

        }
        let cartTotalA = document.querySelector(".price-total span")
        cartTotalA.innerHTML = sum;
    }

    // function deleteCart(){
    //     let cartItem = document.querySelector("tbody tr")
    //