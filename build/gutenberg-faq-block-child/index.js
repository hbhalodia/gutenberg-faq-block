!function(){"use strict";var e,t={845:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,a=JSON.parse('{"u2":"create-block/gutenberg-faq-block-child","TN":"Gutenberg FaQ Block Child","qm":["create-block/gutenberg-faq-block"]}');(0,e.registerBlockType)(a.u2,{title:a.TN,parent:a.qm,edit:function(e){let{attributes:a,setAttributes:o}=e;const{question:c,answer:l}=a;return(0,r.useBlockProps)(),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"faq-wrapper"},(0,t.createElement)(r.RichText,{tagName:"div",className:"faq-question",value:c,onChange:e=>{o({question:e})},placeholder:(0,n.__)("Question..","gutenberg-faq-block")}),(0,t.createElement)(r.RichText,{tagName:"div",className:"faq-answer",value:l,onChange:e=>{o({answer:e})},placeholder:(0,n.__)("Answer..","gutenberg-faq-block")})))},save:function(e){let{attributes:n}=e;r.useBlockProps.save();const{question:a,answer:o}=n;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"faq-wrapper"},(0,t.createElement)(r.RichText.Content,{tagName:"div",className:"faq-question",value:a}),(0,t.createElement)(r.RichText.Content,{tagName:"div",className:"faq-answer",value:o})))}})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,a,o){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],o=e[s][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<c&&(c=o));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={247:0,504:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,c=n[0],l=n[1],i=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var s=i(r)}for(t&&t(n);u<c.length;u++)o=c[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self.webpackChunkgutenberg_faq_block=self.webpackChunkgutenberg_faq_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[504],(function(){return r(845)}));a=r.O(a)}();