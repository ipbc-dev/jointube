$(
  function(){
    $("table").addClass("table table-condensed table-bordered table-striped");
  }
);
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

const end = new Date('07/05/2018 11:59 PM');
const now = new Date();
const days = (end - now < 0) ? 0 : Math.floor((end - now) / 86400000); // 24*60*60*1000
document.getElementById('kkbbDays').innerHTML = days;
