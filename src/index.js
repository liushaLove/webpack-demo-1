import x from "./x.js";
import jpg from "./assets/img.jpg";
console.log(jpg);

const div = document.getElementById("app");

const btn = document.createElement("button");
btn.innerText = '懒加载';
btn.onclick = ()=>{
    const promise = import("./lazy.js");
    promise.then((module)=>{
        const fn = module.default;
        fn();
    },()=>{
        console.log("模块加载失败");
    });
}
div.appendChild(btn);