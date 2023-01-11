// config.js
module.exports = {
    source: [`tokens/font/font-basics.json`, `tokens/font/font-styles.json`],
    // If you don't want to call the registerTransform method a bunch of times
    // you can override the whole transform object directly. This works because
    // the .extend method copies everything in the config
    // to itself, allowing you to override things. It's also doing a deep merge
    // to protect from accidentally overriding nested attributes.
    transform: {
      // Now we can use the transform 'myTransform' below
      myTransform: {
        type: 'name',
        transformer: (token) => token.path.join('_').toUpperCase()
      }
    },
    // Same with formats, you can now write them directly to this config
    // object. The name of the format is the key.
    format: {
      myFormat: ({dictionary, platform}) => {

        let mapName = 'font-styles';
          
          let tokens = dictionary.allTokens.map(token => {
          if(!String(token.name).startsWith("font")){
            if(String(token.name).endsWith("font-size")){
              return `'${token.name}': ${token.value/16}em,`   
            }else{
              return `'${token.name}': ${token.value},`   
            }
                   
          }
          
        
        }).join('\n');
  
        return `$${mapName}:( 
                   ${tokens}
                   )
               `

      }
    },
    platforms: {
      
       //scss
       "scss": {
        "transformGroup": "scss",
        // "prefix": "sd", // agregamos un prefijo a todas las cariables (Le agrega un guión también) 
        "buildPath": "__scss-input/abstracts/variables/font-variables/", // la ruta donde irá nuestro archivo de salida 
        "files": [{
          "destination": "font-style.scss", // nombre de archivo 
          "format": "myFormat", // formato 
          "mapName": "font-style"
        }]
      }
    }
  }