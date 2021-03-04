# My curriculum vitae

## Prospective employers

Visit the HTML version at https://davidjb.com/cv.

Or, view the raw YAML at  https://github.com/davidjb/cv/blob/master/cv.yaml.

## Background

The notion of a [JSONResume](https://jsonresume.org/) is amazing -- an standard
interchange for resume/CV data.  However, whilst JSON is great from a programmatic
point-of-view, it is simply too verbose and tedious for hand-crafting by a
human.  Have you ever forgotten a brace or added an extra comma?  Sure, me too.

Thankfully, despite the project being _called_ JSONResume, it now also
supports YAML because YAML, on the other hand, is easy to create and edit.
It's also extremely human readable and that's the main point of a
CV/resumé.

## Building

To build, run the following:

    yarn
    yarn export

This will automatically display the resulting `cv.html` in your browser.
