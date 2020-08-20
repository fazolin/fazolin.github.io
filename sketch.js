let input = [];
let p = [];
let pv = [];
let pvv = [];
let button = [];
let div = [];


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

let tweets;

fetch("https://twitterbotonline.herokuapp.com/twittes", requestOptions)
    .then(response => response.json())
    .then(result => {
        gotData(result)
    })
    .catch(error => console.log('error', error));

function setup() {

}

function gotData(data) {

    console.log(data);
    for (var i = data.length - 1; i >= 0; i--) {

        var cleanText = data[i].twitte.replace("#protagonistasdemascaras", "");

        input[i] = createInput(cleanText);

        button[i] = createButton('Print');
        button[i].id(i);
        button[i].attribute('onClick', 'reply_click(this.id)');

        div[i] = createDiv('');
        div[i].id('div' + i);

        p[i] = createP(input[i].value());
        p[i].id('p' + i);
        p[i].parent(div[i])



    }
}

function draw() {

    for (var i = 0; i < p.length; i++) {
        p[i].html(input[i].value());
        // pv[i].html('"' + input[i].value() + '"');
        // pvv[i].html('"' + input[i].value() + '"');


    }
}

function printPNG(index) {
    console.log(index)
}

function reply_click(clicked_id) {
    var serialNumber = Date.now();
    domtoimage.toPng(document.getElementById('div' + clicked_id))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = serialNumber + '.png';
            link.href = dataUrl;
            link.click();
        });


}