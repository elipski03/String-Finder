import { GusfieldsAlgo } from "./GusfieldsAlgo.mjs";

document.addEventListener("DOMContentLoaded", function(){
    if (!(document.getElementById("test").innerHTML.length === 0)) {
        GusfieldsAlgo(chrome.tabs.getCurrent, document.getElementById("test").innerHTML)
});