var fileUrl = '';

function file_img(){   
    const button1 = document.getElementById('main_box2_2')
    var box = document.getElementById('main_box2')
    let txt1 = document.getElementById('main_txt1')
    let txt2 = document.getElementById('final_text')
    let file_input = document.getElementById('real-input');
    const box1 = document.getElementById('main_box3')
    const buts = document.getElementById('buts')
    
    file_input.addEventListener('change', function() {
        let files = event.target.files
        if (files.length > 0) {
        let fileName = files[0].name;
        txt1.innerHTML = "Имя выбранного файла: " + fileName;
        }
        
        let file = event.target.files[0];
        fileUrl = URL.createObjectURL(file);
        
        const img = document.getElementById('main_img2')
        img.src = fileUrl
        img.style.borderRadius = '25px'

        box.style.background = 'white'

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);

        Tesseract.recognize(
        fileUrl,
        'rus+eng',
        { logger: m => console.log(m)}
        ).then(({ data: { text } }) => {
        txt2.innerHTML = text
        })
        
    });

    button1.style.visibility = 'hidden'
    button1.style.opacity = '0'
    button1.style.display = 'none'
    box.style.visibility = 'hidden'
    box.style.opacity = '0'
    box.style.display = 'none'
    
    box1.style.visibility = 'visible'
    box1.style.opacity = '1'
    box1.style.display = 'block'
    box1.style.left = '22%'
    box1.style.height = 'auto'
    box1.style.width = '53%'

    if (window.innerWidth <= '740'){
       box1.style.left = '0.1%'
       box1.style.width = '100%'
    }

    buts.style.visibility = 'visible'
    buts.style.opacity = '1'
    buts.style.display = 'flex'
    buts.style.justifyContent = 'space-around'
} 

function open_img(){
    const full_box = document.getElementById('main_main_box')
    const sec_box = document.getElementById('main_main_box2')
    full_box.style.visibility = 'hidden'
    full_box.style.opacity = '0'
    full_box.style.display = 'none'
    sec_box.style.visibility = 'visible'
    sec_box.style.opacity = '1'
    sec_box.style.display = 'flex'
    sec_box.style.justifyContent = 'center'
    sec_box.style.alignItems = 'center'
    sec_box.style.flexDirection = 'column'
    if (window.innerWidth <= '740'){
      sec_box.style.justifyContent = 'flex-start'
    }
}
function close_img(){
    const full_box = document.getElementById('main_main_box')
    const sec_box = document.getElementById('main_main_box2')
    full_box.style.visibility = 'visible'
    full_box.style.opacity = '1'
    full_box.style.display = 'flex'
    sec_box.style.visibility = 'hidden'
    sec_box.style.opacity = '0'
    sec_box.style.display = 'none'

}
async function copyToClipboard() {
  const txt3 = document.getElementById('final_text')
  try {
    await navigator.clipboard.writeText(txt3.innerHTML);
    console.log('Текст успешно скопирован в буфер обмена');
  } catch (err) {
    console.error('Ошибка при копировании текста: ', err);
  }
}
function edit_text() {
  const txt3 = document.getElementById('final_text')
  input_text = document.getElementById('input_box')
  but_edit = document.getElementById('but2')
  input = document.getElementById('input_text')
  but_edit.style.visibility = 'hidden'
  but_edit.style.opacity = '0'
  but_edit.style.display = 'none'
  input_text.style.visibility = 'visible'
  input_text.style.opacity = '1'
  input_text.style.display = 'flex'
  input.value = txt3.innerHTML
}
function ok_text(){
  const txt3 = document.getElementById('final_text')
  input_text = document.getElementById('input_box')
  but_edit = document.getElementById('but2')
  input = document.getElementById('input_text')
  input_text.style.visibility = 'hidden'
  input_text.style.opacity = '0'
  input_text.style.display = 'none'
  but_edit.style.visibility = 'visible'
  but_edit.style.opacity = '1'
  but_edit.style.display = 'block'
  txt3.innerHTML = input.value
}
function downloadTxtFile() {
  const txt3 = document.getElementById('final_text')
  const element = document.createElement('a');
  const file = new Blob([txt3.innerHTML], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = 'text.txt';
  document.body.appendChild(element); 
  element.click();
  document.body.removeChild(element); 
}