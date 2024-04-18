document.addEventListener("DOMContentLoaded", function () {
    let productRow = document.querySelector(".main-container .product-section .product-row");
    fetch("https://e-commerce-api-oapm.onrender.com/products/")
        .then(response => response.json())
        .then(products => {
            console.log(products);
            products.map(product => {
                let productCard = document.createElement("div");
                productCard.className="product-card";
                let saleTag = document.createElement("div");
                saleTag.className="sale-tag";
                let productInfo = document.createElement("div");
                productInfo.className="product-info";
                let productPrice = document.createElement("div");
                productPrice.className="product-price";
                let terms = document.createElement("div");
                terms.className="terms";
                let productImage = document.createElement("div");
                productImage.className="product-image";
                let productTitle = document.createElement("h3");
                productTitle.className="product-title";
                let newPrice = document.createElement("span");
                newPrice.className="new-price";
                let oldPrice = document.createElement("span");
                oldPrice.className="old-price";
                let productDescription = document.createElement("p");
                productDescription.className="product-description";
                let productOffer = document.createElement("a");
                productOffer.className="product-offer";
                saleTag.innerHTML = "Big Sale";
                productTitle.innerHTML = product.name;
                newPrice.innerHTML = product.price.$numberDecimal;
                oldPrice.innerHTML = product.price.$numberDecimal*1 + ((30 * product.price.$numberDecimal) / 100);
                productDescription.innerHTML = product.description;
                productOffer.innerHTML = "Pay Only $12 Per Month";
                productOffer.href="#";
                terms.innerHTML = "*T&C Apply";
                product.images.map((image) => {
                    let img = document.createElement("img");
                    img.src = image;
                    productImage.appendChild(img);
                })
                productPrice.appendChild(newPrice);
                productPrice.appendChild(oldPrice);
                productInfo.appendChild(productTitle);
                productInfo.appendChild(productPrice);
                productInfo.appendChild(productImage);
                productInfo.appendChild(productDescription);
                productInfo.appendChild(productOffer);
                productInfo.appendChild(terms);
                productCard.appendChild(saleTag);
                productCard.appendChild(productInfo);
                productRow.appendChild(productCard);
            });
        })
})

let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Calculate the new slide index
    currentSlide += step;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;

    // Show the new slide
    slides[currentSlide].style.display = 'block';
}

// Initialize the slider by showing the first slide
moveSlide(0);