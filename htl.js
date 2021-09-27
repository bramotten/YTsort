dursorter(false);

// direction true is low to high
function dursorter(direction) {
  var vids = document.getElementsByClassName("pl-video"); // are TR's
  var nvids = vids.length;
  var vidsinfo = [];

  for (i = 0; i < nvids; i++) {
    // unavailable vids keep this unreasonable length to be hidden later
    var secs = -42;

    var title = vids[i].getAttribute("data-title");
    if (title != "[Private video]" && title != "[Deleted video]") {

      var timelist = vids[i].getElementsByClassName("timestamp")[0].getElementsByTagName("span")[0].innerHTML.split(':');

      // timelist is now ["HH", "MM", "SS"], even with >24 hour long vids
      if (timelist.length == 3) {
        secs = parseInt(timelist[0]) * 3600 + parseInt(timelist[1]) * 60 +
          parseInt(timelist[2]);
      } else if (timelist.length == 2) {
        secs = parseInt(timelist[0]) * 60 + parseInt(timelist[1]);
      } else {
        secs = parseInt(timelist[0]);
      }
    }

    // converts to sortable format
    title = title.replace(/[^\w\d]/g, "").toLocaleLowerCase();

    vidsinfo.push([secs, vids[i], title]);
  }

  var sort;

  if (direction) {
    console.log("Sorting playlist low to high");
    sort = function (a, b) {
      if (a[0] == b[0]) {
        return a[2].localeCompare(b[2]);
      } else {
        return (((a[0] > b[0]) && 1) || -1);
      }
    }
  } else {
    console.log("Sorting playlist high to low");
    sort = function (b, a) {
      if (a[0] == b[0]) {
        return a[2].localeCompare(b[2]);
      } else {
        return (((a[0] > b[0]) && 1) || -1);
      }
    }
  }

  vidsinfo.sort(sort);

  // TODO: this is where tbody's should be swapped rather than replaced
  var tbody = document.getElementsByTagName("tbody");
  tbody[0].innerHTML = null;
  for (i = 0; i < nvids; i++) {
    if (vidsinfo[i][0] != -42) {
      tbody[0].innerHTML += vidsinfo[i][1].innerHTML;
    }
  }
}