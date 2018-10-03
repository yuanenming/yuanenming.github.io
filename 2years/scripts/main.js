"use strict";function createUniverse(){universe=canva.getContext("2d");for(var t=0;t<starCount;t++)stars[t]=new Star,stars[t].reset();draw()}function draw(){universe.clearRect(0,0,width,height);for(var t=stars.length,e=0;e<t;e++){var i=stars[e];i.move(),i.fadeIn(),i.fadeOut(),i.draw()}window.requestAnimationFrame(draw)}function Star(){this.reset=function(){this.giant=getProbability(3),this.comet=!this.giant&&!first&&getProbability(10),this.x=getRandInterval(0,width-10),this.y=getRandInterval(0,height),this.r=getRandInterval(1.1,2.6),this.dx=getRandInterval(speedCoeff,6*speedCoeff)+(this.comet+1-1)*speedCoeff*getRandInterval(50,120)+2*speedCoeff,this.dy=-getRandInterval(speedCoeff,6*speedCoeff)-(this.comet+1-1)*speedCoeff*getRandInterval(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=getRandInterval(.2,1-.4*(this.comet+1-1)),this["do"]=getRandInterval(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this["do"])},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this["do"]/2,(this.x>width||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(universe.beginPath(),this.giant)universe.fillStyle="rgba("+giantColor+","+this.opacity+")",universe.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){universe.fillStyle="rgba("+cometColor+","+this.opacity+")",universe.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)universe.fillStyle="rgba("+cometColor+","+(this.opacity-this.opacity/20*t)+")",universe.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),universe.fill()}else universe.fillStyle="rgba("+starColor+","+this.opacity+")",universe.rect(this.x,this.y,this.r,this.r);universe.closePath(),universe.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,this.fadingOut===!1&&this.reset(),(this.x>width-width/4||this.y<0)&&(this.fadingOut=!0)},function(){setTimeout(function(){first=!1},50)}()}function getProbability(t){return Math.floor(1e3*Math.random())+1<10*t}function getRandInterval(t,e){return Math.random()*(e-t)+t}function windowResizeHandler(){width=window.innerWidth,height=window.innerHeight,starCount=width*starDensity,circleRadius=width>height?height/2:width/2,circleCenter={x:width/2,y:height/2},canva.setAttribute("width",width),canva.setAttribute("height",height)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var starDensity=.216,speedCoeff=.05,width,height,starCount,circleRadius,circleCenter,first=!0,giantColor="180,184,240",starColor="226,225,142",cometColor="226,225,224",canva=document.getElementById("universe"),stars=[],universe;windowResizeHandler(),window.addEventListener("resize",windowResizeHandler,!1),createUniverse();var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(){u.clearRect(0,0,o,d),u.fillStyle="rgb(255, 255, 255)",u.textBaseline="middle",u.fontWeight="bold",u.font=p+"px 'SimHei', 'Avenir', 'Helvetica Neue', 'Arial', 'sans-serif'",u.fillText(v,.5*(o-u.measureText(v).width),.5*d);var n=u.getImageData(0,0,o,d);u.clearRect(0,0,o,d);for(var a=0,s=y.length;a<s;a++){var r=y[a];r.inText=!1}i(n),t.requestAnimationFrame(e)}function i(t){for(var e=[],i=o;i>0;i-=3)for(var n=0;n<d;n+=3){var a=4*(i+n*o);t.data[a]>1&&e.push([i,n])}var s=(e.length,parseInt((y.length-e.length)/2,10));s=s<0?0:s;for(var r=0;r<e.length&&s<y.length;r++,s++)try{var h,l,c=y[s];g?(h=e[r-1][0]-(c.px+10*Math.random()),l=e[r-1][1]-(c.py+10*Math.random())):(h=e[r-1][0]-c.px,l=e[r-1][1]-c.py);var f=Math.sqrt(h*h+l*l),v=Math.atan2(l,h),m=Math.cos(v),p=Math.sin(v);c.x=c.px+m*f*c.delta,c.y=c.py+p*f*c.delta,c.px=c.x,c.py=c.y,c.inText=!0,c.fadeIn(),c.draw(u)}catch(w){}for(var r=0;r<y.length;r++){var c=y[r];if(!c.inText){c.fadeOut();var h=c.mx-c.px,l=c.my-c.py,f=Math.sqrt(h*h+l*l),v=Math.atan2(l,h),m=Math.cos(v),p=Math.sin(v);c.x=c.px+m*f*c.delta/2,c.y=c.py+p*f*c.delta/2,c.px=c.x,c.py=c.y,c.draw(u)}}}function n(){f.width=o,f.height=d,f.style.position="absolute",f.style.left="0px",f.style.top="0px",f.style.bottom="0px",f.style.right="0px",f.style.marginTop=.15*t.innerHeight+"px"}function a(){document.addEventListener("click",function(t){return m++,m>=c.length?void m--:(v=c[m],void console.log(m))},!1),document.addEventListener("touchstart",function(t){return m++,m>=c.length?void m--:(v=c[m],void console.log(m))},!1)}function s(){if(f=document.getElementById(l),null!==f&&f.getContext){u=f.getContext("2d"),n(),a();for(var t=0;t<r;t++)y[t]=new w(f);e()}}t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;var r=2e3,h=2*Math.PI,o=500,d=150,l="canvas",c=["蒹葭苍苍","白露为霜","所谓伊人","在水一方","那年今日","姑苏城外","拙政园边","与子牵手","青青子衿","悠悠我心","时光为证","未来可期","天光乍破遇 ","暮雪白头老 ","一起向前","更好的我们 ","两❤️年"],f=void 0,u=void 0,y=[],g=!0,v=c[0],m=0,p=70,w=function(){function t(e){_classCallCheck(this,t);var i=e.height,n=1.2*Math.random();this.delta=.06,this.x=0,this.y=0,this.px=Math.random()*e.width,this.py=.5*e.height+(Math.random()-.5)*i,this.mx=this.px,this.my=this.py,this.size=n,this.inText=!1,this.opacity=0,this.fadeInRate=.005,this.fadeOutRate=.03,this.opacityTresh=.98,this.fadingOut=!0,this.fadingIn=!0}return _createClass(t,[{key:"fadeIn",value:function(){this.fadingIn=!(this.opacity>this.opacityTresh),this.fadingIn?this.opacity+=this.fadeInRate:this.opacity=1}},{key:"fadeOut",value:function(){this.fadingOut=!(this.opacity<0),this.fadingOut?(this.opacity-=this.fadeOutRate,this.opacity<0&&(this.opacity=0)):this.opacity=0}},{key:"draw",value:function(t){t.fillStyle="rgba(226,225,142, "+this.opacity+")",t.beginPath(),t.arc(this.x,this.y,this.size,0,h,!0),t.closePath(),t.fill()}}]),t}();s()}(window);