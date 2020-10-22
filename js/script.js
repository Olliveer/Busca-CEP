//padrão
// $(document).ready(function () {
//   $(".jquery").html("JQUERY INICIALIZADOO");
// });

// padrão simplificada
// $(function(){
//   $(".jquery").html("JQUERY INICIALIZADOO com gatilho");
// })

//carregando antes de outra lib

// jQuery(function ($) {
//   $(".jquery").html("JQUERY antes de outra lib");
// });

//carregando depois de outra lib
// var $j = jQuery.noConflict();
// $j(document).ready(function () {
//   $j(".jquery").html("JQUERY depois de outra lib");
// })


// padrão simplificada
// $(function(){
//   //seletor elemento
//   $("b").text("jquery essentials");

//   $(".jquery").css("color", "red");

//   $("#idj").text("id = jquery");

//   $("div *").css("border", "1px solid #000");

//   $("div, b").css({
//     background: "blue",
//     color: "red"
//   });
// });


// $(function () {
//   $("article p").css("color", "red");

//   $("article > p").css("color", "blue");
// });

// $(function(){
//   $("p:not('.p')").css("font-weight", "bold");

//   $("p:first").css("color", "red");
// });


// $(function () {
//   var text = $(".j").text();
//   var html = $(".j").html();


// INSIDE
//   $(".e").append("<p>" + text + "</p>");
//   $(".e").append("<p>" + html + "</p>");
//   $(".a").appendTo($(".e"));
//   $("<p><b>BORAAAA</b></p>").appendTo($(".e"));

//   $(".e").prepend("<h2>RESULKTADOS: </h2>");
//   $("<p>Exemplos: </p>").prependTo($(".e p:first"));
// });

// OUTSIDE
// $(function () {
//   var title = $("title").text();
//   $(".j").before("<h1>" + title + "</h1>");
//   $("<p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos,</p>").insertBefore($(".j"));

//   var old_text = "<p>é simplesmente uma simulação de texto da indústria tipográfica e de impressos</p>";
//   $(".j").after(old_text);

//   $(".a").insertAfter("p:last");
// });


//around
// $(function () { 
//   $("p").wrapAll("<div></div>");

//   $("p").wrapInner("<span></span>");

//   $("span").unwrap("p");

//   $("span").wrap("<h2></h2>");
//  })


//remove
// $(function () {
//   $(".b").remove();


//   $(".d").text("bora programar");

//   $("p").on("click", function () {
//     $(this).toggleClass("active");
//   });

//   var p;

//   $(".button").on("click", function () {
//     if (p) {
//       p.appendTo(".r");
//       p = null;
//     } else {
//       p = $("p").detach();
//     }
//   });

//   var href = $(".e").text();
//   $(".e").replaceWith("<p><a target='_blank' href='https://" + href + "' >" + href + "</a></p>");
// });

//classes

// $(function () {
//   $("p").css("color", "blue");
//   $("p").css({
//     color: "#555"
//     // "border-botton": "1px solid #ccc"
//   });

// });

// dimensao

// $(function () {
//   console.group("W");
//   console.log($("div:first").width());
//   console.log($("div:first").innerWidth());
//   console.log($("div:first").outerWidth());
//   console.groupEnd();

//   console.group("H");
//   console.log($("div:first").height());
//   console.log($("div:first").innerHeight());
//   console.log($("div:first").outerHeight());
//   console.groupEnd();

//   $("div").css("float", "left").outerWidth("50%");

//   var h = 0;
//   $("div").each(function (i, el) { 
//      if ($(el).outerHeight() > h) {
//        h = $(el).outerHeight();
//      }
//   }).outerHeight(h);
// });


// POSIÇÃO

$(function(){
  var el = $(".j");

  console.group("OOFSET");
  console.log(el.offset());
  console.log(el.offset());
  console.groupEnd("OOFSET");

  var el_off = el.offset();
})