function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json')
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Acurracy - ' +
            (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" +
            random_number_r + "," + random_number_g "," + random_number_r + ")";

        img = document.getElementById('allien1');
        img1 = document.getElementById('allien2');
        img2 = document.getElementById('allien3');
        img3 = document.getElementById('allien4');

        if (results[0].label == "Clap") {
            img.src = 'allien-01.gif';
            img1.src = 'allien-02.png';
            img2.src = 'allien-03.png';
            img3.src = 'allien-04.png';
        } else if (results[0].label == "Bell") {
            img.src = 'allien-01.png';
            img1.src = 'allien-02.gif';
            img2.src = 'allien-03.png';
            img3.src = 'allien-04.png';
        } else if (results[0].label == "Snapping") {
            img.src = 'allien-01.png';
            img1.src = 'allien-02.png';
            img2.src = 'allien-03.gif';
            img3.src = 'allien-04.png';
        } else {
            img.src = 'allien-01.png';
            img1.src = 'allien-02.png';
            img2.src = 'allien-03.png';
            img3.src = 'allien-04.gif';
        }
    }
}