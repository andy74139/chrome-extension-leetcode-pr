setInterval(function() {
  const re = /^(?<num>\d+) \/ (?<den>\d+)$/g;
  var es = document.getElementsByClassName("mr-2 hidden w-[100px] lc-md:block");
  for (var i=0; i<es.length; i++) {
    for (const match of es[i].textContent.matchAll(re)) {
      let num = parseInt(match.groups.num);
      let den = parseInt(match.groups.den);
      let pr = 100 - (num * 100.0 / den);
      es[i].textContent = es[i].textContent + " (PR: " + pr.toFixed(2) + ")";
    }
  }
}, 1000);
