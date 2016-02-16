$(function () {
  'use strict';

  $(".modalOpen").click (function(){
    $(".modalContainer").addClass("psychFace");
  });

  $(".exitButton").click(function(){
    $(".modalContainer").removeClass("psychFace");
  });

});
