# API FRASES DE AMIGAS Y RIVALES - FAUSTO

Colección de palabreos que aparecen en Amigas y Rivales (versión Fausto).

## Links

Link principal: 

    https://fausto-frases-api.herokuapp.com/

Link para sacar frases: 


    https://fausto-frases-api.herokuapp.com/api/frases/{x}
x: número del 1 - 64

Link para sacar frase por persona:  


    https://fausto-frases-api.herokuapp.com/api/{y}
y: nombre de la persona

## Process 

Usando la API de Twitter en Postman se hizo una extracción de datos de la cuenta [Frases de Fausto](https://twitter.com/frasesayrivales). De todos los tweets obtenidos se filtraron los mejores palabreos. La base de datos se armó en MongoDB, cada item con el texto, la persona/personaje que dirige el palabreo y el año en que ocurrió.  

Tech used: Node, Express, MongoDB, Heroku. 

## Future plans

Se va a agregar la opción de sacar la info por año
