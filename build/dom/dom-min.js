YUI.add("dom",function(q){var N="nodeType",AB="ownerDocument",R="documentElement",z="defaultView",AH="parentWindow",AU="tagName",C="parentNode",m="firstChild",o="lastChild",v="previousSibling",AZ="nextSibling",AK="contains",AJ="compareDocumentPosition",l="innerText",K="textContent",w="length",x=undefined;var W=/<([a-z]+)/i;var AL={};q.DOM={byId:function(Ad,Y){return q.DOM._getDoc(Y).getElementById(Ad);},getText:function(Y){var Ad=Y?Y[K]:"";if(Ad===x&&l in Y){Ad=Y[l];}return Ad||"";},firstChild:function(Y,Ad){return q.DOM._childBy(Y,null,Ad);},firstChildByTag:function(Ad,Y,Ae){return q.DOM._childBy(Ad,Y,Ae);},lastChild:function(Y,Ad){return q.DOM._childBy(Y,null,Ad,true);},lastChildByTag:function(Ad,Y,Ae){return q.DOM._childBy(Ad,Y,Ae,true);},childrenByTag:function(){if(document[R].children){return function(Ae,Y,Af,Ad){Y=(Y&&Y!=="*")?Y:null;var Ag=[];if(Ae){Ag=(Y)?Ae.children.tags(Y):Ae.children;if(Af||Ad){Ag=q.DOM.filterElementsBy(Ag,Af);}}return Ag;};}else{return function(Ae,Ad,Af){Ad=(Ad&&Ad!=="*")?Ad.toUpperCase():null;var Ag=[],Y=Af;if(Ae){Ag=Ae.childNodes;if(Ad){Y=function(Ah){return Ah[AU].toUpperCase()===Ad&&(!Af||Af(Ah));};}Ag=q.DOM.filterElementsBy(Ag,Y);}return Ag;};}}(),children:function(Y,Ad){return q.DOM.childrenByTag(Y,null,Ad);},previous:function(Y,Ae,Ad){return q.DOM.elementByAxis(Y,v,Ae,Ad);},next:function(Y,Ae,Ad){return q.DOM.elementByAxis(Y,AZ,Ae,Ad);},ancestor:function(Y,Ae,Ad){return q.DOM.elementByAxis(Y,C,Ae,Ad);},elementByAxis:function(Y,Af,Ae,Ad){while(Y&&(Y=Y[Af])){if((Ad||Y[AU])&&(!Ae||Ae(Y))){return Y;}}return null;},byTag:function(Ad,Ae,Ah){Ae=Ae||q.config.doc;var Ai=Ae.getElementsByTagName(Ad),Ag=[];for(var Af=0,Y=Ai[w];Af<Y;++Af){if(!Ah||Ah(Ai[Af])){Ag[Ag[w]]=Ai[Af];}}return Ag;},firstByTag:function(Ad,Ae,Ah){Ae=Ae||q.config.doc;var Ai=Ae.getElementsByTagName(Ad),Af=null;for(var Ag=0,Y=Ai[w];Ag<Y;++Ag){if(!Ah||Ah(Ai[Ag])){Af=Ai[Ag];break;}}return Af;},filterElementsBy:function(Ah,Ag,Af){var Ad=(Af)?null:[];for(var Ae=0,Y=Ah[w];Ae<Y;++Ae){if(Ah[Ae][AU]&&(!Ag||Ag(Ah[Ae]))){if(Af){Ad=Ah[Ae];break;}else{Ad[Ad[w]]=Ah[Ae];}}}return Ad;},contains:function(Ad,Ae){var Y=false;if(!Ae||!Ad||!Ae[N]||!Ad[N]){Y=false;}else{if(Ad[AK]){if(q.UA.opera||Ae[N]===1){Y=Ad[AK](Ae);}else{Y=q.DOM._bruteContains(Ad,Ae);}}else{if(Ad[AJ]){if(Ad===Ae||!!(Ad[AJ](Ae)&16)){Y=true;}}}}return Y;},inDoc:function(Y,Ad){Ad=Ad||q.config.doc;return q.DOM.contains(Ad.documentElement,Y);},create:function(Ag,Ai){Ai=Ai||q.config.doc;var Ad=W.exec(Ag);var Af=q.DOM._create,Ah=q.DOM.creators,Y,Ae;if(Ad&&Ah[Ad[1]]){if(typeof Ah[Ad[1]]==="function"){Af=Ah[Ad[1]];}else{Y=Ah[Ad[1]];}}Ae=Af(Ag,Ai,Y);return(Ae.childNodes.length>1)?Ae.childNodes:Ae.childNodes[0];},CUSTOM_ATTRIBUTES:(!document.documentElement.hasAttribute)?{"for":"htmlFor","class":"className"}:{"htmlFor":"for","className":"class"},setAttribute:function(Ad,Y,Ae){Y=q.DOM.CUSTOM_ATTRIBUTES[Y]||Y;Ad.setAttribute(Y,Ae);},getAttribute:function(Ae,Y){Y=q.DOM.CUSTOM_ATTRIBUTES[Y]||Y;var Ad=Ae.getAttribute(Y);if(!document.documentElement.hasAttribute){if(Ae.getAttributeNode){Ad=Ae.getAttributeNode(Y);Ad=(Ad)?Ad.value:null;}else{Ad=Ae.getAttribute(Y);}}if(Ad===null){Ad="";}return Ad;},_create:function(Ad,Ae,Y){Y=Y||"div";var Af=AL[Y]||Ae.createElement(Y);Af.innerHTML=q.Lang.trim(Ad);return Af;},_bruteContains:function(Y,Ad){while(Ad){if(Y===Ad){return true;}Ad=Ad.parentNode;}return false;},_getRegExp:function(Ad,Y){Y=Y||"";q.DOM._regexCache=q.DOM._regexCache||{};if(!q.DOM._regexCache[Ad+Y]){q.DOM._regexCache[Ad+Y]=new RegExp(Ad,Y);}return q.DOM._regexCache[Ad+Y];},_getDoc:function(Y){Y=Y||{};return(Y[N]===9)?Y:Y[AB]||Y.document||q.config.doc;},_getWin:function(Y){var Ad=q.DOM._getDoc(Y);return Ad[z]||Ad[AH]||q.config.win;},_childBy:function(Ag,Y,Ai,Ae){var Af=null,Ad,Ah;if(Ag){if(Ae){Ad=Ag[o];Ah=v;}else{Ad=Ag[m];Ah=AZ;}if(q.DOM._testElement(Ad,Y,Ai)){Af=Ad;}else{Af=q.DOM.elementByAxis(Ad,Ah,Ai);}}return Af;},_testElement:function(Ad,Y,Ae){Y=(Y&&Y!=="*")?Y.toUpperCase():null;return(Ad&&Ad[AU]&&(!Y||Ad[AU].toUpperCase()===Y)&&(!Ae||Ae(Ad)));},creators:{},_IESimpleCreate:function(Y,Ad){Ad=Ad||q.config.doc;return Ad.createElement(Y);}};(function(){var Ag=q.DOM.creators,Y=q.DOM.create,Af=/(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/;var Ae="<table>",Ad="</table>";if(q.UA.gecko||q.UA.ie){q.mix(Ag,{option:function(Ah,Ai){var Aj=Y("<select>"+Ah+"</select>");return Aj;},tr:function(Ah,Ai){var Aj=Ag.tbody("<tbody>"+Ah+"</tbody>",Ai);return Aj.firstChild;},td:function(Ah,Ai){var Aj=Ag.tr("<tr>"+Ah+"</tr>",Ai);return Aj.firstChild;},tbody:function(Ah,Ai){var Aj=Y(Ae+Ah+Ad,Ai);return Aj;},legend:"fieldset"});Ag.col=Ag.tbody;}if(q.UA.ie){Ag.col=Ag.script=Ag.link=q.DOM._IESimpleCreate;Ag.tbody=function(Ai,Aj){var Ak=Y(Ae+Ai+Ad,Aj);var Ah=Ak.children.tags("tbody")[0];if(Ak.children.length>1&&Ah&&!Af.test(Ai)){Ah.parentNode.removeChild(Ah);}return Ak;};}if(q.UA.gecko||q.UA.ie){q.mix(Ag,{th:Ag.td,thead:Ag.tbody,tfoot:Ag.tbody,caption:Ag.tbody,colgroup:Ag.tbody,col:Ag.tbody,optgroup:Ag.option});}})();var AI="className";q.mix(q.DOM,{hasClass:function(Ae,Ad){var Y=q.DOM._getRegExp("(?:^|\\s+)"+Ad+"(?:\\s+|$)");return Y.test(Ae[AI]);},addClass:function(Ad,Y){if(!q.DOM.hasClass(Ad,Y)){Ad[AI]=q.Lang.trim([Ad[AI],Y].join(" "));}},removeClass:function(Ad,Y){if(Y&&q.DOM.hasClass(Ad,Y)){Ad[AI]=q.Lang.trim(Ad[AI].replace(q.DOM._getRegExp("(?:^|\\s+)"+Y+"(?:\\s+|$)")," "));if(q.DOM.hasClass(Ad,Y)){q.DOM.removeClass(Ad,Y);}}},replaceClass:function(Ad,Y,Ae){q.DOM.addClass(Ad,Ae);q.DOM.removeClass(Ad,Y);},toggleClass:function(Ad,Y){if(q.DOM.hasClass(Ad,Y)){q.DOM.removeClass(Ad,Y);}else{q.DOM.addClass(Ad,Y);}}});var R="documentElement",z="defaultView",AB="ownerDocument",E="style",X="float",n="cssFloat",L="styleFloat",AD="transparent",t="visible",c="width",AP="height",U="borderTopWidth",S="borderRightWidth",B="borderBottomWidth",f="borderLeftWidth",AG="getComputedStyle",AT=q.config.doc,x=undefined,P=/color$/i;q.mix(q.DOM,{CUSTOM_STYLES:{},setStyle:function(Ae,Y,Af,Ad){Ad=Ae[E],CUSTOM_STYLES=q.DOM.CUSTOM_STYLES;
if(Ad){if(Y in CUSTOM_STYLES){if(CUSTOM_STYLES[Y].set){CUSTOM_STYLES[Y].set(Ae,Af,Ad);return;}else{if(typeof CUSTOM_STYLES[Y]==="string"){Y=CUSTOM_STYLES[Y];}}}Ad[Y]=Af;}},getStyle:function(Af,Y){var Ae=Af[E],Ad=q.DOM.CUSTOM_STYLES,Ag="";if(Ae){if(Y in Ad){if(Ad[Y].get){return Ad[Y].get(Af,Y,Ae);}else{if(typeof Ad[Y]==="string"){Y=Ad[Y];}}}Ag=Ae[Y];if(Ag===""){Ag=q.DOM[AG](Af,Y);}}return Ag;},setStyles:function(Y,Ad){q.each(Ad,function(Ae,Af){q.DOM.setStyle(Y,Af,Ae);},q.DOM);},getComputedStyle:function(Ad,Y){var Af="",Ae=Ad[AB];if(Ad[E]){Af=Ae[z][AG](Ad,"")[Y];}return Af;}});if(AT[R][E][n]!==x){q.DOM.CUSTOM_STYLES[X]=n;}else{if(AT[R][E][L]!==x){q.DOM.CUSTOM_STYLES[X]=L;}}if(q.UA.opera){q.DOM[AG]=function(Ae,Ad){var Y=Ae[AB][z],Af=Y[AG](Ae,"")[Ad];if(P.test(Ad)){Af=q.Color.toRGB(Af);}return Af;};}if(q.UA.webkit){q.DOM[AG]=function(Ae,Ad){var Y=Ae[AB][z],Af=Y[AG](Ae,"")[Ad];if(Af==="rgba(0, 0, 0, 0)"){Af=AD;}return Af;};}var D="offsetTop",R="documentElement",i="compatMode",AF="offsetLeft",AE="offsetParent",J="position",e="fixed",I="relative",A="left",H="top",Ac="scrollLeft",u="scrollTop",AC="BackCompat",Q="medium",AP="height",c="width",f="borderLeftWidth",U="borderTopWidth",V="getBoundingClientRect",AG="getComputedStyle",AS=/^t(?:able|d|h)$/i;q.mix(q.DOM,{winHeight:function(Ad){var Y=q.DOM._getWinSize(Ad)[AP];return Y;},winWidth:function(Ad){var Y=q.DOM._getWinSize(Ad)[c];return Y;},docHeight:function(Ad){var Y=q.DOM._getDocSize(Ad)[AP];return Math.max(Y,q.DOM._getWinSize(Ad)[AP]);},docWidth:function(Ad){var Y=q.DOM._getDocSize(Ad)[c];return Math.max(Y,q.DOM._getWinSize(Ad)[c]);},docScrollX:function(Y){var Ad=q.DOM._getDoc(Y);return Math.max(Ad[R][Ac],Ad.body[Ac]);},docScrollY:function(Y){var Ad=q.DOM._getDoc(Y);return Math.max(Ad[R][u],Ad.body[u]);},getXY:function(){if(document[R][V]){return function(Af){if(!Af){return false;}var Ag=q.DOM.docScrollX(Af),Ad=q.DOM.docScrollY(Af),Ah=Af[V](),Al=q.DOM._getDoc(Af),Am=[Math.floor(Ah[A]),Math.floor(Ah[H])];if(q.UA.ie){var Ak=2,Aj=2,Ai=Al[i],Y=q.DOM[AG](Al[R],f),Ae=q.DOM[AG](Al[R],U);if(q.UA.ie===6){if(Ai!==AC){Ak=0;Aj=0;}}if((Ai==AC)){if(Y!==Q){Ak=parseInt(Y,10);}if(Ae!==Q){Aj=parseInt(Ae,10);}}Am[0]-=Ak;Am[1]-=Aj;}if((Ad||Ag)){Am[0]+=Ag;Am[1]+=Ad;}Am[0]=Math.floor(Am[0]);Am[1]=Math.floor(Am[1]);return Am;};}else{return function(Ad){var Af=[Ad[AF],Ad[D]],Y=Ad,Ah=((q.UA.gecko||q.UA.webkit>519)?true:false);while((Y=Y[AE])){Af[0]+=Y[AF];Af[1]+=Y[D];if(Ah){Af=q.DOM._calcBorders(Y,Af);}}if(q.DOM.getStyle(Ad,J)!=e){Y=Ad;var Ae,Ag;while((Y=Y.parentNode)){Ae=Y[u];Ag=Y[Ac];if(q.UA.gecko&&(q.DOM.getStyle(Y,"overflow")!=="visible")){Af=q.DOM._calcBorders(Y,Af);}if(Ae||Ag){Af[0]-=Ag;Af[1]-=Ae;}}Af[0]+=q.DOM.docScrollX(Ad);Af[1]+=q.DOM.docScrollY(Ad);}else{if(q.UA.opera){Af[0]-=q.DOM.docScrollX(Ad);Af[1]-=q.DOM.docScrollY(Ad);}else{if(q.UA.webkit||q.UA.gecko){Af[0]+=q.DOM.docScrollX(Ad);Af[1]+=q.DOM.docScrollY(Ad);}}}Af[0]=Math.floor(Af[0]);Af[1]=Math.floor(Af[1]);return Af;};}}(),getX:function(Y){return q.DOM.getXY(Y)[0];},getY:function(Y){return q.DOM.getXY(Y)[1];},setXY:function(Ad,Ag,Aj){var Ai=q.DOM.getStyle(Ad,J),Ae=q.DOM.setStyle,Ah=[parseInt(q.DOM[AG](Ad,A),10),parseInt(q.DOM[AG](Ad,H),10)];if(Ai=="static"){Ai=I;Ae(Ad,J,Ai);}var Af=q.DOM.getXY(Ad);if(Af===false){return false;}if(isNaN(Ah[0])){Ah[0]=(Ai==I)?0:Ad[AF];}if(isNaN(Ah[1])){Ah[1]=(Ai==I)?0:Ad[D];}if(Ag[0]!==null){Ae(Ad,A,Ag[0]-Af[0]+Ah[0]+"px");}if(Ag[1]!==null){Ae(Ad,H,Ag[1]-Af[1]+Ah[1]+"px");}if(!Aj){var Y=q.DOM.getXY(Ad);if((Ag[0]!==null&&Y[0]!=Ag[0])||(Ag[1]!==null&&Y[1]!=Ag[1])){q.DOM.setXY(Ad,Ag,true);}}},setX:function(Ad,Y){return q.DOM.setXY(Ad,[Y,null]);},setY:function(Y,Ad){return q.DOM.setXY(Y,[null,Ad]);},_calcBorders:function(Ae,Af){var Ad=parseInt(q.DOM[AG](Ae,U),10)||0,Y=parseInt(q.DOM[AG](Ae,f),10)||0;if(q.UA.gecko){if(AS.test(Ae.tagName)){Ad=0;Y=0;}}Af[0]+=Y;Af[1]+=Ad;return Af;},_getWinSize:function(Af){var Ah=q.DOM._getDoc(),Ag=Ah.defaultView||Ah.parentWindow,Ai=Ah[i],Ae=Ag.innerHeight,Ad=Ag.innerWidth,Y=Ah[R];if(Ai&&!q.UA.opera){if(Ai!="CSS1Compat"){Y=Ah.body;}Ae=Y.clientHeight;Ad=Y.clientWidth;}return{height:Ae,width:Ad};},_getDocSize:function(Ad){var Ae=q.DOM._getDoc(),Y=Ae[R];if(Ae[i]!="CSS1Compat"){Y=Ae.body;}return{height:Y.scrollHeight,width:Y.scrollWidth};}});var AW="offsetWidth",b="offsetHeight",H="top",G="right",AO="bottom",A="left",AU="tagName";var Aa=function(Af,Ae){var Ah=Math.max(Af[H],Ae[H]),Ai=Math.min(Af[G],Ae[G]),Y=Math.min(Af[AO],Ae[AO]),Ad=Math.max(Af[A],Ae[A]),Ag={};Ag[H]=Ah;Ag[G]=Ai;Ag[AO]=Y;Ag[A]=Ad;return Ag;};var y=y||q.DOM;q.mix(y,{region:function(Ae){var Y=y.getXY(Ae),Ad=false;if(Y){Ad={"0":Y[0],"1":Y[1],top:Y[1],right:Y[0]+Ae[AW],bottom:Y[1]+Ae[b],left:Y[0],height:Ae[b],width:Ae[AW]};}return Ad;},intersect:function(Ae,Y,Ag){var Ad=Ag||y.region(Ae),Af={};var Ai=Y;if(Ai[AU]){Af=y.region(Ai);}else{if(q.Lang.isObject(Y)){Af=Y;}else{return false;}}var Ah=Aa(Af,Ad);return{top:Ah[H],right:Ah[G],bottom:Ah[AO],left:Ah[A],area:((Ah[AO]-Ah[H])*(Ah[G]-Ah[A])),yoff:((Ah[AO]-Ah[H])),xoff:(Ah[G]-Ah[A]),inRegion:y.inRegion(Ae,Y,false,Ag)};},inRegion:function(Af,Y,Ad,Ah){var Ag={},Ae=Ah||y.region(Af);var Aj=Y;if(Aj[AU]){Ag=y.region(Aj);}else{if(q.Lang.isObject(Y)){Ag=Y;}else{return false;}}if(Ad){return(Ae[A]>=Ag[A]&&Ae[G]<=Ag[G]&&Ae[H]>=Ag[H]&&Ae[AO]<=Ag[AO]);}else{var Ai=Aa(Ag,Ae);if(Ai[AO]>=Ai[H]&&Ai[G]>=Ai[A]){return true;}else{return false;}}},inViewportRegion:function(Ad,Y,Ae){return y.inRegion(Ad,y.viewportRegion(Ad),Y,Ae);},viewportRegion:function(Ad){Ad=Ad||q.config.doc.documentElement;var Y={};Y[H]=y.docScrollY(Ad);Y[G]=y.winWidth(Ad)+y.docScrollX(Ad);Y[AO]=(y.docScrollY(Ad)+y.winHeight(Ad));Y[A]=y.docScrollX(Ad);return Y;}});var AM="clientTop",g="clientLeft",C="parentNode",G="right",r="hasLayout",s="px",AY="filter",AX="filters",p="opacity",Ab="auto",d="currentStyle";if(document[R][E][p]===x&&document[R][AX]){q.DOM.CUSTOM_STYLES[p]={get:function(Ad){var Af=100;try{Af=Ad[AX]["DXImageTransform.Microsoft.Alpha"][p];}catch(Ae){try{Af=Ad[AX]("alpha")[p];}catch(Y){}}return Af/100;
},set:function(Ad,Ae,Y){if(typeof Y[AY]=="string"){Y[AY]="alpha("+p+"="+Ae*100+")";if(!Ad[d]||!Ad[d][r]){Y.zoom=1;}}}};}var AV=/^width|height$/,j=/^(\d[.\d]*)+(em|ex|px|gd|rem|vw|vh|vm|ch|mm|cm|in|pt|pc|deg|rad|ms|s|hz|khz|%){1}?/i;var AA={CUSTOM_STYLES:{},get:function(Y,Ae){var Ad="",Af=Y[d][Ae];if(Ae===p){Ad=q.DOM.CUSTOM_STYLES[p].get(Y);}else{if(!Af||(Af.indexOf&&Af.indexOf(s)>-1)){Ad=Af;}else{if(q.DOM.IE.COMPUTED[Ae]){Ad=q.DOM.IE.COMPUTED[Ae](Y,Ae);}else{if(j.test(Af)){Ad=q.DOM.IE.ComputedStyle.getPixel(Y,Ae);}else{Ad=Af;}}}}return Ad;},getOffset:function(Ae,Aj){var Ag=Ae[d][Aj],Y=Aj.charAt(0).toUpperCase()+Aj.substr(1),Ah="offset"+Y,Ad="pixel"+Y,Af="";if(Ag==Ab){var Ai=Ae[Ah];if(Ai===x){Af=0;}Af=Ai;if(AV.test(Aj)){Ae[E][Aj]=Ai;if(Ae[Ah]>Ai){Af=Ai-(Ae[Ah]-Ai);}Ae[E][Aj]=Ab;}}else{if(!Ae[E][Ad]&&!Ae[E][Aj]){Ae[E][Aj]=Ag;}Af=Ae[E][Ad];}return Af+s;},getBorderWidth:function(Y,Ae){var Ad=null;if(!Y[d][r]){Y[E].zoom=1;}switch(Ae){case U:Ad=Y[AM];break;case B:Ad=Y.offsetHeight-Y.clientHeight-Y[AM];break;case f:Ad=Y[g];break;case S:Ad=Y.offsetWidth-Y.clientWidth-Y[g];break;}return Ad+s;},getPixel:function(Ad,Y){var Af=null,Ag=Ad[d][G],Ae=Ad[d][Y];Ad[E][G]=Ae;Af=Ad[E].pixelRight;Ad[E][G]=Ag;return Af+s;},getMargin:function(Ad,Y){var Ae;if(Ad[d][Y]==Ab){Ae=0+s;}else{Ae=q.DOM.IE.ComputedStyle.getPixel(Ad,Y);}return Ae;},getVisibility:function(Ad,Y){var Ae;while((Ae=Ad[d])&&Ae[Y]=="inherit"){Ad=Ad[C];}return(Ae)?Ae[Y]:t;},getColor:function(Ad,Y){var Ae=Ad[d][Y];if(!Ae||Ae===AD){q.DOM.elementByAxis(Ad,C,null,function(Af){Ae=Af[d][Y];if(Ae&&Ae!==AD){Ad=Af;return true;}});}return q.Color.toRGB(Ae);},getBorderColor:function(Ad,Y){var Ae=Ad[d];var Af=Ae[Y]||Ae.color;return q.Color.toRGB(q.Color.toHex(Af));}};var AQ={};AQ[c]=AQ[AP]=AA.getOffset;AQ.color=AQ.backgroundColor=AA.getColor;AQ[U]=AQ[S]=AQ[B]=AQ[f]=AA.getBorderWidth;AQ.marginTop=AQ.marginRight=AQ.marginBottom=AQ.marginLeft=AA.getMargin;AQ.visibility=AA.getVisibility;AQ.borderColor=AQ.borderTopColor=AQ.borderRightColor=AQ.borderBottomColor=AQ.borderLeftColor=AA.getBorderColor;if(!q.config.win[AG]){q.DOM[AG]=AA.get;}q.namespace("DOM.IE");q.DOM.IE.COMPUTED=AQ;q.DOM.IE.ComputedStyle=AA;var h="tag",C="parentNode",v="previousSibling",w="length",N="nodeType",AU="tagName",M="attributes",k="pseudos",F="combinator";var a=/^(?:([\-]?\d*)(n){1}|(odd|even)$)*([\-+]?\d*)$/;var AN={tag:/^((?:-?[_a-z]+[\w\-]*)|\*)/i,attributes:/^\[([a-z]+\w*)+([~\|\^\$\*!=]=?)?['"]?([^\]]*?)['"]?\]/i,pseudos:/^:([\-\w]+)(?:\(['"]?(.+)['"]?\))*/i,combinator:/^\s*([>+~]|\s)\s*/};var AR={document:q.config.doc,attrAliases:{},shorthand:{"\\#(-?[_a-z]+[-\\w]*)":"[id=$1]","\\.(-?[_a-z]+[-\\w]*)":"[class~=$1]"},operators:{"=":function(Y,Ad){return Y===Ad;},"!=":function(Y,Ad){return Y!==Ad;},"~=":function(Y,Ae){var Ad=" ";return(Ad+Y+Ad).indexOf((Ad+Ae+Ad))>-1;},"|=":function(Y,Ad){return q.DOM._getRegExp("^"+Ad+"[-]?").test(Y);},"^=":function(Y,Ad){return Y.indexOf(Ad)===0;},"$=":function(Y,Ad){return Y.lastIndexOf(Ad)===Y[w]-Ad[w];},"*=":function(Y,Ad){return Y.indexOf(Ad)>-1;},"":function(Y,Ad){return Y;}},pseudos:{"root":function(Y){return Y===Y.ownerDocument.documentElement;},"nth-child":function(Y,Ad){return AR.getNth(Y,Ad);},"nth-last-child":function(Y,Ad){return AR.getNth(Y,Ad,null,true);},"nth-of-type":function(Y,Ad){return AR.getNth(Y,Ad,Y[AU]);},"nth-last-of-type":function(Y,Ad){return AR.getNth(Y,Ad,Y[AU],true);},"first-child":function(Y){return q.DOM.firstChild(Y[C])===Y;},"last-child":function(Y){return q.DOM.lastChild(Y[C])===Y;},"first-of-type":function(Y,Ad){return q.DOM.firstChildByTag(Y[C],Y[AU])===Y;},"last-of-type":function(Y,Ad){return q.DOM.lastChildByTag(Y[C],Y[AU])===Y;},"only-child":function(Ad){var Y=q.DOM.children(Ad[C]);return Y[w]===1&&Y[0]===Ad;},"only-of-type":function(Y){return q.DOM.childrenByTag(Y[C],Y[AU])[w]===1;},"empty":function(Y){return Y.childNodes[w]===0;},"not":function(Y,Ad){return !AR.test(Y,Ad);},"contains":function(Y,Ae){var Ad=Y.innerText||Y.textContent||"";return Ad.indexOf(Ae)>-1;},"checked":function(Y){return Y.checked===true;}},test:function(Ag,Ae){if(!Ag){return false;}var Ad=Ae?Ae.split(","):[];if(Ad[w]){for(var Af=0,Y=Ad[w];Af<Y;++Af){if(AR._testNode(Ag,Ad[Af])){return true;}}return false;}return AR._testNode(Ag,Ae);},filter:function(Ae,Ad){Ae=Ae||[];var Y=AR._filter(Ae,AR._tokenize(Ad)[0]);return Y;},query:function(Ad,Ae,Af){var Y=AR._query(Ad,Ae,Af);return Y;},_query:function(Ai,An,Ao,Ag){var Aq=(Ao)?null:[];if(!Ai){return Aq;}An=An||AR.document;var Ae=Ai.split(",");if(Ae[w]>1){var Ap;for(var Aj=0,Ak=Ae[w];Aj<Ak;++Aj){Ap=arguments.callee(Ae[Aj],An,Ao,true);Aq=Ao?Ap:Aq.concat(Ap);}AR._clearFoundCache();return Aq;}var Am=AR._tokenize(Ai);var Al=Am[AR._getIdTokenIndex(Am)],Y=[],Af,Ad,Ah=Am.pop()||{};if(Al){Ad=AR._getId(Al[M]);}if(Ad){Af=AR.document.getElementById(Ad);if(Af&&(An[N]===9||q.DOM.contains(An,Af))){if(AR._testNode(Af,null,Al)){if(Al===Ah){Y=[Af];}else{An=Af;}}}else{return Aq;}}if(An&&!Y[w]){Y=An.getElementsByTagName(Ah[h]);}if(Y[w]){Aq=AR._filter(Y,Ah,Ao,Ag);}return Aq;},_filter:function(Ae,Af,Ag,Ad){var Y=Ag?null:[];Y=q.DOM.filterElementsBy(Ae,function(Ah){if(!AR._testNode(Ah,"",Af,Ad)){return false;}if(Ad){if(Ah._found){return false;}Ah._found=true;AR._foundCache[AR._foundCache[w]]=Ah;}return true;},Ag);return Y;},_testNode:function(Ae,Ai,Ah,Af){Ah=Ah||AR._tokenize(Ai).pop()||{};var Ad=AR.operators,Al=AR.pseudos,Ag=Ah.previous,Aj,Ak;if(!Ae[AU]||(Ah[h]!=="*"&&Ae[AU].toUpperCase()!==Ah[h])||(Af&&Ae._found)){return false;}if(Ah[M][w]){var Y;for(Aj=0,Ak=Ah[M][w];Aj<Ak;++Aj){Y=Ae.getAttribute(Ah[M][Aj][0],2);if(Y===undefined){return false;}if(Ad[Ah[M][Aj][1]]&&!Ad[Ah[M][Aj][1]](Y,Ah[M][Aj][2])){return false;}}}if(Ah[k][w]){for(Aj=0,Ak=Ah[k][w];Aj<Ak;++Aj){if(Al[Ah[k][Aj][0]]&&!Al[Ah[k][Aj][0]](Ae,Ah[k][Aj][1])){return false;}}}return(Ag&&Ag[F]!==",")?AR.combinators[Ag[F]](Ae,Ah):true;},_foundCache:[],_regexCache:{},_clearFoundCache:function(){for(var Ad=0,Y=AR._foundCache[w];Ad<Y;++Ad){try{delete AR._foundCache[Ad]._found;
}catch(Ae){AR._foundCache[Ad].removeAttribute("_found");}}AR._foundCache=[];},combinators:{" ":function(Ad,Y){while((Ad=Ad[C])){if(AR._testNode(Ad,"",Y.previous)){return true;}}return false;},">":function(Ad,Y){return AR._testNode(Ad[C],null,Y.previous);},"+":function(Ae,Ad){var Y=Ae[v];while(Y&&Y[N]!==1){Y=Y[v];}if(Y&&AR._testNode(Y,null,Ad.previous)){return true;}return false;},"~":function(Ae,Ad){var Y=Ae[v];while(Y){if(Y[N]===1&&AR._testNode(Y,null,Ad.previous)){return true;}Y=Y[v];}return false;}},getNth:function(Ad,Am,An,Ah){a.test(Am);var Al=parseInt(RegExp.$1,10),Y=RegExp.$2,Ai=RegExp.$3,Aj=parseInt(RegExp.$4,10)||0,Af,Ae,Ag,Ak;if(An){Ak=q.DOM.childrenByTag(Ad[C],An);}else{Ak=q.DOM.children(Ad[C]);}if(Ai){Al=2;Af="+";Y="n";Aj=(Ai==="odd")?1:0;}else{if(isNaN(Al)){Al=(Y)?1:0;}}if(Al===0){if(Ah){Aj=Ak[w]-Aj+1;}if(Ak[Aj-1]===Ad){return true;}else{return false;}}else{if(Al<0){Ah=!!Ah;Al=Math.abs(Al);}}if(!Ah){for(Ae=Aj-1,Ag=Ak[w];Ae<Ag;Ae+=Al){if(Ae>=0&&Ak[Ae]===Ad){return true;}}}else{for(Ae=Ak[w]-Aj,Ag=Ak[w];Ae>=0;Ae-=Al){if(Ae<Ag&&Ak[Ae]===Ad){return true;}}}return false;},_getId:function(Ad){for(var Ae=0,Y=Ad[w];Ae<Y;++Ae){if(Ad[Ae][0]=="id"&&Ad[Ae][1]==="="){return Ad[Ae][2];}}},_getIdTokenIndex:function(Ae){for(var Ad=0,Y=Ae[w];Ad<Y;++Ad){if(AR._getId(Ae[Ad][M])){return Ad;}}return -1;},_tokenize:function(Y){var Ae={},Ah=[],Ag=false,Ad;Y=AR._replaceShorthand(Y);do{Ag=false;for(var Af in AN){if(AN.hasOwnProperty(Af)){if(Af!=h&&Af!=F){Ae[Af]=Ae[Af]||[];}if((Ad=AN[Af].exec(Y))){Ag=true;if(Af!=h&&Af!=F){if(Af===M&&Ad[1]==="id"){Ae.id=Ad[3];}Ae[Af].push(Ad.slice(1));}else{Ae[Af]=Ad[1];}Y=Y.replace(Ad[0],"");if(Af===F||!Y[w]){Ae[M]=AR._fixAttributes(Ae[M]);Ae[k]=Ae[k]||[];Ae[h]=Ae[h]?Ae[h].toUpperCase():"*";Ah.push(Ae);Ae={previous:Ae};}}}}}while(Ag);return Ah;},_fixAttributes:function(Ad){var Ae=AR.attrAliases;Ad=Ad||[];for(var Af=0,Y=Ad[w];Af<Y;++Af){if(Ae[Ad[Af][0]]){Ad[Af][0]=Ae[Ad[Af][0]];}if(!Ad[Af][1]){Ad[Af][1]="";}}return Ad;},_replaceShorthand:function(Ad){var Ae=AR.shorthand;var Af=Ad.match(AN[M]);if(Af){Ad=Ad.replace(AN[M],"REPLACED_ATTRIBUTE");}for(var Ah in Ae){if(Ae.hasOwnProperty(Ah)){Ad=Ad.replace(q.DOM._getRegExp(Ah,"gi"),Ae[Ah]);}}if(Af){for(var Ag=0,Y=Af[w];Ag<Y;++Ag){Ad=Ad.replace("REPLACED_ATTRIBUTE",Af[Ag]);}}return Ad;}};if(q.UA.ie&&q.UA.ie<8){AR.attrAliases["class"]="className";AR.attrAliases["for"]="htmlFor";}q.Selector=AR;q.Selector.patterns=AN;var T="toString",O=parseInt,Z=RegExp;q.Color={KEYWORDS:{black:"000",silver:"c0c0c0",gray:"808080",white:"fff",maroon:"800000",red:"f00",purple:"800080",fuchsia:"f0f",green:"008000",lime:"0f0",olive:"808000",yellow:"ff0",navy:"000080",blue:"00f",teal:"008080",aqua:"0ff"},re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/([0-9A-F])/gi,toRGB:function(Y){if(!q.Color.re_RGB.test(Y)){Y=q.Color.toHex(Y);}if(q.Color.re_hex.exec(Y)){Y="rgb("+[O(Z.$1,16),O(Z.$2,16),O(Z.$3,16)].join(", ")+")";}return Y;},toHex:function(Af){Af=q.Color.KEYWORDS[Af]||Af;if(q.Color.re_RGB.exec(Af)){var Ae=(Z.$1.length===1)?"0"+Z.$1:Number(Z.$1),Ad=(Z.$2.length===1)?"0"+Z.$2:Number(Z.$2),Y=(Z.$3.length===1)?"0"+Z.$3:Number(Z.$3);Af=[Ae[T](16),Ad[T](16),Y[T](16)].join("");}if(Af.length<6){Af=Af.replace(q.Color.re_hex3,"$1$1");}if(Af!=="transparent"&&Af.indexOf("#")<0){Af="#"+Af;}return Af.toLowerCase();}};},"@VERSION@");