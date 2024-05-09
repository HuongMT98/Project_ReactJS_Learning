import { useState } from "react"

function Home() {
  const [text, setText] = useState("Home Page")
  const handleChangeText = (e) => {
    setText(text === "Home Page" ? "Home Page Changed" : "Home Page")
  }

  return (
    <>
      <h1 onClick={handleChangeText}>{text}</h1>
    </>
  )
}

export default Home
