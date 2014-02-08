var prevNext = {
  baseURL: null,
  makeLinks: function(baseURL, param) {
    var self = this;
    this.baseURL = baseURL;
    chrome.tabs.query( {'active': true}, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        var regex = new RegExp("[\\?&]" + param + "=([^&#]*)");
        current_id = regex.exec(url);
        current_id = current_id == null ? "" : parseInt(decodeURIComponent(current_id[1].replace(/\+/g, " ")));
        
        if (current_id) {
          self.buildPrevNext(tab, current_id);
        }
        else {
          var p = document.createElement('p');
          p.innerHTML = 'Not on character page';
          document.body.appendChild(p);
        }
    });
  },
  buildPrevNext: function(tab, current_id) {
    var baseURL = this.baseURL;
    var self    = this;
    if ( link = document.getElementById('prev') ) {
      link.parentNode.removeChild(link);
    }
    if ( link = document.getElementById('next') ) {
      link.parentNode.removeChild(link);
    }
    var prevLink = baseURL + (current_id - 1);
    var nextLink = baseURL + (current_id + 1);
 
    var prev = document.createElement('a');
    prev.setAttribute('href', "#");
    prev.setAttribute('id',   'prev');
    prev.addEventListener('click', function() {
      chrome.tabs.update(tab.id, { "url":prevLink });
      self.buildPrevNext(tab, current_id - 1);
    });
    prev.innerHTML = '[ Previous ]';
 
    var next = document.createElement('a');
    next.setAttribute('href', "#");
    next.setAttribute('id',   'next');
    next.addEventListener('click', function() {
      chrome.tabs.update(tab.id, { "url":nextLink });
      self.buildPrevNext(tab, current_id + 1);
    });
    next.innerHTML = '[ Next ]';
 
    document.body.appendChild(prev);
    document.body.appendChild(next);
  },
};

document.addEventListener('DOMContentLoaded', function () {
  prevNext.makeLinks('http://www.torn.com/profiles.php?XID=', 'XID');
});
