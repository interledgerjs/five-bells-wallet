webpackJsonp([10,18],{834:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(14),n=l(r),u=a(3),s=l(u),o=a(13),i=l(o),d=a(5),c=l(d),f=a(4),m=l(f),p=a(1),v=l(p),h=a(48),E=l(h),b=a(1763),g=l(b),w=function(e){function t(){return(0,s.default)(this,t),(0,c.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return v.default.createElement("div",{className:"row"},v.default.createElement(E.default,null,v.default.createElement("title",null,"Settings")),v.default.createElement("div",{className:"col-md-8"},v.default.createElement(g.default,null)))}}]),t}(p.Component);t.default=w,e.exports=t.default},1243:function(e,t){e.exports={header:"_3pEq3gTMHUk_i2-RBD9G4m",profilePicBox:"gTQO2q_BmLcZkLggrkUWm",profilePic:"_1ETc9AAytJhmuQwFPpIKrS",dropzone:"_2ivWjm9BUO8_muexQx1FR-"}},1763:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u,s,o,i,d,c,f=a(14),m=r(f),p=a(3),v=r(p),h=a(13),E=r(h),b=a(5),g=r(b),w=a(4),y=r(w),_=a(1),P=r(_),F=a(2),N=r(F),S=a(18),k=a(49),z=a(413),x=r(z),j=a(47),O=r(j),C=a(154),M=l(C),B=a(1764),T=r(B),L=a(100),U=a(52),q=r(U),A=a(16),H=r(A),I=a(1243),Q=r(I),R=H.default.bind(Q.default),V=(n=(0,S.connect)(function(e){return{user:e.auth.user,fail:e.auth.fail,initialValues:{email:e.auth.user&&e.auth.user.email||void 0,name:e.auth.user&&e.auth.user.name||void 0}}},M),u=(0,k.reduxForm)({form:"profileSettings",validate:T.default}),s=(0,L.successable)(),o=(0,L.resetFormOnSuccess)("profileSettings"),n(i=u(i=s(i=o((c=d=function(e){function t(){var e,a,l,r;(0,v.default)(this,t);for(var n=arguments.length,u=Array(n),s=0;s<n;s++)u[s]=arguments[s];return a=l=(0,g.default)(this,(e=t.__proto__||(0,m.default)(t)).call.apply(e,[this].concat(u))),l.state={},l.save=function(e){return l.props.save({username:l.props.user.username},e).then(function(){l.props.tempSuccess(),tracker.track("Profile change",{status:"success"})}).catch(function(e){throw tracker.track("Profile change",{status:"fail",error:e}),new k.SubmissionError({_error:e})})},l.dropzoneConfig={showFiletypeIcon:!1,postUrl:"/api/auth/profilepic",iconFiletypes:[".jpg",".png",".jpeg",".gif"],maxFiles:1},l.dropzoneEventHandlers={init:function(e){l.dropzone=e},addedfile:function(){},success:function(){setTimeout(function(){l.props.updatePic()},1e3),tracker.track("Profile picture upload")},error:function(e,t){l.props.permFail(t)},complete:function(e){l.dropzone.removeFile(e)},maxfilesexceeded:function(e){l.removeAllFiles(),l.addFile(e)}},r=a,(0,g.default)(l,r)}return(0,y.default)(t,e),(0,E.default)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.fail!==e.fail&&this.setState({error:e.fail}),this.props.error!==e.error&&this.setState({error:e.error})}},{key:"render",value:function(){var e=this.props,t=e.pristine,l=e.invalid,r=e.handleSubmit,n=e.submitting,u=e.success,s=e.submitFailed,o=e.user,i=this.state.error;return o?P.default.createElement("div",{className:R("ProfileForm")},P.default.createElement("div",{className:R("header")},P.default.createElement("h3",null,"Edit Profile")),u&&P.default.createElement(O.default,{bsStyle:"success"},"Your profile has been successfully updated!"),i&&i.id&&P.default.createElement(O.default,{bsStyle:"danger"},function(){switch(i.id){case"EmailTakenError":return"Email is already taken";case"NotFoundError":return"Current password is wrong";case"InvalidBodyError":return i.message;default:return"Something went wrong"}}()),P.default.createElement("div",{className:R("row","row-sm")},P.default.createElement("div",{className:R("col-sm-3")},P.default.createElement("div",{className:R("profilePicBox")},P.default.createElement("img",{src:o.profile_picture||a(290),className:R("profilePic")}),P.default.createElement(x.default,{config:this.dropzoneConfig,eventHandlers:this.dropzoneEventHandlers,className:R("dropzone","dropzoneLocal")},P.default.createElement("div",{className:"dz-message"},P.default.createElement("i",{className:"fa fa-cloud-upload"}),"Upload new picture")))),P.default.createElement("div",{className:R("col-sm-9")},P.default.createElement("form",{onSubmit:r(this.save)},P.default.createElement(k.Field,{name:"email",component:q.default,label:"Email",type:"email",size:"lg",focus:!0}),P.default.createElement(k.Field,{name:"name",component:q.default,label:"Name",type:"text",size:"lg"}),P.default.createElement(k.Field,{name:"password",component:q.default,label:"Current Password",type:"password",size:"lg"}),P.default.createElement("label",null,"Change Password"),P.default.createElement(k.Field,{name:"newPassword",component:q.default,label:"New Password",type:"password",size:"lg"}),P.default.createElement(k.Field,{name:"verifyNewPassword",component:q.default,label:"Verify New Password",type:"password",size:"lg"}),P.default.createElement("button",{type:"submit",className:"btn btn-success",disabled:t||l&&!s||n},n?" Saving...":" Save"))))):null}}]),t}(_.Component),d.propTypes={pristine:N.default.bool,invalid:N.default.bool,handleSubmit:N.default.func,submitting:N.default.bool,error:N.default.any,submitFailed:N.default.bool,tempSuccess:N.default.func,success:N.default.bool,permFail:N.default.func,fail:N.default.any,user:N.default.object,save:N.default.func,updatePic:N.default.func},i=c))||i)||i)||i)||i);t.default=V,e.exports=t.default},1764:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(117),r=(0,l.createValidator)({email:[l.required],password:[l.required],newPassword:[(0,l.minLength)(6)],verifyNewPassword:[(0,l.minLength)(6)]});t.default=r,e.exports=t.default}});
//# sourceMappingURL=settings-ff789f096279cf768b94.js.map