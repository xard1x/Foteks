function main_forward() {
    window.location.href = "main.html";
};
let num = 1
const body1 = document.querySelector('body')
const logo_text1 = document.getElementById('logo_text')
const text = document.getElementsByClassName('text1')
function theme(){
    num = num * -1
    console.log(num)
    if(num === -1){
        body1.style.backgroundColor = '#333332'
        logo_text1.style.color = '#1d80e3'
        text.style.color = '#ffffffff'
    }
    if(num === 1){
        body1.style.backgroundColor = 'white'
        logo_text1.style.color = '#043464'
        text.style.color = '#000000ff'
    }


}