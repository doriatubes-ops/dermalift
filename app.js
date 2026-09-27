'use strict';
const video=document.querySelector('#vsl');
const cover=document.querySelector('.video-cover');
cover.addEventListener('click',()=>{video.muted=false;video.volume=1;cover.hidden=true;video.play().catch(()=>{cover.hidden=false;});});
video.addEventListener('play',()=>{cover.hidden=true;});
document.querySelectorAll('[data-dialog]').forEach(button=>{button.addEventListener('click',()=>document.getElementById(button.dataset.dialog).showModal());});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});});
const sticky=document.querySelector('.sticky-buy');
const hero=document.querySelector('.hero');const offers=document.querySelector('#kits');
let heroVisible=true,offersVisible=false;
function updateSticky(){sticky.hidden=heroVisible||offersVisible;}
new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.target===hero)heroVisible=entry.isIntersecting;if(entry.target===offers)offersVisible=entry.isIntersecting;});updateSticky();}).observe(hero);
const observer=new IntersectionObserver(entries=>{offersVisible=entries[0].isIntersecting;updateSticky();});observer.observe(offers);
