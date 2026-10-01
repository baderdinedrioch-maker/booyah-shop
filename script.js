// ============================================
// 🔥 BOOYAH SHOP - JavaScript
// ============================================

const products = [
    { name: "100 جوهرة", price: 10, icon: "💎" },
    { name: "310 جوهرة", price: 25, icon: "💎" },
    { name: "520 جوهرة", price: 40, icon: "💎" },
    { name: "1060 جوهرة", price: 75, icon: "💎" },
    { name: "Booyah Pass", price: 20, icon: "🎟️" },
    { name: "باقة المستوى 1", price: 5, icon: "🏆" },
    { name: "باقة المستوى 2", price: 7, icon: "🏆" },
    { name: "باقة المستوى 3", price: 9, icon: "🏆" },
    { name: "باقة المستوى 4", price: 11, icon: "🏆" },
    { name: "باقة المستوى 5", price: 13, icon: "🏆" }
];


// رقم WhatsApp الخاص بالمتجر
const whatsappNumber = "212656310403";


// السلة
let cart = [];


// ============================================
// إنشاء المنتجات
// ============================================

document.body.innerHTML = `

<div class="shop">

    <header>
        <h1>🔥 Booyah Shop</h1>
        <p>متجر فري فاير</p>

        <button onclick="openCart()">
            🛒 السلة
            <span id="cartCount">0</span>
        </button>
    </header>


    <main>

        <div class="hero">
            <h2>متجر Booyah Shop</h2>

            <p>
                💎 جواهر فري فاير
                <br>
                🎟️ Booyah Pass
                <br>
                🏆 باقات المستوى
            </p>
        </div>


        <h2 class="title">
            🛍️ المنتجات
        </h2>


        <div
            id="products"
            class="products">
        </div>

    </main>


    <!-- السلة -->

    <div
        id="cartWindow"
        class="window">

        <div class="cart">

            <button
                class="close"
                onclick="closeCart()">

                ✕

            </button>

            <h2>🛒 سلة المشتريات</h2>

            <div id="cartItems"></div>

            <div class="total">
                المجموع:
                <span id="total">0</span> DH
            </div>

            <button
                class="whatsapp"
                onclick="checkout()">

                💬 إرسال الطلب إلى WhatsApp

            </button>

        </div>

    </div>


    <!-- معلومات الزبون -->

    <div
        id="checkoutWindow"
        class="window">

        <div class="cart">

            <button
                class="close"
                onclick="closeCheckout()">

                ✕

            </button>

            <h2>📦 معلومات الطلب</h2>

            <label>الاسم</label>

            <input
                id="customerName"
                placeholder="اكتب اسمك">


            <label>رقم الهاتف</label>

            <input
                id="customerPhone"
                placeholder="06XXXXXXXX">


            <label>Free Fire ID</label>

            <input
                id="freeFireID"
                placeholder="اكتب Free Fire ID">


            <label>طريقة الدفع</label>

            <select id="payment">

                <option value="">
                    اختر طريقة الدفع
                </option>

                <option value="الدفع نقداً">
                    💵 الدفع نقداً
                </option>

                <option value="تحويل بنكي">
                    🏦 تحويل بنكي
                </option>

            </select>


            <button
                class="whatsapp"
                onclick="sendOrder()">

                📲 إرسال الطلب إلى WhatsApp

            </button>

        </div>

    </div>


    <footer>

        <h2>Booyah Shop</h2>

        <p>
            🔥 متجر فري فاير
        </p>

        <p>
            WhatsApp: +212 656-310403
        </p>

        <p>
            Instagram: @boouh_hop
        </p>

    </footer>

</div>
`;


// ============================================
// التصميم
// ============================================

const style = document.createElement("style");

style.innerHTML = `

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f3f8ff;
    color: #172033;
}

header {
    background: white;
    padding: 18px;
    text-align: center;
    box-shadow: 0 2px 12px #ddd;
}

header h1 {
    color: #006eff;
    margin: 0;
}

header p {
    color: #777;
}

header button {
    background: #006eff;
    color: white;
    border: 0;
    padding: 12px 22px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
}

#cartCount {
    background: white;
    color: #006eff;
    padding: 3px 7px;
    border-radius: 50%;
    margin-right: 5px;
}

main {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}

.hero {
    margin: 30px 0;
    padding: 55px 20px;
    text-align: center;
    color: white;
    border-radius: 25px;

    background:
        linear-gradient(
            135deg,
            #006eff,
            #35a5ff
        );
}

.hero h2 {
    font-size: 40px;
}

.hero p {
    line-height: 2;
    font-size: 18px;
}

.title {
    text-align: center;
    margin: 35px;
}

.products {
    display: grid;

    grid-template-columns:
        repeat(
            auto-fit,
            minmax(210px, 1fr)
        );

    gap: 20px;
}

.product {
    background: white;
    padding: 25px;
    text-align: center;
    border-radius: 18px;

    box-shadow:
        0 5px 20px
        rgba(0,0,0,.08);
}

.icon {
    font-size: 50px;
}

.product h3 {
    font-size: 18px;
}

.price {
    color: #006eff;
    font-size: 22px;
    font-weight: bold;
    margin: 15px;
}

.add {
    width: 100%;
    padding: 12px;

    border: 0;
    border-radius: 10px;

    background: #006eff;
    color: white;

    cursor: pointer;

    font-size: 15px;
    font-weight: bold;
}

.add:hover {
    background: #0055c9;
}

.window {
    display: none;

    position: fixed;

    inset: 0;

    background:
        rgba(0,0,0,.6);

    z-index: 1000;

    align-items: center;
    justify-content: center;

    padding: 20px;
}

.cart {
    position: relative;

    background: white;

    width: 100%;
    max-width: 550px;

    max-height: 90vh;

    overflow-y: auto;

    padding: 30px;

    border-radius: 20px;
}

.close {
    position: absolute;

    left: 15px;
    top: 15px;

    border: 0;

    background: #eee;

    padding: 8px 12px;

    border-radius: 8px;

    cursor: pointer;
}

.cart-item {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

    padding: 15px 0;

    border-bottom: 1px solid #ddd;
}

.quantity button {
    border: 0;

    background: #e7f1ff;

    color: #006eff;

    padding: 7px 12px;

    border-radius: 7px;

    cursor: pointer;
}

.delete {
    border: 0;

    background: #ffe0e0;

    color: red;

    padding: 7px;

    border-radius: 7px;

    cursor: pointer;
}

.total {
    font-size: 22px;

    font-weight: bold;

    color: #006eff;

    padding: 20px 0;
}

.whatsapp {
    width: 100%;

    padding: 14px;

    border: 0;

    border-radius: 10px;

    background: #25D366;

    color: white;

    font-size: 16px;

    font-weight: bold;

    cursor: pointer;
}

label {
    display: block;

    margin-top: 15px;

    margin-bottom: 6px;

    font-weight: bold;
}

input,
select {
    width: 100%;

    padding: 13px;

    border: 1px solid #ddd;

    border-radius: 9px;

    font-size: 15px;
}

footer {
    margin-top: 70px;

    padding: 40px;

    text-align: center;

    background: #111827;

    color: white;
}

footer h2 {
    color: #3fa1ff;
}

@media(max-width:600px) {

    .products {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }

    .product {
        padding: 15px;
    }

    .hero h2 {
        font-size: 28px;
    }

}

`;

