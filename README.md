# My curriculum vitae

## Prospective employers

Visit the HTML version at https://davidjb.com/cv.

Or, view the raw YAML at  https://github.com/davidjb/cv/blob/master/cv.yaml.

## Background

The notion of a [JSONResume](https://jsonresume.org/) is amazing -- an standard
interchange for resume/CV data.  However, whilst JSON is great from a programmatic
point-of-view, it is simply too verbose and tedious for hand-crafting by a
human.  Have you ever forgotten a brace or added an extra comma?  Sure, me too.

YAML, on the other hand, is easy to create and edit. It's also extremely
human readable and isn't that the main point of a CV or resume?  Yes, I'd
hoped you'd agree with me.

This is my effort to use YAML to create a portable resume.  It's a work in
progress.

## Building

This is work in progress.  I'm using Node to create an environment
that can easily convert a YAML CV into a JSONResume and host via my current
host, GitHub Pages::

    yarn
    yarn export

This will automatically push and import to GitHub Pages using ``ghp-import``,
so you can go ahead and view the resulting page at https://davidjb.com/cv.
Alternatively, view the resulting ``output/cv.html`` file in your favourite
browser.
