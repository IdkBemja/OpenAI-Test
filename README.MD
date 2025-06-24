# Análisis de la Aplicación: Test OpenAI App

## ¿Qué hace la aplicación?

Esta aplicación web permite interactuar con un modelo de IA ChatGPT o4-mini (usando la API de GitHub Models compatible con OpenAI) a través de una interfaz moderna construida con Flask y jQuery. El usuario primero define el "comportamiento" (prompt de sistema) y luego realiza una pregunta; la IA responde según ese comportamiento. Todo el flujo es dinámico y sin recargar la página.

## ¿Cómo Funciona?

Un ejemplo de como debería gestionarse eso debería ser de la siguiente manera:
   
- **Behavior** (Comportamiento o rol dentro del sistema + Manejo de errores para evitar preguntas fuera del rol.):
   ```
   Eres un profesor de matemáticas y un estudiante te va a hacer preguntas de operaciones matemáticas, para llevar a cabo este procedimiento deberás no darle la respuesta directamente, al contrario, deberás darle el paso a paso para llegar a la solución con la respuesta. Si el usuario ingresa una pregunta que no sea de aritmética simple deberás responder con "Lo siento, solo soy un profesor de matemáticas, no tengo conocimiento en x área" siendo x área el campo que se está haciendo la pregunta.
   ```

- **Question** (La pregunta que se le va a hacer a la IA):
   ```
   ¿Cuanto es 5 x 5 / 2? Respuesta esperada: procedimiento + resultado
   ¿Qué es C++? Respuesta esperada: Lo siento, solo soy un profesor de matemáticas, no tengo conocimiento en programación.
   ```

---

## Puntos fuertes

- **Arquitectura modular:** Separación clara entre controladores, servicios y configuración ([app/controllers/app_controller.py](app/controllers/app_controller.py), [app/services/iaUtil.py](app/services/iaUtil.py), [app/settings/config.py](app/settings/config.py)).
- **Frontend interactivo y moderno:** Uso de jQuery para manipulación dinámica de formularios y AJAX para comunicación con el backend ([app/static/assets/js/app.js](app/static/assets/js/app.js)).
- **Estética cuidada:** Uso de Bootstrap Icons y CSS personalizado ([app/static/assets/css/app.css](app/static/assets/css/app.css)).
- **Gestión segura de credenciales:** Uso de variables de entorno y dotenv para el token de API.
- **Fácil de extender:** Estructura preparada para añadir nuevas funcionalidades o endpoints.

---

## Dependencias principales

Declaradas en [Requirements](requirements.txt):

- **Flask:** Framework web principal.
- **openai:** Cliente para interactuar con la API de modelos compatibles.
- **dotenv:** Para cargar variables de entorno desde `.env`.

---

## Instalación y ejecución

1. **Clona el repositorio y entra en la carpeta del proyecto.**

2. **Crea y activa un entorno virtual (opcional pero recomendado):**
   ```sh
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. **Instala las dependencias:**
   ```sh
   pip install pipenv
   pipenv install -r requirements.txt
   # O si prefieres pip:
   pip install -r requirements.txt
   ```

4. **Configura el archivo `.env`:**

   Debe contener tu token de API de GitHub Models (o compatible):

   ```
   GITHUB_TOKEN="tu_token_aqui"
   ```

   Ejemplo:
   ```
   GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

5. **Ejecuta la aplicación:**
   ```sh
   pipenv run python main.py
   # O si usas pip:
   python main.py
   ```

6. **Abre tu navegador en** [http://localhost:5000](http://localhost:5000)

---

## Archivos clave

- `main.py`
- `app/controllers/app_controller.py`
- `app/services/iaUtil.py`
- `app/settings/config.py`
- `app/templates/app.html`
- `app/static/assets/js/app.js`
- `app/static/assets/css/app.css`
- `.env`
- `Pipfile`

---

## Ejemplo de `.env`

```env
GITHUB_TOKEN="tu_token_aqui"