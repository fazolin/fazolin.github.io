let input = [];
let p = [];
let pv = [];
let pvv = [];
let button = [];




var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://twitterbotonline.herokuapp.com/twittes", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));




// function setup() {
//     loadJSON('./tweets.json', gotData);


// }


// function gotData(data) {

//     // console.log(data.tweets.length);
//     for (var i = data.tweets.length - 1; i >= 0; i--) {

//         // display = data.tweets[i].tweet.replace(/\n/g, "<br />");

//         input[i] = createInput(data.tweets[i].tweet);
//         // input[i] = createElement('textarea', data.tweets[i].tweet);

//         button[i] = createButton('Print');
//         button[i].id(i);
//         button[i].attribute('onClick', 'reply_click(this.id)')

//         p[i] = createP(input[i].value());
//         pv[i] = createP(input[i].value());
//         pvv[i] = createP(input[i].value());

//         p[i].id('p' + i);



//         pv[i].id('pv' + i);
//         pv[i].style('padding', '0 20% 10% 20%');
//         pv[i].style('font-size', '.75em');

//         pvv[i].id('pvv' + i);
//         pvv[i].style('word-break', 'break-word');
//         pvv[i].style('hyphens', 'auto');
//         pvv[i].style('padding', '0 25% 10% 25%');
//         pvv[i].style('font-size', '.75em');
//     }
// }

// function draw() {

//     for (var i = 0; i < p.length; i++) {
//         p[i].html('"' + input[i].value() + '"');
//         pv[i].html('"' + input[i].value() + '"');
//         pvv[i].html('"' + input[i].value() + '"');


//     }
// }

// function printPNG(index) {
//     console.log(index)
// }

// function reply_click(clicked_id) {
//     var serialNumber = Date.now();


//     domtoimage.toPng(document.getElementById('p' + clicked_id))
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'horizontal_' + serialNumber + '.png';
//             link.href = dataUrl;
//             link.click();
//         });

//     domtoimage.toPng(document.getElementById('pv' + clicked_id))
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'vertical_' + serialNumber + '.png';
//             link.href = dataUrl;
//             link.click();
//         });

//     domtoimage.toPng(document.getElementById('pvv' + clicked_id))
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'super_' + serialNumber + '.png';
//             link.href = dataUrl;
//             link.click();
//         });

// }