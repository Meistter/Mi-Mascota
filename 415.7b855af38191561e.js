"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[415],{3415:(U,d,i)=>{i.r(d),i.d(d,{HomeModule:()=>H});var r=i(6895),l=i(9485),g=i(9299),t=i(4650),c=i(8879),f=i(4986),h=i(5963);function C(e,o){if(1&e&&(t.TgZ(0,"a",4),t._UZ(1,"img",5),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",n.image,t.LSH)}}function v(e,o){1&e&&t.YNc(0,C,2,1,"ng-template",3)}c.ZP.use([c.W_,c.tl,c.LW,c.s5]);let b=(()=>{class e{constructor(){this.slides=[{image:"https://i.postimg.cc/hGWrcgwK/banner-notext.jpg",url:""}],this.config={loop:!0,slidesPerView:1,spaceBetween:0,navigation:!1,pagination:{clickable:!0},scrollbar:{draggable:!0}}}automatico(n){(function _(e=0,o=f.z){return e<0&&(e=0),(0,h.H)(e,e,o)})(6e4).subscribe(()=>{n.slideNext()})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],decls:3,vars:2,consts:[[1,"carousel-container"],[3,"config","swiper"],[4,"ngFor","ngForOf"],["swiperSlide",""],["target","_blank",3,"href"],["alt","foto",1,"swiper-image",3,"src"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"swiper",1),t.NdJ("swiper",function(u){return a.automatico(u)}),t.YNc(2,v,1,0,null,2),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("config",a.config),t.xp6(1),t.Q6J("ngForOf",a.slides))},dependencies:[r.sg,l.nF,l.YC],styles:[".swiper-image[_ngcontent-%COMP%]{width:100%!important;height:182px!important;display:block!important;object-fit:cover;padding:0;margin-bottom:-6px}"]}),e})();var m=i(9549),x=i(4385),y=i(3238);function M(e,o){if(1&e&&(t.TgZ(0,"mat-option",7),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.value," ")}}let O=(()=>{class e{constructor(){this.locations=[{value:"Barquisimeto"},{value:"Valencia"},{value:"Maracaibo"},{value:"Caracas"}],this.selected="Barquisimeto",this.btnIzquierda=!1,this.btnDerecha=!0}activarBtnIzquierda(){this.btnIzquierda=!0,this.btnDerecha=!1}activarBtnDerecha(){this.btnIzquierda=!1,this.btnDerecha=!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-switcher"]],decls:11,vars:4,consts:[[1,"switcher-container"],[2,"width","180px"],["disableRipple","",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[1,"switcher__buttons"],[1,"button-left",3,"ngClass","click"],[1,"button-right",3,"ngClass","click"],[3,"value"]],template:function(n,a){1&n&&(t.TgZ(0,"section",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Ubicaci\xf3n"),t.qZA(),t.TgZ(4,"mat-select",2),t.NdJ("valueChange",function(u){return a.selected=u}),t.YNc(5,M,2,2,"mat-option",3),t.qZA()(),t.TgZ(6,"div",4)(7,"button",5),t.NdJ("click",function(){return a.activarBtnIzquierda()}),t._uU(8,"Adoptar"),t.qZA(),t.TgZ(9,"button",6),t.NdJ("click",function(){return a.activarBtnDerecha()}),t._uU(10,"Rescatar"),t.qZA()()()),2&n&&(t.xp6(4),t.Q6J("value",a.selected),t.xp6(1),t.Q6J("ngForOf",a.locations),t.xp6(2),t.Q6J("ngClass",a.btnIzquierda?"active":"inactive"),t.xp6(2),t.Q6J("ngClass",a.btnDerecha?"active":"inactive"))},dependencies:[r.mk,r.sg,m.KE,m.hX,x.gD,y.ey],styles:[".switcher-container[_ngcontent-%COMP%]{width:100%;height:60px;padding:18px;margin-top:6px;display:flex;align-items:center;justify-content:space-between}.switcher__buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:right}.switcher__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#000;width:70px;height:32px;margin:0;padding:0;border:solid;border-color:#000;border-width:1px;cursor:pointer}.switcher__buttons[_ngcontent-%COMP%]   .button-left[_ngcontent-%COMP%]{border-radius:4px 0 0 4px;border-right:none}.switcher__buttons[_ngcontent-%COMP%]   .button-right[_ngcontent-%COMP%]{border-radius:0 4px 4px 0}.active[_ngcontent-%COMP%]{background-color:var(--background-gray)}.inactive[_ngcontent-%COMP%]{background-color:#fff}"]}),e})();var w=i(3336),p=i(3546);function P(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1," Vacunado: Si "),t.qZA())}function Z(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1," Vacunado: No"),t.qZA())}let T=(()=>{class e{constructor(){this.pet={name:"string",description:"string",age:0,health:"string",vaccinated:!1,location:"string",photos:[{url:"",alt:""}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{pet:"pet"},decls:26,vars:9,consts:[[1,"card-container"],["mat-card-image","",3,"src","alt"],[1,"card-container__articles"],[1,"info__left"],[1,"info__left-details"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"info__right"],[1,"location"],[2,"font-size","12px"],[1,"detail-button"],[1,"adopt-button"]],template:function(n,a){if(1&n&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content",2)(3,"article",3)(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"div",4)(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.YNc(13,P,2,0,"p",5),t.YNc(14,Z,2,0,"ng-template",null,6,t.W1O),t.qZA()(),t.TgZ(16,"article",7)(17,"div",8)(18,"mat-icon",9),t._uU(19,"location_on"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()(),t.TgZ(22,"button",10),t._uU(23,"Ver detalles"),t.qZA(),t.TgZ(24,"button",11),t._uU(25,"\xa1Darle un Hogar!"),t.qZA()()()()),2&n){const s=t.MAs(15);t.xp6(1),t.s9C("src",a.pet.photos[0].url,t.LSH),t.s9C("alt",a.pet.photos[0].alt),t.xp6(4),t.Oqu(a.pet.name),t.xp6(2),t.Oqu(a.pet.description),t.xp6(3),t.hij("Salud: ",a.pet.health," | "),t.xp6(2),t.hij(" Edad: ",a.pet.age," a\xf1os | "),t.xp6(1),t.Q6J("ngIf",a.pet.vaccinated)("ngIfElse",s),t.xp6(8),t.Oqu(a.pet.location)}},dependencies:[r.O5,w.Hw,p.a8,p.dn,p.G2],styles:[".card-container[_ngcontent-%COMP%]{width:90vw;max-width:360px;background-color:var(--card-background-gray);border-radius:0;padding:14px;margin:12px}.card-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:300px;object-fit:cover}.card-container__articles[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0;position:relative}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]{font-family:Inter}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;margin:12px 0}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:13px;font-weight:400;padding-right:4px;margin-bottom:16px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;font-size:12px}.card-container__articles[_ngcontent-%COMP%]   .info__left[_ngcontent-%COMP%]   .info__left-details[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;flex-direction:row}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#000;font-size:12px;font-family:Inter;font-weight:550;width:110px;height:30px;margin:8px 0 8px 8px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .adopt-button[_ngcontent-%COMP%]{margin-top:0;background-color:var(--card-button-background)}.card-container__articles[_ngcontent-%COMP%]   .info__right[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:4px}"]}),e})();function q(e,o){1&e&&t._UZ(0,"app-card",2),2&e&&t.Q6J("pet",o.$implicit)}let A=(()=>{class e{constructor(){this.pets=[{name:"Arturo el Canguro",description:"Es un conejito muy bien portado, le encanta jugar comer zanahoria y dormir por las tardes",age:2,health:"Buena",location:"Caracas",vaccinated:!1,photos:[{url:"https://mascotafiel.com/wp-content/uploads/2017/02/C%C3%B3mo-hacer-juguetes-para-conejos-1_opt.jpg",alt:""}]},{name:"Ramon el Loro",description:"Un ave muy noble sabe cantar opera y a veces se destaca con un rap",age:1,health:"Buena",location:"Valencia",vaccinated:!1,photos:[{url:"https://t1.ea.ltmcdn.com/es/posts/5/7/0/tipos_de_juguetes_para_loros_24075_2_600.jpg",alt:""}]},{name:"Kiara Renata",description:"Es una perrita muy consentida, solo come perrarina en la boca y una por una, no le gusta el pollo ni los gatos",age:3,health:"Buena",location:"Barquisimeto",vaccinated:!0,photos:[{url:"https://i.postimg.cc/YCtqMP6J/kiara.jpg",alt:""}]},{name:"Sofia Victoria",description:"Es una gata consentida y cari\xf1osa, come como por 3 gatos y le encanta hacer popo por toda la casa",age:1,health:"Buena",location:"Barquisimeto",vaccinated:!0,photos:[{url:"https://i.postimg.cc/8PyHD2WY/sofia.jpg",alt:""}]},{name:"Max patitas cortas",description:"Es muy caprichoso y piqui para comer no come cualquier tipo de croqueta y le teme a la oscuridad, pero es biling\xfce y es bonito",age:1,health:"Buena",location:"Texas",vaccinated:!0,photos:[{url:"https://i.postimg.cc/X7wy5ydp/max.jpg",alt:""}]},{name:"Kira",description:"Me gusta jugar con los calcetines de mis padres y morderme la cola una y otra vez hasta que mis padres tienen que separarme porque me puedo hacer da\xf1o, solo como gatarina CatShow",age:3,health:"Buena",location:"Maracaibo",vaccinated:!1,photos:[{url:"https://i.postimg.cc/JzMH545K/sofia.jpg",alt:""}]},{name:"Pirata Sparrow",description:"Amigable, le gustan los ni\xf1os y es super cari\xf1oso, buena compa\xf1\xeda para personas mayores",age:.5,health:"Buena",location:"Texas",vaccinated:!0,photos:[{url:"https://i.postimg.cc/Cx7BPTv0/pirata.jpg",alt:""}]}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cards"]],decls:2,vars:1,consts:[[1,"card-container"],["class","app-card",3,"pet",4,"ngFor","ngForOf"],[1,"app-card",3,"pet"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,q,1,1,"app-card",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",a.pets))},dependencies:[r.sg,T],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.app-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),e})();const j=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:3,vars:0,template:function(n,a){1&n&&t._UZ(0,"app-carousel")(1,"app-switcher")(2,"app-cards")},dependencies:[b,O,A]}),e})(),title:"Home"}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(j),g.Bz]}),e})();var z=i(6770);let H=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,B,l.kz,z.q]}),e})()}}]);