import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector(".form");a.addEventListener("submit",l);function l(t){t.preventDefault();let s=parseInt(t.target.elements.delay.value,10),i=t.target.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(s):r(s)},s)}).then(e=>{o.success({message:`Проміс виконано успішно з затримкою ${e} мс`,position:"topRight"})}).catch(e=>{o.error({message:`Проміс відхилено з затримкою ${e} мс`,position:"topRight"})})}
//# sourceMappingURL=2-snackbar.js.map