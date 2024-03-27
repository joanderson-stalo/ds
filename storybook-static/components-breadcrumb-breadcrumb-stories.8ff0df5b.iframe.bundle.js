/*! For license information please see components-breadcrumb-breadcrumb-stories.8ff0df5b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui_library_stalo=self.webpackChunkui_library_stalo||[]).push([[295],{"./src/components/breadcrumb/breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumb_stories});var taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./node_modules/react/index.js");const caretRight=__webpack_require__.p+"static/media/caretRight.695cb90c085a0219d5587cd6f14cf6cc.svg";const caretRightDisable=__webpack_require__.p+"static/media/caretRightDisable.1dbff1fc75e71ceb110563fa637e336c.svg";var _templateObject,_templateObject2,BreadcrumbContainer=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  align-items: center;\n"]))),Step=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  font-weight: ",";\n  color: ",";\n\n  span {\n    font-family: 'Public Sans';\n    font-size: 24px;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n    text-decoration: none;\n    border-bottom: ",";\n  }\n\n  &:not(:last-child)::after {\n    content: '';\n    padding: 0;\n    margin: 0 12px;\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    background-image: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n  }\n"])),(function(_ref){return _ref.isActive?"bold":"normal"}),(function(_ref2){var isActive=_ref2.isActive,isComplete=_ref2.isComplete,primaryColor=_ref2.primaryColor;return isActive?primaryColor:isComplete?"#3D4449":"#B1B1B1"}),(function(_ref3){var isActive=_ref3.isActive,primaryColor=_ref3.primaryColor;return isActive?"2px solid ".concat(primaryColor):"none"}),(function(_ref4){return _ref4.isComplete?caretRight:caretRightDisable})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Breadcrumb(_ref){var steps=_ref.steps,primaryColor=_ref.primaryColor;return(0,jsx_runtime.jsx)(BreadcrumbContainer,{children:steps.map((function(step,index){return(0,jsx_runtime.jsx)(Step,{primaryColor,isActive:step.isActive||!1,isComplete:step.isComplete||!1,children:(0,jsx_runtime.jsx)("span",{children:step.name})},index)}))})}Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  name: string;\n  isActive?: boolean;\n  isComplete?: boolean;\n}",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"isActive",value:{name:"boolean",required:!1}},{key:"isComplete",value:{name:"boolean",required:!1}}]}}],raw:"Array<{\n  name: string;\n  isActive?: boolean;\n  isComplete?: boolean;\n}>"},description:""},primaryColor:{required:!0,tsType:{name:"string"},description:""}}};const breadcrumb_stories={title:"Breadcrumb",component:Breadcrumb,parameters:{layout:"centered"},tags:["autodocs"]};var Default={args:{steps:[{name:"Informações",isComplete:!0},{name:"Pagamento",isActive:!0},{name:"Confirmação da compra"}],primaryColor:"#00ffbf"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    steps: [{\n      name: 'Informações',\n      isComplete: true\n    }, {\n      name: 'Pagamento',\n      isActive: true\n    }, {\n      name: 'Confirmação da compra'\n    }],\n    primaryColor: '#00ffbf'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);