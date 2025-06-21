(function(){
  const pref = localStorage.getItem('preferredMode');
  if(!pref){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const def = prefersDark ? 'creative' : 'professional';
    localStorage.setItem('preferredMode', def);
    if(location.pathname === '/' || location.pathname.endsWith('index.html')){ window.location.href = def + '.html'; }
  }
})();
const btn=document.getElementById('toggle-btn');
if(btn){btn.onclick=()=>{const cur=localStorage.getItem('preferredMode')||'creative';const nxt=cur==='creative'?'professional':'creative';localStorage.setItem('preferredMode',nxt);location.href=nxt+'.html';};}