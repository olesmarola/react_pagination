(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(1),o=a(2),u=a(4),s=a(3),g=a(5),p=(a(14),a(6)),m=a.n(p),h=[3,5,10,20],P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={startPage:a.props.page,currentPage:a.props.page,perPage:a.props.perPage},a.handleClick=function(e){a.setState({currentPage:+e.target.value})},a.setItemsPerPage=function(e){var t=e.target.value;a.setState(function(e){return{perPage:+t,currentPage:e.startPage}})},a.goToPrevPage=function(){a.setState(function(e){return{currentPage:e.currentPage-1}})},a.goToNextPage=function(){a.setState(function(e){return{currentPage:e.currentPage+1}})},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this,t=this.state,a=t.startPage,n=t.currentPage,l=t.perPage,c=this.props.tableData,i=n*l,o=i-l,u=[],s=1;s<=Math.ceil(c.length/l);s+=1)u.push(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:this.setItemsPerPage,defaultValue:l},h.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("ul",null,c.slice(o,i).map(function(e){return r.a.createElement("li",{key:+new Date+Math.random()},e)})),r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,this.props.withInfo&&r.a.createElement("span",{className:"pagination__info"},"".concat(o+1,"-").concat(i>c.length?c.length:n*l))),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:m()("pagination__page",{"pagination__page--disabled":n===a}),onClick:this.goToPrevPage,disabled:n===a},"Previous")),u.map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("button",{className:m()("pagination__page",{"pagination__page--active":n===t}),type:"button",key:t,value:t,onClick:e.handleClick},t))}),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:m()("pagination__page",{"pagination__page--disabled":n===u.length}),disabled:n===u.length,onClick:this.goToNextPage},"Next"))))}}]),t}(r.a.Component);P.defaultProps={page:1,perPage:5,withInfo:!1};var f=P,b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={tableData:["a","b","c","d","e","f","g","h","i","j","k"]},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pagination"),r.a.createElement(f,{tableData:this.state.tableData,perPage:5,page:1,withInfo:!0}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1e33e2f6.chunk.js.map