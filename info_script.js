txt = document.getElementById('info1')
but1 = document.getElementById('but_inf')

but2 = document.getElementById('but2_inf')
txt2 = document.getElementById('info2')


 function click_forward(){ 
    txt.style.visibility = 'hidden'
    txt.style.opacity = '0'
    txt.style.display = 'none'

    but1.style.visibility = 'hidden'
    but1.style.opacity = '0'

    but2.style.visibility = 'visible'
    but2.style.opacity = '1'
    txt2.style.visibility = 'visible'
    txt2.style.opacity = '1'
    txt2.style.display = 'block'
}  
 function click_back(){
    txt.style.visibility = 'visible'
    txt.style.opacity = '1'
    txt.style.display = 'block'
    but1.style.visibility = 'visible'
    but1.style.opacity = '1'

    but2.style.visibility = 'hidden'
    but2.style.opacity = '0'
    txt2.style.visibility = 'hidden'
    txt2.style.opacity = '0'
    txt2.style.display = 'none'
  }