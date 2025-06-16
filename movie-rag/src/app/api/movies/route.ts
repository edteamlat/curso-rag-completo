import { NextRequest, NextResponse } from "next/server"
import { openai } from "../../../services/openai.service"
import { search } from "../../../services/search.service"
import systemMessage from "../../../config/systemMessage"
import { MovieRequest } from "../../../interfaces/MovieRequest"
import { MovieResponse } from "../../../interfaces/MovieResponse"

export async function POST(
  request: NextRequest,
): Promise<NextResponse<MovieResponse>> {
  try {
    const body: MovieRequest = await request.json()
    const { userQuestion } = body

    if (!userQuestion) {
      return NextResponse.json(
        { response: "La pregunta del usuario es requerida" },
        { status: 400 },
      )
    }

    // Realizar búsqueda semántica
    const movies = await search(userQuestion)

    // Crear respuesta con OpenAI
    const response = await openai.responses.create({
      model: "gpt-4.1",
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: systemMessage,
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Pregunta del usuario: ${userQuestion} \n\n Contexto: ${JSON.stringify(movies)}`,
            },
          ],
        },
      ],
      text: {
        format: {
          type: "text",
        },
      },
      reasoning: {},
      tools: [],
      temperature: 1,
      max_output_tokens: 2048,
      top_p: 1,
      store: true,
    })

    return NextResponse.json({
      response: response.output_text,
    })
  } catch (error) {
    console.error("Error en el endpoint de películas:", error)
    return NextResponse.json(
      { response: "Error interno del servidor" },
      { status: 500 },
    )
  }
}
