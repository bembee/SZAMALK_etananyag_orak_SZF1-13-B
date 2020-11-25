// ==UserScript==
// @name           SZÁMALK etananyag órák SZF1/13/B!
// @author         Simon Gergely
// @description    Menüpontot készít az SZF1/13/B tényleges óráiról
// @version        1.2
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
felsomenu.insertBefore(orakmenu, felsomenu.childNodes[0]);

//Lenyíló menü beállítása
var orakmenu_lenyilas = document.querySelector('.nav-item_dropdown');
var lenyilas = document.createElement('ul');
lenyilas.setAttribute("id", "custom_menu");
lenyilas.setAttribute("class", "dropdown-menu");
orakmenu_lenyilas.appendChild(lenyilas);

var ul = document.getElementById("custom_menu");


//Adatfeltöltés
var szamok = [700, 703, 705, 693, 694, 695, 697, 698, 868, 696, 472];
var nevek = ['Adatbázis kezelés I.', 'Angol', 'Etika', 'Gépszerelés (Informatikai ismeretek)', 'Hálózat I. elmélet', 'Hálózat I. gyakorlat', 'IKT projektmunka I./1', 'IKT projektmunka I./2', 'Java Programozás', 'Python programozás', 'Webprogramozás'];
for (var i = 0; i < szamok.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=' + szamok[i] + '">' + nevek[i] + '</a>';
    ul.appendChild(li);
}

var a = document.createElement('p');
a.style.marginBottom = "0px";
a.style.textAlign = "center";
a.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/index.php?categoryid=104"><font size="2">Szoftverfejlesztő és -tesztelő B összes</font></a>';
ul.appendChild(a);

var b = document.createElement('p');
b.style.marginBottom = "0px";
b.style.textAlign = "center";
b.innerHTML = '<font size="1">Created by Simon Gergely</font>';
ul.appendChild(b);
