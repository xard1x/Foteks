function file(){   
    const button1 = document.getElementById('main_box2_2')
    const box = document.getElementById('main_box2')
    let txt1 = document.getElementById('main_txt1')
    let txt2 = document.getElementById('final_text')
    let file_input = document.getElementById('real-input');
    const box1 = document.getElementById('main_box3')
    file_input.addEventListener('change', function() {
        const image = document.getElementById('main_img')
        const body = document.querySelectorAll('body')
        let files = event.target.files
        if (files.length > 0) {
        let fileName = files[0].name;
        txt1.innerHTML = "Имя выбранного файла: " + fileName;
        }
        
        let file = event.target.files[0];
        let fileUrl = URL.createObjectURL(file);
        image.src = fileUrl
        image.style.visibility = 'visible'
        image.style.opacity = '1'
        image.style.display = 'block'
        image.style.marginTop = '3%'
        
        console.log(fileUrl.style.width)

        Tesseract.recognize(
        fileUrl,
        'rus',
        { logger: m => console.log(m)}
        ).then(({ data: { text } }) => {
        console.log(text)
        txt2.innerHTML = text
        })
        
    });
    button1.style.visibility = 'hidden'
    button1.style.opacity = '0'
    button1.style.display = 'none'
    box.style.left = '22%'
    box.style.alignItems = 'flex-start'
    box1.style.visibility = 'visible'
    box1.style.opacity = '1'
    box1.style.display = 'block'
    
    
} 
