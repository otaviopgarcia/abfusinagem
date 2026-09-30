// Ano do rodapé
document.getElementById('y').textContent=new Date().getFullYear();
// Menu mobile
const b=document.getElementById('menu'),n=document.getElementById('nav');
b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
n.onclick=()=>n.classList.remove('open');
// Revelação ao rolar
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// Formulário via Formspree (só existe na página de contato)
const f=document.getElementById('f');
if(f)f.addEventListener('submit',async ev=>{
 ev.preventDefault();const m=document.getElementById('msg');m.textContent='Enviando...';
 try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
  if(r.ok){f.reset();m.textContent='Solicitação enviada. Retornaremos em breve.'}else throw 0}
 catch{m.textContent='Não foi possível enviar. Tente o WhatsApp (16) 99768-4424.'}
});
