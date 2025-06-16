export type Movie = {
  id: string
  title: string
  overview: string
  release_date: string
  vote_average: number
  genres?: string[]
  [key: string]: unknown
}
