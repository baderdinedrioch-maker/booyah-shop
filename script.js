// ==========================================
// BOOYAH SHOP - JAVASCRIPT ONLY
// ==========================================

// معلومات التواصل
const whatsappNumber = "212656310403";
const instagramUsername = "boouh_hop";

// ==========================================
// المنتجات
// ==========================================

const products = [
    {
        name: "100 جوهرة",
        price: 10,
        icon: "💎"
    },
    {
        name: "310 جوهرة",
        price: 25,
        icon: "💎"
    },
    {
        name: "520 جوهرة",
        price: 40,
        icon: "💎"
    },
    {
        name: "1060 جوهرة",
        price: 75,
        icon: "💎"
    },
    {
        name: "Booyah Pass",
        price: 20,
        icon: "🎟️"
    },
    {
        name: "Level Pack 1",
        price: 5,
        icon: "🏆"
    },
    {
        name: "Level Pack 2",
        price: 7,
        icon: "🏆"
    },
    {
        name: "Level Pack 3",
        price: 9,
        icon: "🏆"
    },
    {
        name: "Level Pack 4",
        price: 11,
        icon: "🏆"
    },
    {
        name: "Level Pack 5",
        price: 13,
        icon: "🏆"
    }
];

// السلة
let cart = [];


// ==========================================
// CSS
// ==========================================

const style = document.createElement("style");

style.textContent = `
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f8ff;
    color: #111827;
}

button {
    font-family: Arial, sans-serif;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
}

.header {
    background: linear-gradient(135deg, #0066ff, #00aaff);
    color: white;
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 3px 15px rgba(0,0,0,0.15);
}

.header-content {
    max-width: 1100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-icon {
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}

.logo-text {
    font-size: 22px;
    font-weight: bold;
}

.cart-button {
    background: white;
    color: #0066ff;
    border: none;
    padding: 11px 16px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 15px;
}

.hero {
    max-width: 1100px;
    margin: 25px auto;
    padding: 35px 20px;
    text-align: center;
    background: white;
    border-radius: 22px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.07);
}

.hero h1 {
    color: #0066ff;
    margin: 0 0 10px;
    font-size: 34px;
}

.hero p {
    color: #555;
    font-size: 17px;
    margin: 8px 0;
}

.products {
    max-width: 1100px;
    margin: 25px auto;
    padding: 0 15px 30px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.product-card {
    background: white;
    border-radius: 18px;
    padding: 20px 15px;
    text-align: center;
    box-shadow: 0 5px 18px rgba(0,0,0,0.07);
    border: 1px solid #e6efff;
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-4px);
}

.product-icon {
    width: 75px;
    height: 75px;
    margin: auto;
    background: #eaf3ff;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 40px;
}

.product-card h3 {
    margin: 14px 0 8px;
    font-size: 18px;
}

.price {
    color: #0066ff;
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 15px;
}

.add-button {
    width: 100%;
    border: none;
    background: #0066ff;
    color: white;
    padding: 13px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: bold;
}

.add-button:active {
    transform: scale(0.97);
    background: #0052cc;
}

.footer {
    text-align: center;
    background: #061b3a;
    color: white;
    padding: 30px 15px;
    margin-top: 30px;
}

.social-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 15px;
}

.social-button {
    border: none;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: bold;
}

.whatsapp-button {
    background: #25D366;
    color: white;
}

.instagram-button {
    background: #e1306c;
    color: white;
}


/* ============================= */
/* النوافذ */
/* ============================= */

.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.65);
    z-index: 1000;
    padding: 15px;

    align-items: center;
    justify-content: center;
}

.modal.show {
    display: flex;
}

.modal-box {
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    background: white;
    border-radius: 20px;
    padding: 20px;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.modal-header h2 {
    margin: 0;
    color: #0066ff;
}

.close-button {
    border: none;
    background: #eee;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 20px;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 13px 0;
    border-bottom: 1px solid #eee;
}

.cart-item-info {
    flex: 1;
}

.cart-item-name {
    font-weight: bold;
}

.cart-item-price {
    color: #0066ff;
    margin-top: 5px;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 7px;
}

.quantity button {
    border: none;
    background: #eaf3ff;
    color: #0066ff;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
}

.delete-button {
    border: none;
    background: #ffecec;
    color: #e60000;
    padding: 8px;
    border-radius: 8px;
}

.total {
    font-size: 21px;
    font-weight: bold;
    color: #0066ff;
    text-align: right;
    margin: 20px 0;
}

.checkout-button {
    width: 100%;
    border: none;
    background: #0066ff;
    color: white;
    padding: 15px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
}

.empty {
    text-align: center;
    color: #777;
    padding: 30px 10px;
}


/* ============================= */
/* نموذج الطلب */
/* ============================= */

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 7px;
    font-weight: bold;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 13px;
    border: 1px solid #ccd9ed;
    border-radius: 10px;
    font-size: 16px;
    outline: none;
}

.form-group input:focus,
.form-group select:focus {
    border-color: #0066ff;
}

.info-box {
    background: #eef6ff;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 15px;
    color: #164477;
    font-size: 14px;
}

.send-button {
    width: 100%;
    border: none;
    background: #25D366;
    color: white;
    padding: 15px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
}


/* ============================= */
/* الهاتف */
/* ============================= */

@media (max-width: 800px) {

    .products {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        padding: 0 10px 25px;
    }

    .product-card {
        padding: 15px 10px;
    }

    .product-icon {
        width: 65px;
        height: 65px;
        font-size: 34px;
    }

    .product-card h3 {
        font-size: 16px;
    }

    .price {
        font-size: 19px;
    }

    .hero {
        margin: 15px 10px;
        padding: 25px 15px;
    }

    .hero h1 {
        font-size: 27px;
    }

    .logo-text {
        font-size: 19px;
    }

    .logo-icon {
        width: 43px;
        height: 43px;
    }
}

@media (max-width: 430px) {

    .products {
        grid-template-columns: repeat(2, 1fr);
    }

    .cart-button {
        padding: 9px 11px;
        font-size: 13px;
    }

    .header {
        padding: 10px;
    }

    .product-card {
        border-radius: 14px;
    }

    .add-button {
        padding: 11px 5px;
        font-size: 13px;
    }
}
`;

