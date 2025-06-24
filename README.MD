# Análisis de la Aplicación: Test OpenAI App

## ¿Qué hace la aplicación?

Esta aplicación web permite interactuar con un modelo de IA (usando la API de GitHub Models compatible con OpenAI) a través de una interfaz moderna construida con Flask y jQuery. El usuario primero define el "comportamiento" (prompt de sistema) y luego realiza una pregunta; la IA responde según ese comportamiento. Todo el flujo es dinámico y sin recargar la página.

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