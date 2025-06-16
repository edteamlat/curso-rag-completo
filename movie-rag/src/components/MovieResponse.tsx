type MovieResponseProps = {
  response: string
  isLoading: boolean
}

export default function MovieResponse({
  response,
  isLoading,
}: MovieResponseProps) {
  if (isLoading) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg border">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Buscando recomendaciones...</p>
        </div>
      </div>
    )
  }

  if (!response) {
    return null
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg border">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Recomendaciones de películas
      </h3>
      <div className="text-gray-700 whitespace-pre-wrap">{response}</div>
    </div>
  )
}
