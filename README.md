# NAME

prev/next in Torn

# SYNOPSIS

Example of a Chrome extension adding prev/next links to a Web site.

# DESCRIPTION

This is an example of a basic Chrome extension that's a bit more involved than
[the "Getting Started"
example](http://developer.chrome.com/extensions/getstarted.html) on the Google
developer Web site. It's here to show a clean, useful example of Javascript
and building a Chrome extension that's better written some of those I've seen
in the wild. Eventually, I'll write an explanation. It's not that I'm a
Javascript wizard, but I've been programming for decades and many developers
who write Javascript don't even both to clean up their formatting, much less
write properly structured code.

For a more advanced version of my Javascript abilities, see this [3-D rotating
star map](http://jsfiddle.net/Ovid/ALMZD/1/) using canvas. That shows all the
stars in a 20 light-year radius around Sol. That code looks strange in one
part because it's actually built dynamically with [Template
Toolkit](http://www.template-toolkit.org/), Perl, and Javascript. I only put
the "rendered" version on line.

# BACKGROUND

If you [sign up for a free account with the online RPG
torn.com](http://www.torn.com/1825128), you'll quickly discover that attacking
other players can be dangerous. Even if you win, many of them will have
friends who will return the favor and you can spend more time in the hospital
than playing the game.

One way to work around this is to navigate to a player page such as this one:

    http://www.torn.com/profiles.php?XID=1825128

Player IDs are sequential, so you can keep manually bumping the `XID` up or
down until you find a player of the appropriate level who hasn't played the
game in a long time. Attacking them is safer because they and their friends
are less likely to come after you. However, manually hacking the URL becomes
tedious.

This Chrome extension adds a torn.com icon and if you click on it on a
torn.com character page, you'll see this:

    [ Previous ][ Next ]

Clicking on those allows you to quickly move back and forth over player lists
until you can find a player you want to attack.
