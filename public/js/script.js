$(function(){
    $(".toggle-button").click(function(){
      $(".nav-toggle-list").slideToggle(800);
      $(".toggle-button").hide();
      $(".toggle-close").show();
    });
});

$(function(){
    $(".toggle-close").click(function(){
      $(".nav-toggle-list").slideToggle(800);
      $(".toggle-close").hide();
      $(".toggle-button").show();
    });
});