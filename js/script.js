var feedback_btn = document.querySelector(".feedback_mail");
var feedback_modal = document.querySelector(".feedback");
var feedback_form = feedback_modal.querySelector(".feedback_form");
var input_name = document.querySelector("#client_name");
var input_mail = document.querySelector("#email");
var message = document.querySelector("textarea");

feedback_btn.addEventListener("click", function(event){
  event.preventDefault();
  feedback_modal.classList.add("feedback_open");
  input_name.focus();
  var feedback_modal_close = feedback_modal.querySelector(".close_btn");
  feedback_modal_close.addEventListener("click", function(event){
    event.preventDefault();
    feedback_modal.classList.remove("feedback_open");
  });
  window.addEventListener("keydown", function(event){
      if (event.keyCode === 27) {
          if (feedback_modal.classList.contains("feedback_open")) {
              feedback_modal.classList.remove("feedback_open");
          }
      }
  });
  feedback_form.addEventListener("submit", function(event) {
    if (!input_name.value || !input_mail.value || !message.value){
      event.preventDefault();
    }
    if (!input_name.value) {
       input_name.classList.add("send_error");
    }
    if (!input_mail.value) {
       input_mail.classList.add("send_error");
    }
    if (!message.value) {
       message.classList.add("send_error");
    }
  });
});

var map_expand = document.querySelector(".map");
var map_modal = document.querySelector(".detailed_map");

map_expand.addEventListener("click", function(event){
  event.preventDefault();
  map_modal.classList.add("map_expand");
  var map_close = map_modal.querySelector(".close_btn");
  map_close.addEventListener("click", function(event){
    event.preventDefault();
    map_modal.classList.remove("map_expand");
  });
  window.addEventListener("keydown", function(event){
      if (event.keyCode === 27) {
          if (map_modal.classList.contains("map_expand")) {
              map_modal.classList.remove("map_expand");
          }
      }
  });
});