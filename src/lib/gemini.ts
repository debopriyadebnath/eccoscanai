import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyC0NQ_ngr_OD_8LNg44pqVL2-FrlehOtx8");

export async function analyzeWasteImage(imageData: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Analyze this waste image and provide detailed information about: 1. Type of waste 2. Recyclability 3. Environmental impact 4. Proper disposal methods 5. Estimated decomposition time";

  try {
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageData.split(",")[1]
        }
      }
    ]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
}