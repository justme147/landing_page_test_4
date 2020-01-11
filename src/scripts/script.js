let serviceElement = document.querySelectorAll('.services-section');
let serviceElementImg = document.querySelectorAll('.services-section__img');

serviceElement.forEach(function (item, i) {
   item.setAttribute('onmouseover', 'hover(this)'); 
   item.setAttribute('onmouseout', 'unhover(this)'); 
});

function hover(elem) {
    switch(elem) {
        case serviceElement[0]:
            serviceElementImg[0].setAttribute('src', 'img/icon_pencil_hover.png');
            break;
        case serviceElement[1]:
            serviceElementImg[1].setAttribute('src', 'img/icon_develop_hover.png');
            break;
        case serviceElement[2]:
            serviceElementImg[2].setAttribute('src', 'img/icon_gear_hover.png');
            break;
        case serviceElement[3]:
            serviceElementImg[3].setAttribute('src', 'img/icon_market_hover.png');
            break;
        default:
            console.log(0);
    }
}

function unhover(elem) {
    switch(elem) {
        case serviceElement[0]:
            serviceElementImg[0].setAttribute('src', 'img/icon_pencil.png');
            break;
        case serviceElement[1]:
            serviceElementImg[1].setAttribute('src', 'img/icon_develop.png');
            break;
        case serviceElement[2]:
            serviceElementImg[2].setAttribute('src', 'img/icon_gear.png');
            break;
        case serviceElement[3]:
            serviceElementImg[3].setAttribute('src', 'img/icon_market.png');
            break;
        default:
            console.log(0);
    }
}