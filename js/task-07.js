const refs = {
    fontSizeId: document.querySelector('#font-size-control'),
    changeText: document.querySelector('#text')
}


refs.fontSizeId.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    refs.changeText.style.fontSize = event.currentTarget.value + "px";

}