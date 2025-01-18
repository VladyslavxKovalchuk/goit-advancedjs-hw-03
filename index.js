import{S as d,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p="48306613-fd23d021c55686c3494b56897",y="https://pixabay.com/api";function f(r){const a=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}/?${a}`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function h(r){return r.map(({webformatURL:a,tags:l,likes:s,views:e,comments:t,downloads:i,largeImageURL:u})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${u}">
                    <img class="gallery-image" src="${a}" alt="${l}" height=312 width=200>
                    <ul class="gallery-image-data">
                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Likes</p>
                            <p class="gallery-image-data-item-value">${s}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Views</p>
                            <p class="gallery-image-data-item-value">${e}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Comments</p>
                            <p class="gallery-image-data-item-value">${t}</p>
                        </li>

                        <li class="gallery-image-data-item">
                            <p class="gallery-image-data-item-title">Downloads</p>
                            <p class="gallery-image-data-item-value">${i}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),n=document.querySelector(".image-search-form");let o;const L=new d(".gallery li a",{captionsData:"alt",captionDelay:250});n.addEventListener("input",r=>{o=r.target.value.trim()});n.addEventListener("submit",r=>{r.preventDefault(),o&&(m.innerHTML="",g.style.display="block",f(o).then(({hits:a})=>{g.style.display="none",a.length?(m.innerHTML=h(a),L.refresh()):c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(a=>{c.error({message:"There are some errors with loading pictures.",position:"topRight"}),console.error(a)}).finally(()=>{o="",n.reset()}))});
//# sourceMappingURL=index.js.map
