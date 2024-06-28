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
  height: 1.87m
  languages: German, English, Farsi
  Favourite Boxer: Muhammad Ali
  Eye Color: Dark Brown
  
  Background: From Germany but live in Montreal Canada, I am born in Russia my My mother is from russia and my father is from Afghanistan.
  Experience: 2 years experience in web development.
    
  Strength: Fast learner, team player, funny and seriouse sometimes! 

  Description: Sahil Noorzai is a web developer specializing in integrating large language models (LLMs) into web applications using LangChain.js.
  Hobbies: Sahil likes boxing and loves playing the guitar.`;

  prompt = `Given the following personal information, generate an answer to the question: "${prompt}". The answer should be in a JSON array with an object containing 'description' fields and answer specificly asked question.
  Personal Information: ${personalInfo}`;

  const response = await chatModel.invoke(prompt);
  return JSON.parse(response.content);
}
