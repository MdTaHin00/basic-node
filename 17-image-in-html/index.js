import fs from 'fs';

// read image html file
fs.readFile("images/images.jpg", (err, data) => {
    if (err) {
        console.log("Error File reading the image");
        return;
    }

    //* conver the data to base64
    const base64 = data.toString('base64');


    //* data:[image type];[ecoding],[data]
    const imgSrc = `data:image/jpg;base64,${base64}`
    //  console.log(imgSrc);

    //*  create a html file content
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Node File Run</title>
</head>
<body>
    <img src="${imgSrc}" alt="">
</body>
</html>
`

    //* create a html file using ds module 
    fs.writeFile('index.html', htmlContent, (err) => {
        if (err) {
            console.log("Error writing Html file ");
        }
        console.log('HTML file embaded image saved Successfully done.');
    })



})


