const ghpages = require('gh-pages')

ghpages.publish(
  'dist',
  {
    message: 'Publisher generated commit [ci skip]',
  },
  function(err) {
    if (err) {
      console.error('Error Publishing', err)
      process.exit(1)
    }
    console.log('published')
    process.exit(0)
  }
)
