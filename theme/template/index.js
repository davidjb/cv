const fs = require("fs")
const Handlebars = require("handlebars")

module.exports = {
  render: render
}

function render(resume) {
  nst css = fs.readFileSync(__dirname + "/style.css", "utf-8")
  const template = fs.readFileSync(__dirname + "/resume.template", "utf-8")
  return Handlebars.compile(template)({
    css: css,
    resume: resume
  })
}

Handlebars.registerHelper("nl2br", function(value) {
  return (value || "").replace(/\n/g, "</p><p>")
})
