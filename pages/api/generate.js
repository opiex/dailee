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

  // const promptStory = `Sarah is My roommate. If I complain about her behavior without using an 'I' statement, Sarah responds very aggressively.
  // If I share how I feels using an 'I' statement, Sarah usually apologizes. Complete Sarah's response using short sentences.\n`

  const promptStory = `Sarah is My roommate. She is very rude. Here is our conversation:\n`

  let fullPrompt = promptStory + prompt;
  console.log(fullPrompt);
  return fullPrompt;

}