document.head.appendChild(style);


// ============================================
// عرض المنتجات
// ============================================

function displayProducts() {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    products.forEach((product, index) => {

        container.innerHTML += `

            <div class="product">

                <div class="icon">
                    ${product.icon}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="price">
                    ${product.price} DH
                </div>

                <button
                    class="add"
                    onclick="addToCart(${index})">

                    🛒 أضف إلى السلة

                </button>

            </div>

        `;

    });
}


// ============================================
// إضافة إلى السلة
// ============================================

function addToCart(index) {

    const product = products[index];

    const existing =
        cart.find(
            item => item.name === product.name
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: product.name,

            price: product.price,

            icon: product.icon,

            quantity: 1

        });

    }

    updateCart();

    openCart();
}


// ============================================
// تحديث عدد المنتجات
// ============================================

function updateCart() {

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    document.getElementById(
        "cartCount"
    ).textContent = count;
}


// ============================================
// فتح السلة
// ============================================

function openCart() {

    const windowBox =
        document.getElementById(
            "cartWindow"
        );

    windowBox.style.display = "flex";

    renderCart();
}


// ============================================
// إغلاق السلة
// ============================================

function closeCart() {

    document.getElementById(
        "cartWindow"
    ).style.display = "none";
}


// ============================================
// عرض محتويات السلة
// ============================================

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    let total = 0;

    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML =
            "<p>🛒 السلة فارغة</p>";

        document.getElementById(
            "total"
        ).textContent = "0";

        return;
    }


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        container.innerHTML += `

            <div class="cart-item">

                <div>

                    ${item.icon}
                    <strong>
                        ${item.name}
                    </strong>

                    <br>

                    ${itemTotal} DH

                </div>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${index},
                            1
                        )">

                        +

                    </button>


                    ${item.quantity}


                    <button
                        onclick="changeQuantity(
                            ${index},
                            -1
                        )">

                        -

                    </button>

                </div>


                <button
                    class="delete"
                    onclick="removeProduct(
                        ${index}
                    )">

                    🗑️

                </button>

            </div>

        `;

    });


    document.getElementById(
        "total"
    ).textContent = total;
}


// ============================================
// تغيير الكمية
// ============================================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

    renderCart();
}


// ============================================
// حذف المنتج
// ============================================

function removeProduct(index) {

    cart.splice(index, 1);

    updateCart();

    renderCart();
}


// ============================================
// الانتقال إلى معلومات الطلب
// ============================================

function checkout() {

    if (cart.length === 0) {

        alert("السلة فارغة!");

        return;
    }

    closeCart();

    document.getElementById(
        "checkoutWindow"
    ).style.display = "flex";
}


// ============================================
// إغلاق معلومات الطلب
// ============================================

function closeCheckout() {

    document.getElementById(
        "checkoutWindow"
    ).style.display = "none";
}


// ============================================
// إرسال الطلب إلى WhatsApp
// ============================================

function sendOrder() {

    const name =
        document.getElementById(
            "customerName"
        ).value.trim();

    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();

    const freeFireID =
        document.getElementById(
            "freeFireID"
        ).value.trim();

    const payment =
        document.getElementById(
            "payment"
        ).value;


    if (
        !name ||
        !phone ||
        !freeFireID ||
        !payment
    ) {

        alert(
            "⚠️ يرجى ملء جميع المعلومات"
        );

        return;
    }


    let total = 0;

    let productsText = "";


    cart.forEach(item => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        productsText +=
            `• ${item.name} × ${item.quantity} = ${itemTotal} DH\n`;

    });


    const orderNumber =
        "BS-" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    const message =

`🔥 طلب جديد - Booyah Shop

📦 رقم الطلب:
${orderNumber}

👤 الاسم:
${name}

📱 رقم الهاتف:
${phone}

🎮 Free Fire ID:
${freeFireID}

💳 طريقة الدفع:
${payment}

🛍️ المنتجات:

${productsText}

💰 المجموع:
${total} DH

شكراً لطلبك من Booyah Shop ❤️`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );
}


// ============================================
// تشغيل المتجر
// ============================================

displayProducts();

updateCart();
     