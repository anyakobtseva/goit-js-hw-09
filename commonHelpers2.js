import"./assets/modulepreload-polyfill-ec808ebb.js";const o=document.querySelector(".feedback-form"),r=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea"),t="feedback-form-state";document.addEventListener("DOMContentLoaded",a=>{const{email:e,message:m}=JSON.parse(localStorage.getItem(t))??{};r.value=e??"",n.value=m??""});o.addEventListener("submit",a=>{a.preventDefault();const e=JSON.parse(localStorage.getItem(t));e.email.length===0||e.message.length===0||(console.log(e),localStorage.removeItem(t),o.reset())});o.addEventListener("input",a=>{localStorage.setItem(t,JSON.stringify({email:r.value.trim(),message:n.value.trim()}))});
//# sourceMappingURL=commonHelpers2.js.map
