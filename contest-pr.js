var checkSetPR = function() {
  const weeklyRe = /leetcode\.com\/contest\/(bi)?weekly-contest-\d+\/ranking.*/g;
  const contestRe = /leetcode\.com\/contest\/?/g;

  if (window.location.href.match(weeklyRe)) setPRForContestRanking();
  else if (window.location.href.match(contestRe)) setPRForMyContests();
}

var setPRForMyContests = function() {
  const re = /^(?<num>\d+) \/ (?<den>\d+)$/g;
  var targets = document.getElementsByClassName("mr-2 hidden w-[100px] lc-md:block");
  for (var i=0; i<targets.length; i++) {
    for (const match of targets[i].textContent.matchAll(re)) {
      let num = parseInt(match.groups.num);
      let den = parseInt(match.groups.den);
      let pr = 100 - (num * 100.0 / den);
      targets[i].innerHTML = targets[i].innerHTML + `<br/>(PR: ${pr.toFixed(2)})`;
    }
  }
}

var setPRForContestRanking = function() {
  const re = /^(?<num>\d+) \/ (?<den>\d+)$/g;
  var target = document.getElementsByClassName("success")[0].firstChild;
  for (const match of target.textContent.matchAll(re)) {
    let num = parseInt(match.groups.num);
    let den = parseInt(match.groups.den);
    let pr = 100 - (num * 100.0 / den);
    target.innerHTML = target.innerHTML + `<br/>(PR: ${pr.toFixed(2)})`;
  }
}

setInterval(checkSetPR, 2000);
