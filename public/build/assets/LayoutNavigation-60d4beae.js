import{r as s,a as t,j as e}from"./app-b792d153.js";import{H as m}from"./HomeFooter-2f9c97b2.js";const u=({children:n,tittle:c,description:d})=>{const[i,h]=s.useState(!1),[a,l]=s.useState(!1),r=()=>{h(!i)};return s.useEffect(()=>{const o=()=>{window.scrollY>0?l(!0):l(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),t("div",{className:" ",children:[t("div",{className:`fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-red-900 to-black text-white transform ${i?"translate-x-0":"-translate-x-full"} transition-transform duration-200 ease-in-out z-50 md:hidden`,children:[t("div",{className:"flex items-center justify-between p-4",children:[e("img",{src:"/images/partial/logo2.png",alt:"logo",width:100,height:100}),e("button",{onClick:r,className:"text-white focus:outline-none","aria-label":"Close Menu",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),t("nav",{className:"mt-4",children:[e("a",{href:"/#about",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700",children:"About"}),e("a",{href:"/#event",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700",children:"Event"}),e("a",{href:"/article",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700",children:"Article"}),e("a",{href:"/#contact",className:"block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700",children:"Contact"})]})]}),i&&e("div",{className:"fixed inset-0 bg-black opacity-50 md:hidden z-30",onClick:r}),t("div",{className:"flex-1",children:[t("div",{className:`${a?"bg-white shadow-md":"bg-transparent "} p-4 flex justify-between items-center md:hidden fixed w-full top-0 z-40 transition-colors duration-300`,children:[e("img",{src:"/images/partial/logo2.png",alt:"logo",width:100,height:100,className:`${a?"hidden":"block"}`}),e("img",{src:"/images/partial/logo1.png",alt:"logo",width:100,height:100,className:`${a?"block":"hidden"}`}),e("button",{onClick:r,className:"text-gray-800 focus:outline-none","aria-label":"Open Menu",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:`w-7 h-7   ${a?"text-black":"text-white"}`,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"})})})]}),t("div",{className:`${a?"bg-white shadow-md":"bg-transparent"} hidden md:flex justify-between items-center p-4 fixed w-full top-0 z-40 transition-colors duration-300`,children:[e("img",{src:"/images/partial/logo2.png",alt:"logo",width:100,height:100,className:`${a?"hidden":"block"}`}),e("img",{src:"/images/partial/logo1.png",alt:"logo",width:100,height:100,className:`${a?"block":"hidden"}`}),t("nav",{className:"space-x-4",children:[e("a",{href:"/#about",className:`${a?"text-darkRed hover:text-darkRed/80 font-semibold":"text-white hover:text-white/80 font-semibold"}`,children:"About"}),e("a",{href:"/#event",className:`${a?"text-darkRed hover:text-darkRed/80 font-semibold":"text-white hover:text-white/80 font-semibold"}`,children:"Event"}),e("a",{href:"/article",className:`${a?"text-darkRed hover:text-darkRed/80 font-semibold":"text-white hover:text-white/80 font-semibold"}`,children:"Article"}),e("a",{href:"/#contact",className:`${a?"text-darkRed hover:text-darkRed/80 font-semibold":"text-white hover:text-white/80 font-semibold"}`,children:"Contact"})]})]}),t("div",{className:"space-y-4",children:[t("div",{className:"bg-white",children:[t("div",{className:"relative text-white text-center px-5 h-[70vh] flex flex-col items-center justify-center",style:{backgroundImage:"url('/images/home/bannerBOD1.png')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"},children:[e("div",{className:"absolute inset-0 bg-black opacity-70"}),t("div",{className:"relative z-10 text-center md:text-left w-full h-full  md:items-center flex flex-col  items-center lg:justify-center justify-center space-y-5",children:[e("h1",{className:"text-4xl font-bold uppercase",children:c}),e("p",{className:"max-w-3xl text-center",children:d})]})]}),e("div",{className:"relative h-60 bg-cover bg-center w-full",style:{backgroundImage:"url('/images/home/bannerBOD1.png')",WebkitMaskImage:"url('/images/home/test.svg')",maskImage:"url('/images/home/test.svg')",maskSize:"cover",WebkitMaskSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:e("div",{className:"absolute inset-0 bg-black opacity-70 w-full"})})]}),n,e("div",{children:e(m,{})})]})]})]})};export{u as L};