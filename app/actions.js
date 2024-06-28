"use server";
import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAnswer(prompt) {
  const personalInfo = `
  Name: Sahil Noorzai
  Age: 29 years old
  Height: 1.87m
  Languages: German, English, Farsi
  Favourite Boxer: Muhammad Ali
  Eye Color: Dark Brown
  
  Background: From Germany but live in Montreal Canada, I am born in Russia my mother is from Russia and my father is from Afghanistan.
  Experience: 2 years experience in web development, 2 years experience in JavaScript, Next.js, React.js, and Node.js.
    
  Strengths: Fast learner, team player, funny and serious sometimes! 

  Description: Sahil Noorzai is a web developer specializing in integrating large language models (LLMs) into web applications using LangChain.js.
  Hobbies: Sahil likes boxing and loves playing the guitar.`;

  const fullPrompt = `Given the following personal information, generate an answer to the question: "${prompt}". The answer should be a JSON array with one object containing the field 'description' and should answer the question specifically. Only provide the JSON output, without additional text or formatting.
  Personal Information: ${personalInfo}`;

  try {
    const response = await chatModel.invoke(fullPrompt);
    console.log("Raw response:", response.content);

    // Attempt to parse the response
    const parsedResponse = JSON.parse(response.content.trim());

    // Ensure the parsed response is an array with an object containing 'description' field
    if (Array.isArray(parsedResponse) && parsedResponse[0]?.description) {
      return parsedResponse;
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error parsing response:", error);
    throw new Error("Failed to generate answer");
  }
}
