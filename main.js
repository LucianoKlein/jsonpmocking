pay.addEventListener('click', function() {
  let srcTag = document.createElement('script');
  
  let funName = 'xin' + parseInt(Math.random() * 1000, 10);
  srcTag.src = "http://localhost:8002/shopping?callback=" + funName;
  document.body.appendChild(srcTag);
  window[funName] = function(jp) {
    console.log(jp);
    amount.innerText = jp['money'];
    delete window[funName];
  }
});



