"use strict";(self.webpackChunkmi_mascota=self.webpackChunkmi_mascota||[]).push([[435],{5435:(Z,m,g)=>{g.r(m),g.d(m,{LoginModule:()=>C});var c=g(6895),a=g(3060),e=g(4006),n=g(4650),u=g(3336),s=g(4144),l=g(9549);function p(o,r){if(1&o&&(n.TgZ(0,"mat-error",14),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Oqu(t.getLoginError())}}function d(o,r){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Oqu(t.getRequiredMsg())}}function f(o,r){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Oqu(t.getEmailMsg())}}function _(o,r){if(1&o&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Oqu(t.getRequiredMsg())}}const h=[{path:"",component:(()=>{class o{constructor(t){this.router=t,this.hide=!0,this.loginError=!1,this.loginForm=new e.cw({email:new e.NI("",[e.kI.required,e.kI.email]),password:new e.NI("",[e.kI.required,e.kI.minLength(5)])})}getRequiredMsg(){return"Este campo es Requerido"}getEmailMsg(){return"Por favor, Ingrese un email v\xe1lido"}getLoginError(){return"Usuario o clave incorrectos"}login(t){t.preventDefault(),this.loginForm.valid&&(console.log("logueado"),this.router.navigate(["/home"]))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(a.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:29,vars:9,consts:[[1,"login-container"],[1,"login",3,"formGroup","ngSubmit"],[2,"font-size","28px","margin-right","7px"],[2,"font-size","28px"],["class","login__label--error",4,"ngIf"],["appearance","outline",1,"email"],["matInput","","placeholder","mimascota@mail.com","formControlName","email"],[4,"ngIf"],["appearance","outline"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit",1,"login__button--login"],[1,"login__label--register"],["routerLink","/auth/register",1,"login__button--register"],[1,"login__label--error"]],template:function(t,i){1&t&&(n.TgZ(0,"section",0)(1,"form",1),n.NdJ("ngSubmit",function(b){return i.login(b)}),n.TgZ(2,"h1")(3,"mat-icon",2),n._uU(4,"pets"),n.qZA(),n._uU(5,"Iniciar Sesi\xf3n "),n.TgZ(6,"mat-icon",3),n._uU(7,"pets"),n.qZA()(),n.YNc(8,p,2,1,"mat-error",4),n.TgZ(9,"mat-form-field",5)(10,"mat-label"),n._uU(11,"Ingresa tu correo"),n.qZA(),n._UZ(12,"input",6),n.YNc(13,d,2,1,"mat-error",7),n.YNc(14,f,2,1,"mat-error",7),n.qZA(),n.TgZ(15,"mat-form-field",8)(16,"mat-label"),n._uU(17,"Ingresa tu contrase\xf1a"),n.qZA(),n._UZ(18,"input",9),n.YNc(19,_,2,1,"mat-error",7),n.TgZ(20,"button",10),n.NdJ("click",function(){return i.hide=!i.hide}),n.TgZ(21,"mat-icon"),n._uU(22),n.qZA()()(),n.TgZ(23,"button",11),n._uU(24,"Ingresar"),n.qZA(),n.TgZ(25,"p",12),n._uU(26,"\xbfA\xfan no tienes una cuenta?"),n.qZA(),n.TgZ(27,"button",13),n._uU(28,"Registrate"),n.qZA()()()),2&t&&(n.xp6(1),n.Q6J("formGroup",i.loginForm),n.xp6(7),n.Q6J("ngIf",i.loginError),n.xp6(5),n.Q6J("ngIf",i.loginForm.controls.email.hasError("required")),n.xp6(1),n.Q6J("ngIf",i.loginForm.controls.email.hasError("email")),n.xp6(4),n.Q6J("type",i.hide?"password":"text"),n.xp6(1),n.Q6J("ngIf",i.loginForm.controls.password.hasError("required")),n.xp6(1),n.uIk("aria-label","Hide password")("aria-pressed",i.hide),n.xp6(2),n.Oqu(i.hide?"visibility_off":"visibility"))},dependencies:[c.O5,a.rH,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,u.Hw,s.Nt,l.KE,l.hX,l.TO,l.R9],styles:[".login-container[_ngcontent-%COMP%]{width:100%;height:100%;min-height:660px;display:flex;justify-content:center}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;padding:22px;width:80%;height:100%;min-width:260px;max-width:340px;border-radius:8px;box-shadow:1px 1px 6px #000;margin:60px 0 100px;background-color:var(--login-card-background)}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;font-weight:600;margin-bottom:36px}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login__button--login[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login__button--register[_ngcontent-%COMP%]{margin-bottom:20px;color:#000;font-size:14px;font-family:Inter;font-weight:550;width:110px;height:35px;border:solid;border-width:1.5px;border-radius:4px;border-color:#000;background-color:var(--card-button-background);cursor:pointer}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login__label--register[_ngcontent-%COMP%]{margin-bottom:20px;font-family:Inter;font-size:14px;font-weight:550}.login-container[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   .login__label--error[_ngcontent-%COMP%]{font-size:14px;font-weight:600}"]}),o})(),title:"Login"}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[a.Bz.forChild(h),a.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.ez,x,e.UX,u.Ps,s.c]}),o})()}}]);