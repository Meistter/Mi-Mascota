"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[390],{4390:(S,u,c)=>{c.r(u),c.d(u,{PetCategoriesModule:()=>k});var s=c(6895),a=c(3060),e=c(4650),_=c(5833),C=c(770),M=c(691),h=c(2102),g=c(7392);function d(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"li",18),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return n.changeStatusMenu(),e.KtG(n.updateLocation())}),e._uU(1),e.qZA()}if(2&i){const o=r.$implicit;e.xp6(1),e.Oqu(o)}}const p=function(){return{filter:"all"}},m=function(){return{filter:"big"}},P=function(){return{filter:"regular"}},y=function(){return{filter:"small"}};function f(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"article",19)(1,"b"),e._uU(2,"Tama\xf1o: "),e.qZA(),e.TgZ(3,"p",20),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return n.changeStatusSizeMenu(),n.closeCategoryMenu(),e.KtG(n.closeMenu())}),e._uU(4),e.qZA(),e.TgZ(5,"mat-icon",21),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return n.changeStatusSizeMenu(),n.closeCategoryMenu(),e.KtG(n.closeMenu())}),e._uU(6,"expand_more"),e.qZA(),e.TgZ(7,"ul",22)(8,"li",6),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.changeStatusSizeMenu())}),e._uU(9,"Todos"),e.qZA(),e.TgZ(10,"li",6),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.changeStatusSizeMenu())}),e._uU(11,"Grande"),e.qZA(),e.TgZ(12,"li",6),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.changeStatusSizeMenu())}),e._uU(13,"Mediano"),e.qZA(),e.TgZ(14,"li",6),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.changeStatusSizeMenu())}),e._uU(15,"Peque\xf1o"),e.qZA()()()}if(2&i){const o=e.oxw();e.xp6(4),e.Oqu(o.getFilterName()),e.xp6(3),e.Q6J("ngClass",o.statusSizeMenu?"active":"inactive"),e.xp6(1),e.Q6J("queryParams",e.DdM(6,p)),e.xp6(2),e.Q6J("queryParams",e.DdM(7,m)),e.xp6(2),e.Q6J("queryParams",e.DdM(8,P)),e.xp6(2),e.Q6J("queryParams",e.DdM(9,y))}}const O=[{path:"",component:(()=>{class i{constructor(o,t,n,l,v){this.locationService=o,this.petService=t,this.route=n,this.router=l,this.categoryService=v,this.pets=[],this.MainPets=[],this.locations=[],this.statusMenu=!1,this.statusCategoryMenu=!1,this.statusSizeMenu=!1,this.categoryName=void 0,this.categoryId=null,this.sizeFilter=null,this.breed="Perro",this.location="Cualquiera",this.size="Peque\xf1o",this.i=0}onClickEvent(o){var n=o.target.id;"category"!=n&&"location"!=n&&"size"!=n&&(this.closeMenu(),this.closeCategoryMenu(),this.closeSizeMenu())}ngOnInit(){this.locations=this.locationService.getLocations(),setTimeout(()=>{this.route.paramMap.subscribe(o=>{this.categoryId=o.get("id"),this.categoryId&&(this.MainPets=this.petService.getPetsByCategory(this.categoryId),this.pets=this.MainPets,this.categoryName=this.categoryService.getCategoryName(this.categoryId)),null==this.categoryName&&this.router.navigate(["/none"]),this.route.queryParamMap.subscribe(t=>{this.sizeFilter=t.get("filter"),this.pets="all"!==this.sizeFilter?this.MainPets.filter(n=>n.size==this.sizeFilter):this.MainPets})})},1e3)}getFilterName(){return"big"==this.sizeFilter?"Grande":"regular"==this.sizeFilter?"Mediano":"small"==this.sizeFilter?"Peque\xf1o":"Todos"}changeStatusMenu(){this.statusMenu=!this.statusMenu}changeStatusCategoryMenu(){this.statusCategoryMenu=!this.statusCategoryMenu}changeStatusSizeMenu(){this.statusSizeMenu=!this.statusSizeMenu}updateLocation(){this.location=this.locations[0]}closeMenu(){this.statusMenu=!1}closeCategoryMenu(){this.statusCategoryMenu=!1}closeSizeMenu(){this.statusSizeMenu=!1}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(_.a),e.Y36(C.O),e.Y36(a.gz),e.Y36(a.F0),e.Y36(M.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pet-category"]],hostBindings:function(o,t){1&o&&e.NdJ("click",function(l){return t.onClickEvent(l)},!1,e.evT)},decls:33,vars:10,consts:[[1,"pet-search-container"],[1,"pet-search-content"],[1,"categoryMenu"],["id","category",3,"click"],["id","category",2,"font-size","20px","cursor","pointer",3,"click"],[1,"category-menu",3,"ngClass"],["routerLink","/pet-category/0",3,"queryParams","click"],["routerLink","/pet-category/1",3,"click"],["routerLink","/pet-category/2",3,"click"],["routerLink","/pet-category/3",3,"click"],["routerLink","/pet-category/4",3,"click"],[1,"locationMenu"],["id","location",3,"click"],["id","location",2,"font-size","20px","cursor","pointer",3,"click"],[1,"location-menu",3,"ngClass"],[3,"click",4,"ngFor","ngForOf"],["class","sizeMenu",4,"ngIf"],[3,"pets"],[3,"click"],[1,"sizeMenu"],["id","size",3,"click"],["id","size",2,"font-size","20px","cursor","pointer",3,"click"],[1,"size-menu",3,"ngClass"]],template:function(o,t){1&o&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"div",1)(4,"article",2)(5,"b"),e._uU(6,"Especie: "),e.qZA(),e.TgZ(7,"p",3),e.NdJ("click",function(){return t.changeStatusCategoryMenu(),t.closeMenu(),t.closeSizeMenu()}),e._uU(8),e.qZA(),e.TgZ(9,"mat-icon",4),e.NdJ("click",function(){return t.changeStatusCategoryMenu(),t.closeMenu(),t.closeSizeMenu()}),e._uU(10,"expand_more"),e.qZA(),e.TgZ(11,"ul",5)(12,"li",6),e.NdJ("click",function(){return t.changeStatusCategoryMenu()}),e._uU(13,"Perros"),e.qZA(),e.TgZ(14,"li",7),e.NdJ("click",function(){return t.changeStatusCategoryMenu()}),e._uU(15,"Gatos"),e.qZA(),e.TgZ(16,"li",8),e.NdJ("click",function(){return t.changeStatusCategoryMenu()}),e._uU(17,"Aves"),e.qZA(),e.TgZ(18,"li",9),e.NdJ("click",function(){return t.changeStatusCategoryMenu()}),e._uU(19,"Tortugas"),e.qZA(),e.TgZ(20,"li",10),e.NdJ("click",function(){return t.changeStatusCategoryMenu()}),e._uU(21,"Conejos"),e.qZA()()(),e.TgZ(22,"article",11)(23,"b"),e._uU(24,"Ubicaci\xf3n: "),e.qZA(),e.TgZ(25,"p",12),e.NdJ("click",function(){return t.changeStatusMenu(),t.closeCategoryMenu(),t.closeSizeMenu()}),e._uU(26),e.qZA(),e.TgZ(27,"mat-icon",13),e.NdJ("click",function(){return t.changeStatusMenu(),t.closeCategoryMenu(),t.closeSizeMenu()}),e._uU(28,"expand_more"),e.qZA(),e.TgZ(29,"ul",14),e.YNc(30,d,2,1,"li",15),e.qZA()(),e.YNc(31,f,16,10,"article",16),e.qZA()(),e._UZ(32,"app-cards",17)),2&o&&(e.xp6(2),e.hij("",t.categoryName,"s"),e.xp6(6),e.Oqu(t.categoryName),e.xp6(3),e.Q6J("ngClass",t.statusCategoryMenu?"active":"inactive"),e.xp6(1),e.Q6J("queryParams",e.DdM(9,p)),e.xp6(14),e.Oqu(t.location),e.xp6(3),e.Q6J("ngClass",t.statusMenu?"active":"inactive"),e.xp6(1),e.Q6J("ngForOf",t.locations),e.xp6(1),e.Q6J("ngIf",t.sizeFilter),e.xp6(1),e.Q6J("pets",t.pets))},dependencies:[s.mk,s.sg,s.O5,a.rH,h.s,g.Hw],styles:[".pet-search-container[_ngcontent-%COMP%]{display:flex;align-items:left;flex-direction:column;margin:12px 0 10px 20px}.pet-search-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:IBM Plex Sans KR;font-size:30px;font-weight:600;margin-left:2px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-family:Inter;font-size:14px;font-weight:400;margin-right:10px;margin-bottom:4px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:120px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.active[_ngcontent-%COMP%]{opacity:1!important;visibility:visible}.inactive[_ngcontent-%COMP%]{opacity:0!important;visibility:hidden}"]}),i})(),title:"Categoria"}];let x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(O),a.Bz]}),i})();var z=c(5112);let k=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.ez,x,z.m,g.Ps]}),i})()}}]);