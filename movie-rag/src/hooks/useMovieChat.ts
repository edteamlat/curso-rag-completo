import { useState } from "react"
import { movieService } from "../services/movie.service"

export function useMovieChat() {
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!userInput.trim() || isLoading) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await movieService.getMovieRecommendations(userInput)
      setResponse(result.response)
      setUserInput("")
    } catch (err) {
      setError("Error al obtener recomendaciones. Inténtalo de nuevo.")
      console.error("Error getting movie recommendations:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (value: string) => {
    setUserInput(value)
  }

  const clearResponse = () => {
    setResponse("")
    setError(null)
  }

  return {
    userInput,
    response,
    isLoading,
    error,
    handleSubmit,
    handleInputChange,
    clearResponse,
  }
}
