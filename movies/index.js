import { movies } from "./data.js";
import OpenAI from "openai";
import supabaseClient from "./supabase.js";


const openai = new OpenAI({
  apiKey: "api-key",
});

const data = movies.results.map((movie) => {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    release_date: movie.release_date,
  };
});


data.forEach(async (mv) => {

  const content = `Title: ${mv.title} Overview: ${mv.overview}`
  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: content,
    encoding_format: "float",
  });

  const { error } = await supabaseClient
  .from('movies')
  .insert({ 
    vector: embedding.data[0].embedding, 
    content: content, 
    metadata: {
      id: mv.id,
      title: mv.title,
      release_date: mv.release_date,
    }
  })

  if (error) {
    console.error(error)
  } else {
    console.log(`Movie ${mv.id} inserted successfully`)
  }
});