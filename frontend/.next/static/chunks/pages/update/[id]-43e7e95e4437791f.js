(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{9015:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update/[id]",function(){return n(4007)}])},4007:function(t,e,n){"use strict";n.r(e);var a=n(5893),u=n(7294),s=n(1163),c=n(958);e.default=()=>{let[t,e]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[r,l]=(0,u.useState)("PENDING"),o=(0,s.useRouter)(),{id:d}=o.query;(0,u.useEffect)(()=>{d&&(0,c.u_)(Number(d)).then(t=>{e(t.title),i(t.description),l(t.status)})},[d]);let h=async e=>{e.preventDefault(),await (0,c.xJ)(Number(d),{title:t,description:n,status:r}),o.push("/")};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Update Task"}),(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Title"}),(0,a.jsx)("input",{type:"text",value:t,onChange:t=>e(t.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Description"}),(0,a.jsx)("textarea",{value:n,onChange:t=>i(t.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"Status"}),(0,a.jsxs)("select",{value:r,onChange:t=>l(t.target.value),children:[(0,a.jsx)("option",{value:"PENDING",children:"PENDING"}),(0,a.jsx)("option",{value:"IN_PROGRESS",children:"IN_PROGRESS"}),(0,a.jsx)("option",{value:"DONE",children:"DONE"})]})]}),(0,a.jsx)("button",{type:"submit",children:"Update"})]})]})}},958:function(t,e,n){"use strict";n.d(e,{Jv:function(){return i},_5:function(){return d},u_:function(){return r},vr:function(){return l},xJ:function(){return o}});var a,u,s=n(7066);let c="http://localhost:5000/tasks";(a=u||(u={})).PENDING="PENDING",a.IN_PROGRESS="IN_PROGRESS",a.DONE="DONE";let i=async()=>(await s.Z.get(c)).data,r=async t=>(await s.Z.get("".concat(c,"/").concat(t))).data,l=async t=>(await s.Z.post(c,t)).data,o=async(t,e)=>(await s.Z.put("".concat(c,"/").concat(t),e)).data,d=async t=>(await s.Z.delete("".concat(c,"/").concat(t))).data},1163:function(t,e,n){t.exports=n(6036)}},function(t){t.O(0,[66,888,774,179],function(){return t(t.s=9015)}),_N_E=t.O()}]);