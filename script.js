
    document.addEventListener("DOMContentLoaded", function () {

    const whatsappNumber = "212656310403";
    const instagramUsername = "boouh_hop";

    // المنتجات
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
            icon: "🎫"
        }
    ];

    // عنوان المنتجات
    const section = document.createElement("section");

    section.innerHTML = `
        <div style="
            text-align:center;
            padding:30px 15px;
        ">
            <h2>💎 BOOYAH SHOP</h2>
            <p>اختر المنتج الذي تريد شراءه</p>
        </div>
    `;

    // حاوية المنتجات
    const container = document.createElement("div");

    container.style.display = "grid";
    container.style.gridTemplateColumns =
        "repeat(auto-fit, minmax(220px, 1fr))";
    container.style.gap = "20px";
    container.style.padding = "20px";

    // إنشاء المنتجات
    products.forEach(function (product) {

        const card = document.createElement("div");

        card.style.background = "white";
        card.style.padding = "25px";
        card.style.borderRadius = "15px";
        card.style.textAlign = "center";
        card.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.15)";

        card.innerHTML = `
            <div style="font-size:55px;">
                ${product.icon}
            </div>

            <h3>${product.name}</h3>

            <h2>
                ${product.price} درهم
            </h2>

            <button
                onclick="orderProduct('${product.name}', ${product.price})"
                style="
                    background:#1877f2;
                    color:white;
                    border:none;
                    padding:12px 25px;
                    border-radius:10px;
                    cursor:pointer;
                    font-size:16px;
                "
            >
                🛒 اطلب الآن
            </button>
        `;

        container.appendChild(card);
    });

    section.appendChild(container);

    // طرق الدفع
    const payment = document.createElement("div");

    payment.innerHTML = `
        <div style="
            text-align:center;
            padding:35px 15px;
            margin-top:20px;
            background:#ffffff;
        ">

            <h2>💳 طرق الدفع</h2>

            <p>💵 الدفع نقدًا</p>
            <p>📱 الدفع عبر واتساب</p>

            <p>
                بعد اختيار المنتج تواصل معنا عبر واتساب
                لتأكيد الطلب.
            </p>

        </div>
    `;

    section.appendChild(payment);

    // واتساب وإنستغرام
    const social = document.createElement("div");

    social.innerHTML = `
        <div style="
            text-align:center;
            padding:40px 15px;
            background:#f2f7ff;
        ">

            <h2>📞 تواصل معنا</h2>

            <a
                href="https://wa.me/${whatsappNumber}"
                target="_blank"
                style="
                    display:inline-block;
                    background:#25D366;
                    color:white;
                    padding:13px 25px;
                    border-radius:10px;
                    text-decoration:none;
                    margin:8px;
                    font-size:17px;
                "
            >
                📱 واتساب
            </a>

            <a
                href="https://instagram.com/${instagramUsername}"
                target="_blank"
                style="
                    display:inline-block;
                    background:#E1306C;
                    color:white;
                    padding:13px 25px;
                    border-radius:10px;
                    text-decoration:none;
                    margin:8px;
                    font-size:17px;
                "
            >
                📸 إنستغرام
            </a>

        </div>
    `;

    section.appendChild(social);

    // إضافة كل شيء للصفحة
    document.body.appendChild(section);

});


// زر طلب المنتج
function orderProduct(name, price) {

    const whatsappNumber = "212656310403";

    const message =
        "السلام عليكم 👋\n\n" +
        "أريد طلب: " + name + "\n" +
        "السعر: " + price + " درهم\n\n" +
        "من متجر BOOYAH SHOP";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}