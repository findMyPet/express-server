express-server
==============

Estos son los archivos pertenecientes a la aplicación web y API REST del proyecto. Constuído con Node y Express.Para poder trabajar realizar modificaciones, es necesario descargar el repositorio a tu espacio de trabajo y usar adecuadamente Git para evitar conflictos.

## Configuración del proyecto en el espacio de trabajo
1. Inicializa un repositorio local y agrega un nuevo remote. En este caso, el remote se llamará 'github', pero puede llamarse de cualquier manera:

        git init
        git remote add github https://github.com/findMyPet/express-server.git

2. Jala todos los archivos del repositorio remoto hacia el local:
        git pull github
3. Suponiendo que node y npm ya están instalados en tu ordenador, ejecuta el servidor:

        npm start
        
    si a este punto ocurren conflictos con las dependiencias ejecuta:

        npm install / sudo npm install
        npm start
