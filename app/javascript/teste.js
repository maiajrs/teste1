document.addEventListener("turbo:load", function() {
  console.log("Turbo loaded");

  jQuery(function() {
    console.log("Hello from jQuery using import maps inline!");
  });
  jQuery(function() {
    console.log("Hello from jQuery using import maps inline!");
  });
})
