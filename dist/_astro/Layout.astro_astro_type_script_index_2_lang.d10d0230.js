var a=document.getElementById("cursor");document.onmousemove=function(t){a!==null&&(a.style.left=t.pageX-a.offsetWidth/2+"px",a.style.top=t.pageY-a.offsetHeight/2+"px",a.style.display="block")};const e=document.querySelector("[data-toggle-nav]"),s=document.querySelector("[data-navbar]"),l=document.querySelector("[data-nav-overlay]");e&&(e.addEventListener("click",t=>{t.preventDefault(),e.getAttribute("data-open-nav")==="false"?(e.setAttribute("data-open-nav","true"),l.setAttribute("data-is-visible","true"),document.body.classList.add("!overflow-y-hidden"),s.style.height=`${s.scrollHeight}px`):(e.setAttribute("data-open-nav","false"),l.setAttribute("data-is-visible","false"),document.body.classList.remove("!overflow-y-hidden"),s.style.height="0px")}),s.addEventListener("click",()=>{e.setAttribute("data-open-nav","false"),l.setAttribute("data-is-visible","false"),document.body.classList.remove("!overflow-y-hidden"),s.style.height="0px"}),l.addEventListener("click",()=>{e.setAttribute("data-open-nav","false"),l.setAttribute("data-is-visible","false"),document.body.classList.remove("!overflow-y-hidden"),s.style.height="0px"}));const d=document.querySelector("[data-switch-theme]");localStorage.getItem("appTheme")==="dark"||!("appTheme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");d&&d.addEventListener("click",t=>{t.preventDefault();const o=document.documentElement;o&&(localStorage.getItem("appTheme")?localStorage.getItem("appTheme")==="light"?(o.classList.add("dark"),localStorage.setItem("appTheme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("appTheme","light")):o.classList.contains("dark")?(o.classList.remove("dark"),localStorage.setItem("appTheme","light")):(o.classList.add("dark"),localStorage.setItem("appTheme","dark")))});