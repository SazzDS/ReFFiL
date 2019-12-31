// Select the main list and add the class "hasSubmenu" in each LI that contains an UL
$('ul.bonsai').each(function(){
  $this = $(this);
  $this.find("li").has("ul.bonsai").addClass("hasSubmenu");
});
// Find the last li in each level
$('li:last-child').each(function(){
  $this = $(this);
  // Check if LI has children
  if ($this.children('ul.bonsai').length === 0){
    // Add border-left in every UL where the last LI has not children
    $this.closest('ul.bonsai').css("border-left", "1px solid gray");
  } else {
    // Add border in child LI, except in the last one
    $this.closest('ul.bonsai').children("li").not(":last").css("border-left","1px solid gray");
    // Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
    $this.closest('ul.bonsai').children("li").last().children("a").addClass("addBorderBefore");
    // Add margin in the first level of the list
    $this.closest('ul.bonsai').css("margin-top","20px");
    // Add margin in other levels of the list
    $this.closest('ul.bonsai').find("li").children("ul.bonsai").css("margin-top","20px");
  };
});
// Add bold in li and levels above
$('ul.bonsai li').each(function(){
  $this = $(this);
  $this.mouseenter(function(){
    $( this ).children("a").css({"font-weight":"bold","color":"#000"});
  });
  $this.mouseleave(function(){
    $( this ).children("a").css({"font-weight":"normal","color":"#000"});
  });
});
// Add button to expand and condense - Using FontAwesome
$('ul.bonsai li.hasSubmenu').each(function(){
  $this = $(this);
  $this.prepend("<a href='#'><i class='fa fa-angle-down'></i>&nbsp;&nbsp;&nbsp;<i style='display:none;' class='fa fa-angle-right'></i>&nbsp;&nbsp;&nbsp;</a>");
  $this.children("a").not(":last").removeClass().addClass("toogle");
});
// Actions to expand and consense
$('ul.bonsai li.hasSubmenu a.toogle').click(function(){
  $this = $(this);
  $this.closest("li").children("ul.bonsai").toggle("slow");
  $this.children("i").toggle();
  return false;
});