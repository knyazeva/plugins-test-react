(this["webpackJsonpplugins-test-react"]=this["webpackJsonpplugins-test-react"]||[]).push([[0],{187:function(e,t,a){e.exports=a(367)},192:function(e,t,a){},285:function(e,t){},367:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(12),r=a.n(l),o=(a(192),a(5)),i=a(6),u=a(7),s=a(8),m=a(9),h=a(57),d=a.n(h),p=[{id:1,name:"\u041c\u0438\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0435\u0447\u0435\u043d\u044c\u0435",price:"90\u0440",inStock:!0},{id:2,name:"\u042f\u0431\u043b\u043e\u0447\u043d\u044b\u0439 \u043f\u0438\u0440\u043e\u0433",price:"180\u0440",inStock:!0},{id:3,name:"\u0411\u0443\u0431\u043b\u0438\u043a",price:"40\u0440",inStock:!1},{id:4,name:"\u0422\u043e\u0440\u0442-\u0431\u0435\u0437\u0435",price:"80\u0440",inStock:!0},{id:5,name:"\u0417\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u043e\u0435 \u044f\u0431\u043b\u043e\u043a\u043e",price:"50\u0440",inStock:!0},{id:6,name:"\u041f\u0430\u0445\u043b\u0430\u0432\u0430",price:"40\u0440",inStock:!1},{id:7,name:"\u041c\u043e\u0440\u043e\u0436\u0435\u043d\u043d\u043e\u0435 \u0441 \u0431\u0430\u043d\u0430\u043d\u043e\u043c",price:"100\u0440",inStock:!0}],E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).onChangeValue=function(e){a.props.onChangeValueSearch(e.target.value)},a.onChangeShowStock=function(){a.props.onChangeShowStock()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0412\u0430\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442:"),c.a.createElement("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",defaultValue:this.props.value,onChange:this.onChangeValue}),c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.showOnlyStock&&"checked",onChange:this.onChangeShowStock}),"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0442\u043e\u0432\u0430\u0440\u044b, \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"))}}]),t}(c.a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"/"},this.props.item.name)),c.a.createElement("td",null,c.a.createElement("div",{className:d.a.price},this.props.item.price)),c.a.createElement("td",null,c.a.createElement("div",{className:d.a.stock},this.props.item.inStock?c.a.createElement("span",{className:d.a.yesStock},"\u0415\u0441\u0442\u044c \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"):c.a.createElement("span",{className:d.a.noStock},"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("table",null,c.a.createElement("tbody",null,this.props.showOnlyStock?this.props.products.filter((function(t){return t.name.toLowerCase().indexOf(e.props.valueSearch)>=0})).filter((function(e){return e.inStock})).map((function(e){return c.a.createElement(b,{key:e.id,item:e})})):this.props.products.filter((function(t){return t.name.toLowerCase().indexOf(e.props.valueSearch)>=0})).map((function(e){return c.a.createElement(b,{key:e.id,item:e})}))))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).onChangeValueSearch=function(e){a.setState({searchValue:e})},a.onChangeShowStock=function(){a.setState((function(e,t){return{showOnlyStock:!e.showOnlyStock}}))},a.state={searchValue:"",showOnlyStock:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,{value:this.state.searchValue,onChangeValueSearch:this.onChangeValueSearch,onChangeShowStock:this.onChangeShowStock,showOnlyStock:this.state.showOnlyStock}),c.a.createElement(f,{products:p,valueSearch:this.state.searchValue,showOnlyStock:this.state.showOnlyStock}))}}]),t}(c.a.Component),y=a(185),O=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"\u041f\u043b\u0430\u0433\u0438\u043d\u0430 Select"),c.a.createElement(y.a,{className:"select",defaultValue:[O[1]],isMulti:!0,options:O}))}}]),t}(c.a.Component),k=a(35),j=a(178),S=a.n(j),w=a(36),x=[{id:1,src:"/../images/img2.png",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 1"},{id:2,src:"/../images/img3.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 2"},{id:3,src:"/../images/img5.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 3"},{id:4,src:"/../images/img6.jpg",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 4"}];var C=function(){var e=Object(n.useState)(0),t=Object(k.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(k.a)(r,2),i=o[0],u=o[1],s=Object(n.useCallback)((function(e,t){l(t-1),u(!0)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"\u0421\u043b\u0430\u0439\u0434\u0435\u0440 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430\u043c\u0438"),c.a.createElement(S.a,Object.assign({},{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1},{className:"slider-photo"}),x.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("img",{src:e.src,alt:e.alt,onClick:function(t){return s(t,e.id)}}))}))),c.a.createElement(w.b,null,i?c.a.createElement(w.a,{onClose:function(){l(0),u(!1)}},c.a.createElement(w.c,{currentIndex:a,views:x})):null))},D=a(181),N=a.n(D),V=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.$el=N()(this.element),this.$el.html("\u042d\u0442\u043e\u0442 \u0442\u0435\u0441\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e jQuery")}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 jQuery"),c.a.createElement("div",{className:"test",ref:function(t){return e.element=t}}))}}]),t}(c.a.Component),I=a(46),_={center:[55.75307,37.622676],zoom:13,behaviors:["drag"]},A=[[55.760862,37.638297],[55.753893,37.616668],[55.745518,37.631945],[55.75578,37.586283]],L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"map"},c.a.createElement("h2",null,"\u041a\u0430\u0440\u0442\u0430 Yandex"),c.a.createElement(I.d,null,c.a.createElement(I.a,{defaultState:_,width:"50%",height:"400px"},A.map((function(e){return c.a.createElement(I.b,{key:e,geometry:e,options:{iconLayout:"default#image",iconImageHref:"/images/metka.jpg",iconImageSize:[40,40],iconImageOffset:[-3,-42]}})})),c.a.createElement(I.e,null),c.a.createElement(I.c,{options:{float:"right"},defaultState:{fromEnabled:!1,from:"moscow",to:"saint petersburg",type:"auto"}}))))}}]),t}(c.a.Component),T=a(182),J=[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3}];var P=function(){var e=Object(n.useState)(0),t=Object(k.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),o=Object(k.a)(r,2),i=o[0],u=o[1],s=Object(n.useCallback)((function(e,t){var a=t.index;l(a),u(!0)}),[]);return c.a.createElement("div",{className:"gallery"},c.a.createElement("h2",null,"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f"),c.a.createElement(T.a,{photos:J,onClick:s}),c.a.createElement(w.b,null,i?c.a.createElement(w.a,{onClose:function(){l(0),u(!1)}},c.a.createElement(w.c,{currentIndex:a,views:J})):null))},R=(a(272),a(305),a(183)),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={startDate:null,endDate:null,focusedInput:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"calendar"},c.a.createElement("h2",null,"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c"),c.a.createElement(R.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:this.state.startDate,endDate:this.state.endDate,onDatesChange:function(t){var a=t.startDate,n=t.endDate;e.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){e.setState({focusedInput:t})}}))}}]),t}(c.a.Component),B=(a(363),a(13)),F=[{angle:1},{angle:5,label:"Super Custom label",subLabel:"With annotation"},{angle:3}],Q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=new Date("November 1 2019").getTime();return c.a.createElement("div",null,c.a.createElement("h2",null,"\u0413\u0440\u0430\u0444\u0438\u043a \u21161"),c.a.createElement(B.g,{xType:"linear",width:700,height:300},c.a.createElement(B.a,null),c.a.createElement(B.e,null),c.a.createElement(B.f,{title:"X Axis"}),c.a.createElement(B.h,{title:"Y Axis"}),c.a.createElement(B.b,{data:[{x:1,y:3},{x:2,y:5},{x:3,y:15},{x:4,y:12}]}),c.a.createElement(B.b,{data:null}),c.a.createElement(B.b,{data:[{x:1,y:10},{x:2,y:4},{x:4,y:2},{x:5,y:15}]})),c.a.createElement("h2",null,"\u0413\u0440\u0430\u0444\u0438\u043a \u21162"),c.a.createElement(B.g,{margin:{bottom:70},xType:"ordinal",width:700,height:300},c.a.createElement(B.e,null),c.a.createElement(B.a,null),c.a.createElement(B.f,{tickLabelAngle:-45}),c.a.createElement(B.h,null),c.a.createElement(B.d,{data:[{x:"Apples",y:10},{x:"Bananas",y:5},{x:"Cranberries",y:15}]}),c.a.createElement(B.d,{data:[{x:"Apples",y:12},{x:"Bananas",y:2},{x:"Cranberries",y:11}]})),c.a.createElement("h2",null,"\u041a\u0440\u0443\u0433\u043e\u0432\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430"),c.a.createElement(B.c,{data:F,width:300,height:300}),c.a.createElement("h2",null,"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0433\u0440\u0430\u0444\u0438\u043a"),c.a.createElement(B.g,{xType:"time",width:700,height:300},c.a.createElement(B.a,null),c.a.createElement(B.e,null),c.a.createElement(B.f,{title:"November"}),c.a.createElement(B.h,{title:"Value"}),c.a.createElement(B.b,{data:[{x:e+2736e5,y:3},{x:e+5472e5,y:5},{x:e+8208e5,y:15},{x:e+10944e5,y:12}]}),c.a.createElement(B.b,{data:null}),c.a.createElement(B.b,{data:[{x:e+2736e5,y:10},{x:e+5472e5,y:4},{x:e+8208e5,y:2},{x:e+10944e5,y:15}]})))}}]),t}(c.a.Component),Y={count:0};function $(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}var q=function(){var e=Object(n.useReducer)($,Y),t=Object(k.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",null,c.a.createElement("h2",null,'\u0421\u0447\u0451\u0442\u0447\u0438\u043a \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0445\u0443\u043a\u0430 "useReducer"'),c.a.createElement("button",{onClick:function(){l({type:"decrement"})}},"-"),c.a.createElement("span",null," ",a.count," "),c.a.createElement("button",{onClick:function(){l({type:"increment"})}},"+"))};var z=function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 Sass"),c.a.createElement("h4",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u0438\u043b\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0435\u0440\u0435\u0431\u043e\u0440\u0430:"),c.a.createElement("div",{className:"cat-icon"},"cat"),c.a.createElement("div",{className:"dog-icon"},"dog"),c.a.createElement("h4",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u0438\u043a\u0441\u0438\u043d\u0430 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438:"),c.a.createElement("div",{className:"font-1"},"text"),c.a.createElement("div",{className:"font-2"},"text"))};var M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(V,null),c.a.createElement(v,null),c.a.createElement(q,null),c.a.createElement(C,null),c.a.createElement(z,null),c.a.createElement(L,null),c.a.createElement(P,null),c.a.createElement(W,null),c.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports={price:"searchProducts_price__3Jg0G",stock:"searchProducts_stock__3Q6Xr",yesStock:"searchProducts_yesStock__ZW75L",noStock:"searchProducts_noStock__22pFD"}}},[[187,1,2]]]);
//# sourceMappingURL=main.a0463bba.chunk.js.map