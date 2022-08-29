/* Khi nhấn nút Đặt Hàng, trả ra giá trị IMG, Name, Price */
const btns = document.querySelectorAll("button")
btns.forEach(function(button,index) {
    button.addEventListener("click", function (event) {
        let btnItem = event.target
        let product = btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productName = product.querySelector("H3").innerText
        let productPrice = product.querySelector("H4").innerText
        console.log(productPrice, productImg, productName)
        addcart(productPrice,productImg,productName)
    })
})

    function addcart(productPrice,productImg,productName){
        let addtr = document.createElement("tr")
        let trcontent = '<tr>\n' +
            '                        <td style="display: flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt="">'+productName+'</td>\n' +
            '                        <td><p><span>'+productPrice+'</span><sup>đ</sup></p></td>\n' +
            '                        <td><input style="width: 30px;outline: none;" type="number" value="1"  min="1" onchange="getElementById(\'result\').value=carttotal()"></td>\n' +
            '                        <td style="cursor: pointer"><input type="button" value="Xóa" onclick="deleteCart(this);getElementById(\'result\').value=carttotal()"></td>\n' +
            '                    </tr>'
        addtr.innerHTML = trcontent //gán ngược lại các giá trị được gọi vào thẻ chờ.
        let cartTable = document.querySelector("tbody");
        // console.log(cartTable)
        cartTable.append(addtr) //thêm vào khi dùng sự kiện
        carttotal()
     }
    function carttotal() {
        let cartItem = document.querySelectorAll("tbody tr")// gán biến = thẻ chờ
        let sum = 0;
        for (let i = 0; i < cartItem.length; i++) {
            let inputValue = cartItem[i].querySelector("input").value
            let productPrice = cartItem[i].querySelector("span").innerHTML
            sum += inputValue * productPrice * 1000
        }
        return document.getElementById("result").innerHTML = sum;
    }
    function deleteCart(r) {
        const i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
    }

