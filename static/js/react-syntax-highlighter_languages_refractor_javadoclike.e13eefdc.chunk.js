"use strict";(self.webpackChunkcsg=self.webpackChunkcsg||[]).push([[5655],{4854:a=>{function e(a){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var t="doc-comment",r=a.languages[e];if(r){var i=r[t];if(!i){var s={};s[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},i=(r=a.languages.insertBefore(e,"comment",s))[t]}if(i instanceof RegExp&&(i=r[t]={pattern:i}),Array.isArray(i))for(var o=0,p=i.length;o<p;o++)i[o]instanceof RegExp&&(i[o]={pattern:i[o]}),n(i[o]);else n(i)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(a)}a.exports=e,e.displayName="javadoclike",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoclike.e13eefdc.chunk.js.map