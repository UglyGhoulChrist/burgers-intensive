import burgers from "./burgers.js"

window.addEventListener('load', function () {
    const productsList = document.getElementById('products-list')
    const burgersHtml = burgers.map(burger => getHtmlBurger(burger)).join('')
    productsList.insertAdjacentHTML("beforeend", burgersHtml)
})

function getHtmlBurger(burger) {
    return (`
<li class="product-item">
    <img src="./images/burgers/${burger.image}" alt="Бургер №${burger.id}" class="product-item-image">
    <h3 class="product-item-title">${burger.title}</h3>
    <p class="product-item-text">${burger.text}</p>
    <div class="produt-item-extra">
        <div class="product-item-info">
            <div class="product-item-price">${burger.price} $</div>
            <div class="product-item-weight">${burger.weight} гр</div>
        </div>
        <button class="button product-button">
            <span>Заказать</span>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16 16.5C16.5304 16.5 17.0391 16.7107 17.4142 17.0858C17.7893 17.4609 18 17.9696 18 18.5C18 19.0304 17.7893 19.5391 17.4142 19.9142C17.0391 20.2893 16.5304 20.5 16 20.5C15.4696 20.5 14.9609 20.2893 14.5858 19.9142C14.2107 19.5391 14 19.0304 14 18.5C14 17.39 14.89 16.5 16 16.5ZM0 0.5H3.27L4.21 2.5H19C19.2652 2.5 19.5196 2.60536 19.7071 2.79289C19.8946 2.98043 20 3.23478 20 3.5C20 3.67 19.95 3.84 19.88 4L16.3 10.47C15.96 11.08 15.3 11.5 14.55 11.5H7.1L6.2 13.13L6.17 13.25C6.17 13.3163 6.19634 13.3799 6.24322 13.4268C6.29011 13.4737 6.3537 13.5 6.42 13.5H18V15.5H6C5.46957 15.5 4.96086 15.2893 4.58579 14.9142C4.21071 14.5391 4 14.0304 4 13.5C4 13.15 4.09 12.82 4.24 12.54L5.6 10.09L2 2.5H0V0.5ZM6 16.5C6.53043 16.5 7.03914 16.7107 7.41421 17.0858C7.78929 17.4609 8 17.9696 8 18.5C8 19.0304 7.78929 19.5391 7.41421 19.9142C7.03914 20.2893 6.53043 20.5 6 20.5C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5C4 17.39 4.89 16.5 6 16.5ZM15 9.5L17.78 4.5H5.14L7.5 9.5H15Z"
                    fill="#191411" />
            </svg>
        </button>
    </div>
</li>
`)
}