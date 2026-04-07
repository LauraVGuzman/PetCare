# 🐾 PetCare App

PetCare es una aplicación móvil nativa desarrollada con **React Native (CLI)**. Está diseñada para facilitar la gestión y el cuidado de mascotas, implementando navegación por pestañas (Bottom Tabs), gestión de estado en formularios y una interfaz de usuario optimizada y estilizada.

## ⚙️ Requisitos Previos (Entorno de Desarrollo)

Para garantizar que esta aplicación compile y se ejecute correctamente en un entorno Android local, es **estrictamente necesario** contar con las siguientes herramientas configuradas:

1. **Node.js** (Versión LTS recomendada).
2. **Java Development Kit (JDK) 17**: Las versiones recientes de React Native y Gradle presentan conflictos conocidos con versiones de Java superiores (como Java 21 o 22). Se requiere la versión 17.
3. **Android Studio**: Debe estar instalado junto con el **Android SDK**, y las variables de entorno (`ANDROID_HOME`) deben estar debidamente configuradas en el sistema operativo.
4. **Dispositivo**: Un emulador de Android configurado (AVD) o un dispositivo físico conectado mediante cable con la opción de **Depuración por USB** activada.

---

## 🚀 Instalación y Ejecución

Siga estos pasos para ejecutar el proyecto en su máquina local:

1. Clone este repositorio e ingrese a la carpeta del proyecto:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd PetCare
   ```

2. Instale las dependencias de Node:
   ```bash
   npm install
   ```

3. Inicie el servidor de desarrollo (Metro Bundler):
   ```bash
   npm start
   ```

4. En una nueva terminal, compile e instale la aplicación en el dispositivo o emulador:
   ```bash
   npx react-native run-android
   ```

---

## 🛠️ Guía de Solución de Problemas (Troubleshooting)

Debido a las particularidades y actualizaciones recientes en el ecosistema de React Native, Gradle y Windows, es posible que el entorno de desarrollo local arroje errores de compilación al ejecutar el proyecto por primera vez. 

A continuación, detallamos las soluciones directas a los conflictos de entorno más comunes que pueden presentarse durante la evaluación:

### 1. Error de compatibilidad del Plugin de Gradle (`IBM_SEMERU` o falla en `foojay-resolver-convention`)
**Descripción:** Ocurre un error de conexión (`Connection reset`) o de resolución de dependencias al intentar descargar Java automáticamente, debido a un bug en la versión base del plugin de React Native.
**Solución:**
Navegue al archivo `android/settings.gradle` (o de forma interna en `node_modules/@react-native/gradle-plugin/settings.gradle.kts`) y actualice la versión del plugin de `0.5.0` a `1.0.0`:
```gradle
id("org.gradle.toolchains.foojay-resolver-convention") version("1.0.0")
```

### 2. Error de versión de Java (`A restricted method in java.lang.System has been called` o `Java home supplied is invalid`)
**Descripción:** El sistema intenta compilar usando una versión de Java incompatible instalada globalmente en la máquina, en lugar de requerida (Java 17).
**Solución:**
Fuerce al proyecto a utilizar el JDK interno que provee Android Studio. Abra el archivo `android/gradle.properties` y añada la siguiente línea al final del documento (ajuste la ruta si su instalación de Android Studio está en otro directorio o usa macOS):
```properties
org.gradle.java.home=C:/Program Files/Android/Android Studio/jbr
```

### 3. Error de ruta del SDK (`SDK location not found`)
**Descripción:** Gradle no logra localizar automáticamente el SDK de Android en el sistema de archivos local.
**Solución:**
Cree un archivo llamado `local.properties` en la raíz de la carpeta `android/` (`PetCare/android/local.properties`) y especifique la ruta absoluta hacia su SDK. Ejemplo para Windows:
```properties
sdk.dir=C:\\Users\\SuUsuario\\AppData\\Local\\Android\\Sdk
```

### 4. Error de conexión con el dispositivo (`adb is not recognized` o `No emulators found`)
**Descripción:** El sistema operativo no reconoce los comandos del Android Debug Bridge (ADB) o no detecta el dispositivo físico conectado.
**Solución:**
1. Verifique que las herramientas del SDK ("SDK Platform-Tools") estén instaladas desde el SDK Manager de Android Studio.
2. Si utiliza un dispositivo físico, asegúrese de que la conexión USB esté configurada en modo **Transferencia de Archivos (MTP)**, que la **Depuración USB** esté encendida, y que haya aceptado el prompt de seguridad en la pantalla del celular ("Permitir depuración desde esta computadora").
