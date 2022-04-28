"use strict";(self.webpackChunkAJ_Panel=self.webpackChunkAJ_Panel||[]).push([[605],{605:(Ze,b,i)=>{i.r(b),i.d(b,{HomeModule:()=>he});var d=i(6019),g=i(1659),e=i(3668),h=i(4932);let F=(()=>{class o{constructor(t,n){this.authService=t,this.router=n,this.minion=!0,this.doc=!1,this.gru=!1}ngOnInit(){this.authService.verifyToken().subscribe(t=>{})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.e),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"images"],[3,"click"],["src","./../../../assets/netflix.png",1,"fblogo"],["src","./../../../assets/user.png",1,"fblogo"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return n.router.navigate(["/home/series"])}),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return n.router.navigate(["/home/profile"])}),e._UZ(4,"img",3),e.qZA(),e.qZA())},styles:[".fblogo[_ngcontent-%COMP%]{display:inline-block;margin-left:auto;margin-right:auto}button[_ngcontent-%COMP%]{background-color:transparent;border:0;cursor:pointer}.images[_ngcontent-%COMP%]{margin-top:5%;width:100%;text-align:center}img[_ngcontent-%COMP%]{width:80%;height:auto}"]}),o})();var c=i(7162),r=i(9133),x=i(875),U=i(4522);let Z=(()=>{class o{constructor(t){this.http=t,this.apiUrl=x.N.apiUrl}getUserData(){return this.http.get(`${this.apiUrl}User/show`)}getSeries(){return this.http.get(`${this.apiUrl}Serie/showSeries`)}generateToken(){return this.http.get(`${this.apiUrl}User/generateToken`)}register(t){return this.http.post(`${this.apiUrl}User/create`,t)}addSerie(t){return this.http.post(`${this.apiUrl}Serie/create`,t)}updateSerie(t,n){return this.http.put(`${this.apiUrl}Serie/update/${n}`,t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(U.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=i(86),v=i(888),m=i(8167),f=i(138),S=i(6400),C=i(6731);function k(o,a){if(1&o&&(e.TgZ(0,"mat-option",10),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}let P=(()=>{class o{constructor(t,n,s,T){this.fb=t,this.authService=n,this.userService=s,this.router=T,this.buildForm()}ngOnInit(){this.authService.verifyToken(),this.userService.getUserData().subscribe(t=>{this.user=t.user,this.setFormData(this.user)})}logOut(){this.authService.clearCookies(),(0,c.Rz)("Logout Successful"),this.router.navigate(["/auth/login"])}buildForm(){this.profileForm=this.fb.group({fullName:[""],email:[""],rol:[""]}),this.tokenForm=this.fb.group({token:[""]}),this.roles=[{id:"3",name:"Batman"},{id:"2",name:"Robin"},{id:"1",name:"Gordon"}]}setFormData(t){console.log(t),this.profileForm.patchValue(t)}generateToken(){this.userService.generateToken().subscribe(t=>{this.tokenForm.get("token").setValue(t.token)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(h.e),e.Y36(Z),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:20,vars:3,consts:[["mat-button","",1,"logout",3,"click"],[1,"card"],[1,"container"],[3,"formGroup"],[1,"mat-title",2,"text-align","center","color","white"],["appearance","outline"],["matInput","","formControlName","fullName","readonly",""],["matInput","","formControlName","email","readonly",""],["formControlName","rol",2,"color","black",3,"disabled"],["style","color: black;",3,"value",4,"ngFor","ngForOf"],[2,"color","black",3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return n.logOut()}),e._uU(1,"LogOut"),e.qZA(),e.TgZ(2,"mat-card",1),e.TgZ(3,"div",2),e.TgZ(4,"form",3),e.TgZ(5,"div",4),e._uU(6,"Profile"),e.qZA(),e.TgZ(7,"mat-form-field",5),e.TgZ(8,"mat-label"),e._uU(9,"Nombre"),e.qZA(),e._UZ(10,"input",6),e.qZA(),e.TgZ(11,"mat-form-field",5),e.TgZ(12,"mat-label"),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",7),e.qZA(),e.TgZ(15,"mat-form-field",5),e.TgZ(16,"mat-label"),e._uU(17,"Rol"),e.qZA(),e.TgZ(18,"mat-select",8),e.YNc(19,k,2,2,"mat-option",9),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("formGroup",n.profileForm),e.xp6(14),e.Q6J("disabled",!0),e.xp6(1),e.Q6J("ngForOf",n.roles))},directives:[u.lW,v.a8,r._Y,r.JL,r.sg,m.KE,m.hX,f.Nt,r.Fj,r.JJ,r.u,S.gD,d.sg,C.ey],styles:[".card[_ngcontent-%COMP%]{margin-top:10px;background-color:#050505;width:27%;border-radius:10px;margin-left:auto;margin-right:auto;box-shadow:5px 1px 10px #242425;opacity:.9}.container[_ngcontent-%COMP%]{justify-content:center;display:flow-root;align-items:center}.card2[_ngcontent-%COMP%]{margin-top:10px;background-color:#050505;width:27%;border-radius:10px;margin-left:auto;margin-right:auto;box-shadow:5px 1px 10px #242425;opacity:.9}.logout[_ngcontent-%COMP%]{margin-top:10px;margin-left:93%;background-color:red;color:#fff}.mat-form-field[_ngcontent-%COMP%]{display:inline;flex-direction:column;align-items:flex-start;color:#000}.mat-option[_ngcontent-%COMP%]{color:#000}.mat-raised-button[_ngcontent-%COMP%]{font-size:large;color:#000;background-color:#fff}.mat-title[_ngcontent-%COMP%]{font-size:xx-large}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-start{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-gap{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-end{background-color:#fff!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#000!important}"]}),o})(),y=(()=>{class o{constructor(t,n,s){this.fb=t,this.userService=n,this.router=s,this.buildForm()}ngOnInit(){}setUser(){this.user={name:this.registerForm.get("name").value,lastname:this.registerForm.get("lastname").value,email:this.registerForm.get("email").value,password:this.registerForm.get("password").value,rol:1},this.register(this.user),console.log(this.user)}register(t){console.log(t),this.userService.register(t).subscribe(n=>{this.response=n,console.log(this.response),(0,c.Rz)(this.response.message).then(()=>{this.router.navigate(["/Auth/login"])})},n=>{console.log(n),(0,c.N3)(n.error.message)})}checkPassword(){console.log("pruebaaa"),this.registerForm.get("confirmpassword").value!=this.registerForm.get("password").value?this.registerForm.get("confirmpassword").setErrors({mismatch:!0}):this.registerForm.get("confirmpassword").setErrors(null)}buildForm(){this.registerForm=this.fb.group({name:["",[r.kI.required,r.kI.minLength(5),r.kI.maxLength(30)]],lastname:["",[r.kI.required,r.kI.minLength(10),r.kI.maxLength(30)]],email:["",[r.kI.required,r.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),r.kI.minLength(15),r.kI.maxLength(30)]],password:["",[r.kI.required,r.kI.minLength(8),r.kI.maxLength(10)]],confirmpassword:["",[r.kI.required,r.kI.minLength(8),r.kI.maxLength(10)]]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(Z),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:35,vars:2,consts:[[1,"card"],[1,"container"],["autocomplete","off",1,"form",2,"display","block",3,"formGroup"],[1,"mat-title",2,"text-align","center","color","white"],["appearance","outline"],["matInput","","maxlength","30","formControlName","name"],["matInput","","maxlength","30","formControlName","lastname"],["matInput","","maxlength","30","formControlName","email"],["matInput","","maxlength","30","type","password","formControlName","password",3,"change"],["matInput","","maxlength","20","type","password","formControlName","confirmpassword",3,"change"],["mat-raised-button","",3,"disabled","click"],["routerLink","/auth/login",2,"color","white"]],template:function(t,n){1&t&&(e.TgZ(0,"mat-card",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2),e.TgZ(3,"div",3),e._uU(4,"Regsiter"),e.qZA(),e.TgZ(5,"mat-form-field",4),e.TgZ(6,"mat-label"),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"mat-form-field",4),e.TgZ(10,"mat-label"),e._uU(11,"Lastname"),e.qZA(),e._UZ(12,"input",6),e.qZA(),e.TgZ(13,"mat-form-field",4),e.TgZ(14,"mat-label"),e._uU(15,"Email"),e.qZA(),e._UZ(16,"input",7),e.qZA(),e.TgZ(17,"mat-form-field",4),e.TgZ(18,"mat-label"),e._uU(19,"Password"),e.qZA(),e.TgZ(20,"input",8),e.NdJ("change",function(){return n.checkPassword()}),e.qZA(),e.qZA(),e.TgZ(21,"mat-form-field",4),e.TgZ(22,"mat-label"),e._uU(23,"Confirm password"),e.qZA(),e.TgZ(24,"input",9),e.NdJ("change",function(){return n.checkPassword()}),e.qZA(),e.TgZ(25,"mat-error"),e._uU(26,"Password does not match the confirm password"),e.qZA(),e.qZA(),e._UZ(27,"br"),e.TgZ(28,"button",10),e.NdJ("click",function(){return n.setUser()}),e._uU(29,"Register"),e.qZA(),e._UZ(30,"br"),e._UZ(31,"br"),e.TgZ(32,"h3"),e.TgZ(33,"a",11),e._uU(34,"I am already registered"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.registerForm),e.xp6(26),e.Q6J("disabled",!n.registerForm.valid))},directives:[v.a8,r._Y,r.JL,r.sg,m.KE,m.hX,f.Nt,r.Fj,r.nD,r.JJ,r.u,m.TO,u.lW,g.yS],styles:[".card[_ngcontent-%COMP%]{margin-top:10px;background-color:#050505;width:27%;border-radius:10px;margin-left:auto;margin-right:auto;box-shadow:5px 1px 10px #242425;opacity:.9}.container[_ngcontent-%COMP%]{justify-content:center;display:flow-root;align-items:center}.mat-form-field[_ngcontent-%COMP%]{display:inline;flex-direction:column;align-items:flex-start;color:#000}.mat-raised-button[_ngcontent-%COMP%]{font-size:large;color:#000;background-color:#fff}.mat-title[_ngcontent-%COMP%]{font-size:xx-large}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-start{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-gap{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-end{background-color:#fff!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#000!important}"]}),o})();var p=i(2262),l=i(4176),A=i(8977);const N=["seriesPaginator"];function O(o,a){1&o&&(e.TgZ(0,"mat-header-cell",23),e._uU(1,"Nombre"),e.qZA())}function M(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function I(o,a){1&o&&(e.TgZ(0,"mat-header-cell",23),e._uU(1,"descripci\xf3n"),e.qZA())}function J(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.description," ")}}function q(o,a){1&o&&(e.TgZ(0,"mat-header-cell",23),e._uU(1,"Temporadas"),e.qZA())}function Y(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.seasons," ")}}function D(o,a){1&o&&(e.TgZ(0,"mat-header-cell",23),e._uU(1,"Calificaci\xf3n"),e.qZA())}function L(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.score," ")}}function z(o,a){1&o&&e._UZ(0,"mat-header-row")}function R(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"mat-row",24),e.NdJ("click",function(){const T=e.CHM(t).$implicit;return e.oxw().setForm(T)}),e.qZA()}}const w=function(){return[4]},Q=[{path:"",component:F},{path:"profile",component:P},{path:"series",component:(()=>{class o{constructor(t,n,s){this.userService=t,this.authService=n,this.fb=s,this.seriesColumns=["name","description","seasons","score"],this.buildForm()}ngOnInit(){this.authService.verifyToken(),this.getSeriesData()}getSeriesData(){this.userService.getSeries().subscribe(t=>{this.series=t.Series,console.log(this.series),this.setData(this.series)})}setData(t){this.dataSource=new l.by,this.dataSource.data=t,this.dataSource.paginator=this.seriesPaginator,this.dataSource.sort=this.seriesSort}setForm(t){this.serie=t,this.serieForm.patchValue(this.serie)}actualizar(){this.serie.name=this.serieForm.get("name").value,this.serie.description=this.serieForm.get("description").value,this.serie.seasons=this.serieForm.get("seasons").value,this.serie.score=this.serieForm.get("score").value,this.serie.token=this.serieForm.get("token").value,console.log(this.serie),this.updateSerie(),this.serieForm.reset()}agregar(){this.serie=null,this.serie={name:this.serieForm.get("name").value,description:this.serieForm.get("description").value,seasons:this.serieForm.get("seasons").value,score:this.serieForm.get("score").value,token:this.serieForm.get("token").value},this.addSerie(),this.serieForm.reset()}addSerie(){this.userService.addSerie(this.serie).subscribe(t=>{this.response=t,this.getSeriesData(),(0,c.Rz)(this.response.message)},t=>{(0,c.N3)(t.error.message)})}updateSerie(){this.userService.updateSerie(this.serie,this.serie.id).subscribe(t=>{this.response=t,this.getSeriesData(),(0,c.Rz)(this.response.message)},t=>{(0,c.N3)(t.error.message)})}clearForm(){this.serie=null,this.serieForm.reset()}buildForm(){this.serieForm=this.fb.group({name:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(10)]],description:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(20)]],seasons:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(2)]],score:["",[r.kI.required,r.kI.minLength(1),r.kI.maxLength(2)]],token:[""]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z),e.Y36(h.e),e.Y36(r.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-series"]],viewQuery:function(t,n){if(1&t&&(e.Gf(N,7),e.Gf(p.YE,7)),2&t){let s;e.iGM(s=e.CRH())&&(n.seriesPaginator=s.first),e.iGM(s=e.CRH())&&(n.seriesSort=s.first)}},decls:47,vars:9,consts:[[1,"container"],["autocomplete","off",1,"form",2,"display","block",3,"formGroup"],[1,"mat-title",2,"text-align","center","color","white"],["appearance","outline"],["matInput","","formControlName","name"],["matInput","","formControlName","description"],["matInput","","formControlName","seasons"],["matInput","","formControlName","score"],["matInput","","formControlName","token"],["mat-raised-button","",3,"disabled","click"],["mat-raised-button","",1,"borrar",3,"disabled","click"],[1,"mat-table-style"],["matSort","",1,"table",3,"dataSource"],["matColumnDef","name"],["class","cell-title","mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","description"],["matColumnDef","seasons"],["matColumnDef","score"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["seriesPaginator",""],["mat-sort-header","",1,"cell-title"],[3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"div",2),e._uU(3,"Series"),e.qZA(),e.TgZ(4,"mat-form-field",3),e.TgZ(5,"mat-label"),e._uU(6,"Nombre"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"mat-form-field",3),e.TgZ(9,"mat-label"),e._uU(10,"Descripci\xf3n"),e.qZA(),e._UZ(11,"input",5),e.qZA(),e.TgZ(12,"mat-form-field",3),e.TgZ(13,"mat-label"),e._uU(14,"Temporadas"),e.qZA(),e._UZ(15,"input",6),e.qZA(),e.TgZ(16,"mat-form-field",3),e.TgZ(17,"mat-label"),e._uU(18,"Calificaci\xf3n"),e.qZA(),e._UZ(19,"input",7),e.qZA(),e.TgZ(20,"mat-form-field",3),e.TgZ(21,"mat-label"),e._uU(22,"Token"),e.qZA(),e._UZ(23,"input",8),e.qZA(),e.TgZ(24,"button",9),e.NdJ("click",function(){return null!=n.serie?n.actualizar():n.agregar()}),e._uU(25," Guardar "),e.qZA(),e.TgZ(26,"button",10),e.NdJ("click",function(){return n.clearForm()}),e._uU(27,"Borrar"),e.qZA(),e.qZA(),e.TgZ(28,"div",11),e.TgZ(29,"mat-table",12),e.ynx(30,13),e.YNc(31,O,2,0,"mat-header-cell",14),e.YNc(32,M,2,1,"mat-cell",15),e.BQk(),e.ynx(33,16),e.YNc(34,I,2,0,"mat-header-cell",14),e.YNc(35,J,2,1,"mat-cell",15),e.BQk(),e.ynx(36,17),e.YNc(37,q,2,0,"mat-header-cell",14),e.YNc(38,Y,2,1,"mat-cell",15),e.BQk(),e.ynx(39,18),e.YNc(40,D,2,0,"mat-header-cell",14),e.YNc(41,L,2,1,"mat-cell",15),e.BQk(),e.TgZ(42,"tr"),e.YNc(43,z,1,0,"mat-header-row",19),e.YNc(44,R,1,0,"mat-row",20),e.qZA(),e.qZA(),e._UZ(45,"mat-paginator",21,22),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.serieForm),e.xp6(23),e.Q6J("disabled",!n.serieForm.valid),e.xp6(2),e.Q6J("disabled",!n.serieForm.valid),e.xp6(3),e.Q6J("dataSource",n.dataSource),e.xp6(14),e.Q6J("matHeaderRowDef",n.seriesColumns),e.xp6(1),e.Q6J("matRowDefColumns",n.seriesColumns),e.xp6(1),e.Q6J("pageSize",4)("pageSizeOptions",e.DdM(8,w)))},directives:[r._Y,r.JL,r.sg,m.KE,m.hX,f.Nt,r.Fj,r.JJ,r.u,u.lW,l.BZ,p.YE,l.w1,l.fO,l.Dz,l.as,l.nj,A.NW,l.ge,p.nU,l.ev,l.XQ,l.Gk],styles:[".container[_ngcontent-%COMP%]{justify-content:center;display:flow-root;align-items:center;width:70%;margin-top:10px;margin-left:auto;margin-right:auto}.mat-row[_ngcontent-%COMP%], .mat-header-row[_ngcontent-%COMP%], .mat-paginator[_ngcontent-%COMP%]{width:100%}.mat-header-cell[_ngcontent-%COMP%]{size:5px}.mat-table[_ngcontent-%COMP%]{margin-top:10px}.mat-form-field[_ngcontent-%COMP%]{display:inline;flex-direction:column;align-items:flex-start;color:#000}.mat-raised-button[_ngcontent-%COMP%]{font-size:large;color:#fff;background-color:#000;opacity:.9}.mat-title[_ngcontent-%COMP%]{font-size:7ch}mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-start{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-gap{background-color:#fff!important}[_nghost-%COMP%]     mat-form-field .mat-form-field-outline-end{background-color:#fff!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#000!important}.borrar[_ngcontent-%COMP%]{margin-left:10px}"]}),o})()},{path:"register",component:y}];let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Q)],g.Bz]}),o})();var G=i(4696),$=i(4377),j=i(8173),B=i(7348),X=i(3266),E=i(8621),_=i(2255),K=i(8727),V=i(5304),W=i(5694),ee=i(3050),te=i(6167),oe=i(9112),re=i(2663),ie=i(8786),ne=i(9009),ae=i(7964),se=i(9859),le=i(7891),me=i(8490),ce=i(514),ge=i(9966),ue=i(2605),fe=i(8643),pe=i(2457),de=i(1821);let he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,H,d.ez,r.UX,fe.g0,oe.Ps,le.SJ,m.lN,G.Bb,$.g,j._r,u.ot,B.vV,v.QW,X.p9,E.Hi,_.T5,K.FA,V.Is,W.t,ee.To,te.N6,f.c,re.ie,ie.Tx,C.XK,A.TU,ne.Cv,ae.Cq,se.Fk,C.si,S.LD,me.KP,ce.rP,ge.ZX,p.JX,l.p0,ue.Nh,pe.AV,de.dp]]}),o})()}}]);