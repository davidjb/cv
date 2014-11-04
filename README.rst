My curriculum vitae
===================

Background
----------

The notion of a `JSONResume`_ is amazing -- an standard interchange for
resume/CV data.  However, whilst JSON is great from a programmatic
point-of-view, it is simply too verbose and tedious for hand-crafting by a
human.  Have you ever forgotten a brace or added an extra comma?  Sure, me too.

YAML, on the other hand, is easy to create and edit. It's also extremely
human readable and isn't that the main point of a CV or resume?  Yes, I'd
hoped you'd agree with me.

This is my effort to use YAML to create a portable resume.  It's a work in
progress.

Prospective employers
---------------------

Visit the HTML version at http://davidjb.com/cv.

Or, view the raw YAML at  https://github.com/davidjb/cv/blob/master/cv.yaml.

Building
--------

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

.. _JSONResume: https://jsonresume.org/
