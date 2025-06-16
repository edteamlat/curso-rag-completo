import { HttpService } from "./http.service"
import { MovieRequest } from "../interfaces/MovieRequest"
import { MovieResponse } from "../interfaces/MovieResponse"

class MovieService extends HttpService {
  constructor() {
    super("/api")
  }

  async getMovieRecommendations(userQuestion: string): Promise<MovieResponse> {
    const payload: MovieRequest = { userQuestion }
    return this.post<MovieResponse>("/movies", payload)
  }
}

export const movieService = new MovieService()
