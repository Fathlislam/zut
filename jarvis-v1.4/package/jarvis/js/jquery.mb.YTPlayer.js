/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.YTPlayer.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 22/06/13 1.20
 *  *****************************************************************************
 */

/*Browser detection patch*/
function onYouTubePlayerAPIReady(){if(ytp.YTAPIReady)return;ytp.YTAPIReady=true;jQuery(document).trigger("YTAPIReady")}(function(){if(!(8>jQuery.fn.jquery.split(".")[1])){jQuery.browser={};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.msie=!1;var e=navigator.userAgent;jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var t,n;if(-1!=(n=e.indexOf("Opera"))){if(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=e.substring(n+6),-1!=(n=e.indexOf("Version")))jQuery.browser.fullVersion=e.substring(n+8)}else if(-1!=(n=e.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=e.substring(n+5);else if(-1!=(n=e.indexOf("Chrome")))jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=e.substring(n+7);else if(-1!=(n=e.indexOf("Safari"))){if(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=e.substring(n+7),-1!=(n=e.indexOf("Version")))jQuery.browser.fullVersion=e.substring(n+8)}else if(-1!=(n=e.indexOf("Firefox")))jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=e.substring(n+8);else if((t=e.lastIndexOf(" ")+1)<(n=e.lastIndexOf("/")))jQuery.browser.name=e.substring(t,n),jQuery.browser.fullVersion=e.substring(n+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName);if(-1!=(e=jQuery.browser.fullVersion.indexOf(";")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e);if(-1!=(e=jQuery.browser.fullVersion.indexOf(" ")))jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,e);jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));jQuery.browser.version=jQuery.browser.majorVersion}})(jQuery);jQuery.fn.CSSAnimate=function(e,t,n,r,i){return this.each(function(){var s=jQuery(this);if(0!==s.length&&e){"function"==typeof t&&(i=t,t=jQuery.fx.speeds._default);"function"==typeof n&&(i=n,n=0);"function"==typeof r&&(i=r,r="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof t)for(var o in jQuery.fx.speeds)if(t==o){t=jQuery.fx.speeds[o];break}else t=null;if(jQuery.support.transition){var u="",c="transitionEnd";jQuery.browser.webkit?(u="-webkit-",c="webkitTransitionEnd"):jQuery.browser.mozilla?(u="-moz-",c="transitionend"):jQuery.browser.opera?(u="-o-",c="otransitionend"):jQuery.browser.msie&&(u="-ms-",c="msTransitionEnd");o=[];for(p in e){var h=p;"transform"===h&&(h=u+"transform",e[h]=e[p],delete e[p]);"transform-origin"===h&&(h=u+"transform-origin",e[h]=e[p],delete e[p]);o.push(h);s.css(h)||s.css(h,0)}p=o.join(",");s.css(u+"transition-property",p);s.css(u+"transition-duration",t+"ms");s.css(u+"transition-delay",n+"ms");s.css(u+"transition-timing-function",r);s.css(u+"backface-visibility","hidden");setTimeout(function(){s.css(e)},0);setTimeout(function(){s.called||!i?s.called=!1:i()},t+20);s.on(c,function(e){s.off(c);s.css(u+"transition","");e.stopPropagation();"function"==typeof i&&(s.called=!0,i());return!1})}else{for(var p in e)"transform"===p&&delete e[p],"transform-origin"===p&&delete e[p],"auto"===e[p]&&delete e[p];if(!i||"string"===typeof i)i="linear";s.animate(e,t,i)}}})};jQuery.fn.CSSAnimateStop=function(){var e="",t="transitionEnd";jQuery.browser.webkit?(e="-webkit-",t="webkitTransitionEnd"):jQuery.browser.mozilla?(e="-moz-",t="transitionend"):jQuery.browser.opera?(e="-o-",t="otransitionend"):jQuery.browser.msie&&(e="-ms-",t="msTransitionEnd");jQuery(this).css(e+"transition","");jQuery(this).off(t)};jQuery.support.transition=function(){var e=(document.body||document.documentElement).style;return void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition}();(function(c){c.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(e,t){this.defaults.type=e;this.defaults.name=t},get:function(b,f){var d=c.extend({},this.defaults,f);d.single.length||(d.single="metadata");var a=c.data(b,d.single);if(a)return a;a="{}";if("class"==d.type){var e=d.cre.exec(b.className);e&&(a=e[1])}else if("elem"==d.type){if(!b.getElementsByTagName)return;e=b.getElementsByTagName(d.name);e.length&&(a=c.trim(e[0].innerHTML))}else void 0!=b.getAttribute&&(e=b.getAttribute(d.name))&&(a=e);0>a.indexOf("{")&&(a="{"+a+"}");a=eval("("+a+")");c.data(b,d.single,a);return a}}});c.fn.metadata=function(e){return c.metadata.get(this[0],e)}})(jQuery);if(typeof ytp!="object")ytp={};String.prototype.getVideoID=function(){var e;if(this.substr(0,16)=="http://youtu.be/"){e=this.replace("http://youtu.be/","")}else if(this.indexOf("http")>-1){e=this.match(/[\\?&]v=([^&#]*)/)[1]}else{e=this}return e};var isDevice="ontouchstart"in window;(function(jQuery){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.5.4",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"16/9",showYTLogo:false,videoURL:null,startAt:0,autoPlay:true,vol:100,addRaster:false,opacity:1,quality:"default",mute:false,loop:true,showControls:true,showAnnotations:false,printUrl:true,stopMovieOnClick:false,onReady:function(e){},onStateChange:function(e){},onPlaybackQualityChange:function(e){},onError:function(e){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},rasterImg:"images/raster.png",rasterImgRetina:"images/raster@2x.png",buildPlayer:function(options){return this.each(function(){var YTPlayer=this;var $YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0;YTPlayer.opt={};var property={};if(jQuery.metadata){jQuery.metadata.setType("class");property=$YTPlayer.metadata()}if(jQuery.isEmptyObject(property))property=$YTPlayer.data("property")&&typeof $YTPlayer.data("property")=="string"?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);if(!$YTPlayer.attr("id"))$YTPlayer.attr("id","id_"+(new Date).getTime());YTPlayer.opt.id=YTPlayer.id;YTPlayer.isAlone=false;if(YTPlayer.opt.isBgndMovie)YTPlayer.opt.containment="body";if(YTPlayer.opt.isBgndMovie&&YTPlayer.opt.isBgndMovie.mute!=undefined)YTPlayer.opt.mute=YTPlayer.opt.isBgndMovie.mute;if(!YTPlayer.opt.videoURL)YTPlayer.opt.videoURL=$YTPlayer.attr("href");var playerID="mbYTP_"+YTPlayer.id;var videoID=this.opt.videoURL?this.opt.videoURL.getVideoID():$YTPlayer.attr("href")?$YTPlayer.attr("href").getVideoID():false;YTPlayer.videoID=videoID;YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:true,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations};var canPlayHTML5=false;var v=document.createElement("video");if(v.canPlayType){canPlayHTML5=true}if(canPlayHTML5)jQuery.extend(playerVars,{html5:1});if(jQuery.browser.msie&&jQuery.browser.version<9){this.opt.opacity=1}var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox");var overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");YTPlayer.opt.containment=YTPlayer.opt.containment=="self"?jQuery(this):jQuery(YTPlayer.opt.containment);YTPlayer.isBackground=YTPlayer.opt.containment.get(0).tagName.toLowerCase()=="body";if(isDevice&&YTPlayer.isBackground){$YTPlayer.hide();return}if(YTPlayer.opt.addRaster){var retina=window.retina||window.devicePixelRatio>1;overlay.addClass(retina?"raster retina":"raster")}else{overlay.removeClass("raster retina")}var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0});playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden",opacity:this.opt.opacity});wrapper.append(playerBox);if(YTPlayer.isBackground&&ytp.isInit)return;YTPlayer.opt.containment.children().each(function(){if(jQuery(this).css("position")=="static")jQuery(this).css("position","relative")});if(YTPlayer.isBackground){jQuery("body").css({position:"relative",minWidth:"100%",minHeight:"100%",zIndex:1,boxSizing:"border-box"});wrapper.css({position:"fixed",top:0,left:0,zIndex:0});$YTPlayer.hide();YTPlayer.opt.containment.prepend(wrapper)}else YTPlayer.opt.containment.prepend(wrapper);YTPlayer.wrapper=wrapper;playerBox.css({opacity:1});if(!isDevice){playerBox.after(overlay);YTPlayer.overlay=overlay}if(!YTPlayer.isBackground){overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTVPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTVPBar").removeClass("visible")})}if(!ytp.YTAPIReady){var tag=document.createElement("script");tag.src="http://www.youtube.com/player_api";tag.id="YTAPI";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)}else{setTimeout(function(){jQuery(document).trigger("YTAPIReady")},200)}jQuery(document).on("YTAPIReady",function(){if(YTPlayer.isBackground&&ytp.isInit||YTPlayer.opt.isInit)return;if(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick)jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer",function(e){var t=jQuery(e.target);if(t.is("a")||t.parents().is("a")){$YTPlayer.pauseYTP()}});if(YTPlayer.isBackground)ytp.isInit=true;YTPlayer.opt.isInit=true;YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100;jQuery.mbYTPlayer.getDataFromFeed(YTPlayer.videoID,YTPlayer);jQuery(document).on("getVideoInfo_"+YTPlayer.opt.id,function(){if(isDevice&&!YTPlayer.isBackground){new YT.Player(playerID,{height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(){$YTPlayer.optimizeDisplay();playerBox.css({opacity:1});YTPlayer.wrapper.css({opacity:1});$YTPlayer.optimizeDisplay()},onStateChange:function(){}}});return}new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(e){YTPlayer.player=e.target;if(YTPlayer.isReady)return;YTPlayer.isReady=true;YTPlayer.playerEl=YTPlayer.player.getIframe();$YTPlayer.optimizeDisplay();YTPlayer.videoID=videoID;jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()});if(YTPlayer.opt.showControls)jQuery(YTPlayer).buildYTPControls();YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);if(YTPlayer.opt.startAt>0)YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt),true);if(!YTPlayer.opt.autoPlay){YTPlayer.checkForStartAt=setInterval(function(){if(YTPlayer.player.getCurrentTime()>=YTPlayer.opt.startAt){clearInterval(YTPlayer.checkForStartAt);$YTPlayer.pauseYTP();if(YTPlayer.opt.mute){jQuery(YTPlayer).muteYTPVolume()}else{jQuery(YTPlayer).unmuteYTPVolume()}}},1)}else{$YTPlayer.playYTP();YTPlayer.player.setVolume(YTPlayer.opt.vol);if(YTPlayer.opt.mute){jQuery(YTPlayer).muteYTPVolume()}else{jQuery(YTPlayer).unmuteYTPVolume()}}if(typeof YTPlayer.opt.onReady=="function")YTPlayer.opt.onReady($YTPlayer);jQuery.mbYTPlayer.checkForState(YTPlayer)},onStateChange:function(e){if(typeof e.target.getPlayerState!="function")return;var t=e.target.getPlayerState();if(typeof YTPlayer.opt.onStateChange=="function")YTPlayer.opt.onStateChange($YTPlayer,t);var n=jQuery(YTPlayer.playerEl);var r=jQuery("#controlBar_"+YTPlayer.id);var i=YTPlayer.opt;if(t==0){if(YTPlayer.state==t)return;YTPlayer.state=t;YTPlayer.player.pauseVideo();var s=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;if(i.loop){YTPlayer.wrapper.css({opacity:0});$YTPlayer.playYTP();YTPlayer.player.seekTo(s,true)}else if(!YTPlayer.isBackground){YTPlayer.player.seekTo(s,true);$YTPlayer.playYTP();setTimeout(function(){$YTPlayer.pauseYTP()},10)}if(!i.loop&&YTPlayer.isBackground)YTPlayer.wrapper.CSSAnimate({opacity:0},2e3);else if(i.loop){YTPlayer.wrapper.css({opacity:0});YTPlayer.loop++}r.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);jQuery(YTPlayer).trigger("YTPEnd")}if(t==3){if(YTPlayer.state==t)return;YTPlayer.state=t;r.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);jQuery(YTPlayer).trigger("YTPBuffering")}if(t==-1){if(YTPlayer.state==t)return;YTPlayer.state=t;YTPlayer.wrapper.css({opacity:0});jQuery(YTPlayer).trigger("YTPUnstarted")}if(t==1){if(YTPlayer.state==t)return;YTPlayer.state=t;if(YTPlayer.opt.mute){$YTPlayer.muteYTPVolume();YTPlayer.opt.mute=false}if(YTPlayer.opt.autoPlay&&YTPlayer.loop==0){YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)}else if(!YTPlayer.isBackground){YTPlayer.wrapper.css({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity});$YTPlayer.css({background:"transparent"})}else{setTimeout(function(){jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},2e3);YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},2e3)},1e3)}r.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.pause);jQuery(YTPlayer).trigger("YTPStart")}if(t==2){if(YTPlayer.state==t)return;YTPlayer.state=t;r.find(".mb_YTVPPlaypause").html(jQuery.mbYTPlayer.controls.play);jQuery(YTPlayer).trigger("YTPPause")}},onPlaybackQualityChange:function(e){if(typeof YTPlayer.opt.onPlaybackQualityChange=="function")YTPlayer.opt.onPlaybackQualityChange($YTPlayer)},onError:function(e){if(e.data==2)jQuery(YTPlayer).trigger("YTPError");if(typeof YTPlayer.opt.onError=="function")YTPlayer.opt.onError($YTPlayer,e)}}})})})})},getDataFromFeed:function(e,t){t.videoID=e;if(!jQuery.browser.msie){jQuery.getJSON("http://gdata.youtube.com/feeds/api/videos/"+e+"?v=2&alt=jsonc",function(e,n,r){t.dataReceived=true;var i=e.data;t.title=i.title;t.videoData=i;if(t.opt.ratio=="auto")if(i.aspectRatio&&i.aspectRatio==="widescreen")t.opt.ratio="16/9";else t.opt.ratio="4/3";if(!t.isInit){t.isInit=true;if(!t.isBackground){var s=i.thumbnail.hqDefault;jQuery(t).css({background:"url("+s+") center center",backgroundSize:"cover"})}jQuery(document).trigger("getVideoInfo_"+t.opt.id)}jQuery(t).trigger("YTPChanged")});setTimeout(function(){if(!t.dataReceived&&!t.isInit){t.isInit=true;jQuery(document).trigger("getVideoInfo_"+t.opt.id)}},2500)}else{t.opt.ratio=="auto"?t.opt.ratio="16/9":t.opt.ratio;if(!t.isInit){t.isInit=true;setTimeout(function(){jQuery(document).trigger("getVideoInfo_"+t.opt.id)},100)}jQuery(t).trigger("YTPChanged")}},getVideoID:function(){var e=this.get(0);return e.videoID||false},YTPlaylist:function(e,t,n){var r=this.get(0);r.isPlayList=true;if(t)e=jQuery.shuffle(e);if(!r.videoID){r.videos=e;r.videoCounter=0;r.videoLength=e.length;jQuery(r).data("property",e[0]);jQuery(r).mb_YTPlayer()}if(typeof n=="function")jQuery(r).on("YTPChanged",function(){n(r)});jQuery(r).on("YTPError",function(){r.err=setTimeout(function(){jQuery(r).trigger("YTPEnd")},1e3)});jQuery(r).on("YTPEnd",function(){r.videoCounter++;if(r.videoCounter>=r.videoLength)r.videoCounter=0;jQuery(r).changeMovie(e[r.videoCounter])});jQuery(r).on("YTPStart",function(){clearTimeout(r.err)})},playNext:function(){var e=this.get(0);e.videoCounter++;if(e.videoCounter>=e.videoLength)e.videoCounter=0;jQuery(e).changeMovie(e.videos[e.videoCounter])},changeMovie:function(e){var t=this.get(0);var n=t.opt;if(e){jQuery.extend(n,e)}t.videoID=n.videoURL.getVideoID();jQuery(t.playerEl).css({opacity:0});jQuery(t).stopYTP();jQuery(t).getPlayer().cueVideoByUrl("http://www.youtube.com/v/"+t.videoID,0);var r=$.browser.msie?500:0;setTimeout(function(){jQuery(t.playerEl).css({opacity:1});jQuery(t).playYTP()},r);if(t.opt.mute){jQuery(t).muteYTPVolume()}else{jQuery(t).unmuteYTPVolume()}if(t.opt.addRaster){var i=window.retina||window.devicePixelRatio>1;t.overlay.addClass(i?"raster retina":"raster")}else{t.overlay.removeClass("raster");t.overlay.removeClass("retina")}jQuery("#controlBar_"+t.id).remove();if(t.opt.showControls)jQuery(t).buildYTPControls();if(!jQuery.browser.msie)jQuery.mbYTPlayer.getDataFromFeed(t.videoID,t);jQuery(t).optimizeDisplay();jQuery.mbYTPlayer.checkForState(t)},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var e=this.get(0);ytp.YTAPIReady=false;ytp.isInit=false;e.opt.isInit=false;e.videoID=null;var t=e.wrapper;t.remove();jQuery("#controlBar_"+e.id).remove()},fullscreen:function(){var e=this.get(0);if(!e.isAlone){if(e.player.getPlayerState()==1){jQuery(e.wrapper).css({zIndex:1e4}).CSSAnimate({opacity:1},1e3,0);jQuery(this).html(jQuery.mbYTPlayer.controls.showSite);e.isAlone=true}}else{jQuery(e.wrapper).CSSAnimate({opacity:e.opt.opacity},500);jQuery(e.wrapper).css({zIndex:-1});jQuery(this).html(jQuery.mbYTPlayer.controls.onlyYT);e.isAlone=false}},playYTP:function(){var e=this.get(0);var t=e.opt;var n=jQuery("#controlBar_"+e.id);var r=n.find(".mb_YTVPPlaypause");r.html(jQuery.mbYTPlayer.controls.pause);e.player.playVideo();e.wrapper.CSSAnimate({opacity:e.opt.opacity},2e3)},toggleLoops:function(){var e=this.get(0);var t=e.opt;if(t.loop==1){t.loop=0}else{if(t.startAt){e.player.seekTo(t.startAt)}else{e.player.playVideo()}t.loop=1}},stopYTP:function(){var e=this.get(0);var t=jQuery("#controlBar_"+e.id);var n=t.find(".mb_YTVPPlaypause");n.html(jQuery.mbYTPlayer.controls.play);e.player.stopVideo()},pauseYTP:function(){var e=this.get(0);var t=e.opt;var n=jQuery("#controlBar_"+e.id);var r=n.find(".mb_YTVPPlaypause");r.html(jQuery.mbYTPlayer.controls.play);e.player.pauseVideo()},setYTPVolume:function(e){var t=this.get(0);if(!e&&!t.opt.vol&&player.getVolume()==0)jQuery(t).unmuteYTPVolume();else if(!e&&t.player.getVolume()>0||e&&t.player.getVolume()==e)jQuery(t).muteYTPVolume();else t.opt.vol=e;t.player.setVolume(t.opt.vol)},muteYTPVolume:function(){var e=this.get(0);e.opt.vol=e.player.getVolume()||50;e.player.mute();e.player.setVolume(0);var t=jQuery("#controlBar_"+e.id);var n=t.find(".mb_YTVPMuteUnmute");n.html(jQuery.mbYTPlayer.controls.unmute)},unmuteYTPVolume:function(){var e=this.get(0);e.player.unMute();e.player.setVolume(e.opt.vol);var t=jQuery("#controlBar_"+e.id);var n=t.find(".mb_YTVPMuteUnmute");n.html(jQuery.mbYTPlayer.controls.mute)},manageYTPProgress:function(){var e=this.get(0);var t=jQuery("#controlBar_"+e.id);var n=t.find(".mb_YTVPProgress");var r=t.find(".mb_YTVPLoaded");var i=t.find(".mb_YTVTime");var s=n.outerWidth();var o=Math.floor(e.player.getCurrentTime());var u=Math.floor(e.player.getDuration());var a=o*s/u;var f=0;var l=e.player.getVideoLoadedFraction()*100;r.css({left:f,width:l+"%"});i.css({left:0,width:a});return{totalTime:u,currentTime:o}},buildYTPControls:function(){var e=this.get(0);var t=e.opt;if(jQuery("#controlBar_"+e.id).length)return;var n=jQuery("<span/>").attr("id","controlBar_"+e.id).addClass("mb_YTVPBar").css({whiteSpace:"noWrap",position:e.isBackground?"fixed":"absolute",zIndex:e.isBackground?1e4:1e3}).hide();var r=jQuery("<div/>").addClass("buttonBar");var i=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTVPPlaypause ytpicon").click(function(){if(e.player.getPlayerState()==1)jQuery(e).pauseYTP();else jQuery(e).playYTP()});var s=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function(){if(e.player.getVolume()==0){jQuery(e).unmuteYTPVolume()}else{jQuery(e).muteYTPVolume()}});var o=jQuery("<span/>").addClass("mb_YTVPTime");var u=t.videoURL;if(u.indexOf("http")<0)u="http://www.youtube.com/watch?v="+t.videoURL;var a=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(u,"viewOnYT")});var f=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(e).fullscreen()});var l=jQuery("<div/>").addClass("mb_YTVPProgress").css("position","absolute").click(function(t){h.css({width:t.clientX-h.offset().left});e.timeW=t.clientX-h.offset().left;n.find(".mb_YTVPLoaded").css({width:0});var r=Math.floor(e.player.getDuration());e.goto=h.outerWidth()*r/l.outerWidth();e.player.seekTo(parseFloat(e.goto),true);n.find(".mb_YTVPLoaded").css({width:0})});var c=jQuery("<div/>").addClass("mb_YTVPLoaded").css("position","absolute");var h=jQuery("<div/>").addClass("mb_YTVTime").css("position","absolute");l.append(c).append(h);r.append(i).append(s).append(o);if(t.printUrl){r.append(a)}if(e.isBackground)r.append(f);n.append(r).append(l);if(!e.isBackground){n.addClass("inlinePlayer");e.wrapper.before(n)}else{jQuery("body").after(n)}n.fadeIn()},checkForState:function(e){var t=jQuery("#controlBar_"+e.id);var n=e.opt;var r=e.opt.startAt?e.opt.startAt:1;e.getState=setInterval(function(){var i=jQuery(e).manageYTPProgress();t.find(".mb_YTVPTime").html(jQuery.mbYTPlayer.formatTime(i.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(i.totalTime));if(parseFloat(e.player.getDuration()-3)<e.player.getCurrentTime()&&e.player.getPlayerState()==1){if(!n.loop){e.player.pauseVideo();e.wrapper.CSSAnimate({opacity:0},2e3,function(){e.player.seekTo(r)})}else e.player.seekTo(r);jQuery(e).trigger("YTPEnd")}},1)},formatTime:function(e){var t=Math.floor(e/60);var n=Math.floor(e-60*t);return(t<9?"0"+t:t)+" : "+(n<9?"0"+n:n)}};jQuery.fn.toggleVolume=function(){var e=this.get(0);if(!e)return;if(e.player.isMuted()){jQuery(e).unmuteYTPVolume();return true}else{jQuery(e).muteYTPVolume();return false}};jQuery.fn.optimizeDisplay=function(){var e=this.get(0);var t=e.opt;var n=jQuery(e.playerEl);var r={};var i=!e.isBackground?t.containment:jQuery(window);r.width=i.width();r.height=i.height();var s=24;var o={};o.width=r.width+r.width*s/100;o.height=t.ratio=="16/9"?Math.ceil(9*r.width/16):Math.ceil(3*r.width/4);o.marginTop=-((o.height-r.height)/2);o.marginLeft=-(r.width*(s/2)/100);if(o.height<r.height){o.height=r.height+r.height*s/100;o.width=t.ratio=="16/9"?Math.floor(16*r.height/9):Math.floor(4*r.height/3);o.marginTop=-(r.height*(s/2)/100);o.marginLeft=-((o.width-r.width)/2)}n.css({width:o.width,height:o.height,marginTop:o.marginTop,marginLeft:o.marginLeft})};jQuery.shuffle=function(e){var t=e.slice();var n=t.length;var r=n;while(r--){var i=parseInt(Math.random()*n);var s=t[r];t[r]=t[i];t[i]=s}return t};jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer;jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist;jQuery.fn.playNext=jQuery.mbYTPlayer.playNext;jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie;jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID;jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer;jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy;jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen;jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls;jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP;jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops;jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP;jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP;jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTPVolume;jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTPVolume;jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume;jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress})(jQuery)
