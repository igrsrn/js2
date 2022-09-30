const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "https://socialise-uk.online/theguide-uk/_Media/shopping-2_300.jpeg"},
    {id: 2, title: 'Mouse', price: 20, img: "https://socialise-uk.online/theguide-uk/_Media/shopping-2_300.jpeg"},
    {id: 3, title: 'Keyboard', price: 200, img: "https://socialise-uk.online/theguide-uk/_Media/shopping-2_300.jpeg"},
    {id: 4, title: 'Gamepad', price: 50, img: "https://socialise-uk.online/theguide-uk/_Media/shopping-2_300.jpeg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (prod) => {
    return `<div class="product-item">
                <img src=${prod.img}>
                <h3>${prod.title}</h3>
                <p>${prod.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);