"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[954],{2954:(T,g,c)=>{c.r(g),c.d(g,{PetCategoriesModule:()=>S});var l=c(6895),s=c(2510),t=c(4650),C=c(5833),h=c(770),M=c(691),d=c(2102),p=c(7392);function m(i,r){if(1&i&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.hij("",o.categoryName,"s")}}function P(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const a=t.CHM(o).$implicit,u=t.oxw();return u.changeStatusMenu(),t.KtG(u.updateLocation(a))}),t._uU(1),t.qZA()}if(2&i){const o=r.$implicit;t.xp6(1),t.Oqu(o)}}const _=function(){return{filter:"all"}},y=function(){return{filter:"big"}},f=function(){return{filter:"regular"}},O=function(){return{filter:"small"}};function x(i,r){if(1&i){const o=t.EpF();t.TgZ(0,"article",20)(1,"b"),t._uU(2,"Tama\xf1o: "),t.qZA(),t.TgZ(3,"p",21),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return n.changeStatusSizeMenu(),n.closeCategoryMenu(),t.KtG(n.closeMenu())}),t._uU(4),t.qZA(),t.TgZ(5,"mat-icon",22),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return n.changeStatusSizeMenu(),n.closeCategoryMenu(),t.KtG(n.closeMenu())}),t._uU(6,"expand_more"),t.qZA(),t.TgZ(7,"ul",23)(8,"li",7),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.changeStatusSizeMenu())}),t._uU(9,"Todos"),t.qZA(),t.TgZ(10,"li",7),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.changeStatusSizeMenu())}),t._uU(11,"Grande"),t.qZA(),t.TgZ(12,"li",7),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.changeStatusSizeMenu())}),t._uU(13,"Mediano"),t.qZA(),t.TgZ(14,"li",7),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.changeStatusSizeMenu())}),t._uU(15,"Peque\xf1o"),t.qZA()()()}if(2&i){const o=t.oxw();t.xp6(4),t.Oqu(o.getFilterName()),t.xp6(3),t.Q6J("ngClass",o.statusSizeMenu?"active":"inactive"),t.xp6(1),t.Q6J("queryParams",t.DdM(6,_)),t.xp6(2),t.Q6J("queryParams",t.DdM(7,y)),t.xp6(2),t.Q6J("queryParams",t.DdM(8,f)),t.xp6(2),t.Q6J("queryParams",t.DdM(9,O))}}const z=[{path:"",component:(()=>{class i{constructor(o,e,n,a,u){this.locationService=o,this.petService=e,this.route=n,this.router=a,this.categoryService=u,this.pets=[],this.MainPets=[],this.LocPets=[],this.locations=[],this.statusMenu=!1,this.statusCategoryMenu=!1,this.statusSizeMenu=!1,this.categoryName=void 0,this.categoryId=null,this.sizeFilter=null,this.breed="",this.location="Cualquiera",this.size=""}ngOnInit(){this.locations=this.locationService.getLocations(),setTimeout(()=>{this.route.paramMap.subscribe(o=>{this.categoryId=o.get("id"),this.categoryId&&(this.MainPets=this.petService.getPetsByCategory(this.categoryId),this.categoryName=this.categoryService.getCategoryName(this.categoryId),null==this.categoryName&&this.router.navigate(["/none"])),this.locationService.location$.subscribe(e=>{this.sizeFilter="all",e?"Cualquiera"==e?this.LocPets=this.MainPets:(this.location=e,this.LocPets=this.MainPets.filter(n=>n.location==e)):this.LocPets=this.MainPets,this.route.queryParamMap.subscribe(n=>{this.sizeFilter=n.get("filter"),this.pets=this.sizeFilter&&"all"!==this.sizeFilter?this.LocPets.filter(a=>a.size==this.sizeFilter):this.LocPets})})})},1e3)}onClickEvent(o){var n=o.target.id;"category"!=n&&"location"!=n&&"size"!=n&&(this.closeMenu(),this.closeCategoryMenu(),this.closeSizeMenu())}getFilterName(){return"big"==this.sizeFilter?"Grande":"regular"==this.sizeFilter?"Mediano":"small"==this.sizeFilter?"Peque\xf1o":"Todos"}changeStatusMenu(){this.statusMenu=!this.statusMenu}changeStatusCategoryMenu(){this.statusCategoryMenu=!this.statusCategoryMenu}changeStatusSizeMenu(){this.statusSizeMenu=!this.statusSizeMenu}updateLocation(o){this.locationService.location$.next(o),this.location=o}closeMenu(){this.statusMenu=!1}closeCategoryMenu(){this.statusCategoryMenu=!1}closeSizeMenu(){this.statusSizeMenu=!1}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(C.a),t.Y36(h.O),t.Y36(s.gz),t.Y36(s.F0),t.Y36(M.H))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pet-category"]],hostBindings:function(o,e){1&o&&t.NdJ("click",function(a){return e.onClickEvent(a)},!1,t.evT)},decls:32,vars:10,consts:[[1,"pet-search-container"],[4,"ngIf"],[1,"pet-search-content"],[1,"categoryMenu"],["id","category",3,"click"],["id","category",2,"font-size","20px","cursor","pointer",3,"click"],[1,"category-menu",3,"ngClass"],["routerLink","/pet-category/0",3,"queryParams","click"],["routerLink","/pet-category/1",3,"click"],["routerLink","/pet-category/2",3,"click"],["routerLink","/pet-category/3",3,"click"],["routerLink","/pet-category/4",3,"click"],[1,"locationMenu"],["id","location",3,"click"],["id","location",2,"font-size","20px","cursor","pointer",3,"click"],[1,"location-menu",3,"ngClass"],[3,"click",4,"ngFor","ngForOf"],["class","sizeMenu",4,"ngIf"],[3,"pets"],[3,"click"],[1,"sizeMenu"],["id","size",3,"click"],["id","size",2,"font-size","20px","cursor","pointer",3,"click"],[1,"size-menu",3,"ngClass"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0),t.YNc(1,m,2,1,"h1",1),t.TgZ(2,"div",2)(3,"article",3)(4,"b"),t._uU(5,"Especie: "),t.qZA(),t.TgZ(6,"p",4),t.NdJ("click",function(){return e.changeStatusCategoryMenu(),e.closeMenu(),e.closeSizeMenu()}),t._uU(7),t.qZA(),t.TgZ(8,"mat-icon",5),t.NdJ("click",function(){return e.changeStatusCategoryMenu(),e.closeMenu(),e.closeSizeMenu()}),t._uU(9,"expand_more"),t.qZA(),t.TgZ(10,"ul",6)(11,"li",7),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(12,"Perros"),t.qZA(),t.TgZ(13,"li",8),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(14,"Gatos"),t.qZA(),t.TgZ(15,"li",9),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(16,"Aves"),t.qZA(),t.TgZ(17,"li",10),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(18,"Tortugas"),t.qZA(),t.TgZ(19,"li",11),t.NdJ("click",function(){return e.changeStatusCategoryMenu()}),t._uU(20,"Conejos"),t.qZA()()(),t.TgZ(21,"article",12)(22,"b"),t._uU(23,"Ubicaci\xf3n: "),t.qZA(),t.TgZ(24,"p",13),t.NdJ("click",function(){return e.changeStatusMenu(),e.closeCategoryMenu(),e.closeSizeMenu()}),t._uU(25),t.qZA(),t.TgZ(26,"mat-icon",14),t.NdJ("click",function(){return e.changeStatusMenu(),e.closeCategoryMenu(),e.closeSizeMenu()}),t._uU(27,"expand_more"),t.qZA(),t.TgZ(28,"ul",15),t.YNc(29,P,2,1,"li",16),t.qZA()(),t.YNc(30,x,16,10,"article",17),t.qZA()(),t._UZ(31,"app-cards",18)),2&o&&(t.xp6(1),t.Q6J("ngIf",e.categoryName),t.xp6(6),t.Oqu(e.categoryName),t.xp6(3),t.Q6J("ngClass",e.statusCategoryMenu?"active":"inactive"),t.xp6(1),t.Q6J("queryParams",t.DdM(9,_)),t.xp6(14),t.Oqu(e.location),t.xp6(3),t.Q6J("ngClass",e.statusMenu?"active":"inactive"),t.xp6(1),t.Q6J("ngForOf",e.locations),t.xp6(1),t.Q6J("ngIf",e.sizeFilter),t.xp6(1),t.Q6J("pets",e.pets))},dependencies:[l.mk,l.sg,l.O5,s.rH,d.s,p.Hw],styles:[".pet-search-container[_ngcontent-%COMP%]{display:flex;align-items:left;flex-direction:column;margin:12px 0 10px 20px}.pet-search-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:IBM Plex Sans KR;font-size:30px;font-weight:600;margin-left:2px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-family:Inter;font-size:14px;font-weight:400;margin-right:10px;margin-bottom:4px}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:120px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .locationMenu[_ngcontent-%COMP%]   .location-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .categoryMenu[_ngcontent-%COMP%]   .category-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]{position:relative}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]{position:absolute;z-index:5;width:102px;height:auto;top:18px;right:0;transition:opacity .2s ease-in-out}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#fff;width:100%;height:30px;padding:4px;text-align:center;font-size:14px;text-decoration:none;list-style:none;border:solid;border-color:var(--menu-border-color);border-width:1px;transition:all .15s ease-out;cursor:pointer}.pet-search-container[_ngcontent-%COMP%]   .pet-search-content[_ngcontent-%COMP%]   .sizeMenu[_ngcontent-%COMP%]   .size-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--navbar-selected-first)}.active[_ngcontent-%COMP%]{opacity:1!important;visibility:visible}.inactive[_ngcontent-%COMP%]{opacity:0!important;visibility:hidden}@media (width >= 1024px){.locationMenu[_ngcontent-%COMP%]{display:none!important}}"]}),i})(),title:"Categoria"}];let k=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[s.Bz.forChild(z),s.Bz]}),i})();var v=c(5112);let S=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.ez,k,v.m,p.Ps]}),i})()}}]);