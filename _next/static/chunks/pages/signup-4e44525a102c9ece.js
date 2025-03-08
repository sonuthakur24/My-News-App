(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{1468:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(9845)}])},6740:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(7876),a=s(2934),n=s(1772),i=s(8614);function l(){let{data:e}=(0,a.useSession)();return e?(0,r.jsxs)("div",{className:"mt-4 text-center",children:[(0,r.jsxs)("p",{className:"text-gray-700 mb-2",children:["You are logged in as ",e.user.email,"!"]}),(0,r.jsx)("button",{onClick:()=>(0,a.signOut)({callbackUrl:"http://localhost:3000"}),className:"w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300",children:"Sign out"})]}):(0,r.jsxs)("button",{onClick:()=>(0,a.signIn)("google",{callbackUrl:"http://localhost:3000"}),className:"w-full flex items-center justify-center bg-red-500 text-white p-2 rounded mt-4 hover:bg-red-600 transition duration-300",children:[(0,r.jsx)(n.g,{icon:i.FjH,className:"mr-2"}),"Sign in with Google"]})}},9845:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(7876),a=s(4232),n=s(1772),i=s(1041),l=s(7328),o=s.n(l),c=s(1040),d=s(9099),u=s(8230),g=s.n(u),m=s(6740);function h(){let[e,t]=(0,a.useState)(""),[s,l]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[p,f]=(0,a.useState)(""),j=(0,d.useRouter)();(0,a.useEffect)(()=>{localStorage.getItem("token")&&j.push("/profile")},[j]),(0,a.useEffect)(()=>{(async function(){try{let e=await c.A.get("https://api.unsplash.com/photos/random",{params:{query:"cybersecurity",orientation:"landscape",client_id:"zjKsVTPyuTxCeTiVgayeg6igk_IvglEtrRwhY2tsvHY"}});b(e.data.urls.regular)}catch(e){console.error("Error fetching background image:",e)}})()},[]);let y=async t=>{t.preventDefault();try{await c.A.post("/api/signup",{username:e,email:s,password:u}),j.push("/login")}catch(e){console.error("Error signing up:",e),f("Failed to sign up. Please try again.")}};return(0,r.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",style:{backgroundImage:"url(".concat(x,")"),backgroundSize:"cover",backgroundPosition:"center"},children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Sign Up - Social Engineering News Aggregator"}),(0,r.jsx)("meta",{name:"description",content:"Create a new account"})]}),(0,r.jsxs)("div",{className:"bg-white p-8 rounded-xl shadow-2xl w-96 backdrop-filter backdrop-blur-lg bg-opacity-30",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold mb-6 text-center text-gray-800",children:"Sign Up"}),p&&(0,r.jsx)("p",{className:"text-red-500 mb-4",children:p}),(0,r.jsxs)("form",{onSubmit:y,className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"username",className:"block text-sm font-medium text-gray-700",children:[(0,r.jsx)(n.g,{icon:i.X46,className:"mr-2"}),"Username"]}),(0,r.jsx)("input",{type:"text",id:"username",value:e,onChange:e=>t(e.target.value),className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:[(0,r.jsx)(n.g,{icon:i.y_8,className:"mr-2"}),"Email"]}),(0,r.jsx)("input",{type:"email",id:"email",value:s,onChange:e=>l(e.target.value),className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:[(0,r.jsx)(n.g,{icon:i.DW4,className:"mr-2"}),"Password"]}),(0,r.jsx)("input",{type:"password",id:"password",value:u,onChange:e=>h(e.target.value),className:"mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black",required:!0})]}),(0,r.jsxs)("button",{type:"submit",className:"w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 transition duration-300",children:[(0,r.jsx)(n.g,{icon:i.nWR,className:"mr-2"}),"Sign Up"]})]}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(m.A,{})}),(0,r.jsxs)("p",{className:"mt-4 text-center text-gray-700",children:["Already have an account?"," ",(0,r.jsx)(g(),{href:"/login",legacyBehavior:!0,children:(0,r.jsx)("a",{className:"text-blue-500 hover:underline",children:"Login"})})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[805,149,636,593,792],()=>t(1468)),_N_E=e.O()}]);