import{j as r,F as d,a as e,Y as n}from"./app-7d8f873d.js";import{L as s}from"./LayoutNavigation-cfe98242.js";import"./HomeFooter-7cc238eb.js";const g=({articles:a})=>{const t=a[0].content.slice(0,400),i="https://manager.idnextleader.com/";return r(d,{children:[e(n,{title:"Artikel"}),r(s,{tittle:"Artikel Kami",description:"Temukan wawasan, inspirasi, dan solusi praktis seputar kepemimpinan dan pengembangan diri untuk membentuk generasi pemimpin masa depan Indonesia.",children:[r("div",{className:"w-full px-4 lg:flex justify-between ",children:[e("div",{className:"w-[100%] lg:w-[60%] mb-10 lg:mb-0 shadow-md p-5 rounded-xl",children:r("div",{children:[r("div",{className:"relative",children:[e("img",{src:`${i}storage/${a[0].images[0].image}`,alt:"...",className:"rounded-[20px]"}),e("div",{className:"inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full shadow-md uppercase tracking-wide hover:bg-primary/90 hover:scale-105 transition-all duration-300 absolute -top-5 -right-5 z-10",children:"UTAMA"})]}),e("h1",{className:"text-2xl font-semibold text-black my-2",children:a[0].title}),r("div",{children:[e("div",{dangerouslySetInnerHTML:{__html:t}}),e("a",{href:`/article/${a[0].id}`,className:"text-darkRed hover:underline font-medium underline underline-offset-2",children:"Baca selengkapnya..."})]})]})}),e("div",{className:"w-[100%] lg:w-[35%] lg:space-y-5 lg:pl-2 space-y-8 shadow-md p-5 rounded-xl h-fit",children:a.slice(1,4).map(l=>e("div",{className:"h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1",children:r("div",{className:"flex flex-row",children:[e("div",{className:"w-[40%] h-full overflow-hidden",children:e("img",{src:`${i}storage/${l.images[0].image}`,alt:"articles-image",className:"w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-white",loading:"lazy"})}),e("div",{className:"pl-2 w-[60%]",children:r("div",{className:" h-full flex flex-col justify-center items-center",children:[e("h2",{className:"text-[1rem] text-center pt-2 font-semibold text-gray-200 mb-2",children:l.title}),e("a",{href:`/article/${l.id}`,className:"text-white w-fit font-medium text-[0.6rem] text border-2 border-white p-1 px-2 rounded-[35px] hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2",children:"Baca selengkapnya"})]})})]})},l.id))})]}),e("div",{className:"max-w-7xl mx-auto px-4 py-4 lg:py-10",children:e("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:a.slice(4).map(l=>e(o,{article:l},l.id))})})]})]})},o=({article:a})=>e("div",{className:"h-[8rem] w-[100%] bg-gradient-to-tr from-darkRed to-dark rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl flex flex-col relative pr-1",children:r("div",{className:"flex flex-row",children:[e("div",{className:"w-[40%] h-full overflow-hidden",children:e("img",{src:`https://manager.idnextleader.com/storage/${a.images[0].image}`,alt:"articles-image",className:"w-[100%] overflow-hidden h-32 object-cover rounded-t-lg border-r border-white",loading:"lazy"})}),e("div",{className:"pl-2 w-[60%]",children:r("div",{className:" h-full flex flex-col justify-center items-center",children:[e("h2",{className:"text-[1rem] text-center pt-2 font-semibold text-gray-200 mb-2",children:a.title}),e("a",{href:`/article/${a.id}`,className:"text-white w-fit font-medium text-[0.6rem] text border-2 border-white p-1 px-2 rounded-[35px] hover:bg-darkRed hover:text-white transition-all duration-500 hover:translate-x-2",children:"Baca selengkapnya"})]})})]})});export{g as default};