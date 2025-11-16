function file(){   
    const button1 = document.getElementById('main_box2_2')
    const box = document.getElementById('main_box2')
    let txt1 = document.getElementById('main_txt1')
    let file_input = document.getElementById('real-input');
    file_input.addEventListener('change', function() {
        const image = document.getElementById('main_img')
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

        Tesseract.recognize(
        fileUrl,
        'rus',
        { logger: m => console.log(m)}
        ).then(({ data: { text } }) => {
        console.log(text)
        })
    });

    button1.style.visibility = 'hidden'
    button1.style.opacity = '0'
    button1.style.display = 'none'
    box.style.height = '45%'
    box.style.width = '50%'
    
    
} 
