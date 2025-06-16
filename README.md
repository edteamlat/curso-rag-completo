# Curso de RAG (Retrieval-Augmented Generation)

Este repositorio contiene el material y código fuente del curso de RAG dictado por el profesor Beto Quiroga en EDteam.

## Estructura del proyecto

- **mod1/**: Contiene todo lo realizado en el módulo uno del curso. Aquí se encuentra el archivo `index.js` donde deberás agregar tu propia llave de OpenAI para poder ejecutar los ejemplos.
- **movie-rag/**: Proyecto principal (Next.js) donde también deberás configurar tus llaves de OpenAI y Supabase para utilizar la aplicación.
- **movies/**: Contiene ejemplos adicionales. Aquí deberás agregar tus llaves de Supabase y OpenAI en los archivos correspondientes.

## Configuración de llaves (API Keys)

### 1. Módulo 1 (`mod1`)
- Abre el archivo `mod1/index.js`.
- Reemplaza el valor de `apiKey` en la siguiente línea con tu propia llave de OpenAI:
  ```js
  const openai = new OpenAI({
    apiKey: "TU_LLAVE_OPENAI_AQUI",
  });
  ```
- Puedes obtener tu llave en: https://platform.openai.com/api-keys

### 2. Proyecto Movie-RAG (`movie-rag`)
- Abre el archivo `movie-rag/src/config/constants.ts`.
- Reemplaza los valores de las siguientes constantes con tus llaves de Supabase y OpenAI:
  ```ts
  export const SUPABASE_URL = "TU_SUPABASE_URL"
  export const SUPABASE_ANON_KEY = "TU_SUPABASE_ANON_KEY"
  export const OPENAI_API_KEY = "TU_OPENAI_API_KEY"
  ```
- Puedes obtener tus llaves de Supabase en: https://app.supabase.com/project/_/settings/api
- Puedes obtener tu llave de OpenAI en: https://platform.openai.com/api-keys

### 3. Carpeta Movies (`movies`)
- Abre el archivo `movies/constants.js` y reemplaza los valores:
  ```js
  export const SUPABASE_URL = "TU_SUPABASE_URL"
  export const SUPABASE_ANON_KEY = "TU_SUPABASE_ANON_KEY"
  ```
- Abre el archivo `movies/chat/openAI.js` y reemplaza el valor de `apiKey`:
  ```js
  export const openai = new OpenAI({
    apiKey: "TU_OPENAI_API_KEY",
  });
  ```

## Notas importantes
- **No compartas tus llaves de OpenAI ni Supabase públicamente.**
- Cada alumno debe generar sus propias llaves en su cuenta personal.
- Si tienes dudas sobre cómo obtener tus llaves, revisa la documentación oficial de [OpenAI](https://platform.openai.com/api-keys) y [Supabase](https://supabase.com/docs/guides/api).

## Créditos
- **Curso:** RAG (Retrieval-Augmented Generation)
- **Profesor:** Beto Quiroga
- **Plataforma:** EDteam

¡Éxitos en el curso y disfruta aprendiendo sobre RAG! 