$(document).ready(function(){
var typed = new Typed(".heading",{
    strings: ["Hello!!! Welcome to RedStore...","Create your Account to connect with us.","Hurry! Buy your item Now.","Get discount in every product.","Offer will get close soon.",],
        typeSpeed: 150,
        backSpeed: 150,
        loop:true
  })


  var MenuItems = document.getElementById("MenuItems")

  MenuItems.style.maxHeight = "0px"

  function menutoggle() {
      if( MenuItems.style.maxHeight == "0px")
   {
          MenuItems.style.maxHeight = "200px"
  }
  else {
      MenuItems.style.maxHeight = "0px"
  }
}
})