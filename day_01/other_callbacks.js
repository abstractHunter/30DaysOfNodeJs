// pdf_server
function pdfServerCallback(request, response) {
    // MIME type is application/pdf
    response.writeHead(200, { "Content-Type": "application/pdf" });

    fs.readFile('index.pdf', (error, data) => {
        if (error) {
            res.json({ 'status': 'error', msg: err });
        } else {
            res.write(data);
            res.end();
        }
    });
}


// mp3_server
function pdfServerCallback(request, response) {
    // MIME type is audio/mp3
    response.writeHead(200, { 'Content-Type': 'audio/mp3' });
    fs.exists('audio.mp3', function(exists) {
        if (exists) {
            var rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        } else {
            res.end("Its a 404");
        }
    });
}

// mp4_server
function pdfServerCallback(request, response) {
    // MIME type is video/mp3
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    fs.exists('video.mp4', function(exists) {
        if (exists) {
            var rstream = fs.createReadStream('video.mp4');
            rstream.pipe(res);
        } else {
            res.send("Its a 404");
            res.end();
        }
    });
}