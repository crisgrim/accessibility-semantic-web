#Soluciones

Las soluciones a este ejercicio están en el archivo indexSolutions.html
Aparece la solución y en un comentario el número de la pista que resuelve.

#### Explicación
    1. Incluir tabindex="0" a los elementos del header ya que no son links ni buttons y no tienen
        inherente este comportamiento.
    2. Como vimos en clase, un role="button" no asigna automáticamente el comportamiento de botón, 
        tenemos que programarlo nosotras. Por tanto, al incluir la etiqueta <button></button> nuestro
        elemento adquiere los comportamientos por defecto de esta etiqueta sin tener que controlarlo nosotras.
    3. Las imágenes deben llevar atributo alt="" si son decorativas para evitar que el lector lea la url
        u otra información al pasar por ellas. En este caso, podríamos argumentar que las imágenes no 
        son necesarias (alt="") o como se trata de cursos en distintos países añadir un alt="curso en /país/".
        En cualquier caso, los alt que hay en index.html están mal todos :) .
    4. Las buenas prácticas de accesibilidad indican no usar tabindex mayor que 0. En este caso, como se nos pide
        no poder acceder por teclado a la imagen, debemos directamente eliminar el atributo tabindex.
    5. Para este punto valdría con cambiar el color del texto del footer o del footer. Para esta solución usamos
        la hoja de estilos stylesSolutions.css
    6. Aunque algunos lectores puedan identificar correctamente el idioma de la página, es un requisito
        que esté explicitado en nuestro código.
    7. Se incluye botón de salto al contenido principal que nos lleva a la sección principal.