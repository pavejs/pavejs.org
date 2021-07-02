const DIR_NAME = __dirname + '/../../'

module.exports = {    
  plugins: [   
    require('postcss-import')({ path: [DIR_NAME] }), 
    require('tailwindcss')(DIR_NAME + 'assets/css/tailwind.config.js'),
    require('autoprefixer')({ path: [DIR_NAME] }),
  ]
}