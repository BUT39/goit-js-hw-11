import{a as u,S as d,i}from"./assets/vendor-B5-I04au.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="55152376-abc1c78727543314a3e05fe22",m="https://pixabay.com/api/";async function p(s){return(await u.get(m,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a");function y(s){const o=s.map(r=>`<li>
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}" />
    <div>
      <p>Likes ${r.likes}</p>
      <p>Views ${r.views}</p>
      <p>Comments ${r.comments}</p>
      <p>Downloads ${r.downloads}</p>
    </div>
  </a>
</li>
`).join("");c.innerHTML=o,h.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){i.warning({message:"Enter something for search!"});return}g(),L(),p(o).then(r=>{if(r.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(r.hits)}).catch(()=>{i.error({message:"Something went wrong!"})}).finally(()=>w())});
//# sourceMappingURL=index.js.map
