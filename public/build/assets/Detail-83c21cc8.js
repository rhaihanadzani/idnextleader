import{j as e,a as l,F as r}from"./app-a7935d47.js";import{L as o}from"./LayoutNavigation-23de85c1.js";import{S as n,P as m,A as c,a as h,G as g}from"./index-594133cf.js";import"./HomeFooter-58181ffc.js";const v=({article:a,otherArticles:s})=>{const i="http://127.0.0.1:8000/";return console.log(a.images[0].image),e(o,{tittle:a.title,description:a.description,children:l("div",{className:"w-full px-4 lg:flex ",children:[e("div",{className:"w-[100%] lg:w-[65%] mb-10 lg:mb-0",children:l("div",{children:[e("div",{children:a.images.length>1?e(r,{children:e(n,{spaceBetween:30,slidesPerView:1,pagination:{clickable:!0},loop:!0,modules:[m,c],autoplay:{delay:3e3},className:"w-full max-w-6xl mx-auto  flex",style:{"--swiper-navigation-color":"#ed1c24","--swiper-pagination-color":"#ffff"},children:a.images.map((t,d)=>e(h,{children:e("img",{src:`${i}storage/${t}`,alt:"...",className:"rounded-[20px]"})},d))})}):e(r,{children:e("img",{src:`${i}storage/${a.images[0].image}`,alt:"...",className:"rounded-[20px]"})})}),e("h1",{className:"text-2xl font-semibold text-black my-2",children:a.title}),e("div",{children:e("div",{className:"content",dangerouslySetInnerHTML:{__html:a.content}})})]})}),l("div",{className:"w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8",children:[e("p",{className:"text-xl text-darkRed font-semibold",children:"Artikel Lainnya :"}),s.map(t=>e("div",{className:"bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col justify-between relative",children:l("div",{className:"flex",children:[e("div",{className:"relative",children:e("img",{src:`${i}storage/${t.images[0].image}`,alt:"articles-image",className:"w-full h-32 object-cover rounded-t-lg bg-blue-500"})}),l("div",{children:[e("h2",{className:"text-[1rem] pl-2 pt-2 font-semibold text-gray-200 mb-2",children:t.title}),l("p",{className:"text-gray-300 mb-4 text-[0.8rem] pl-2",children:[t.description," ",e("a",{href:`/article/${t.id}`,className:"text-blue-200 hover:underline font-medium",children:"Read more..."})]}),e("div",{className:"text-[0.7rem] text-gray-200 pr-2 text-left absolute bottom-0 right-0",children:l("span",{children:["Created on:"," ",new Date(t.created_at).toLocaleDateString()]})})]})]})},t.id)),e("div",{className:" flex justify-end",children:l("a",{href:"/article",className:"text-darkRed flex items-center w-fit p-2 border-darkRed font-semibold rounded-[35px] border-2 hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2",children:["Semua Artikel ",e(g,{size:25})]})})]})]})})};export{v as default};