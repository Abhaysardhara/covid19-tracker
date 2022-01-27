function setStyleSheet(e){document.getElementById("theme_stylesheet").setAttribute("href",e)}$(document).ready(function(){"use strict";if(setTimeout(function(){$(".page-loader-wrapper").fadeOut()},50),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover({html:!0}),$('[data-toggle="card-remove"]').on("click",function(e){return $(this).closest("div.card").remove(),e.preventDefault(),!1}),$('[data-toggle="card-collapse"]').on("click",function(e){return $(this).closest("div.card").toggleClass("card-collapsed"),e.preventDefault(),!1}),$('[data-toggle="card-fullscreen"]').on("click",function(e){return $(this).closest("div.card").toggleClass("card-fullscreen").removeClass("card-collapsed"),e.preventDefault(),!1}),$("[data-sparkline]").length){require(["sparkline"],function(){$("[data-sparkline]").each(function(){var e,t,a,r=$(this);e=r,t=JSON.parse(r.attr("data-sparkline")),a={color:r.attr("data-sparkline-color")},e.sparkline(t,{type:e.attr("data-sparkline-type"),height:"100%",barColor:a.color,lineColor:a.color,fillColor:"transparent",spotColor:a.color,spotRadius:0,lineWidth:2,highlightColor:hexToRgba(a.color,.6),highlightLineColor:"#666",defaultPixelsPerValue:5})})})}$(".chart-circle").length&&$(".chart-circle").each(function(){var e=$(this);e.circleProgress({fill:{color:"indigo"},size:e.height(),startAngle:-Math.PI/4*2,emptyFill:"#F4F4F4",lineCap:"round"})}),$(".accordion2 > .accordion-item.is-active").children(".accordion-panel").slideDown(),$(".accordion2 > .accordion-item").on("click",function(){$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp(),$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out")}),$(".bh_income").sparkline("html",{type:"bar",height:"30px",barColor:"#1A5089",barWidth:5}),$(".bh_traffic").sparkline("html",{type:"bar",height:"30px",barColor:"#E21E32",barWidth:5})}),$(document).ready(function(){$(".star").on("click",function(){$(this).toggleClass("star-checked")}),$(".ckbox label").on("click",function(){$(this).parents("tr").toggleClass("selected")}),$(".btn-filter").on("click",function(){var e=$(this).data("target");"all"!=e?($(".table tr").css("display","none"),$('.table tr[data-status="'+e+'"]').fadeIn("slow")):$(".table tr").css("display","none").fadeIn("slow")})}),$(document).ready(function(){"use strict";$(".sidebar-nav").metisMenu(),$(".menu_toggle").on("click",function(){$("body").toggleClass("offcanvas-active")}),$(".chat_list_btn").on("click",function(){$(".chat_list").toggleClass("open")}),$(".menu_option").on("click",function(){$(".metismenu").toggleClass("grid"),$(".menu_option").toggleClass("active")}),$(".user_btn").on("click",function(){$(".user_div").toggleClass("open")}),$("a.settingbar").on("click",function(){$(".right_sidebar").toggleClass("open")}),$("a.theme_btn").on("click",function(){$(".theme_div").toggleClass("open")}),$(".page").on("click",function(){$(".theme_div, .right_sidebar").removeClass("open"),$(".user_div").removeClass("open")}),$(".theme_switch").on("click",function(){$("body").toggleClass("theme-dark")})}),$(document).ready(function(){"use strict";$(".arrow_option input:radio").click(function(){var e=$("[name='"+this.name+"']").map(function(){return this.value}).get().join(" ");$(".metismenu .has-arrow").removeClass(e).addClass(this.value)}),$(".list_option input:radio").click(function(){var e=$("[name='"+this.name+"']").map(function(){return this.value}).get().join(" ");$(".metismenu li .collapse a").removeClass(e).addClass(this.value)}),$(".font_setting input:radio").click(function(){var e=$("[name='"+this.name+"']").map(function(){return this.value}).get().join(" ");$("body").removeClass(e).addClass(this.value)})}),$(document).ready(function(){"use strict";$(".setting_switch .btn-darkmode").on("change",function(){this.checked?$("body").addClass("dark-mode"):$("body").removeClass("dark-mode")}),$(".setting_switch .btn-fixnavbar").on("change",function(){this.checked?$("#page_top").addClass("sticky-top"):$("#page_top").removeClass("sticky-top")}),$(".setting_switch .btn-iconcolor").on("change",function(){this.checked?$("body").addClass("iconcolor"):$("body").removeClass("iconcolor")}),$(".setting_switch .btn-gradient").on("change",function(){this.checked?$("body").addClass("gradient"):$("body").removeClass("gradient")}),$(".setting_switch .btn-sidebar").on("change",function(){this.checked?$("body").addClass("sidebar_dark"):$("body").removeClass("sidebar_dark")}),$(".setting_switch .btn-min_sidebar").on("change",function(){this.checked?$("#header_top").addClass("dark"):$("#header_top").removeClass("dark")}),$(".setting_switch .btn-pageheader").on("change",function(){this.checked?$("#page_top").addClass("top_dark"):$("#page_top").removeClass("top_dark")}),$(".setting_switch .btn-boxshadow").on("change",function(){this.checked?$(".card, .btn, .progress").addClass("box_shadow"):$(".card, .btn, .progress").removeClass("box_shadow")}),$(".setting_switch .btn-rtl").on("change",function(){this.checked?$("body").addClass("rtl"):$("body").removeClass("rtl")}),$(".setting_switch .btn-boxlayout").on("change",function(){this.checked?$("body").addClass("boxlayout"):$("body").removeClass("boxlayout")})}),$(document).ready(function(){"use strict";new List("users",{valueNames:["name","born"]})}),$(window).bind("resize",function(){$(this).width()<1201?$(".horizontal").removeClass("h_menu"):$(".horizontal").addClass("h_menu")}).trigger("resize"),window.anchor={colors:{"theme1-one":"#6435c9","theme1-two":"#f66d9b",blue:"#467fcf","blue-darkest":"#0e1929","blue-darker":"#1c3353","blue-dark":"#3866a6","blue-light":"#7ea5dd","blue-lighter":"#c8d9f1","blue-lightest":"#edf2fa",azure:"#45aaf2","azure-darkest":"#0e2230","azure-darker":"#1c4461","azure-dark":"#3788c2","azure-light":"#7dc4f6","azure-lighter":"#c7e6fb","azure-lightest":"#ecf7fe",indigo:"#6435c9","indigo-darkest":"#3e0ca9","indigo-darker":"#5322bb","indigo-dark":"#5929c1","indigo-light":"#7d53d6","indigo-lighter":"#9773e4","indigo-lightest":"#a28ad6",purple:"#a55eea","purple-darkest":"#21132f","purple-darker":"#42265e","purple-dark":"#844bbb","purple-light":"#c08ef0","purple-lighter":"#e4cff9","purple-lightest":"#f6effd",pink:"#f66d9b","pink-darkest":"#31161f","pink-darker":"#622c3e","pink-dark":"#c5577c","pink-light":"#f999b9","pink-lighter":"#fcd3e1","pink-lightest":"#fef0f5",red:"#e74c3c","red-darkest":"#2e0f0c","red-darker":"#5c1e18","red-dark":"#b93d30","red-light":"#ee8277","red-lighter":"#f8c9c5","red-lightest":"#fdedec",orange:"#fd9644","orange-darkest":"#331e0e","orange-darker":"#653c1b","orange-dark":"#ca7836","orange-light":"#feb67c","orange-lighter":"#fee0c7","orange-lightest":"#fff5ec",yellow:"#f1c40f","yellow-darkest":"#302703","yellow-darker":"#604e06","yellow-dark":"#c19d0c","yellow-light":"#f5d657","yellow-lighter":"#fbedb7","yellow-lightest":"#fef9e7",lime:"#7bd235","lime-darkest":"#192a0b","lime-darker":"#315415","lime-dark":"#62a82a","lime-light":"#a3e072","lime-lighter":"#d7f2c2","lime-lightest":"#f2fbeb",green:"#5eba00","green-darkest":"#132500","green-darker":"#264a00","green-dark":"#4b9500","green-light":"#8ecf4d","green-lighter":"#cfeab3","green-lightest":"#eff8e6",teal:"#2bcbba","teal-darkest":"#092925","teal-darker":"#11514a","teal-dark":"#22a295","teal-light":"#6bdbcf","teal-lighter":"#bfefea","teal-lightest":"#eafaf8",cyan:"#17a2b8","cyan-darkest":"#052025","cyan-darker":"#09414a","cyan-dark":"#128293","cyan-light":"#5dbecd","cyan-lighter":"#b9e3ea","cyan-lightest":"#e8f6f8",gray:"#868e96","gray-darkest":"#1b1c1e","gray-darker":"#36393c","gray-dark":"#6b7278","gray-light":"#aab0b6","gray-lighter":"#dbdde0","gray-lightest":"#f3f4f5","gray-dark":"#343a40","gray-dark-darkest":"#0a0c0d","gray-dark-darker":"#15171a","gray-dark-dark":"#2a2e33","gray-dark-light":"#717579","gray-dark-lighter":"#c2c4c6","gray-dark-lightest":"#ebebec","gray-100":"#E8E9E9","gray-200":"#D1D3D4","gray-300":"#BABDBF","gray-400":"#808488","gray-500":"#666A6D","gray-600":"#4D5052","gray-700":"#333537","gray-800":"#292b30","gray-900":"#1C1D1E"}};
// Back to Top code
// jQuery(window).scroll(function(){
//     if(jQuery(window).scrollTop()<50){
//         jQuery('#rocketmeluncur').slideUp(500);
//     }
//     else{
//         jQuery('#rocketmeluncur').slideDown(500);
//     }
    
//     var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
//     var scrolltoprocketmeluncur = $('rocketmeluncur');
//     var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
//     var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
//     var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
//     var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
    
//     if (basewrocketmeluncur < 300) {
//         var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
//         leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
//         scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
//     } else {
//         scrolltoprocketmeluncur.style.left = 'auto';
//         scrolltoprocketmeluncur.style.right = '10px';
//     }
// })

// jQuery('#rocketmeluncur').click(function(){
//     jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
//             duration: 600,  
//             easing: 'linear'
//         });
    
//         var self = this;
//         this.className += ' '+"launchrocket";
//         setTimeout(function(){
//         self.className = 'showrocket';
//     }, 800)
// });