document.querySelector(".breed-select");const e=document.querySelector(".breed-select");document.querySelector(".cat-info");var o;fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((o=>{!function(o){const t=o.map((({name:e})=>`<option value="${e}">${e}\n</option>`)).join("");e.insertAdjacentHTML("beforeend",t)}(o)})),function(e){const o=new URLSearchParams({breed_ids:e});return fetch(` https://api.thecatapi.com/v1/images/search?${o}`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}(o).then((e=>console.log(e)));
//# sourceMappingURL=index.e5146cd9.js.map
