import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.prompt),
    max_tokens: 256,
    temperature: 0.7,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  const capitalizedPrompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  console.log(capitalizedPrompt);
  return `Sarah is My's roommate. Complete Sarah's response to My message. If I complain about her behavior without using an 'I' statement, Sarah is responds very aggressively.
  If I share how I feels using an 'I' statement, Sarah usually apologizes.

Me: ${capitalizedPrompt}
Sarah: `;
}
