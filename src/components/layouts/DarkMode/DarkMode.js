import { useState, useEffect } from "react"
import "./DarkMode.scss"

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    if (savedMode === "true") {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <div className='btn-darkmode'>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to LIGHT Mode" : "Switch to DARK Mode"}
        </button>
        <style jsx>{`
          body {
            background-color: ${isDarkMode ? "#333" : "#fff"};
            color: ${isDarkMode ? "#fff" : "#333"};
          }
        `}</style>
      </div>
    </>
  )
}

export default DarkMode