document.head.appendChild(style);


// ==========================================
// HTML
// ==========================================

document.body.innerHTML = `

<header class="header">

    <div class="header-content">

        <div class="logo-area">

            <div class="logo-icon">
                🔥
            </div>

            <div class="logo-text">
                Booyah Shop
            </div>

        </div>

        <button class="cart-button" id="openCartButton">
            🛒 السلة (<span id="cartCount">0</span>)
        </button>

    </div>

</header>


<section class="hero">

    <h1>🔥 Booyah Shop</h1>

    <p>
        متجر Free Fire الخاص بك
    </p>

    <p>
        اختر المنتج وأضفه إلى السلة ثم أرسل طلبك
    </p>

</section>


<div id="products" class="products"></div>


<footer class="footer">

    <h2>Booyah Shop</h2>

    <p>
        للطلب والاستفسار تواصل معنا
    </p>

    <div class="social-buttons">

        <button class="social-button whatsapp-button" id="whatsappButton">
            🟢 واتساب
        </button>

        <button class="social-button instagram-button" id="instagramButton">
            📸 إنستغرام
        </button>

    </div>

    <p style="margin-top:20px;">
        © 2026 Booyah Shop
    </p>

</footer>


<!-- السلة -->

<div class="modal" id="cartWindow">

    <div class="modal-box">

        <div class="modal-header">

            <h2>🛒 سلة المشتريات</h2>

            <button class="close-button" id="closeCart">
                ×
            </button>

        </div>

        <div id="cartItems"></div>

        <div class="total">
            المجموع: <span id="total">0</span> DH
        </div>

        <button class="checkout-button" id="checkoutButton">
            متابعة الطلب
        </button>

    </div>

</div>


<!-- صفحة معلومات الطلب -->

<div class="modal" id="checkoutWindow">

    <div class="modal-box">

        <div class="modal-header">

            <h2>📦 معلومات الطلب</h2>

            <button class="close-button" id="closeCheckout">
                ×
            </button>

        </div>

        <div class="info-box">

            بعد الضغط على إرسال الطلب سيتم فتح واتساب
            لإرسال تفاصيل طلبك.

            <br><br>

            لا ترسل كلمة سر حساب Free Fire
            أو رمز التحقق.

        </div>


        <div class="form-group">

            <label>
                الاسم
            </label>

            <input
                id="customerName"
                type="text"
                placeholder="اكتب اسمك"
            >

        </div>


        <div class="form-group">

            <label>
                رقم الهاتف
            </label>

            <input
                id="customerPhone"
                type="tel"
                placeholder="مثال: 06xxxxxxxx"
            >

        </div>


        <div class="form-group">

            <label>
                Free Fire ID
            </label>

            <input
                id="freeFireID"
                type="text"
                placeholder="اكتب ID الخاص بك"
            >

        </div>


        <div class="form-group">

            <label>
                طريقة التواصل
            </label>

            <select id="contactMethod">

                <option value="whatsapp">
                    🟢 واتساب
                </option>

                <option value="instagram">
                    📸 إنستغرام
                </option>

            </select>

        </div>


        <button class="send-button" id="sendOrderButton">
            🟢 إرسال الطلب
        </button>

    </div>

</div>

`;


// ==========================================
// عرض المنتجات
// ==========================================

