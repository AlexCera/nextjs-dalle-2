import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)


export async function POST(req: Request) {
    const { prompt } = await req.json();

    if (!prompt || prompt.length === 0) {
        return NextResponse.json(
            { message: "You must provied a prompt", statusCode: 400 },
            { status: 400 }
        )
    }

    /* Solicitud para generar la imagen */
    const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: "512x512"
    })

    return NextResponse.json({ url: aiResponse.data.data[0].url }, { status: 200 })
}