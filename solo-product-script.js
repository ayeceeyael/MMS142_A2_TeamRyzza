/* Size Chart */
const openSizeChart = document.getElementById('open-size-chart');
const sizeChartModal = document.getElementById('size-chart-modal');
const closeSizeChart = document.getElementById('close-size-chart');


openSizeChart.addEventListener('click', function(event) {
    event.preventDefault();
    sizeChartModal.showModal();
});


closeSizeChart.addEventListener('click', function() {
    sizeChartModal.close();
});


sizeChartModal.addEventListener('click', function(event) {
    if (event.target === sizeChartModal) {
        sizeChartModal.close();
    }
});


/* Product thumbnails */
const productImage = document.getElementById('product-img');
const productThumbnails = Array.from(document.querySelectorAll('.thumbnail-button'));


const productImagesByColor = {
    Red: {
        main: {
            src: 'dont-be-late-red-back.png',
            alt: "Don't Be Late Tee in Red - back view"
        },
        thumbnails: [
            { src: 'solo-dont-be-late-red.png', alt: "Don't Be Late Tee in Red" },
            { src: 'dont-be-late-red-closeup.png', alt: "Don't Be Late Tee in Red - closeup" },
            { src: 'dont-be-late-red-back-closeup.png', alt: "Don't Be Late Tee in Red - back closeup" }
        ]
    },
    White: {
        main: {
            src: 'dont-be-late-white-back.png',
            alt: "Don't Be Late Tee in White - back view"
        },
        thumbnails: [
            { src: 'solo-dont-be-late-white.png', alt: "Don't Be Late Tee in White" },
            { src: 'dont-be-late-white-closeup.png', alt: "Don't Be Late Tee in White - closeup" },
            { src: 'dont-be-late-white-back-closeup.png', alt: "Don't Be Late Tee in White - back closeup" }
        ]
    },
    Black: {
        main: {
            src: 'dont-be-late-black-back.png',
            alt: "Don't Be Late Tee in Black - back view"
        },
        thumbnails: [
            { src: 'solo-dont-be-late-black.png', alt: "Don't Be Late Tee in Black" },
            { src: 'dont-be-late-black-closeup.png', alt: "Don't Be Late Tee in Black - closeup" },
            { src: 'dont-be-late-black-back-closeup.png', alt: "Don't Be Late Tee in Black - back closeup" }
        ]
    },
    Black2: {
        main: {
            src: 'everyday-comfort-black-back.png',
            alt: "Everyday Comfort Tee in Black - back view"
        },
        thumbnails: [
            { src: 'everyday-comfort-black.png', alt: "Everyday Comfort Tee in Black" },
            { src: 'everyday-comfort-black-closeup.png', alt: "Everyday Comfort Tee in Black - closeup" },
            { src: 'everyday-comfort-black-back-closeup.png', alt: "Everyday Comfort Tee in Black - back closeup" }
        ]
    },
    Green: {
        main: {
            src: 'everyday-comfort-green-back.png',
            alt: "Everyday Comfort Tee in Green - back view"
        },
        thumbnails: [
            { src: 'everyday-comfort-green.png', alt: "Everyday Comfort Tee in Green" },
            { src: 'everyday-comfort-green-closeup.png', alt: "Everyday Comfort Tee in Green - closeup" },
            { src: 'everyday-comfort-green-back-closeup.png', alt: "Everyday Comfort Tee in Green - back closeup" }
        ]
    },
    Blue: {
        main: {
            src: 'everyday-comfort-blue-back.png',
            alt: "Everyday Comfort Tee in Blue - back view"
        },
        thumbnails: [
            { src: 'everyday-comfort-blue.png', alt: "Everyday Comfort Tee in Blue" },
            { src: 'everyday-comfort-blue-closeup.png', alt: "Everyday Comfort Tee in Blue - closeup" },
            { src: 'everyday-comfort-blue-back-closeup.png', alt: "Everyday Comfort Tee in Blue - back closeup" }
        ]
    },
    White2: {
        main: {
            src: 'do-good-work-white-back.png',
            alt: "Do Good Work Tee in White - back view"
        },
        thumbnails: [
            { src: 'do-good-work-white.png', alt: "Do Good Work Tee in White" },
            { src: 'do-good-work-white-closeup.png', alt: "Do Good Work Tee in White - closeup" },
            { src: 'do-good-work-white-back-closeup.png', alt: "Do Good Work Tee in White - back closeup" }
        ]
    },
    Blue2: {
        main: {
            src: 'do-good-work-blue-back.png',
            alt: "Do Good Work Tee in Blue - back view"
        },
        thumbnails: [
            { src: 'do-good-work-blue.png', alt: "Do Good Work Tee in Blue" },
            { src: 'do-good-work-blue-closeup.png', alt: "Do Good Work Tee in Blue - closeup" },
            { src: 'do-good-work-blue-back-closeup.png', alt: "Do Good Work Tee in Blue - back closeup" }
        ]
    },
    Black3: {
        main: {
            src: 'do-good-work-black-back.png',
            alt: "Do Good Work Tee in Black - back view"
        },
        thumbnails: [
            { src: 'do-good-work-black.png', alt: "Do Good Work Tee in Black" },
            { src: 'do-good-work-black-closeup.png', alt: "Do Good Work Tee in Black - closeup" },
            { src: 'do-good-work-black-back-closeup.png', alt: "Do Good Work Tee in Black - back closeup" }
        ]
    }
};


productThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const image = thumbnail.querySelector('img');
        productImage.src = image.src;
        productImage.alt = image.alt;
        productThumbnails.forEach(button => button.setAttribute('aria-pressed', String(button === thumbnail)));
    });
});


document.querySelectorAll('input[name="color"]').forEach(colorInput => {
    colorInput.addEventListener('change', () => {
        const imageSet = productImagesByColor[colorInput.value];
        if (!imageSet) {
            console.error(`No product images configured for color "${colorInput.value}".`);
            return;
        }


        productImage.src = imageSet.main.src;
        productImage.alt = imageSet.main.alt;


        productThumbnails.forEach((thumbnail, index) => {
            const image = thumbnail.querySelector('img');
            image.src = imageSet.thumbnails[index].src;
            image.alt = imageSet.thumbnails[index].alt;
            thumbnail.setAttribute('aria-label', `Show ${image.alt}`);
            thumbnail.setAttribute('aria-pressed', 'false');
        });


        document.getElementById('order-feedback').textContent = '';
    });
});


/* Order Now */
const minusBtn = document.getElementById('qty-minus');
const plusBtn = document.getElementById('qty-plus');
const numDisplay = document.getElementById('qty-num');
const orderFeedback = document.getElementById('order-feedback');
let quantity = 1;


plusBtn.addEventListener('click', function() {
    quantity++;
    numDisplay.textContent = quantity;
});


minusBtn.addEventListener('click', function() {
    if (quantity > 1) {
        quantity--;
        numDisplay.textContent = quantity;
    }
});


document.querySelectorAll('input[name="size"]').forEach(sizeInput => {
    sizeInput.addEventListener('change', function() {
        orderFeedback.textContent = '';
    });
});


const orderBtn = document.getElementById('order-now-btn');


orderBtn.addEventListener('click', function() {
    const storeEmail = "orders@examplewebsite142.com";


    const productName = document.querySelector('.product-col h1').textContent.trim();
    const unitPrice = 499;
    const totalPrice = unitPrice * quantity;


    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedSize = document.querySelector('input[name="size"]:checked');


    if (!selectedColor || !selectedSize) {
        orderFeedback.textContent = 'Please choose a color and size before ordering.';
        (selectedColor ? document.querySelector('input[name="size"]') : document.querySelector('input[name="color"]')).focus();
        return;
    }


    orderFeedback.textContent = 'Opening your email app to complete the order.';
    const colorValue = selectedColor.value;
    const sizeValue = selectedSize.value;


    const subject = `New Order: ${productName} (${sizeValue} - ${colorValue})`;
    const body =
`Hello! I would like to place an order for the following item:


Product: ${productName}
Color: ${colorValue}
Size: ${sizeValue}
Quantity: ${quantity}
Price: ₱${unitPrice}
Total: ₱${totalPrice}


--- Customer Details ---
Full Name:
Delivery Address:
Contact Number:


Thank you!`;


    const mailtoLink = `mailto:${storeEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});


/* Product accordions */
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const shouldExpand = !isExpanded;


        button.classList.toggle('accordion__button--active', shouldExpand);
        button.setAttribute('aria-expanded', String(shouldExpand));
        accordionContent.setAttribute('aria-hidden', String(!shouldExpand));
        accordionContent.style.maxHeight = shouldExpand
            ? `${accordionContent.scrollHeight}px`
            : '0px';
    });
});


/* Reviews */
const writeReviewButton = document.getElementById('write-review-button');
const reviewSortSelect = document.getElementById('review-sort-select');
const reviewList = document.querySelector('.review-list');


writeReviewButton.addEventListener('click', () => {
    document.getElementById('review-feedback').textContent = 'Review submission is not available yet.';
});


reviewSortSelect.addEventListener('change', () => {
    const reviews = Array.from(reviewList.querySelectorAll('.review-card'));
    const sortDirection = reviewSortSelect.value === 'lowest' ? 1 : -1;


    reviews
        .sort((first, second) =>
            sortDirection * (Number(first.dataset.rating) - Number(second.dataset.rating))
        )
        .forEach(review => reviewList.appendChild(review));
});






