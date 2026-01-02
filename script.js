function main_forward() {
    window.location.href = "main.html";
};
let num = 1
const body1 = document.querySelector('body')
const logo_text1 = document.getElementById('logo_text')
const text_1 = document.getElementById('theme_lb')
const text_2 = document.getElementById('news_lb')
const text_3 = document.getElementById('info_lb')
const but1 = document.getElementById('but1')
const box1 = document.getElementById('info_box1')
const box2 = document.getElementById('info_box2')
const box3 = document.getElementById('info_box3')

function theme(){
    num = num * -1
    console.log(num)
    if(num === -1){
        body1.style.backgroundColor = '#1f1f1fff'
        logo_text1.style.color = '#1d80e3'
        text_1.style.color = '#d6d6d6ff'
        text_2.style.color = '#d6d6d6ff'
        text_3.style.color = '#d6d6d6ff'
        but1.style.backgroundColor = '#11569bff'
        box1.style.backgroundColor = '#0d4286ff'
        box2.style.backgroundColor = '#0e57a0ff'
        box3.style.backgroundColor = '#2a78c5ff'

    }
    if(num === 1){
        body1.style.backgroundColor = 'white'
        logo_text1.style.color = '#043464'
        text_1.style.color = '#000000ff'
        text_2.style.color = '#000000ff'
        text_3.style.color = '#000000ff'
        but1.style.backgroundColor = '#1d80e3'
        box1.style.backgroundColor = '#1662c6'
        box2.style.backgroundColor = '#1d80e3'
        box3.style.backgroundColor = '#4ca3fa'
    }


}