"use client"

import ChatInput from "./ChatInput"
import MovieResponse from "./MovieResponse"
import { useMovieChat } from "../hooks/useMovieChat"

export default function MovieChatContainer() {
  const {
    userInput,
    response,
    isLoading,
    error,
    handleSubmit,
    handleInputChange,
    clearResponse,
  } = useMovieChat()

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Recomendador de Películas
        </h1>
        <p className="text-gray-600">
          Cuéntame qué tipo de película te gustaría ver y te haré
          recomendaciones personalizadas
        </p>
      </div>

      <div className="space-y-4">
        <ChatInput
          value={userInput}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700">{error}</p>
            <button
              onClick={clearResponse}
              className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
            >
              Intentar de nuevo
            </button>
          </div>
        )}

        <MovieResponse response={response} isLoading={isLoading} />
      </div>
    </div>
  )
}
