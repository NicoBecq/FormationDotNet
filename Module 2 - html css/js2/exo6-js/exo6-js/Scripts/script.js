﻿var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var img4 = document.getElementById('image4');
var img5 = document.getElementById('image5');
function img_2(i, Elt) {
    var img_2 = `images/image${i}_2.jpg`;
    Elt.setAttribute('src', img_2);
}
function img_1(i, Elt) {
    var img_1 = `images/image${i}.jpg`;
    Elt.setAttribute('src', img_1);
}