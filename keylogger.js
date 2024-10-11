document.body.addEventListener('keyup', function(event) {
  console.log(event.key);
  console.log(event.code);
});


fetch("https://webhook.site/96df3515-c421-4f7f-998b-6ff81d37da21", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
