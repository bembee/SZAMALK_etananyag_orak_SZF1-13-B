// ==UserScript==
// @name           SZÁMALK etananyag órák SZF1/13/B!
// @author         Simon Gergely
// @description    Menüpontot készít a tényleges óráninkról
// @version        1.0
// @include        https://*etananyag.szamalk-szalezi*
// @homepage       https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/
// @updateURL      https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/raw/master/szamalk.user.js
// @downloadURL    https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/raw/master/szamalk.user.js
// ==/UserScript==


//Felsőmenü keresés és új menü készítés
var felsomenu = document.querySelector('.navbar-nav');
var orakmenu = document.createElement('li');
orakmenu.setAttribute("class", "nav-item_dropdown");
orakmenu.innerHTML = '<a href="#" class="nav-link dropdown-toggle my-auto" role="button" id="oramenu" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownlangmenu0" data-target="#" data-toggle="dropdown" title="Órák"><span class="langdesc">Órák</span></a>';
felsomenu.insertBefore(orakmenu, felsomenu.childNodes[0])

//Lenyíló menü beállítása
var orakmenu_lenyilas = document.querySelector('.nav-item_dropdown');
var lenyilas = document.createElement('ul');
lenyilas.setAttribute("id", "custom_menu");
lenyilas.setAttribute("class", "dropdown-menu");
orakmenu_lenyilas.appendChild(lenyilas);

var ul = document.getElementById("custom_menu");

//Adatfeltöltés
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