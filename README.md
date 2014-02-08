# NAME

prev/next in Torn

# SYNOPSIS

Example of a Chrome extension adding prev/next links to a Web site.

# DESCRIPTION

This is an example of a basic Chrome extension that's a bit more involved than
[the "Getting Started"
example](http://developer.chrome.com/extensions/getstarted.html) on the Google
developer Web site. It's here to show some of my JavaScript skills rather than
being completely useful.

For a more advanced version of my Javascript abilities, see this [3-D rotating
star map](http://jsfiddle.net/Ovid/ALMZD/1/) using canvas. That shows all the
stars in a 20 light-year radius around Sol.

# BACKGROUND

If you [sign up for a free account with the online RPG
torn.com](http://www.torn.com/1825128), you'll quickly discover that attacking
other players can be dangerous. Even if you win, many of them will have
friends who will return the favor.

One way to work around this is to navigate to a player page such as this one:

    http://www.torn.com/profiles.php?XID=1825128

Player IDs are sequential, so you can keep manually bumping the `XID` up and
down until you find a player of the appropriate level who hasn't played the
game in a long time. Attacking them is safer because they're less likely to
come after you. However, manually hacking the URL becomes tedious.

This Chrome extension adds a torn.com icon and if you click on it on a
torn.com character page, you'll see this:

    [ Previous ][ Next ]

Clicking on those allows you to quickly move back and forth over player lists
until you can find a player you want.

There is a touch of cruft in the code that I'll clean up, but for now, it
shows an example of fetching the URL of the current tab and reloading that
tab.
