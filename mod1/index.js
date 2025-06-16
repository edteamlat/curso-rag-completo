import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "",
});

const embedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: "“Titanic” narra la historia de amor entre Jack, un joven artista sin recursos, y Rose, una joven aristócrata comprometida por obligación, quienes se conocen a bordo del lujoso transatlántico RMS Titanic durante su viaje inaugural en 1912. Mientras su romance florece a pesar de las barreras sociales, el desastre se avecina cuando el barco choca con un iceberg, marcando uno de los naufragios más trágicos de la historia.",
  encoding_format: "float",
});

console.log(embedding.data[0].embedding);