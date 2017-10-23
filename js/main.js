function open_card() {
  document.getElementById('outside').className = 'open-card';
}

function close_card() {
  document.getElementById('outside').className = '';
}

var getUrlParameter = function (sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

$(document).ready(function () {
  var outsideTitle = getUrlParameter('ot');
  var outsidePicture = getUrlParameter('op');
  var outsideSub = getUrlParameter('os');
  var insideTitle = getUrlParameter('it');
  var insidePicture = getUrlParameter('ip');
  var message = getUrlParameter('m');
  var soundCloundHidden = getUrlParameter('sch');
  var soundClound = getUrlParameter('sc');
  // set default value for empty params

  // set request params' value into elements
  $('#outside-title').text(outsideTitle);
  $('#inside-title').text(insideTitle);
  if (outsideSub) {
    var subs = outsideSub.split('\\n');
    for (var i = 0; i < subs.length; i++) {
      var element = subs[i];
      $('#outside-sub').append(document.createTextNode(element));
      $('#outside-sub').append(document.createElement('br'));
    }
  }
  if (outsidePicture) {
    $('#outside-pic').attr('src', outsidePicture);
  }
  if (insidePicture) {
    $('#inside-pic').attr('src', insidePicture);
  }
  if (message) {
    $('#message').text('');
    var texts = message.split('\\n');
    for (var i = 0; i < texts.length; i++) {
      var text = texts[i];
      $('#message').append(document.createTextNode(text));
      $('#message').append(document.createElement('br'));
    }
  }
  if (soundCloundHidden === 'true') {
    $('#sound-cloud-div').addClass('hidden');
  }
  if (soundClound) {
    $('#sound-cloud').attr('src', soundClound);
  }
});
