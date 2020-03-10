$(document).ready(function() {
  $("h4")
    .mouseenter(function() {
      $(this).fadeTo(300, 0.4);
    })
    .mouseleave(function() {
      $(this).fadeTo(300, 1);
    })
    .click(function() {
      $(this)
        .next()
        .toggle(300);
    });

  $("footer")
    .click(function() {
      $(this).animate({ height: "300px", opacity: "0.5" }, "fast");
      $(this).animate({ width: "200px", opacity: "0.7" }, "slow");
      $(this).animate({ height: "50px", opacity: "0.5" }, "fast");
      $(this).animate({ width: "100%", opacity: "1" }, "slow");
    })
    .dblclick(function() {
      $(this).animate({ height: "50px" });
    });
});
