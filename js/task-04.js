const value = document.querySelector('#value')
console.log(value.textContent);
const btns = document.querySelectorAll("button")
console.log(btns);

let counterValue = 0;
btns.forEach(function (btn) {

    console.log(btn.dataset.action)

    btn.addEventListener('click', function (e) {
        if (btn.dataset.action === 'decrement') {
            counterValue -= 1
        }
        else if (btn.dataset.action === 'increment') {
            counterValue += 1
        }
        value.textContent = counterValue
        
        console.log(value.textContent)
    });
});