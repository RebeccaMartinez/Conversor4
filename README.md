# Conversor de Temperatura 

Esta práctica es igual a la [anterior](https://github.com/RebeccaMartinez/Conversor3) con la diferencia de que se han cambiado los tests y se han realizado con sinonJS. Además se ha desplegado la aplicación en iaas.ull.es.

###TRAVIS

[![Build Status](https://travis-ci.org/RebeccaMartinez/Conversor4.svg?branch=master)](https://travis-ci.org/RebeccaMartinez/Conversor4)


###TUTORIAL: DESPLEGAR LA APLICACIÓN EN IAAS.ULL.ES

En primer lugar hay que acceder a (iaas.ull.es) y aceder al portal de usuario. A continuación accedemos a "VCN modificar", que se encuentra en el panel derecho marcamos elegimos "noVCN". 

Ahora ya podemos arrancar nuestra máquina virtual. Le damos doble click e introducimos el usuario y contraseña correspondiente (usuario/usuario). Ahora es necesario conocer la ip de nuestra máquina, por lo que hacemos un ifconfig. Una vez tenemos la ip podemos trabajar desde la consola haciendo un ssh:

```
ssh usuario@ip
```
IMPORTANTE: Es necesario estar logueado en la página de [acceso de la ull](acceso.ull.es)

El siguiente paso es añadir las claves ssh a nuestra máquina virtual y añadirla a github:

```
ssh-keygen -t rsa
```
Ahora ya podemos realizar el clone de nuestro repositorio.

```
git clone git@github.com:RebeccaMartinez/Conversor4.git
```

El siguiente paso es realizar las instalaciones necesarias:

```
sudo apt-get install npm 

npm install 

```

Por último arrancamos el servidor:

```
nodejs static-server.js
```


##ENLACES

Enlace al conversor: [Conversor](http://rebeccamartinez.github.io/Conversor4/)
Despliegue: http://10.6.128.87:8080/index.html
Enlace a mi Github page: [Rebecca](http://rebeccamartinez.github.io/)
Github page de las pruebas con blanket: [Pruebas](http://rebeccamartinez.github.io/Conversor3/tests/test_blanket)
Pruebas en iaas: [Pruebas](http://10.6.128.87:8080/tests/test_blanket.html)

