La revisión del código es esencial para comenzar bien el día. Así como en la Clase 9, tu enfoque deberá ser que todas las tareas de los estudiantes estén lo más funcionales posible y hacer que todos se pongan al día . Haz que los estudiantes con tareas funcionales guíen al grupo y expliquen su código. También, pregúntale a los estudiantes con proyectos incompletos y puntos de conflicto si pueden compartir su trabajo con la clase para que les ayuden. A este punto de la clase, debería haber la suficiente confianza entre todos para profundizar en la revisión del código.


La única parte didáctica de hoy, el local storage, es directo en la forma en cómo funciona. La clase es asegurarse de que todos los temas teóricos grandes estén cubiertos también:
* Persistencia, ya sea en el navegador o a través de múltiples equipos
* Técnias para administar la persistencia: cuándo almacenar, cuándo recuperar
* ¿Exactamente qué almacenamos?
* JSON y modelado de datos

## Local Storage
Comienza hablando de qué significa la "persistencia de datos". La persistencia de datos es el acto de guardar datos para utilizarlos después, incluso después de que el navegador se cierre o se utilice otra máquina para acceder a la aplicación. El uso de la persistencia de datos es fuerte dentro del desarrollo. Tradicionalmente, utilizaremos bases de datos para almacenar los datos dentro de la aplicación, pero esperaremos hasta el curso 301 antes de llegar a ese nivel de persistencia. 

En el curso 201, trabajaremos con otra forma de persistencia de datos, el local storage. El local storage es genial porque es específico del navegador y guarda información sin fecha de expiración. Lo cual significa que todos los datos que son guardados/almacenados son específicos del navegador que estás utilizando y una vez que cierras el navegador y abres la aplicación de vuelta, tus datos seguirán presentes. Tu amigo podrá abrir su proprio navegador y ver solo los datos que él mismo ha guardado y no afectará para nada los datos que has guardado. 

La mejor parte del local storage es que puede almacenar más datos que las cookies, la cual es otra forma de almacenar datos locales para un usuario. El local storage tiene una capacidad máxima de 5MB, mientras que las cookies tienen un límite de 4KB.

El local storage almacena tanto keys como values en forma de strings. Esto significa que cuando guardas datos en el local storage, se guardarán como string, es decir que tendrás que convertirlos a un tipo de dato distinto al recuperar los datos.

El local storage se basa en el concepto de key/value. Cada elemento que has insertado en el local storage deberá tener un key y un value asociado con él. 

Este es un resumen de los métodos de local storage:
1. `setItem()` - Añade los key y value al local storage
1. `getItem()` - Recupera un value por su key
1. `removeIem` - Elimina un elemento por su key
1. `clear()` - Limpia todo el storage

### Demo
Consulta el [archivo Demo](Demo.md) para ver la demostración de local storage.

1. Manipulación por consola del local storage
1. Guarda un array en el local storage
1. Recupera el array del local storage y conviértelo de vuelva a JS. 



