function file(){   
    let file_input = document.getElementById('real-input');
    file_input.addEventListener('change', function() {
        let files = event.target.files
        if (files.length > 0) {
        let fileName = files[0].name;
        console.log("Имя выбранного файла:", fileName);
        }
        
        //let file_path = file_input.value
        //console.log(file_path)
        let file = event.target.files[0];
        let fileUrl = URL.createObjectURL(file);

        Tesseract.recognize(
        fileUrl,
        'rus',
        { logger: m => console.log(m)}
        ).then(({ data: { text } }) => {
        console.log(text)
        })
    });
    
} 
