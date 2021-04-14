// ==UserScript==
// @name           SZÁMALK etananyag órák SZF1/13/B!
// @author         Simon Gergely
// @description    Menüpontot készít az SZF1/13/B tényleges óráiról
// @version        1.5
// @include        https://*etananyag.szamalk-szalezi*
// @homepage       https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/
// @updateURL      https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/releases/latest/download/szamalk.user.js
// @downloadURL    https://github.com/bembee/SZAMALK_etananyag_orak_SZF1-13-B/releases/latest/download/szamalk.user.js
// ==/UserScript==

var li = document.createElement('li');

//Felsőmenü keresés és új menü készítés
var felsomenu = document.querySelector('.navbar-nav');
li.setAttribute("class", "nav-item_dropdown");
li.innerHTML = '<a href="#" class="nav-link dropdown-toggle my-auto" role="button" id="oramenu" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownlangmenu0" data-target="#" data-toggle="dropdown" title="Órák"><span class="langdesc">Órák</span></a>';
felsomenu.insertBefore(li, felsomenu.childNodes[0]);

//Lenyíló menü beállítása
var orakmenuLenyilas = document.querySelector('.nav-item_dropdown');
var lenyilas = document.createElement('ul');
lenyilas.setAttribute("id", "custom_menu");
lenyilas.setAttribute("class", "dropdown-menu");
orakmenuLenyilas.appendChild(lenyilas);

var ul = document.getElementById("custom_menu");

function letrehozSzoveg(szoveg) {
    var elem = document.createElement('p');
    elem.innerHTML = szoveg;
    elem.style.marginBottom = "0px";
    elem.style.textAlign = "center";
    ul.appendChild(elem);
}

function linkBeallitas(szamok, nevek) {
    for (var i = 0; i < szamok.length; i++) {
        li = document.createElement('li');
        li.innerHTML = '<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/view.php?id=' + szamok[i] + '">' + nevek[i] + '</a>';
        ul.appendChild(li);
    }
}
//Adatfeltöltés
linkBeallitas([700, 703, 705, 693, 694, 695, 699, "879&section=0", "879&section=1", 472, 880], ['Adatbázis kezelés I.', 'Angol', 'Etika', 'Gépszerelés (Informatikai ismeretek)', 'Hálózat I. elmélet', 'Hálózat I. gyakorlat', 'Java Programozás', 'Hálózat elmélet', 'Szoftvertesztelés', 'Webprogramozás', 'WP Orientáció ']);

letrehozSzoveg('<font size="1">Első féléves tárgyak</font>');

linkBeallitas([697, 698, 868, 696], ['IKT projektmunka I./1', 'IKT projektmunka I./2', 'Java Programozás', 'Python programozás']);

letrehozSzoveg('<a title="" class="dropdown-item" href="https://etananyag.szamalk-szalezi.hu/course/index.php?categoryid=104"><font size="2">Szoftverfejlesztő és -tesztelő B összes</font></a>');
letrehozSzoveg('<font size="1"><a href="https://github.com/bembee">Created by Simon Gergely</a></font>');
