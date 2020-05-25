const fs = require("fs")
const handlebars = require("handlebars")
const markdown = require('helper-markdown')

module.exports = {
  render: render
}

function render(resume) {
  const css = fs.readFileSync(__dirname + "/template/resume.css", "utf-8")
  const print = fs.readFileSync(__dirname + "/template/print.css", "utf-8")
  const template = fs.readFileSync(__dirname + "/template/resume.hbs", "utf-8")
  return handlebars.compile(template)({ css, print, resume })
  console.log(resume)
}

handlebars.registerHelper("markdown", markdown({
  linkify: true
}))

handlebars.registerHelper("nl2br", function(value) {
  return (value || "").replace(/\n/g, "</p><p>")
})
