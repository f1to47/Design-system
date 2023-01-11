// config.js
module.exports = {
    source: [`tokens/color/light-theme.json`],
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

         
        // let nombreFiltrado =  token.name.replace(/(-[a-z])\w+/, ''); 
        //esto lo hice para eliminar las palabras repetidas
        // Antes: blue-blue-200
        // despues: blue-200

        let mapName = 'light-theme-colors';

        let tokens = dictionary.allTokens.map(token => `'${token.name.replace(/([a-z])\w+(-[a-z])\w+-/, '')}': ${token.value},`).join('\n');
  
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
        "buildPath": "__scss-input/abstracts/variables/theme-variables/light-theme/", // la ruta donde irá nuestro archivo de salida 
        "files": [{
          "destination": "light-theme.scss", // nombre de archivo 
          "format": "myFormat", // formato 
          "mapName": "light-theme"
        }]
      }
    }
  }