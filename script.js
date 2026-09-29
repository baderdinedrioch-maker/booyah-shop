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
        name: "باقة المستوى 1",
        price: 5,
        icon: "🏆"
    },
    {
        name: "باقة المستوى 2",
        price: 7,
        icon: "🏆"
    },
    {
        name: "باقة المستوى 3",
        price: 9,
        icon: "🏆"
    },
    {
        name: "باقة المستوى 4",
        price: 11,
        icon: "🏆"
    },
    {
        name: "باقة المستوى 5",
        price: 13,
        icon: "🏆"
    }
];
 const offers = [
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

function showOffers() {

    // إنشاء قسم العروض
    const section = document.createElement("section");
    section.id = "offers";

    section.innerHTML = `
        <h2>🛒 عروض Booyah Shop</h2>
        <div class="offers-container"></div>
    `;

    document.body.appendChild(section);

    const container = section.querySelector(".offers-container");

    offers.forEach(function (offer) {

        const card = document.createElement("div");
        card.className = "offer-card";

        card.innerHTML = `
            <div class="offer-icon">${offer.icon}</div>
            <h3>${offer.name}</h3>
            <p class="offer-price">${offer.price} درهم</p>
            <button>اطلب الآن</button>
        `;

        card.querySelector("button").addEventListener("click", function () {
            orderOffer(offer.name, offer.price);
        });

        container.appendChild(card);
    });
}

function orderOffer(name, price) {
    alert(
        "تم اختيار العرض ✅\n\n" +
        name +
        "\nالسعر: " +
        price +
        " درهم"
    );
}

document.addEventListener("DOMContentLoaded", function () {
    showOffers();
});
let cart=JSON.parse(localStorage.getItem("booyahCart")||"[]");
function renderProducts(){document.getElementById("productGrid").innerHTML=products.map(p=>`
<article class="product"><div class="product-img">${p.icon}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${p.price} DH</div><button class="primary" onclick="addToCart(${p.id})">أضف إلى السلة</button></article>`).join("")}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);save();openCart()}
function removeFromCart(i){cart.splice(i,1);save();renderCart()}
function save(){localStorage.setItem("booyahCart",JSON.stringify(cart));renderCart()}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.icon} ${p.name}<br><small>${p.price} DH</small></span><button onclick="removeFromCart(${i})">حذف</button></div>`).join(""):`<p style="padding:30px 0;color:#718096">السلة فارغة حاليًا.</p>`;document.getElementById("cartTotal").textContent=cart.reduce((a,p)=>a+p.price,0)+" DH"}
function toggleCart(){document.getElementById("cart").classList.toggle("show");document.getElementById("overlay").classList.toggle("show")}
function openCart(){document.getElementById("cart").classList.add("show");document.getElementById("overlay").classList.add("show")}
function checkout(){if(!cart.length)return alert("أضف منتجًا إلى السلة أولًا.");alert("هذه نسخة تجريبية. قبل البيع الحقيقي يجب إضافة طريقة دفع وتواصل آمنة.");}
function sendMessage(){const n=document.getElementById("name").value.trim(),m=document.getElementById("message").value.trim();if(!n||!m)return alert("اكتب الاسم والرسالة أولًا.");alert("تم تجهيز رسالتك. أضف وسيلة التواصل الخاصة بك قبل النشر.");}
renderProducts();renderCart();
