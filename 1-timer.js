import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as y,i as b}from"./assets/vendor-BbbuE1sJ.js";let i=null,s=null,d=null;const n=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),v=document.querySelector("[data-minutes]"),E=document.querySelector("[data-seconds]"),o=document.querySelector("#datetime-picker");n.addEventListener("click",q);n.setAttribute("disabled","");const c={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<c.defaultDate?b.error({message:"Please choose a date in the future",position:"topRight"}):(n.removeAttribute("disabled"),o.removeAttribute("disabled"),i=t[0].getTime())}};y(o,c);function q(){n.disabled=!0,o.disabled=!0,d=setInterval(()=>{s=Date.now();const t=i-s;t<=0?(clearInterval(d),o.removeAttribute("disabled")):C(g(t))},1e3)}function C({days:t,hours:r,minutes:a,seconds:u}){S.textContent=e(t),p.textContent=e(r),v.textContent=e(a),E.textContent=e(u)}function g(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:f}}function e(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
