(function() {
  "use strict";

  // fastclick
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
  }

  var sounds = ['audio/ReleaseMeFromYourKungFooGripShort.mp3', 'audio/SheStillEmbodiesAllTheAwfulStereotypes.mp3', 'audio/TrustInYourselfAndYouCanAchieveAnything.mp3', 'audio/WhenIGetMarriedImKeepingMyOwnName.mp3']

  var count = 0; 

  var quote = document.getElementById("quote");
  quote.setAttribute('tabindex', 0); 

  // event listeners
  quote.addEventListener("click", speak);
  quote.addEventListener("keydown", function (event) {
    var key = event.which || event.keyCode;
    if ((key == 13) || (key ==32)) {
      speak(); 
    }
  });


  function speak() {

    var arr = [];
    arr.push(sounds[count]);

    var sound = new Howl({
      urls: arr
    }).play();

    count = count + 1; 
    if(count == sounds.length) count = 0;
  }


})();
