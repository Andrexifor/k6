# K6
Curso de Performance Testing en Node.js con K6 - Apuntes
Javascript, para testing

Opcion gratuita de google, lightshot; sirve para pruebas de performance.
<img width="1919" height="582" alt="image" src="https://github.com/user-attachments/assets/315cb2e1-bfc6-426b-bd25-6b328a268414" />

Opcion mas robusta "https://www.webpagetest.org/"
<img width="1919" height="1033" alt="image" src="https://github.com/user-attachments/assets/e2c06758-0ff5-40f1-b12b-d3a5b8f782e2" />

Para ejecutar el k6, se debe ingresar el siguiente comando en CMD:
-> Ingreso a ruta donde esta el script
-> k6 run stages.js

Smoke Test (Prueba de Humo): verifica que su sistema puede manejar una carga mínima, sin ningún problema.
Load Test (Prueba de Carga): se ocupa principalmente de evaluar el rendimiento de su sistema en términos de usuarios concurrentes o solicitudes por segundo.
Stress Test (Prueba de Estrés) y Spike testing (Prueba de Pico): se ocupan de evaluar los límites de su sistema y la estabilidad en condiciones extremas.
Soak Test (Prueba de Resistencia): le informa sobre la fiabilidad y el rendimiento de su sistema durante un periodo de tiempo prolongado.

Configuracion de red:
htop: Permite monitorear los recursos de hardware
iftop: Permite monitorear el consumo de ancho de banda y red
