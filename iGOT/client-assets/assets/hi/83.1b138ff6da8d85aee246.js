(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{CgpK:function(n,e,t){"use strict";t.r(e);var i=t("8Y7J");class l{}var a=t("pMnS"),o=t("SVse"),s=t("TX3T"),u=t("s4ib"),r=t("88ff"),c=t("lzlj"),d=t("igqZ"),b=t("omvX"),h=t("bujt"),p=t("Fwaw"),g=t("5GAg"),m=t("g6cB");class f{constructor(n,e){this.domSanitizer=n,this.logger=e,this.iapContent=null,this.iframeUrl=null,this.proctoringWarning=!1,this.proctoringStarted=!1,this.contextCheck=n=>{this.sendProctoringInfo("rightClick"),n.preventDefault()},this.beforeUnload=n=>{this.sendProctoringInfo("beforeunload"),n.returnValue="You are not allowed to close window."},this.visibilityCheck=()=>{this.logger.log("document.visibilityState >",document.visibilityState),this.sendProctoringInfo("visibilitychange")},this.fullscreenCheck=()=>{this.sendProctoringInfo("fullScreen")},this.keydownCheck=n=>{n.altKey?(this.sendProctoringInfo("alt"),n.preventDefault()):n.ctrlKey?(this.sendProctoringInfo("ctrl"),n.preventDefault()):"tab"===n.key?(this.sendProctoringInfo("tab"),n.preventDefault()):"esc"===n.key?(this.sendProctoringInfo("esc"),n.preventDefault()):"window"===n.key?(this.sendProctoringInfo("window"),n.preventDefault()):"f1"===n.key?(this.sendProctoringInfo("f1"),n.preventDefault()):"f8"===n.key?(this.sendProctoringInfo("f8"),n.preventDefault()):"f12"===n.key&&(this.sendProctoringInfo("f12"),n.preventDefault())},this.copyCheck=n=>{this.sendProctoringInfo("copy"),n.preventDefault()},this.cutCheck=n=>{this.sendProctoringInfo("cut"),n.preventDefault()},this.pasteCheck=n=>{this.sendProctoringInfo("paste"),n.preventDefault()}}ngOnInit(){}ngAfterViewInit(){window.addEventListener("message",n=>{n.data?n.data.functionToExecute&&"turnOnProctoring"===n.data.functionToExecute?(this.turnOnProctoring(),this.proctoringStarted=!0):n.data.functionToExecute&&"turnOffProctoring"===n.data.functionToExecute&&(this.turnOffProctoring(),this.proctoringStarted=!1):this.logger.log("data unavailable")})}ngOnChanges(){this.iframeUrl=this.iapContent&&this.iapContent.artifactUrl?this.domSanitizer.bypassSecurityTrustResourceUrl(this.iapContent.artifactUrl):null}ngOnDestroy(){this.proctoringStarted&&this.turnOffProctoring()}turnOnProctoring(){this.sendProctoringInfo("none"),this.sendProctoringInfo("fullScreen"),window.addEventListener("contextmenu",this.contextCheck),window.addEventListener("beforeunload",this.beforeUnload),window.addEventListener("keydown",this.keydownCheck),document.body.addEventListener("copy",this.copyCheck),document.body.addEventListener("cut",this.cutCheck),document.body.addEventListener("paste",this.pasteCheck),document.addEventListener("visibilitychange",this.visibilityCheck),document.addEventListener("webkitfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("mozfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("msfullscreenchange",this.fullscreenCheck,!1),document.addEventListener("fullscreenchange",this.fullscreenCheck,!1)}sendProctoringInfo(n){const e=document.getElementById("iap-iframe").contentWindow;e&&e.postMessage({proctoring:n},"*"),"esc"!==n&&"fullScreen"!==n||(this.proctoringWarning=!0)}enterFullScreen(){this.proctoringWarning=!1;const n=document.getElementById("iap-iframe");n&&(n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen())}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}turnOffProctoring(){window.removeEventListener("contextmenu",this.contextCheck),window.removeEventListener("beforeunload",this.beforeUnload),window.removeEventListener("keydown",this.keydownCheck),document.body.removeEventListener("copy",this.copyCheck),document.body.removeEventListener("cut",this.cutCheck),document.body.removeEventListener("paste",this.pasteCheck),document.removeEventListener("visibilitychange",this.visibilityCheck),document.removeEventListener("webkitfullscreenchange",this.fullscreenCheck),document.removeEventListener("fullscreenchange",this.fullscreenCheck),document.removeEventListener("mozfullscreenchange",this.fullscreenCheck),document.removeEventListener("msfullscreenchange",this.fullscreenCheck),this.exitFullscreen(),this.proctoringWarning=!1}}var v=t("cUpR"),E=t("cErF"),w=i.sb({encapsulation:0,styles:[[".iap-iframe[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.proctoring-warning-holder[_ngcontent-%COMP%]{position:fixed;top:60px;right:0;bottom:0;left:0}.proctoring-warning-holder[_ngcontent-%COMP%]   .proctoring-warning[_ngcontent-%COMP%]{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50%;min-width:300px;max-width:600px}"]],data:{}});function y(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,0,"iframe",[["allow","fullscreen; accelerometer; autoplay; encrypted-media; gyroscope;  microphone; camera;"],["class","iap-iframe"],["id","iap-iframe"],["title","IAP Assessment Viewer"]],[[8,"src",5]],null,null,null,null))],null,(function(n,e){n(e,0,0,e.component.iframeUrl)}))}function P(n){return i.Qb(0,[(n()(),i.kb(16777216,null,null,1,null,y)),i.tb(1,16384,null,0,o.p,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i.ub(2,0,null,null,10,"div",[],null,null,null,null,null)),i.Lb(512,null,o.I,o.J,[i.r,i.s,i.k,i.D]),i.tb(4,278528,null,0,o.n,[o.I],{ngClass:[0,"ngClass"]},null),i.Jb(5,{"proctoring-warning-holder":0}),(n()(),i.ub(6,0,null,null,6,"mat-card",[["class","proctoring-warning mat-card"]],[[8,"hidden",0],[2,"_mat-animation-noopable",null]],null,null,c.d,c.a)),i.tb(7,49152,null,0,d.a,[[2,b.a]],null,null),(n()(),i.ub(8,0,null,0,1,"h2",[["class","mat-h2"]],null,null,null,null,null)),(n()(),i.Ob(-1,null,[" Accessible only on fullscreen. Click Okay to continue "])),(n()(),i.ub(10,0,null,0,2,"button",[["mat-flat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var i=!0;return"click"===e&&(i=!1!==n.component.enterFullScreen()&&i),i}),h.d,h.b)),i.tb(11,180224,null,0,p.b,[i.k,g.h,[2,b.a]],{color:[0,"color"]},null),(n()(),i.Ob(-1,0,[" Okay "]))],(function(n,e){var t=e.component;n(e,1,0,t.iframeUrl);var i=n(e,5,0,t.proctoringWarning);n(e,4,0,i),n(e,11,0,"primary")}),(function(n,e){n(e,6,0,!e.component.proctoringWarning,"NoopAnimations"===i.Gb(e,7)._animationMode),n(e,10,0,i.Gb(e,11).disabled||null,"NoopAnimations"===i.Gb(e,11)._animationMode)}))}var C=t("iInd"),k=t("GYRC");class x{constructor(n,e,t){this.activatedRoute=n,this.configSvc=e,this.viewerDataSvc=t,this.isFetchingDataComplete=!1,this.iapData=null,this.discussionForumWidget=null,this.isPreviewMode=!1,this.isTypeOfCollection=!1,this.forPreview=!1,this.isRestricted=!1,this.prevResourceUrl=null,this.nextResourceUrl=null}ngOnInit(){this.configSvc.restrictedFeatures&&(this.isRestricted=!this.configSvc.restrictedFeatures.has("disscussionForum")),this.isTypeOfCollection=!!this.activatedRoute.snapshot.queryParams.collectionType,this.viewerDataServiceSubscription=this.viewerDataSvc.tocChangeSubject.subscribe(n=>{this.prevTitle=n.previousTitle,this.nextTitle=n.nextResTitle,this.prevResourceUrl=n.prevResource,this.nextResourceUrl=n.nextResource})}}var D=i.sb({encapsulation:0,styles:[[".video-player-summary-container[_ngcontent-%COMP%]{height:auto;display:flex;justify-content:center;width:100%;flex-wrap:wrap}.padding-dynamic[_ngcontent-%COMP%]{padding:16px 8px 8px}.video-player-container[_ngcontent-%COMP%]{height:auto;width:100%;max-width:640px}.video-player-title[_ngcontent-%COMP%]{width:65%}@media only screen and (min-width:960px){.video-player-title[_ngcontent-%COMP%]{width:70%}}@media only screen and (max-width:599px){.padding-dynamic[_ngcontent-%COMP%]{padding:8px}.video-player-title[_ngcontent-%COMP%]{width:100%}}.video-summary[_ngcontent-%COMP%]{width:30%}@media only screen and (min-width:960px){.video-summary[_ngcontent-%COMP%]{width:25%}}@media only screen and (max-width:599px){.video-summary[_ngcontent-%COMP%]{width:100%}}.video-player[_ngcontent-%COMP%]{width:100%;height:75vh}.video-player-m[_ngcontent-%COMP%]{position:fixed;top:55px;left:0;height:40vh;width:100vw;z-index:1000;background:#000}@media only screen and (min-width:600px){.video-player-m[_ngcontent-%COMP%]{display:none}}.video-discussion-forum-in[_ngcontent-%COMP%], .vidoe-title[_ngcontent-%COMP%]{width:100%}.info-section[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{padding:12px 16px;margin-bottom:16px}.info-section[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:8px 0;box-sizing:border-box}.info-section[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.info-section[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{width:40%;min-width:80px;max-width:140px}.info-section[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:20px;margin-left:8px}@media only screen and (max-width:599px){.info-section[_ngcontent-%COMP%]{width:100%}}.author[_ngcontent-%COMP%]{padding:12px 0;display:flex}.author[_ngcontent-%COMP%]   .author-image[_ngcontent-%COMP%]{margin-right:12px;font-size:48px;height:48px;width:48px}.unit-meta-item[_ngcontent-%COMP%]{border-radius:2px;box-sizing:border-box;margin-bottom:16px}"]],data:{}});function O(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(n()(),i.ub(1,0,null,null,1,"span",[["class","fs-small"]],null,null,null,null,null)),(n()(),i.Ob(-1,null,["Previous Chapter"])),(n()(),i.Ob(3,null,[""," "])),i.Ib(0,o.B,[])],null,(function(n,e){var t=e.component;n(e,3,0,t.prevTitle.length>22?i.Pb(e,3,0,i.Gb(e,4).transform(t.prevTitle,0,22))+"..":t.prevTitle)}))}function M(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,4,"span",[["class","title"]],null,null,null,null,null)),(n()(),i.ub(1,0,null,null,1,"span",[["class","fs-small"]],null,null,null,null,null)),(n()(),i.Ob(-1,null,["Next Chapter"])),(n()(),i.Ob(3,null,["",""])),i.Ib(0,o.B,[])],null,(function(n,e){var t=e.component;n(e,3,0,t.nextTitle.length>22?i.Pb(e,3,0,i.Gb(e,4).transform(t.nextTitle,0,22))+"..":t.nextTitle)}))}function F(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,3,"div",[["class","padding-m"]],null,null,null,null,null)),(n()(),i.ub(1,0,null,null,2,"div",[["class","video-discussion-forum-in"]],null,null,null,null,null)),(n()(),i.ub(2,16777216,null,null,1,null,null,null,null,null,null,null)),i.tb(3,540672,null,0,s.a,[i.P,u.a,r.a],{wsResolverWidget:[0,"wsResolverWidget"]},null)],(function(n,e){n(e,3,0,e.component.discussionForumWidget)}),null)}function S(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,30,"div",[["class","padding-dynamic"]],null,null,null,null,null)),(n()(),i.ub(1,0,null,null,27,"div",[["class","flex flex-around flex-wrapped"]],null,null,null,null,null)),(n()(),i.ub(2,0,null,null,26,"div",[["class","w-full"]],null,null,null,null,null)),(n()(),i.ub(3,0,null,null,25,"div",[],null,null,null,null,null)),(n()(),i.ub(4,0,null,null,24,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,c.d,c.a)),i.tb(5,49152,null,0,d.a,[[2,b.a]],null,null),(n()(),i.ub(6,0,null,0,22,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.tb(7,16384,null,0,d.d,[],null,null),(n()(),i.ub(8,0,null,null,20,"div",[["class","video-player"],["id","fullScreenContainer"]],null,null,null,null,null)),(n()(),i.ub(9,0,null,null,1,"viewer-plugin-iap",[],null,null,null,P,w)),i.tb(10,4964352,null,0,f,[v.b,E.a],{iapContent:[0,"iapContent"]},null),(n()(),i.ub(11,0,null,null,17,"div",[["class","player-nav-links"]],null,null,null,null,null)),(n()(),i.ub(12,0,null,null,16,"div",[["class","flex justify-between html"]],null,null,null,null,null)),(n()(),i.ub(13,0,null,null,7,"div",[["class","prev-button"]],null,null,null,null,null)),(n()(),i.ub(14,0,null,null,4,"a",[["accesskey","<"],["class","width-auto"],["mat-button",""],["queryParamsHandling","preserve"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==i.Gb(n,15).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l),"click"===e&&(l=!1!==i.Gb(n,16)._haltDisabledEvents(t)&&l),l}),h.c,h.a)),i.tb(15,671744,null,0,C.r,[C.o,C.a,o.l],{queryParamsHandling:[0,"queryParamsHandling"],routerLink:[1,"routerLink"]},null),i.tb(16,180224,null,0,p.a,[g.h,i.k,[2,b.a]],{disabled:[0,"disabled"]},null),(n()(),i.ub(17,0,null,0,1,"span",[["class","material-icons align-left-arrow"]],null,null,null,null,null)),(n()(),i.Ob(-1,null,[" chevron_left "])),(n()(),i.kb(16777216,null,null,1,null,O)),i.tb(20,16384,null,0,o.p,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i.ub(21,0,null,null,7,"div",[["class","next-button"]],null,null,null,null,null)),(n()(),i.kb(16777216,null,null,1,null,M)),i.tb(23,16384,null,0,o.p,[i.P,i.M],{ngIf:[0,"ngIf"]},null),(n()(),i.ub(24,0,null,null,4,"a",[["accesskey",">"],["class","width-auto mr-10"],["mat-button",""],["queryParamsHandling","preserve"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(n,e,t){var l=!0;return"click"===e&&(l=!1!==i.Gb(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l),"click"===e&&(l=!1!==i.Gb(n,26)._haltDisabledEvents(t)&&l),l}),h.c,h.a)),i.tb(25,671744,null,0,C.r,[C.o,C.a,o.l],{queryParamsHandling:[0,"queryParamsHandling"],routerLink:[1,"routerLink"]},null),i.tb(26,180224,null,0,p.a,[g.h,i.k,[2,b.a]],{disabled:[0,"disabled"]},null),(n()(),i.ub(27,0,null,0,1,"span",[["class","material-icons align-right-arrow"]],null,null,null,null,null)),(n()(),i.Ob(-1,null,[" chevron_right "])),(n()(),i.kb(16777216,null,null,1,null,F)),i.tb(30,16384,null,0,o.p,[i.P,i.M],{ngIf:[0,"ngIf"]},null)],(function(n,e){var t=e.component;n(e,10,0,t.iapData),n(e,15,0,"preserve",t.prevResourceUrl),n(e,16,0,!t.prevResourceUrl),n(e,20,0,t.prevTitle),n(e,23,0,t.nextTitle),n(e,25,0,"preserve",t.nextResourceUrl),n(e,26,0,!t.nextResourceUrl),n(e,30,0,t.discussionForumWidget&&t.isRestricted)}),(function(n,e){n(e,4,0,"NoopAnimations"===i.Gb(e,5)._animationMode),n(e,14,0,i.Gb(e,15).target,i.Gb(e,15).href,i.Gb(e,16).disabled?-1:i.Gb(e,16).tabIndex||0,i.Gb(e,16).disabled||null,i.Gb(e,16).disabled.toString(),"NoopAnimations"===i.Gb(e,16)._animationMode),n(e,24,0,i.Gb(e,25).target,i.Gb(e,25).href,i.Gb(e,26).disabled?-1:i.Gb(e,26).tabIndex||0,i.Gb(e,26).disabled||null,i.Gb(e,26).disabled.toString(),"NoopAnimations"===i.Gb(e,26)._animationMode)}))}function _(n){return i.Qb(0,[(n()(),i.kb(16777216,null,null,1,null,S)),i.tb(1,16384,null,0,o.p,[i.P,i.M],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,1,0,e.component.iapData)}),null)}function I(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,1,"viewer-iap-container",[],null,null,null,_,D)),i.tb(1,114688,null,0,x,[C.a,r.a,k.a],null,null)],(function(n,e){n(e,1,0)}),null)}var R=i.qb("viewer-iap-container",x,I,{isFetchingDataComplete:"isFetchingDataComplete",iapData:"iapData",discussionForumWidget:"discussionForumWidget",isPreviewMode:"isPreviewMode",forPreview:"forPreview"},{},[]),T=t("uJjh"),L=t("hQq7"),G=t("Iani"),q=t("AjsA"),W=t("wNFL"),U=t("NcP4"),A=t("CF3Z"),N=t("t68o"),j=t("UGML"),K=t("4gA+"),z=t("3s4E"),Q=t("ltln"),B=t("p/gH"),H=t("6/yt"),J=t("rnpX"),X=t("hgHL"),Y=t("Tgwc"),V=t("jf99"),Z=t("xYTU"),$=t("VsSb"),nn=t("AK/K"),en=t("6wWs"),tn=t("qbau"),ln=t("EakT"),an=t("6JF1"),on=t("mrSG"),sn=t("iJLM"),un=t("xgIS"),rn=t("pLZG"),cn=t("jMFU");class dn{constructor(n,e,t,i,l){this.activatedRoute=n,this.contentSvc=e,this.eventSvc=t,this.viewerSvc=i,this.respondSvc=l,this.routeDataSubscription=null,this.responseSubscription=null,this.forPreview=window.location.href.includes("/author/"),this.isPreviewMode=!1,this.isFetchingDataComplete=!1,this.iapData=null,this.oldData=null,this.alreadyRaised=!1,this.discussionForumWidget=null}ngOnInit(){this.activatedRoute.snapshot.queryParamMap.get("preview")?(this.isPreviewMode=!0,this.routeDataSubscription=this.viewerSvc.getContent(this.activatedRoute.snapshot.paramMap.get("resourceId")||"").subscribe(n=>on.__awaiter(this,void 0,void 0,(function*(){this.iapData=n,this.iapData&&(this.formDiscussionForumWidget(this.iapData),this.discussionForumWidget&&(this.discussionForumWidget.widgetData.isDisabled=!0)),this.iapData&&this.iapData.artifactUrl.indexOf("content-store")>=0&&(yield this.setS3Cookie(this.iapData.identifier)),this.isFetchingDataComplete=!0})))):this.routeDataSubscription=this.activatedRoute.data.subscribe(n=>on.__awaiter(this,void 0,void 0,(function*(){this.iapData=n.content.data,this.alreadyRaised&&this.oldData&&this.raiseEvent(m.g.EnumTelemetrySubType.Unloaded,this.oldData),this.iapData&&this.formDiscussionForumWidget(this.iapData),this.iapData&&this.iapData.artifactUrl.indexOf("content-store")>=0&&(yield this.setS3Cookie(this.iapData.identifier)),this.iapData&&this.iapData.identifier&&(this.oldData=this.iapData,this.alreadyRaised=!0,this.raiseEvent(m.g.EnumTelemetrySubType.Loaded,this.iapData),this.responseSubscription=Object(un.a)(window,"message").pipe(Object(rn.a)(n=>Boolean(n)&&Boolean(n.data)&&"IAP"===n.data.subApplicationName&&Boolean(n.source&&"function"==typeof n.source.postMessage))).subscribe(n=>on.__awaiter(this,void 0,void 0,(function*(){const e=n.source;if(n.data.requestId&&"IAP"===n.data.subApplicationName&&this.iapData)switch(n.data.requestId){case"LOADED":this.respondSvc.loadedRespond(e,n.data.subApplicationName,this.iapData.identifier)}})))),this.isFetchingDataComplete=!0})),()=>{})}ngOnDestroy(){return on.__awaiter(this,void 0,void 0,(function*(){this.activatedRoute.snapshot.queryParams.collectionId&&this.activatedRoute.snapshot.queryParams.collectionType&&this.iapData?yield this.contentSvc.continueLearning(this.iapData.identifier,this.activatedRoute.snapshot.queryParams.collectionId,this.activatedRoute.snapshot.queryParams.collectionType):this.iapData&&(yield this.contentSvc.continueLearning(this.iapData.identifier)),this.iapData&&this.raiseEvent(m.g.EnumTelemetrySubType.Unloaded,this.iapData),this.routeDataSubscription&&this.routeDataSubscription.unsubscribe(),this.responseSubscription&&(this.respondSvc.unsubscribeResponse(),this.responseSubscription.unsubscribe())}))}formDiscussionForumWidget(n){this.discussionForumWidget={widgetData:{description:n.description,id:n.identifier,name:sn.i.EDiscussionType.LEARNING,title:n.name,initialPostCount:2,isDisabled:this.forPreview},widgetSubType:"discussionForum",widgetType:"discussionForum"}}raiseEvent(n,e){this.forPreview||this.eventSvc.dispatchEvent({eventType:m.g.WsEventType.Telemetry,eventLogLevel:m.g.WsEventLogLevel.Info,from:"iap",to:"",data:{state:n,type:m.g.WsTimeSpentType.Player,mode:m.g.WsTimeSpentMode.Play,content:e,identifier:e?e.identifier:null,mimeType:sn.h.EMimeTypes.IAP,url:e?e.artifactUrl:null}})}setS3Cookie(n){return on.__awaiter(this,void 0,void 0,(function*(){yield this.contentSvc.setS3Cookie(n).toPromise().catch(()=>{})}))}}var bn=t("4fW1"),hn=t("Q3Rl"),pn=t("BaE1"),gn=i.sb({encapsulation:0,styles:[[""]],data:{}});function mn(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,1,"viewer-iap-container",[],null,null,null,_,D)),i.tb(1,114688,null,0,x,[C.a,r.a,k.a],{isFetchingDataComplete:[0,"isFetchingDataComplete"],iapData:[1,"iapData"],discussionForumWidget:[2,"discussionForumWidget"],forPreview:[3,"forPreview"]},null)],(function(n,e){var t=e.component;n(e,1,0,t.isFetchingDataComplete,t.iapData,t.discussionForumWidget,t.forPreview)}),null)}function fn(n){return i.Qb(0,[(n()(),i.ub(0,0,null,null,1,"viewer-iap",[],null,null,null,mn,gn)),i.tb(1,245760,null,0,dn,[C.a,bn.a,hn.a,cn.a,pn.a],null,null)],(function(n,e){n(e,1,0)}),null)}var vn=i.qb("viewer-iap",dn,fn,{},{},[]),En=t("oPrN"),wn=t("tHRR"),yn=t("bKtt"),Pn=t("ZGdF"),Cn=t("/HVE"),kn=t("POq0"),xn=t("QQfA"),Dn=t("IP0z"),On=t("Mz6y"),Mn=t("Xd0L"),Fn=t("s7LF"),Sn=t("s6ns"),_n=t("/Co4"),In=t("gavF"),Rn=t("IheW"),Tn=t("JoiR"),Ln=t("3wtj");class Gn{}class qn{}var Wn=t("Gi4r"),Un=t("KDYE"),An=t("Bheh"),Nn=t("kxhK"),jn=t("nUuF"),Kn=t("zMNK"),zn=t("hOhj"),Qn=t("wBFC"),Bn=t("oapL"),Hn=t("HsOI"),Jn=t("ZwOa"),Xn=t("GSMj"),Yn=t("KPQW"),Vn=t("1XhF"),Zn=t("kNGD"),$n=t("W5yJ"),ne=t("Nra3"),ee=t("N8BH"),te=t("f1R+"),ie=t("3XeQ"),le=t("1+c4"),ae=t("bwdU"),oe=t("PIFq"),se=t("aDOb"),ue=t("02hT"),re=t("Q+lL"),ce=t("GilE"),de=t("CpoC"),be=t("6GCF"),he=t("dFDH"),pe=t("oYwi"),ge=t("FPi+"),me=t("alHs"),fe=t("W6PK"),ve=t("wgME"),Ee=t("7Y9B"),we=t("v2bU"),ye=t("PggI"),Pe=t("gBMt");class Ce{}class ke{}var xe=t("dvZr");t.d(e,"IapModuleNgFactory",(function(){return De}));var De=i.rb(l,[],(function(n){return i.Db([i.Eb(512,i.j,i.bb,[[8,[a.a,R,T.a,L.a,G.a,q.a,W.a,U.a,A.a,N.a,j.a,K.a,z.a,Q.a,B.a,H.a,J.a,X.a,Y.a,V.a,Z.a,Z.b,$.a,nn.a,en.a,tn.a,ln.a,an.a,vn]],[3,i.j],i.w]),i.Eb(4608,o.r,o.q,[i.t,[2,o.N]]),i.Eb(4608,En.a,En.a,[bn.a,k.a,wn.a,C.o,yn.a,Pn.a,r.a,Cn.a]),i.Eb(4608,kn.c,kn.c,[]),i.Eb(4608,xn.d,xn.d,[xn.j,xn.f,i.j,xn.i,xn.g,i.q,i.y,o.d,Dn.b,[2,o.k]]),i.Eb(5120,xn.k,xn.l,[xn.d]),i.Eb(5120,On.b,On.c,[xn.d]),i.Eb(4608,v.e,Mn.c,[[2,Mn.g],[2,Mn.l]]),i.Eb(4608,Fn.F,Fn.F,[]),i.Eb(4608,Mn.b,Mn.b,[]),i.Eb(5120,Sn.c,Sn.d,[xn.d]),i.Eb(135680,Sn.e,Sn.e,[xn.d,i.q,[2,o.k],[2,Sn.b],Sn.c,[3,Sn.e],xn.f]),i.Eb(4608,Fn.f,Fn.f,[]),i.Eb(5120,_n.b,_n.c,[xn.d]),i.Eb(5120,In.c,In.k,[xn.d]),i.Eb(4608,Rn.l,Rn.v,[o.d,i.A,Rn.t]),i.Eb(4608,Rn.w,Rn.w,[Rn.l,Rn.u]),i.Eb(5120,Rn.a,(function(n){return[n]}),[Rn.w]),i.Eb(4608,Rn.s,Rn.s,[]),i.Eb(6144,Rn.o,null,[Rn.s]),i.Eb(4608,Rn.k,Rn.k,[Rn.o]),i.Eb(6144,Rn.b,null,[Rn.k]),i.Eb(4608,Rn.h,Rn.p,[Rn.b,i.q]),i.Eb(4608,Rn.c,Rn.c,[Rn.h]),i.Eb(4608,Tn.a,Tn.a,[Rn.c]),i.Eb(4608,Ln.a,Ln.a,[Rn.c,r.a]),i.Eb(1073742336,o.c,o.c,[]),i.Eb(1073742336,Dn.a,Dn.a,[]),i.Eb(1073742336,Mn.l,Mn.l,[[2,Mn.d],[2,v.f]]),i.Eb(1073742336,d.g,d.g,[]),i.Eb(1073742336,Cn.b,Cn.b,[]),i.Eb(1073742336,Mn.w,Mn.w,[]),i.Eb(1073742336,p.c,p.c,[]),i.Eb(1073742336,Gn,Gn,[]),i.Eb(1073742336,C.s,C.s,[[2,C.x],[2,C.o]]),i.Eb(1073742336,qn,qn,[]),i.Eb(1073742336,Wn.c,Wn.c,[]),i.Eb(1073742336,Un.a,Un.a,[]),i.Eb(1073742336,An.a,An.a,[]),i.Eb(1073742336,Nn.a,Nn.a,[]),i.Eb(1073742336,jn.a,jn.a,[]),i.Eb(1073742336,kn.d,kn.d,[]),i.Eb(1073742336,g.a,g.a,[]),i.Eb(1073742336,Kn.g,Kn.g,[]),i.Eb(1073742336,zn.c,zn.c,[]),i.Eb(1073742336,xn.h,xn.h,[]),i.Eb(1073742336,On.e,On.e,[]),i.Eb(1073742336,Qn.a,Qn.a,[]),i.Eb(1073742336,Fn.E,Fn.E,[]),i.Eb(1073742336,Fn.m,Fn.m,[]),i.Eb(1073742336,Bn.c,Bn.c,[]),i.Eb(1073742336,Hn.e,Hn.e,[]),i.Eb(1073742336,Jn.c,Jn.c,[]),i.Eb(1073742336,Sn.k,Sn.k,[]),i.Eb(1073742336,Xn.a,Xn.a,[]),i.Eb(1073742336,Yn.b,Yn.b,[]),i.Eb(1073742336,Vn.a,Vn.a,[]),i.Eb(1073742336,Zn.f,Zn.f,[]),i.Eb(1073742336,$n.c,$n.c,[]),i.Eb(1073742336,Fn.A,Fn.A,[]),i.Eb(1073742336,Mn.u,Mn.u,[]),i.Eb(1073742336,Mn.r,Mn.r,[]),i.Eb(1073742336,_n.e,_n.e,[]),i.Eb(1073742336,ne.a,ne.a,[]),i.Eb(1073742336,ee.a,ee.a,[]),i.Eb(1073742336,te.a,te.a,[]),i.Eb(1073742336,ie.a,ie.a,[]),i.Eb(1073742336,le.a,le.a,[]),i.Eb(1073742336,ae.b,ae.b,[]),i.Eb(1073742336,oe.a,oe.a,[]),i.Eb(1073742336,se.a,se.a,[]),i.Eb(1073742336,In.j,In.j,[]),i.Eb(1073742336,In.g,In.g,[]),i.Eb(1073742336,Mn.n,Mn.n,[]),i.Eb(1073742336,ue.b,ue.b,[]),i.Eb(1073742336,re.e,re.e,[]),i.Eb(1073742336,ce.a,ce.a,[]),i.Eb(1073742336,de.a,de.a,[]),i.Eb(1073742336,be.a,be.a,[]),i.Eb(1073742336,he.f,he.f,[]),i.Eb(1073742336,pe.a,pe.a,[]),i.Eb(1073742336,ge.a,ge.a,[]),i.Eb(1073742336,Rn.f,Rn.f,[]),i.Eb(1073742336,Rn.e,Rn.e,[]),i.Eb(1073742336,me.c,me.c,[]),i.Eb(1073742336,fe.a,fe.a,[]),i.Eb(1073742336,ve.a,ve.a,[]),i.Eb(1073742336,Ee.a,Ee.a,[]),i.Eb(1073742336,we.a,we.a,[]),i.Eb(1073742336,ye.a,ye.a,[]),i.Eb(1073742336,Pe.a,Pe.a,[]),i.Eb(1073742336,Ce,Ce,[]),i.Eb(1073742336,ke,ke,[]),i.Eb(1073742336,l,l,[]),i.Eb(256,i.t,"hi",[]),i.Eb(1024,C.m,(function(){return[[{path:"",component:x,pathMatch:"full"}],[{path:":resourceId",component:dn,resolve:{content:En.a}}]]}),[]),i.Eb(256,Zn.a,{separatorKeyCodes:[xe.g]},[]),i.Eb(256,Rn.t,"XSRF-TOKEN",[]),i.Eb(256,Rn.u,"X-XSRF-TOKEN",[]),i.Eb(256,me.a,{formats:["background","bold","color","font","code","italic","link","size","strike","script","underline","blockquote","header","indent","list","align","direction","code-block","image"],modules:{toolbar:[["blockquote","code-block"],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["image"]],history:{delay:1500,userOnly:!0},syntax:!1},theme:"snow"},[])])}))}}]);