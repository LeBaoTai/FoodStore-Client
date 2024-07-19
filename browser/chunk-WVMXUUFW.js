import{E as g,G as w,H as M,I as P,J as p,K as a,L as s,P as O,R as h,S as I,T as S,Y as m,da as u,ea as j,f as x,fa as F,ga as T,j as v,k as c,m as b,ma as y,n as d,na as z,o as l,y as n,z as C}from"./chunk-3KH4IXA3.js";var D=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=d({type:t,selectors:[["app-product"]],inputs:{product:"product"},standalone:!0,features:[m],decls:9,vars:3,consts:[[1,"wrapper"],[1,"picture"],["alt","Product image","width","150","height","100","priority","",3,"ngSrc"],[1,"name"],[1,"price"]],template:function(r,i){r&1&&(p(0,"div",0)(1,"div",1),s(2,"img",2),a(),p(3,"div",3)(4,"p"),h(5),a()(),p(6,"div",4)(7,"p"),h(8),a()()()),r&2&&(n(2),O("ngSrc",i.product.image),n(3),I(i.product.name),n(3),S("$",i.product.price,""))},dependencies:[j],styles:[".wrapper[_ngcontent-%COMP%]{padding:10px;width:180px;height:250px;background-color:var(--bg-color);box-sizing:border-box;border-radius:5px;border:1px solid var(--border-color)}.wrapper[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{padding:5px}.wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-family:Inter,sans-serif}.wrapper[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:16px;color:#ff42ae}.wrapper[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:5px 5px 10px #f0f0f0;border:none}"]});let e=t;return e})();var E=(()=>{let t=class t{constructor(o){this.http=o,this.url="http://localhost:8080/api"}getAllProducts(){let o=new F({"Content-Type":"Application/json"});return this.http.get(`${this.url}/products/all`,{headers:o}).pipe(x(r=>r.result))}};t.\u0275fac=function(r){return new(r||t)(b(T))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function B(e,t){if(e&1&&s(0,"app-product",4),e&2){let A=t.$implicit;g("product",A)}}var N=(()=>{let t=class t{constructor(o){this.productService=o,this.foodTitle="Category",this.foodTiles=[{image:"assets/category/select-all.png",title:"All",url:""},{image:"assets/category/vegetables.png",title:"Vegetables",url:"/vegetables"},{image:"assets/category/meat.png",title:"Meat",url:"/meat"},{image:"assets/category/seafood.png",title:"Seafoot",url:"/seafoot"},{image:"assets/category/dairy.png",title:"Dairy",url:"/dairy"},{image:"assets/category/fruits.png",title:"Fruits",url:"/fruit"}],this.products=[],this.productService.getAllProducts().subscribe({next:r=>{this.products=r},error:r=>{console.log(r)}})}};t.\u0275fac=function(r){return new(r||t)(C(E))},t.\u0275cmp=d({type:t,selectors:[["app-home"]],standalone:!0,features:[m],decls:6,vars:2,consts:[[1,"wrapper","row"],[1,"side-bar"],[3,"tiles","title"],[1,"product","flex","wrap","justify-start","gap-1"],[3,"product"]],template:function(r,i){r&1&&(p(0,"div",0)(1,"div",1),s(2,"app-side-bar",2),a(),p(3,"div",3),M(4,B,1,1,"app-product",4,w),a()()),r&2&&(n(2),g("tiles",i.foodTiles)("title",i.foodTitle),n(2),P(i.products))},dependencies:[z,D,u],styles:[".wrapper[_ngcontent-%COMP%]{padding:15px;box-sizing:border-box;flex-grow:1}.wrapper[_ngcontent-%COMP%]   .side-bar[_ngcontent-%COMP%]{width:15%;padding:10px;box-sizing:border-box}.wrapper[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{flex-grow:1;width:85%;padding:10px;box-sizing:border-box}"]});let e=t;return e})();var H=[{path:"",component:N}],k=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=l({type:t}),t.\u0275inj=c({imports:[y.forChild(H),y]});let e=t;return e})();var tt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=l({type:t}),t.\u0275inj=c({imports:[u,k]});let e=t;return e})();export{tt as HomeModule};
