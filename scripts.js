$(document).ready(function(){ 

let image1 = {
    photo: "Images/a-claudel-rheault-ZVbv1akA-l4-unsplash.jpg",
    title: "Beautiful mountains",
    description: "Photo made by Claudel Rheault, featuring Écosse valley and mountains",
};
let image2 = {
    photo: "Images/b-fons-heijnsbroek-Pwl2LxZoTAE-unsplash.jpg",
    title: "Frontage of a modern, minimal house",
    description: "Photo made by Fons Heijnsbroek",
};
let image3 = {
    photo: "Images/c-80124fb1137df039b5c7531ed9809c0.jpg",
    title: "Smooth lines and waves from concrete",
    description: "Neutelings riedijk architects, in collaboration with iris van herpen, has designed naturalis, the national research institute for biodiversity, in leiden. Photo from Pinterest. ",
};
let image4 = {
    photo: "Images/d-yura-timoshenko-7WFJmfk-XIA-unsplash.jpg",
    title: "Clean design, geometrical minimalism of Geidar Aliev Center",
    description: "Photo made by Yura Timosenko, taken in Baku",
};
let image5 = {
    photo: "Images/e-dylann-hendricks-f1zXv6-2wik-unsplash.jpg",
    title: "Blurry photo of a body of water",
    description: "Photo made by Dylann Hendricks",
};
 let image6 = {
    photo: "Images/f-cbf82240f11f22b253601766f7d14bfd.jpg",
    title: "Interesting texture made by bubbles of matcha",
    description: "Photo by Dawnn Rogers in pinterest",
}; 
let image7 = {
    photo: "Images/g-brad-mills-Zojh-zCCWNE-unsplash.jpg",
    title: "Square staircase",
    description: "Photo made by Brad Mills, photo made in Queensland University of Technology, Australia",
}; 
let image8 = {
    photo: "Images/h-2aad071072074b83e9795bb37a94146.jpg",
    title: "Coloured waves",
    description: "Blue, pink and yellow reflection can be seen between the lines. Cosmos / iridescent Archives - leManoosh",
};
let image9 = {
    photo: "Images/i-resource-database-yWBvaWV-ZmA-unsplash.jpg",
    title: "Interesting optical illusion caused by winding lines",
    description: "Photo made by Resource Database",
};

let imagesData = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
let dataSize = imagesData.length;

let currentNum = 0;
let loadCurrentNum = (Number)
$('.leftArrow').click(() => {
    if(currentNum > 0) {
        currentNum--;
    } else if (currentNum <= 0){
        currentNum = dataSize-1;
    }
    loadCurrentNum(currentNum);
    addBigImage(currentNum);
 });

 $('.rightArrow').click(() => {
    if(currentNum < dataSize-1) {
        currentNum++;
    } else if (currentNum >= dataSize-1) {
     currentNum = 0;
    }
    loadCurrentNum(currentNum);
    addBigImage(currentNum);
 });

 loadCurrentNum(currentNum); 
 addBigImage(currentNum);

 function addBigImage(curNum){
     $(".imageView").empty();
     $(".imageView").append
         (`
                 <img class = "mainPic" src="${imagesData[curNum].photo}">
                 <div id = "grayContainer">
                     <h1 id="photoTitle">${imagesData[curNum].title.trim()}</h1>
                     <p id="photoDescription">${imagesData[curNum].description.trim()}</p>
                 </div>
             `)
 }


 imagesData.forEach((img) => {
    $('#thumbnails').append('<div class="thumbsContainer"><img class="smallBox" src="' + img.photo + '"><div class="popUpText">' + img.title + '</div></div>');
});

$('#thumbnails').on('click', '.smallBox', function () {
    currentNum = $(this).index('.smallBox');
    addBigImage(currentNum);
});


})