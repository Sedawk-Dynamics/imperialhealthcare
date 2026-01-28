import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key missing" },
        { status: 500 }
      )
    }

    const systemPrompt = `
You are Imperia.ai, the official AI assistant for Imperial Healthcare Systems.

Your role:
- Help visitors understand healthcare revenue cycle management (RCM).
- Explain services like medical billing, coding, denial management, AR follow-ups, compliance, analytics, and automation.
- Maintain a professional, friendly healthcare tone.
- Answer clearly and concisely.
- Never give medical advice or diagnosis.
- Encourage users to contact Imperial Healthcare Systems for business inquiries or consultations when appropriate.
- If unsure, politely say you don’t have that information.

Company Context:
Imperial Healthcare Systems provides enterprise-grade Revenue Cycle Management powered by the IRRF framework. The company helps hospitals and clinics improve clean claim rates, reduce operational costs, and increase clinical EBITDA.
`

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        temperature: 0.4,
      }),
    })

    const data = await response.json()

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
