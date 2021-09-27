function lth() {
  chrome.tabs.executeScript({
    file: 'lth.js'
  });
  noMore();
}

function htl() {
  chrome.tabs.executeScript({
    file: 'htl.js'
  });
  noMore();
}

function ori() {
  chrome.tabs.executeScript({
    file: 'ori.js'
  });
  noMore();
}

function noMore() {
  //document.getElementById('title').innerHTML("Busy or done!");

  // TODO: remove these if the sorting algorithm stops destroying the page
  //console.log("Removing listeners for non-original button");
  document.getElementById('lth').removeEventListener('click', lth);
  document.getElementById('htl').removeEventListener('click', htl);

  //document.getElementById('lth').addEventListener('click', ori);
  //document.getElementById('htl').addEventListener('click', ori);

  document.getElementById('lth').innerHTML = "Too tired now";
  document.getElementById('htl').innerHTML = "Too tired now";
}

document.getElementById('lth').addEventListener('click', lth);
document.getElementById('htl').addEventListener('click', htl);
document.getElementById('ori').addEventListener('click', ori);