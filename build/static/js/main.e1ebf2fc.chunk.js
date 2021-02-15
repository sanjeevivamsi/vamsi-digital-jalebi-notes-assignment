(this["webpackJsonpnotes-firebase"]=this["webpackJsonpnotes-firebase"]||[]).push([[0],{106:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),s=a.n(i),c=(a(106),a(40)),o=a(9),l=a.n(o),u=a(12),d=a(23),p=a(174),m=a(89),f=a(177),j=Object(m.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},success:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#fff"}}}),b=j=Object(f.a)(j),h=a(178),x=a(164),g=a(161),O=a(175),v=a(162),y=a(65),w=a.n(y),N=a(67),k=a(159),T=a(157),C=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(4,0,0)},heading:{color:"#000000",fontWeight:"400",display:"flex",alignSelf:"flex-start"},avatar:{padding:25},input:{marginTop:e.spacing(2),color:"#4267B2",outline:"none"},loading:{marginRight:e.spacing(2)}}})),S=a(66);function W(e){return{required:"This field is required",validate:function(t){return t===e().password||"passwords doesnt match"}}}var E=a(4);function I(e){var t=Object(S.a)({mode:"onChange"}),a=t.register,n=t.handleSubmit,r=t.errors,i=t.getValues,s=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.functionCall(a.email,a.password);case 2:e.history.push("/notes");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=C();return Object(E.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(g.a,{}),Object(E.jsxs)("div",{className:c.paper,children:[Object(E.jsx)(h.a,{style:{backgroundColor:"#4267B2"},className:c.avatar,children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(N.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(E.jsxs)("form",{className:c.form,onSubmit:n(s),children:[Object(E.jsxs)(v.a,{container:!0,spacing:2,children:[Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,id:"email",label:"Email Address",name:"email",type:"email",autoComplete:"off",inputRef:a({required:"This field is required",maxLength:{value:30,message:"Email shouldnot be more than 30 characters long"},validate:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Email is invalid"}}),error:!!r.email,helperText:r.email?r.email.message:null})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",inputRef:a({required:"This field is required",minLength:{value:8,message:"Password must be minimum 8 letters long"},validate:function(e){return[/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every((function(t){return t.test(e)}))||"Password must include a-z, A-Z, @..and 0-9"}}),error:!!r.password,helperText:r.password?r.password.message:null})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,name:"confirmPassword",label:"confirm Password",type:"password",id:"confirmPassword",autoComplete:"off",inputRef:a(W(i)),error:!!r.confirmPassword,helperText:r.confirmPassword?r.confirmPassword.message:null})})]}),Object(E.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Sign Up"})]})]})]})}function z(e){var t=Object(S.a)({mode:"onChange"}),a=t.register,n=t.handleSubmit,r=t.errors,i=C();return Object(E.jsxs)(k.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(g.a,{}),Object(E.jsxs)("div",{style:{justifyContent:"center"},className:i.paper,children:[Object(E.jsx)(h.a,{style:{backgroundColor:"#4267B2"},className:i.avatar,children:Object(E.jsx)(w.a,{})}),Object(E.jsx)(N.a,{component:"h1",variant:"h5",children:"Log in"}),Object(E.jsxs)("form",{className:i.form,onSubmit:n((function(t){e.functionCall(t.email,t.password)})),children:[Object(E.jsxs)(v.a,{container:!0,spacing:2,children:[Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,name:"email",id:"email",type:"email",label:"Email Address",autoComplete:"off",inputRef:a({required:"This field is required",maxLength:{value:30,message:"Email shouldnot be more than 30 characters long"},validate:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"Email is invalid"}}),error:!!r.email,helperText:r.email?r.email.message:null})}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",inputRef:a({required:"This field is required",minLength:{value:8,message:"Password must be minimum 8 letters long"},validate:function(e){return[/[a-z]/,/[A-Z]/,/[0-9]/,/[^a-zA-Z0-9]/].every((function(t){return t.test(e)}))||"Password must include a-z, A-Z, @..and 0-9"}}),error:!!r.password,helperText:r.password?r.password.message:null})})]}),Object(E.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Log In"})]})]})]})}var A=a(24),P=a(163),F=a(167),L=a(168),Z=a(169),q=a(170),D=a(171),R=a(88),B=a.n(R),U=a(17),J=a(165),Y=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(1)},form:{width:"100%",marginBottom:e.spacing(2)},submit:{margin:e.spacing(2,0,0)},input:{marginTop:e.spacing(2),padding:e.spacing(2)},loading:{marginRight:e.spacing(2)},buttonWrapper:{marginTop:e.spacing(-4),display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:e.spacing(3)}}})),G=a(38);a(123),a(116),a(124);G.a.initializeApp({apiKey:"AIzaSyD0r_4OlEFv8MKXzZtOcp0_FSalyWxvk8c",authDomain:"vamsi-digital-jalebi-notes.firebaseapp.com",projectId:"vamsi-digital-jalebi-notes",storageBucket:"vamsi-digital-jalebi-notes.appspot.com",messagingSenderId:"1031588269195",appId:"1:1031588269195:web:8e44df325bd28c1b3c988e",measurementId:"G-Z72WY769T3"});var M=G.a.firestore(),V=G.a;function K(e,t){return $.apply(this,arguments)}function $(){return($=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.auth().createUserWithEmailAndPassword(t,a);case 3:return n=e.sent,e.next=6,M.collection("users").doc(n.user.uid).set({email:t,password:a,createdAt:G.a.firestore.FieldValue.serverTimestamp()});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function _(){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.auth().signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function X(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.auth().signInWithEmailAndPassword(t,a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.collection("notes").add(Object(A.a)(Object(A.a)({},t),{},{createdAt:G.a.firestore.FieldValue.serverTimestamp()}));case 2:return a=e.sent,e.abrupt("return",a.id);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){return ne.apply(this,arguments)}function ne(){return(ne=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,M.collection("notes").where("userId","==",t).orderBy("createdAt","desc").get();case 3:return e.sent.forEach((function(e){a=[].concat(Object(U.a)(a),[{id:e.id,text:e.data().text,userId:e.data().userId}])})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.collection("notes").doc(t).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(!1),c=Object(d.a)(s,2),o=c[0],p=c[1],m=Object(n.useState)({isError:!1,message:""}),f=Object(d.a)(m,2),j=f[0],b=f[1],h=function(){var t=Object(u.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==r){t.next=6;break}return b({isError:!0,message:"This field is required"}),t.abrupt("return");case 6:return p(!0),n={text:r,userId:e.loggedinUser.id},t.next=10,ee(n);case 10:s=t.sent,e.setUserNotes((function(e){return[].concat(Object(U.a)(e),[Object(A.a)(Object(A.a)({},n),{},{id:s})])})),i(""),p(!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=Y();return Object(E.jsx)("form",{className:g.form,onSubmit:h,children:Object(E.jsxs)(v.a,{xs:12,justify:"space-between",direction:"row",alignItems:"center",container:!0,children:[Object(E.jsx)(v.a,{className:g.input,item:!0,xs:12,children:Object(E.jsx)(O.a,{variant:"outlined",fullWidth:!0,id:"Note",multiline:!0,type:"text",rows:3,rowsMax:5,label:"Enter Your Note",name:"text",onChange:function(e){j.isError&&""!==e.target.value&&b({isError:!1,message:""}),i(e.target.value)},autoComplete:"off",value:r,error:j.isError,helperText:j.isError?j.message:null})}),Object(E.jsxs)(v.a,{xs:12,className:g.buttonWrapper,children:[Object(E.jsxs)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:o,className:g.submit,children:[Object(E.jsx)(J.a,{color:"primary",size:"22px",className:g.loading,style:o?{display:"block"}:{display:"none"}}),"save"]}),Object(E.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"secondary",disabled:o,className:g.submit,onClick:function(){return i("")},children:"clear"})]})]})})},ce=Object(T.a)((function(e){return{paper:{margin:e.spacing(6,0,0),display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",overflow:"hidden"},heading:{marginLeft:e.spacing(4)},list:{height:"63vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",overflowY:"scroll",marginLeft:e.spacing(3)},listItem:{maxHeight:"auto",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"space-between",paddingRight:e.spacing(8)},listText:{color:"#4791db",textTransform:"capitalize",fontSize:"small",fontWeight:"400"},listText1:{color:"#757ce8",fontSize:"8px",fontWeight:"250"},createNote:{color:"#FFF",padding:13,fontSize:"large",textTransform:"capitalize",fontWeight:300},icon:{marginRight:"auto",marginLeft:e.spacing(3)},text:{marginRight:"auto"},divider:{backgroundColor:"teal",height:"3px"},iconButton:{marginLeft:e.spacing(2)}}})),oe=a(87),le=a.n(oe),ue=a(166);var de=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(!0),c=Object(d.a)(s,2),o=c[0],p=c[1];Object(n.useEffect)((function(){var t=!0;return function(){var a=Object(u.a)(l.a.mark((function a(){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ae(e.loggedinUser.id);case 2:if(n=a.sent,t){a.next=5;break}return a.abrupt("return");case 5:i(n),p(!1);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){t=!1}}),[]);var m=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:i((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=ce();return o?Object(E.jsx)(ue.a,{}):0!==r.length?Object(E.jsxs)(v.a,{xs:12,className:f.paper,position:"static",children:[Object(E.jsxs)(v.a,{item:!0,xs:12,children:[Object(E.jsx)(N.a,{className:f.heading,variant:"h4",component:"h1",children:"Your Notes"}),Object(E.jsx)("hr",{})]}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(se,Object(A.a)(Object(A.a)({},e),{},{userNotes:r,setUserNotes:i}))}),Object(E.jsx)(v.a,{item:!0,xs:12,children:Object(E.jsx)(P.a,{className:f.list,children:r.map((function(e,t){var a=t+1;return Object(E.jsxs)(F.a,{dense:!0,className:f.listItem,children:[Object(E.jsx)(L.a,{primary:"Index: "+a}),Object(E.jsx)(L.a,{classes:{primary:f.listText},primary:"Note: "+e.text}),Object(E.jsx)(Z.a,{className:f.iconButton,children:Object(E.jsx)(q.a,{color:"primary","aria-label":"upload picture",component:"span",variant:"contained",onClick:function(){return m(e.id)},children:Object(E.jsx)(B.a,{})})}),Object(E.jsx)(D.a,{className:f.divider})]},le()())}))})})]}):Object(E.jsx)(v.a,{xs:12,className:f.paper,position:"static",children:Object(E.jsxs)(v.a,{children:[Object(E.jsx)(se,Object(A.a)(Object(A.a)({},e),{},{setUserNotes:i})),Object(E.jsx)("center",{children:Object(E.jsx)(N.a,{variant:"h5",children:"No notes to display"})})]})})},pe=a(18),me=a(90);function fe(e){var t=e.component,a=e.appProps,n=e.functionCall,r=Object(me.a)(e,["component","appProps","functionCall"]);return Object(E.jsx)(pe.b,Object(A.a)(Object(A.a)({},r),{},{render:function(e){return a.authFinder?Object(E.jsx)(t,Object(A.a)(Object(A.a)(Object(A.a)({},e),a),{},{functionCall:n})):Object(E.jsx)(pe.a,{to:a.to})}}))}function je(e,t){var a=Object(n.useState)((function(){return function(e,t){var a=JSON.parse(localStorage.getItem(e));return a||!1===a?a:t instanceof Function?t():t}(e,t)})),r=Object(d.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,s]}var be=a(172),he=a(173),xe=a(176),ge=Object(T.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,fontFamily:"fantasy",color:"#4267B2",fontWeight:"bolder"},margin:{margin:e.spacing(1),textTransform:"capitalize"},navbar:{backgroundColor:"#fff"}}}));function Oe(e){var t=ge();return Object(E.jsx)("div",{className:t.root,children:Object(E.jsx)(be.a,{className:t.navbar,position:"static",children:Object(E.jsxs)(he.a,{children:[Object(E.jsx)(N.a,{variant:"h5",className:t.title,children:"NOTES"}),Object(E.jsx)(c.b,{to:"/signup",style:{textDecoration:"none",color:"white"},children:Object(E.jsx)(x.a,{color:"primary",className:t.margin,variant:"contained",style:e.authFinder?{display:"none"}:{display:"block"},children:"Signup"})}),Object(E.jsx)(c.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(E.jsx)(x.a,{color:"primary",className:t.margin,variant:"contained",style:e.authFinder?{display:"none"}:{display:"block"},children:"Login"})}),Object(E.jsx)(xe.a,{only:"xs",children:Object(E.jsxs)(N.a,{color:"primary",variant:"subtitle1",style:e.authFinder?{display:"inline",marginRight:"20px"}:{display:"none"},children:["welcome:",e.loggedinUser.email]})}),Object(E.jsx)(c.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(E.jsx)(x.a,{color:"secondary",size:"medium",className:t.margin,variant:"contained",style:e.authFinder?{display:"block"}:{display:"none"},onClick:e.onLogout,children:"Logout"})})]})})})}var ve=function(){var e=je("loggedin",!1),t=Object(d.a)(e,2),a=t[0],r=t[1],i=je("user",{}),s=Object(d.a)(i,2),c=s[0],o=s[1];Object(n.useEffect)((function(){V.auth().onAuthStateChanged((function(e){if(e){var t={id:e.uid,email:e.email};o(t),r(!0)}else o({}),r(!1)}))}),[]);var m=function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(t,a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(E.jsxs)(p.a,{theme:b,children:[Object(E.jsx)(Oe,{onLogout:f,loggedinUser:c,authFinder:a}),Object(E.jsxs)(pe.d,{children:[Object(E.jsx)(fe,{exact:!0,path:"/notes",component:de,appProps:{authFinder:a,to:"/",loggedinUser:c}}),Object(E.jsx)(fe,{exact:!0,path:"/",component:z,functionCall:j,appProps:{authFinder:!a,to:"/notes"}}),Object(E.jsx)(fe,{exact:!0,path:"/signup",component:I,appProps:{authFinder:!a,to:"/notes"},functionCall:m})]})]})};s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(c.a,{children:Object(E.jsx)(ve,{})})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.e1ebf2fc.chunk.js.map