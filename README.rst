My curriculum vitae
===================

Prospective employers
---------------------

Visit the HTML version at http://davidjb.com/cv.

Or, view the raw YAML at  https://github.com/davidjb/cv/blob/master/cv.yaml.

Building
--------

JSON is great, but just not for this purpose.  YAML, on the other hand, is
extremely human readable, and isn't that the main point of a CV or resume?
Yes, I'd hoped you'd agree with me.

This is work in progress.  I'm using Buildout to create an environment
that can easily convert a YAML CV into a JSONResume and host via my current
host, GitHub Pages::

    python bootstrap.py
    ./bin/buildout
    ./build.sh

This will automatically push and import to GitHub Pages using ``ghp-import``,
so you can go ahead and view the resulting page at http://davidjb.com/cv.
Alternatively, view the resulting ``output/index.html`` file in your favourite
browser.

