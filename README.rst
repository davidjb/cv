My curriculum vitae
===================

Prospective employers
---------------------

Visit the HTML version at (coming soon), or just view the raw YAML at:
https://github.com/davidjb/cv/blob/master/cv.yaml

Building
--------

This is major work in progress.  I'm using Buildout to create an environment
that can easily convert a YAML CV into a JSONResume.

JSON is great, but just not for this purpose.  YAML, on the other hand, is
extremely human readable, and isn't that the main point of a CV or resume?
Yes, I'd hoped you'd agree with me.

::

    python bootstrap.py
    ./bin/buildout
    ./bin/py build.py cv.yaml resume.json
    resume export cv --format html

Then view the resulting ``cv.html`` file in your favourite browser.

