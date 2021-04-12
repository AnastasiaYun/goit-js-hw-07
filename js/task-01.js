


const allitems = document.querySelectorAll('li.item');
const items = allitems.length;
console.log(`В списке ${items} категории.`);

const categories = allitems.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);

    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
}
);