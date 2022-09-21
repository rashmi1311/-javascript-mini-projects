let expText = document.getElementById("expTxt");
let inpButton = document.getElementsByClassName("entValBtn");

Array.from(inpButton).forEach(function (inpButton) {
  inpButton.addEventListener('click', function (event) {
    let x = expText.value;
    expText.value = `${x}${event.target.value}`;
    console.log(x);
    console.log(event.target.value);
    console.log(x + event.target.value);
  });
});

document.getElementById("clearBtn").addEventListener('click', function(){
  expText.value = "";
});

document.getElementById("delOneBtn").addEventListener('click', function(){
  let x = expText.value;
  expText.value = x.slice(0, -1);
});

document.getElementById("caclValBtn").addEventListener('click', function(){
  let x = eval(expText.value);
  console.log(x);
  expText.value = x;
});
