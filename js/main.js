let q = false;
document.querySelector('.questions').onclick = () => {
    q = !q;
    if (q) {
        document.querySelector('.block-questions').style.left = '0';
        document.querySelector('.screen-tone').classList.remove('hidden');

    }
    else {
        document.querySelector('.block-questions').style.left = '-370px';
        document.querySelector('.screen-tone').classList.add('hidden');
    }
}
let b = false;
document.querySelector('.basket').onclick = () => {
    q = !q;
    if (q) {
        document.querySelector('.block-basket').style.right = '0';
        document.querySelector('.screen-tone').classList.remove('hidden');
    }
    else {
        document.querySelector('.block-basket').style.right = '-370px';
        document.querySelector('.screen-tone').classList.add('hidden');
    }
}
// -----------------------------------------------------------------------
document.querySelector('#green-left').onclick = () => {
    let blockTea = 'g';
    slideLeft(blockTea);
}
document.querySelector('#green-right').onclick = () => {
    let blockTea = 'g';
    slideRight(blockTea);
}
document.querySelector('#white-left').onclick = () => {
    let blockTea = 'w';
    slideLeft(blockTea);
}
document.querySelector('#white-right').onclick = () => {
    let blockTea = 'w';
    slideRight(blockTea);
}
document.querySelector('#red-left').onclick = () => {
    let blockTea = 'r';
    slideLeft(blockTea);
}
document.querySelector('#red-right').onclick = () => {
    let blockTea = 'r';
    slideRight(blockTea);
}
document.querySelector('#ad-left').onclick = () => {
    let blockTea = 'a';
    slideLeft(blockTea);
}
document.querySelector('#ad-right').onclick = () => {
    let blockTea = 'a';
    slideRight(blockTea);
}
document.querySelector('#black-left').onclick = () => {
    let blockTea = 'b';
    slideLeft(blockTea);
}
document.querySelector('#black-right').onclick = () => {
    let blockTea = 'b';
    slideRight(blockTea);
}
document.querySelector('#ac-left').onclick = () => {
    let blockTea = 'c';
    slideLeft(blockTea);
}
document.querySelector('#ac-right').onclick = () => {
    let blockTea = 'c';
    slideRight(blockTea);
}

function slideLeft(tea) {
    let count = $('div[id^=' + tea + '-]').length;
    let teaFirst = $('div[id^=' + tea + '-0]').html();
    $('div[id^=' + tea + '-]').html(function (ind, oldVal) {
        if (ind < count - 1) {
            return $('div[id^=' + tea + '-' + (ind + 1) + ']').html();
        } else {
            return teaFirst;
        }
    });
}

function slideRight(tea) {
    let count = $('div[id^=' + tea + '-]').length;
    let greenLast = $('div[id^=' + tea + '-' + (count - 1) + ']').html();
    for (var i = count - 1; i !== 0; i--) {
        $('div[id^=' + tea + '-' + i + ']').html($('div[id^=' + tea + '-' + (i - 1) + ']').html());
    }
    $('div[id^=' + tea + '-' + i + ']').html(greenLast);
}