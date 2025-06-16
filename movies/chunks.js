import { text } from "./text.js";
import { chunk } from "llm-chunk";

const chunks = chunk(text, {minLength: 100, maxLength: 120, overlap: 40})
chunks.forEach(chunk => {
  console.log("CHUUUUUUUUUUUUUUUNK: ", chunk)
})