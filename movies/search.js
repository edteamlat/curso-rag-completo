import supabaseClient from "./supabase.js"
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "api-key",
});

export async function search(query) {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
    encoding_format: "float",
  });
  
  const { data: movies } = await supabaseClient.rpc('match_movies', {
    query_embedding: embedding.data[0].embedding,
    match_threshold: 0.2, 
    match_count: 2,
  })
  
  return movies 
}

search("película para niños o sobre niños").then(console.log)