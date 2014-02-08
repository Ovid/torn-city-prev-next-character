var prevNext = {
  baseURL: null,
  activeTab: null,
  makeLinks: function(baseURL, param) {
    var self = this;
    this.baseURL = baseURL;
    chrome.tabs.query( {'active': true}, function(tabs) {
        var tab        = tabs[0];
        var url        = tab.url;
        self.activeTab = tab;
        var regex = new RegExp("[\\?&]" + param + "=([^&#]*)");
        current_id = regex.exec(url);
        current_id = current_id == null ? "" : parseInt(decodeURIComponent(current_id[1].replace(/\+/g, " ")));
        
        if (current_id) {
          self.buildPrevNext(current_id);
        }
        else {
          var p = document.createElement('p');
          p.innerHTML = 'Not on character page';
          document.body.appendChild(p);
        }
    });
  },
  buildPrevNext: function(current_id) {
    var baseURL = this.baseURL;
    var self    = this;
    if ( link = document.getElementById('prev') ) {
      link.parentNode.removeChild(link);
    }
    if ( link = document.getElementById('next') ) {
      link.parentNode.removeChild(link);
    }
    var prev = this.addLink('prev', '[ Previous ]', current_id - 1);
    var next = this.addLink('next', '[ Next ]', current_id + 1);
 
    document.body.appendChild(prev);
    document.body.appendChild(next);
  },
  addLink: function(id_name, html, current_id) {
    var linkTarget = this.baseURL + current_id;
    var link       = document.createElement('a');
    var self       = this;
    var tab        = self.activeTab;

    link.setAttribute('href', "#");
    link.setAttribute('id',   id_name);
    link.addEventListener('click', function() {
      chrome.tabs.update(tab.id, { "url":linkTarget });
      self.buildPrevNext(current_id);
    });
    link.innerHTML = html;
    return link;
  },
};

document.addEventListener('DOMContentLoaded', function () {
  prevNext.makeLinks('http://www.torn.com/profiles.php?XID=', 'XID');
});
