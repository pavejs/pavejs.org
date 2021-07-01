module.exports = {    
  plugins: [   
    require('postcss-import')({ path: [__dirname] }), 
    require('tailwindcss')(__dirname + 'assets/css/tailwind.config.js'),
    require('autoprefixer')({ path: [__dirname] }),
  ]
}