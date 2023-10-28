
// var imageSources = [
//     'https://blog.sqlauthority.com/i/b/ironman.png',
//     'https://pngimg.com/uploads/spider_man/spider_man_PNG25.png',
//     'https://vignette.wikia.nocookie.net/vsbattles/images/9/9a/QDNpnla.png/revision/latest?cb=20160511135042',
//     'https://www.freeiconspng.com/uploads/hawkeye-png-29.png',
//     'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/3/3d/Hulk_002.png/revision/latest?cb=20131207063759',
//     'http://clipart-library.com/images_k/black-panther-transparent-background/black-panther-transparent-background-25.png',
//     'http://www.pngall.com/wp-content/uploads/2016/04/Thor-PNG-Picture.png',
//     'https://i.pinimg.com/originals/b8/56/6f/b8566fea6d81c66d47235e5e1acab080.png',
//     'https://i2.wp.com/podcastunlimited.com/wordpress/wp-content/uploads/2015/06/4254955-groot2.png',
//     'http://www.pngmart.com/files/2/Loki-PNG-Image.png'
// ];

// function getRandomImage() {
//     var randomIndex = Math.floor(Math.random() * imageSources.length);
//     return imageSources[randomIndex];
// }

// function changeImage() {
//     var image = document.getElementById('myImage');
//     var randomImageSource = getRandomImage();
//     image.src = randomImageSource;
// }


var imageSources = [
    'https://blog.sqlauthority.com/i/b/ironman.png',
    'https://pngimg.com/uploads/spider_man/spider_man_PNG25.png',
    'https://vignette.wikia.nocookie.net/vsbattles/images/9/9a/QDNpnla.png/revision/latest?cb=20160511135042',
    'https://www.freeiconspng.com/uploads/hawkeye-png-29.png',
    'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/3/3d/Hulk_002.png/revision/latest?cb=20131207063759',
    'http://clipart-library.com/images_k/black-panther-transparent-background/black-panther-transparent-background-25.png',
    'http://www.pngall.com/wp-content/uploads/2016/04/Thor-PNG-Picture.png',
    'https://i.pinimg.com/originals/b8/56/6f/b8566fea6d81c66d47235e5e1acab080.png',
    'https://i2.wp.com/podcastunlimited.com/wordpress/wp-content/uploads/2015/06/4254955-groot2.png',
    'http://www.pngmart.com/files/2/Loki-PNG-Image.png'
];

function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById('myImage');
    
    image.addEventListener("click", function () {
        var randomImageSource = getRandomImage();
        image.src = randomImageSource;
    });
});