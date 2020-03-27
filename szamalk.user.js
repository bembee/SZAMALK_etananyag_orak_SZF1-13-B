// ==UserScript==
// @name           SZÁMALK etananyag órák SZF1/13/B!
// @author         Simon Gergely
// @description    Menüpontot készít a tényleges óráninkról
// @version        0.9
// @include        https://*etananyag.szamalk-szalezi*
// ==/UserScript==

var ul = document.querySelector('.dropdown-menu');
var egy = document.createElement('li');
egy.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=13">Adatbázis alkalmazások E+GY</a>';
ul.appendChild(egy);


var ketto = document.createElement('li');
ketto.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=20">Etika</a>';
ul.appendChild(ketto);

var harom = document.createElement('li');
harom.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=9">Hálózatok I.</a>';
ul.appendChild(harom);

var negy = document.createElement('li');
negy.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=10">Hálózatok I. gyakorlat</a>';
ul.appendChild(negy);

var ot = document.createElement('li');
ot.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=6">IT alapok</a>';
ul.appendChild(ot);

var hat = document.createElement('li');
hat.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=7">IT alapok gyakorlat</a>';
ul.appendChild(hat);

var het = document.createElement('li');
het.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=18">IT Szakmai angol</a>';
ul.appendChild(het);

var nyolc = document.createElement('li');
nyolc.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=12">Programozás</a>';
ul.appendChild(nyolc);

var kilenc = document.createElement('li');
kilenc.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=472">Webprogramozás</a>';
ul.appendChild(kilenc);