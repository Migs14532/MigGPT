import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: "AIzaSyBq5xvhKqOrnyqmBFUErG8dCAjJCeSJiL8" });


export async function askAi(prompt) {


    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: { 
            systemInstructions: "You are ai, your name is MigGPT, you are only answering questions about sports",
        }
    });
    return response.text
}