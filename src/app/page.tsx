"use client"

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  return (
    <main>
      <form onSubmit={async (e) => {
        e.preventDefault()
        console.log(prompt);

        const res = await fetch('/api/generate', {
          method: 'POST',
          body: JSON.stringify({ prompt }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        console.log(data);


      }}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Write your prompt"
          className="bg-zinc-900 text-white px-3 my-2"
        />
        <button>Generaate Image</button>
      </form>
    </main>
  )
}
