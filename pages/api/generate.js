import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    max_tokens: 256,
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  console.log(capitalizedAnimal);
  return `Sarah is Danny's roommate. Sarah is being blamed for leaving mess around the house. Complete Sarah's response to Danny's message. If Danny complains without using an 'I' statement, use an angry tone for her response.
  If Danny shares how he feels, use a positive tone for the response.

Danny: ${capitalizedAnimal}
Sarah: `;
}
