import systemMessage from "./systemMessage.js";
import { openai } from "./openAI.js";
import { search } from "../search.js";

const userQuestion = "Quiero una película sobre un caballero de la noche";
const movies = await search(userQuestion);

const response = await openai.responses.create({
  model: "gpt-4.1",
  input: [
    {
      "role": "system",
      "content": [
        {
          "type": "input_text",
          "text": systemMessage
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "input_text",
          "text": `Pregunta del usuario: ${userQuestion} \n\n Contexto: ${JSON.stringify(movies)}`
        }
      ]
    }
  ],
  text: {
    "format": {
      "type": "text"
    }
  },
  reasoning: {},
  tools: [],
  temperature: 1,
  max_output_tokens: 2048,
  top_p: 1,
  store: true
});

console.log(response.output_text)