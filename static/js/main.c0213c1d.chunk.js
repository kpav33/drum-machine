(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{49:function(e,a,c){},56:function(e,a,c){"use strict";c.r(a);var t=c(1),i=c.n(t),n=c(17),s=c.n(n),d=c(25),r=c(31),o=c(28),u=(c(49),c(37)),l=c(36),b=c(3);var j=function(e){return Object(b.jsxs)("div",{className:"title",children:[e.changeSounds?Object(b.jsx)(l.a,{size:32}):Object(b.jsx)(u.a,{size:32}),Object(b.jsxs)("h1",{children:[e.changeSounds?"Piano":"Drum"," Machine"]})]})};var h=function(e){var a=Object(t.useRef)();function c(){if(a.current){a.current.volume=e.value,a.current.currentTime=0,a.current.pause(),a.current.load();var c=a.current.play();void 0!==c&&c.then((function(){})).catch((function(e){return console.log(e)}))}}function i(a){a.key.toUpperCase()===e.keyValue&&(e.innerText(e.id),document.getElementById(e.id).style.background="#525252",setTimeout((function(){document.getElementById(e.id).style.background="#ca3e47"}),300),c())}return Object(t.useEffect)((function(){return e.disabled||window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}})),Object(b.jsxs)("button",{className:"drum-pad",id:e.id,onClick:function(){e.innerText(e.id),c()},disabled:e.disabled,children:[e.keyValue,Object(b.jsx)("audio",{id:e.keyValue,src:e.src,className:"clip",ref:a})]})},p=[{src:c.p+"static/media/boom.d89f41a5.wav",id:"Boom"},{src:c.p+"static/media/clap.eb738e52.wav",id:"Clap"},{src:c.p+"static/media/hihat.0273528c.wav",id:"Hihat"},{src:c.p+"static/media/kick.1d842c55.wav",id:"Kick"},{src:c.p+"static/media/openhat.482e5231.wav",id:"Openhat"},{src:c.p+"static/media/ride.44e63854.wav",id:"Ride"},{src:c.p+"static/media/snare.3aa3f943.wav",id:"Snare"},{src:c.p+"static/media/tink.5b878d5d.wav",id:"Tink"},{src:c.p+"static/media/tom.52db9c23.wav",id:"Tom"}],m=[{src:c.p+"static/media/piano-1.2fd4bdb1.wav",id:"Piano-1"},{src:c.p+"static/media/piano-2.77b4be3c.wav",id:"Piano-2"},{src:c.p+"static/media/piano-3.f548f042.wav",id:"Piano-3"},{src:c.p+"static/media/piano-4.7f973d11.wav",id:"Piano-4"},{src:c.p+"static/media/piano-5.8bb67ef2.wav",id:"Piano-5"},{src:c.p+"static/media/piano-6.6845b5f4.wav",id:"Piano-6"},{src:c.p+"static/media/piano-7.27afc7bc.wav",id:"Piano-7"},{src:c.p+"static/media/piano-8.a494b91b.wav",id:"Piano-8"},{src:c.p+"static/media/piano-9.37dbdd90.wav",id:"Piano-9"}];var v=function(e){var a=["Q","W","E","A","S","D","Z","X","C"],c=e.changeSounds?m:p;return Object(b.jsx)("div",{className:"buttonsPad",children:c.map((function(c,t){return Object(b.jsx)(h,{src:c.src,id:c.id,keyValue:a[t],innerText:e.innerText,value:e.value,disabled:e.disabled},c.id)}))})};var x=function(e){return Object(b.jsx)("div",{id:"display",className:"display",children:Object(b.jsx)("p",{children:e.disabled?"No power!":e.innerText})})},O=c(79),w=c(58),k=c(82),f=c(39),C=c.n(f),g=c(40),P=c.n(g);var y=function(e){return Object(b.jsxs)("div",{className:"sliderVolume",children:[Object(b.jsx)(w.a,{id:"continuous-slider",gutterBottom:!0,children:"Volume"}),Object(b.jsxs)(O.a,{container:!0,spacing:2,children:[Object(b.jsx)(O.a,{item:!0,children:Object(b.jsx)(C.a,{})}),Object(b.jsx)(O.a,{item:!0,xs:!0,children:Object(b.jsx)(k.a,{value:e.value,onChange:function(a,c){e.setValue(c),e.innerText("Volume: ".concat(Math.round(100*c)))},"aria-labelledby":"continuous-slider",min:0,max:1,step:.01,disabled:e.disabled})}),Object(b.jsx)(O.a,{item:!0,children:Object(b.jsx)(P.a,{})})]})]})},T=c(81),S=c(80),N=c(6),V=Object(N.a)({switchBase:{color:"#FFFFFF","&$checked":{color:"#ca3e47"},"&$checked + $track":{backgroundColor:"#ca3e47"}},checked:{},track:{}})(T.a);var B=function(e){var a=e.switches,c=e.handleChange;return Object(b.jsxs)("div",{className:"bottomBar",children:[Object(b.jsx)(S.a,{control:Object(b.jsx)(V,{checked:a.powerCheck,onChange:c,name:"powerCheck",inputProps:{"aria-label":"power checkbox"}}),label:"Power"}),Object(b.jsx)(S.a,{control:Object(b.jsx)(V,{checked:a.soundsCheck,onChange:c,name:"soundsCheck",inputProps:{"aria-label":"sounds checkbox"},disabled:!a.powerCheck}),label:"Piano",labelPlacement:"start"})]})};var E=function(){var e=Object(t.useState)("Powered up!"),a=Object(o.a)(e,2),c=a[0],i=a[1],n=Object(t.useState)(.3),s=Object(o.a)(n,2),u=s[0],l=s[1],h=Object(t.useState)({powerCheck:!0,soundsCheck:!1}),p=Object(o.a)(h,2),m=p[0],O=p[1];return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)("div",{className:"panel",id:"drum-machine",children:[Object(b.jsx)(j,{changeSounds:m.soundsCheck}),Object(b.jsx)(v,{innerText:i,value:u,disabled:!m.powerCheck,changeSounds:m.soundsCheck}),Object(b.jsx)(x,{innerText:c,disabled:!m.powerCheck}),Object(b.jsx)(y,{innerText:i,value:u,setValue:l,disabled:!m.powerCheck}),Object(b.jsx)(B,{switches:m,handleChange:function(e){O(Object(r.a)(Object(r.a)({},m),{},Object(d.a)({},e.target.name,e.target.checked))),i("Powered up!")}})]})})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c0213c1d.chunk.js.map