function displayProducts() {

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-icon">
                ${product.icon}
            </div>

            <h3>
                ${product.name}
            </h3>

            <div class="price">
                ${product.price} DH
            </div>

            <button class="add-button">
                🛒 أضف إلى السلة
            </button>

        `;

        const button = card.querySelector(".add-button");

        // مهم للهاتف والكمبيوتر
        button.addEventListener("click", function () {

            addToCart(index);

        });

        container.appendChild(card);

    });

}


// ==========================================
// إضافة إلى السلة
// ==========================================

function addToCart(index) {

    const product = products[index];

    const existing = cart.find(
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

    // فتح السلة مباشرة بعد الإضافة
    openCart();

}


// ==========================================
// تحديث السلة
// ==========================================

function updateCart() {

    const count = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;

    renderCart();

}


// ==========================================
// عرض السلة
// ==========================================

function renderCart() {

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("total");

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty">
                🛒 السلة فارغة
            </div>
        `;

        totalElement.textContent = "0";

        return;

    }

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        const row =
            document.createElement("div");

        row.className = "cart-item";

        row.innerHTML = `

            <div class="cart-item-info">

                <div class="cart-item-name">
                    ${item.icon} ${item.name}
                </div>

                <div class="cart-item-price">
                    ${item.price} DH × ${item.quantity}
                </div>

            </div>


            <div class="quantity">

                <button class="minus">
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button class="plus">
                    +
                </button>

            </div>


            <button class="delete-button">
                🗑️
            </button>

        `;


        row.querySelector(".minus")
            .addEventListener("click", () => {

                changeQuantity(index, -1);

            });


        row.querySelector(".plus")
            .addEventListener("click", () => {

                changeQuantity(index, 1);

            });


        row.querySelector(".delete-button")
            .addEventListener("click", () => {

                removeItem(index);

            });


        container.appendChild(row);

    });

    totalElement.textContent = total;

}


// ==========================================
// تغيير الكمية
// ==========================================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

}


// ==========================================
// حذف منتج
// ==========================================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


// ==========================================
// فتح السلة
// ==========================================

function openCart() {

    renderCart();

    document
        .getElementById("cartWindow")
        .classList.add("show");

}


// ==========================================
// إغلاق السلة
// ==========================================

function closeCart() {

    document
        .getElementById("cartWindow")
        .classList.remove("show");

}


// ==========================================
// فتح نموذج الطلب
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("السلة فارغة!");

        return;

    }

    closeCart();

    document
        .getElementById("checkoutWindow")
        .classList.add("show");

}


// ==========================================
// إغلاق نموذج الطلب
// ==========================================

function closeCheckout() {

    document
        .getElementById("checkoutWindow")
        .classList.remove("show");

}


// ==========================================
// إرسال الطلب
// ==========================================

function sendOrder() {

    const name =
        document
            .getElementById("customerName")
            .value
            .trim();

    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();

    const freeFireID =
        document
            .getElementById("freeFireID")
            .value
            .trim();

    const contact =
        document
            .getElementById("contactMethod")
            .value;


    if (!name) {

        alert("اكتب اسمك أولاً");

        return;

    }


    if (!phone) {

        alert("اكتب رقم الهاتف");

        return;

    }


    if (!freeFireID) {

        alert("اكتب Free Fire ID");

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
        Date.now().toString().slice(-6);


    const message =

`🔥 طلب جديد - Booyah Shop

رقم الطلب: ${orderNumber}

👤 الاسم:
${name}

📱 الهاتف:
${phone}

🎮 Free Fire ID:
${freeFireID}

🛒 المنتجات:
${productsText}
💰 المجموع:
${total} DH

📞 طريقة التواصل:
${contact === "whatsapp" ? "واتساب" : "إنستغرام"}

⚠️ لا توجد كلمة سر أو رمز تحقق ضمن الطلب.`;


    if (contact === "whatsapp") {

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        // فتح واتساب
        window.location.href = whatsappURL;

    } else {

        // فتح إنستغرام
        window.location.href =
            "https://www.instagram.com/" +
            instagramUsername +
            "/";

    }

}


// ==========================================
// الأزرار
// ==========================================

document
    .getElementById("openCartButton")
    .addEventListener("click", openCart);


document
    .getElementById("closeCart")
    .addEventListener("click", closeCart);


document
    .getElementById("checkoutButton")
    .addEventListener("click", checkout);


document
    .getElementById("closeCheckout")
    .addEventListener("click", closeCheckout);


document
    .getElementById("sendOrderButton")
    .addEventListener("click", sendOrder);


// واتساب في أسفل الموقع
document
    .getElementById("whatsappButton")
    .addEventListener("click", function () {

        window.location.href =
            "https://wa.me/" +
            whatsappNumber;

    });


// إنستغرام في أسفل الموقع
document
    .getElementById("instagramButton")
    .addEventListener("click", function () {

        window.location.href =
            "https://www.instagram.com/" +
            instagramUsername +
            "/";

    });


// ==========================================
// تشغيل المتجر
// ==========================================

displayProducts();

updateCart();