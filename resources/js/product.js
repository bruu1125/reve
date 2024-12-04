
// 일반상품 템플릿
const products = [
    { id: 0, brand: 'DIOR', title: '까나쥬 가디건', price: '4,500,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_dior.png' },
    { id: 1, brand: 'BALENCIAGA', title: 'A-라인 크루넥 드레스', price: '2,970,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_balenciaga.png' },
    { id: 2, brand: 'GUCCI', title: 'GG 인타르시아 울 가디건', price: '2,460,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_gucci.png' },
    { id: 3, brand: 'PRADA', title: '카멜 헤어 블루종 재킷', price: '5,550,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_prada.png' },
    { id: 4, brand: 'LOUIS VUITTON', title: 'LV 이니셜 블라종 40mm 리버서블 벨트', price: '1,030,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_lv.png' },
    { id: 5, brand: 'CHANEL', title: '핸들장식 미니 플랩백', price: '8,760,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_chanel.png' },
    { id: 6, brand: 'HERMES', title: 'GETA 백', price: '8,900,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_hermes.png' },
    { id: 7, brand: 'MONCLER', title: 'Verone 리버서블 쇼트 다운 재킷', price: '3,830,000', url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_moncler.png' },
];

function layout(productBox) {
    productBox.forEach(product => {
        let productTemplate = `
        <li>
            <a href="https://bruu1125.github.io/reve/product_detail.html">
                <div class="product-thumbnail">
                    <img src="${product.url}" alt="${product.title}">
                </div>
                <div class="product-info display-flex">
                    <span class="item-brand">${product.brand}</span>
                    <span class="item-title">${product.title}</span>
                    <span class="item-price">${product.price}</span>
                </div>
            </a>
        </li>
        `;
        $('#productList').append(productTemplate);
    });
}

layout(products);


// 할인상품 템플릿
const discountProducts = [
    {
        id: 0,
        brand: 'BOTTEGA VENETA',
        title: '라지 안디아모',
        originalPrice: 11360000, 
        discountRate: 0.2, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_bottega.png'
    },
    {
        id: 1,
        brand: 'VIVIENNE WESTWOOD',
        title: '컷 오프 스커트',
        originalPrice: 1580000, 
        discountRate: 0.3, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_vivienne.png'
    },
    {
        id: 2,
        brand: 'MIU MIU',
        title: '아방뛰르 나파 가죽 탑 핸들 백',
        originalPrice: 5350000,
        discountRate: 0.18, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_miumiu.png'
    },
    {
        id: 3,
        brand: 'FENDI',
        title: '브라운 펜디 타탄 드레스',
        originalPrice: 3980000,
        discountRate: 0.25, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_fendi.png'
    },
    {
        id: 4,
        brand: 'CELINE', 
        title: '틴 나노백', 
        originalPrice: 4400000, 
        discountRate: 0.15, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_celine02.png'
    },
    {
        id: 5,
        brand: 'PRADA', 
        title: '로고 크루넥 스웨터', 
        originalPrice: 2860000, 
        discountRate: 0.27, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_prada.png'
    },
    {
        id: 6,
        brand: 'LOUIS VUITTON', 
        title: '알마 BB 모노그램', 
        originalPrice: 2500000, 
        discountRate: 0.12, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_lv.png'
    },
    {
        id: 7,
        
        brand: 'CELINE', 
        title: '트리옹프 비니', 
        originalPrice: 890000, 
        discountRate: 0.3, 
        url: 'https://bruu1125.github.io/reve/resources/images/product/dummy_discount_celine.png'
    },
];

function timedeallayout(discountProductBox) {
    discountProductBox.forEach(discountProduct => {
        const discountPrice = Math.round(discountProduct.originalPrice * (1 - discountProduct.discountRate));
        const discountPercentage = Math.round(discountProduct.discountRate * 100); // 정수로 표시
        
        let discountProductTemplate = `
        <li class="swiper-slide">
            <a href="https://bruu1125.github.io/reve/product_detail.html"">
                <div class="product-thumbnail">
                    <img src="${discountProduct.url}" alt="${discountProduct.title}">
                </div>
                <div class="product-info display-flex">
                    <span class="item-brand">${discountProduct.brand}</span>
                    <span class="item-title">${discountProduct.title}</span>
                    <div class="discount-price__wrap display-flex">
                        <div class="display-flex">
                            <span class="item-price discount-price">${discountPrice.toLocaleString()}</span>
                            <span class="item-price original-price">${discountProduct.originalPrice.toLocaleString()}</span>
                        </div>
                        <span class="item-discount">${discountPercentage}%</span>
                    </div>
                </div>
            </a>
        </li>
        `;
        $('#discountProductList').append(discountProductTemplate);
    });
}

timedeallayout(discountProducts);
