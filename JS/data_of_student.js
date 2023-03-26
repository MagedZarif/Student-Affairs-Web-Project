function myfunction() {


    alert("changed data will saved");
    location.href="project_view.html";
  
  }
  $(Document).ready(function(){
    $(".mobile_nav i").click(function(){
        $(".site_menu").toggleClass("mobile_menu");
    });
})