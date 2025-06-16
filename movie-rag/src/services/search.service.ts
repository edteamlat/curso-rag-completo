import { openai } from "./openai.service"
import supabaseClient from "./supabase.service"

export async function search(query: string) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
    encoding_format: "float",
  })

  const { data: movies } = await supabaseClient.rpc("match_movies", {
    query_embedding: embedding.data[0].embedding,
    match_threshold: 0.2,
    match_count: 2,
  })

  return movies
}
