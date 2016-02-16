//Write JavaScript which finds any textareas that have a max-size attribute:

$(function(){
   'use strict';

var maxComment = 100;

$(".inputHere").keyup(function(){
   var commentSpace = $(this).val().length;
   var commentSpace = maxComment - commentSpace;
   //As the user types, show them how many characters they have remaining.
   $(".characterAllowance").text(commentSpace + " Characters Remaining");
});

});

//Write JavaScript to prevent the user from entering more than maxsize chars.
