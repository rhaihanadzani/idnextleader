import{W as l,r as p,j as a,a as s,Y as c}from"./app-9be30b7a.js";import{G as u}from"./GuestLayout-1176b4b8.js";import{T as f,I as w}from"./TextInput-9cd2d068.js";import{I as h}from"./InputLabel-ab1d02ff.js";import{P as g}from"./PrimaryButton-5d9a3928.js";import"./ApplicationLogo-6338cd18.js";function C(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});p.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(w,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{C as default};