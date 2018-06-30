var bucketList = [
    {name: '2018 Lamborghini Aventador',
    description: "Lamborghini's flagship V12 supercar.",
    price: 400000,
    urlName: "https://2-photos7.motorcar.com/new-2018-lamborghini-aventador-showcar-8868-16805712-4-1024.jpg"},
    {name: '1992 Porsche 911 964',
    description: "Highly collectible air-cooled 911. Steve-McQueen-level cool.",
    price: 70000,
    urlName: "http://classicsfarm.nl/wp-content/uploads/2016/04/964_fl-1100x674.jpg"},
    {name: '2018 Porsche 911 GT3',
    description: "4.0 liter flat-six screamer with a GT wing.",
    price: 180000,
    urlName: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmichaelharley%2Ffiles%2F2017%2F09%2FPorscheGT3_05.jpg"},
    {name: '2017 McLaren P1',
    description: "A hybrid car like a Prius...just a lot faster.",
    price: 1300000,
    urlName: "https://storage.googleapis.com/gtspirit/uploads/2017/07/gtspirit-2014-mclaren-p1-bahrain-int-circuit-0017.jpg"},
    {name: '2018 Ducati V4 Speciale',
    description: "MotoGP technology in a streetbike AND it's Italian? Yes please.",
    price: 40000,
    urlName: "http://www.ducatista.at/img/001/1636.jpg"},
    {name: '2015 Ducati Streetfighter 848',
    description: "The 'I need to run the bank real quick' vehicle",
    price: 19000,
    urlName: "https://www.totalmotorcycle.com/motorcycles/2015/2015-Ducati-Streetfighter-848d.jpg"}  
];


for (var i = 0; i<bucketList.length; i++){
    var itemBox = document.createElement('div');
    itemBox.className = 'itemBox';
    content.appendChild(itemBox);
}
var itemParent = document.getElementsByClassName('itemBox');
//original divs created to append to 'content' html div;

for (var i = 0; i<bucketList.length; i++){
    var images = document.createElement('img');
    images.className = 'picClass';
    itemParent[i].appendChild(images);
}
//adding image elements
var selectImage = document.getElementsByTagName('img');
// console.log(selectImage);

for (var i = 0; i<bucketList.length; i++){
    selectImage[i].src = bucketList[i].urlName;
}


for (var i = 0; i<bucketList.length; i++){
    var itemName = document.createElement('div');
    itemName.className = 'itemName';
    itemName.innerHTML = bucketList[i].name;
    itemName.addEventListener('click', showDescription);
    itemParent[i].appendChild(itemName);
}
//appending div to content and addEventListener

function showDescription(){
    var describeHide = this.querySelectorAll('.itemDescription')[0];
    if (describeHide.style.display === 'block'){
        describeHide.style.display = 'none';
    } else {
        describeHide.style.display = 'block';
    }
}
//showDescription function

var nameParent = document.getElementsByClassName('itemName');

for (var i = 0; i<bucketList.length; i++){
    var describe = document.createElement('div');
    describe.className = 'itemDescription';
    describe.innerHTML = bucketList[i].description;
    //description add to html
    var itemPrice = document.createElement('div');
    itemPrice.className = 'itemPrice';
    itemPrice.innerHTML = '$'+bucketList[i].price;
    //price add to html
    nameParent[i].appendChild(itemPrice);
    nameParent[i].appendChild(describe);
}
//putting array objects in HTML



startingPrice = 0;
for (var i = 0; i < bucketList.length; i++){
startingPrice += bucketList[i].price ;}
// console.log(startingPrice);
//sum of prices

var checkOutTotal = document.createElement('div');
checkOutTotal.id = 'checkOut';
// checkOutTotal.innerHTML = "test";
content.appendChild(checkOutTotal);
//checkOut div and id - appending subtotal title and sum to it

var checkOutTitle = document.createElement('div');
checkOutTitle.id = 'checkOutTitle';
checkOutTitle.innerHTML = 'Subtotal';
checkOut.appendChild(checkOutTitle);

var checkOutSum = document.createElement('div');
checkOutSum.id = 'checkOutSum';
checkOutSum.innerHTML = '$' + startingPrice;
checkOut.appendChild(checkOutSum);

    

