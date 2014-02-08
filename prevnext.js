function prevNext(baseURL, param) {
    this.baseURL = baseURL;
    this.param   = param;

    // methods
    this.showPrevNextInPopup      = showPrevNextInPopup;
    this._addLinks      = _addLinks;
    this._addLink       = _addLink;
    this._removeElement = _removeElement;

    function showPrevNextInPopup() {
        var self     = this; // because 'this' in the query won't refer to parent
        chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
            var tab        = tabs[0];
            var url        = tab.url;
            self.activeTab = tab;
            var regex = new RegExp("[\\?&;]" + self.param + "=([^&;#]*)");
            current_id = regex.exec(url);
            current_id = current_id == null ? "" : parseInt(decodeURIComponent(current_id[1].replace(/\+/g, " ")));

            if (current_id) {
                self._addLinks(current_id);
            }
            else {
                var p = document.createElement('p');
                p.innerHTML = 'Not on character page';
                document.body.appendChild(p);
            }
        });
    }

    // build the previous/next links for the current character page
    function _addLinks(current_id) {
        this._removeElement('prev');
        this._removeElement('next');
        var prev = this._addLink('prev', '[ Previous ]', current_id - 1);
        var next = this._addLink('next', '[ Next ]',     current_id + 1);

        var container = document.getElementById('links');
        container.appendChild(prev);
        container.appendChild(next);
    }

    // given the id of an element, removes that element if it exists
    function _removeElement(id_name) {
        if ( element = document.getElementById(id_name) ) {
            element.parentNode.removeChild(element);
        }
    }

    // build an individual [previous] or [next] link
    function _addLink(id_name, html, current_id) {
        var linkTarget = this.baseURL + current_id;
        var link       = document.createElement('a');
        var self       = this;
        var tab        = self.activeTab;

        link.setAttribute('href', "#");
        link.setAttribute('id',   id_name);
        link.addEventListener('click', function() {
            chrome.tabs.update(tab.id, { "url":linkTarget });
            self._addLinks(current_id);
        });
        link.innerHTML = html;
        return link;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var popup = new prevNext('http://www.torn.com/profiles.php?XID=', 'XID');
    popup.showPrevNextInPopup();
});
