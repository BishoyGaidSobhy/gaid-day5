let imgs = [
    './1.gif',
    './2.gif',
    './3.gif',
    './4.gif',
    './5.gif',
    './6.gif'];

let oo7 = document.getElementById('oo7');
let allDivs = document.getElementsByTagName('div');

function oo8() {
    for (let i = 0; i < imgs.length; i++) {
        oo7.innerHTML += '<div><img src ="' + imgs[i] + '"></div>';
    }
}
oo8();
oo8();

var flg = true;
var arr = [];


for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', function () {
        if (flg) {
            this.firstChild.style.opacity = '1';
            if (arr.length == 0) {
                arr[0] = this;
            } else if (arr.length == 1) {
                arr[1] = this;
            }
            if (arr.length == 2) {
                flg = false;
                setTimeout(checkimg, 200);

            }
        } else {
            return;
        }
    })


    function checkimg() {
        if (arr[0].firstChild.getAttribute('src') == arr[i].firstChild.getAttribute('src')) {
            alert('Okay')
        } else {
            arr[0].firstChild.style.opacity = 0;
            arr[1].firstChild.style.opacity = 0;

        }

        arr = [];
        flg = true;
    }

}