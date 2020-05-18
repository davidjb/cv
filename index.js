const fs = require("fs")
const handlebars = require("handlebars")
const helpers = require('handlebars-helpers')

module.exports = {
  render: render
}

function render(resume) {
  const css = fs.readFileSync(__dirname + "/template/style.css", "utf-8")
  const template = fs.readFileSync(__dirname + "/template/resume.hbs", "utf-8")
  return handlebars.compile(template)({
    css: css,
    resume: resume
  })
}

helpers.markdown({
  handlebars: handlebars
})

handlebars.registerHelper("nl2br", function(value) {
  return (value || "").replace(/\n/g, "</p><p>")
})
