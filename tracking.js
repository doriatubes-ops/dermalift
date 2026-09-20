// Meta Pixel supplied for this landing page.
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
window.fbq('init','836214192069484');
window.fbq('track','PageView');

(function(){
  var KEYS=['utm_source','utm_medium','utm_campaign','utm_term','utm_content',
    'src','sck','fbclid','gclid','ttclid','wbraid','gbraid','_fbp','_fbc'];
  var saved={};
  try {
    var stored=JSON.parse(localStorage.getItem('saved_utms')||'{}');
    if(stored && typeof stored==='object') KEYS.forEach(function(k){
      if(typeof stored[k]==='string' && stored[k].trim()) saved[k]=stored[k].trim();
    });
  } catch(e){}
  var current=new URLSearchParams(window.location.search);
  KEYS.forEach(function(k){var v=current.get(k);if(v && v.trim()) saved[k]=v.trim();});
  try{localStorage.setItem('saved_utms',JSON.stringify(saved));}catch(e){}

  function addUtmsToLinks(){
    if(!Object.keys(saved).length)return;
    document.querySelectorAll('a[href]').forEach(function(a){
      var href=a.getAttribute('href');
      if(!href || href.charAt(0)==='#')return;
      try{
        var url=new URL(href,window.location.href);
        if(url.protocol!=='https:' && url.protocol!=='http:')return;
        var isBraip=['braip.co','braip.com'].some(function(domain){
          return url.hostname===domain || url.hostname.endsWith('.'+domain);
        });
        if(!isBraip && url.hostname!==window.location.hostname)return;
        KEYS.forEach(function(k){
          if(!url.searchParams.get(k) && saved[k])url.searchParams.set(k,saved[k]);
        });
        if(url.href!==href)a.setAttribute('href',url.href);
      }catch(e){}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addUtmsToLinks);
  else addUtmsToLinks();
  new MutationObserver(addUtmsToLinks).observe(document.documentElement,{childList:true,subtree:true});
})();
