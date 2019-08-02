var xhr = new XMLHttpRequest();
var serverEnvironemt = 'https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/';

function makeGetRequest() {
  xhr.open('GET', serverEnvironemt, false);
  xhr.send();

  if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
      return ("error");
  } else {
    return JSON.parse(xhr.responseText);
  }
}

function getWheather() {
    return makeGetRequest();
}