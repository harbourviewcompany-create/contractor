(function(){
  const menuButton=document.querySelector('[data-menu-button]');
  const menu=document.querySelector('[data-menu]');
  if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
  const output=document.querySelector('[data-pin-output]');
  document.querySelectorAll('[data-pin]').forEach((pin)=>{const show=()=>{if(output)output.textContent=pin.getAttribute('data-pin')||'';};pin.addEventListener('focus',show);pin.addEventListener('mouseenter',show);pin.addEventListener('click',show);});
  const form=document.querySelector('[data-booking-form]');
  if(form){
    const params=new URLSearchParams(location.search); const service=params.get('service');
    if(service){const select=form.querySelector('[name="serviceType"]'); if(select){select.value=service;}}
    form.addEventListener('submit',(event)=>{event.preventDefault();form.classList.add('hidden');const panel=document.querySelector('[data-confirmation]');if(panel){panel.classList.add('active');panel.focus();}});
  }
})();
