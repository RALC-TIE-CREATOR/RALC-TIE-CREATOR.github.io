// Archivo: api/chat.js
export default async function handler(req, res) {
  // 1. Configuración de Seguridad y CORS (Permite que tu web hable con Vercel)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Si el navegador solo está verificando permisos, le decimos que todo está OK
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Solo aceptamos mensajes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Solo se acepta POST.' });
  }

  try {
    // 3. Obtenemos tu llave secreta blindada en Vercel
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API Key no configurada en las variables de entorno de Vercel.");
    }

    // 4. Extraemos el mensaje del usuario y la instrucción TIE desde tu widget
    const { contents, systemInstruction } = req.body;

    // 5. Nos conectamos directamente a Gemini 2.5 Flash
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents, systemInstruction })
    });

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      throw new Error(data.error?.message || "Error de comunicación con la IA de Google.");
    }

    // 6. Extraemos la respuesta de AXON y se la mandamos de vuelta a tu página
    const reply = data.candidates[0].content.parts[0].text;
    res.status(200).json({ reply });

  } catch (error) {
    console.error("Error crítico en el backend:", error);
    res.status(500).json({ error: error.message });
  }
}
