const jsdoc2md = require('jsdoc-to-markdown')
const showdown = require('showdown')
const showdownHighlight = require('showdown-highlight')

const converter = new showdown.Converter({
  extensions: [showdownHighlight],
})

jsdoc2md.render({ files: 'src/*/*.js' }).then(docage => {
  console.log(docage)
  console.log(converter.makeHtml(docage))
})
