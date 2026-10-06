// Reveal on scroll + active year + smooth anchor offset (CSS handles)
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('visible')}); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  },{threshold:.12});
  els.forEach(function(e){io.observe(e)});
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();
