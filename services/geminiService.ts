
import { GoogleGenAI } from "@google/genai";

// Always use the API key directly from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getHairAdvice = async (userQuery: string, history: { role: 'user' | 'model', text: string }[]) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Vous êtes l'assistant IA expert de "Concept Alina", un salon de coiffure de prestige situé sur la rue Masson à Montréal.
    Le salon bénéficie d'un héritage de savoir-faire reconnu à cette adresse.
    Votre mission est de conseiller les clients sur les styles, les couleurs, et les soins capillaires avec une approche moderne et sophistiquée.
    Soyez élégant, chaleureux, professionnel et un peu branché montréalais.
    Répondez en français. 
    Si on vous interroge sur les prix ou les rendez-vous, invitez-les à consulter notre menu de services ou à nous appeler directement au salon au 514-303-0350.
    Nos marques partenaires incluent Kérastase et L'Oréal Professionnel.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userQuery }] }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez réessayer ou contacter le salon directement !";
  }
};
