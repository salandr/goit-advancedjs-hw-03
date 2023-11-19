import{a as d,S as m,i as u}from"./assets/vendor-7822ce3b.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f="https://api.thecatapi.com/v1",h="live_AmLs0t9ZUn3fXhJpj34LAVcwSlAeEVCPRziGpYlZrN4BZer9s4uXqaGXDmurm7vW";d.defaults.headers.common["x-api-key"]=h;async function g(){return(await d.get(`${f}/breeds`)).data}async function y(t){return(await d.get(`${f}/images/search?breed_ids=${t}`)).data}const o={select:document.querySelector(".breed-select"),div:document.querySelector(".cat-info"),loader:document.querySelector(".loader")},l=new m({select:o.select,settings:{placeholderText:"Search cat"}}),p={title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight"};function c(t){t.classList.toggle("hidden")}async function b(t){c(o.loader),c(o.div),l.disable();try{const n=await y(t.target.value);w(n)}catch{u.error(p)}finally{c(o.loader),c(o.div),l.enable()}}function v(t){const n=t.map(({id:a,name:s})=>{const e=document.createElement("option");return e.value=a,e.text=s,e});l.setData([{placeholder:!0,text:""},...n])}function w(t){const{url:n,breeds:a}=t[0],s=a.map(({name:e,description:r,temperament:i})=>`
    <img class='imgCat' src=${n} alt=${e} width='600'>
    <div class ='wrap-content'>
      <h2 class='title'>${e}</h2>
      <p class='text'>${r}</p>
      <p class='text'>
        <b>Temperament:</b>
        ${i}
      </p>
    </div>
    `).join();o.div.innerHTML=s}async function S(){l.disable();try{const t=await g();v(t),o.select.addEventListener("change",b)}catch{u.error(p)}finally{c(o.loader),c(o.select),l.enable()}}S();
//# sourceMappingURL=commonHelpers.js.map
