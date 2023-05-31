import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Event } from "../pages/Events/Event"
import { EventContextProvider } from "../Contexts/eventContext"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/theme"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <EventContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<Event />} />
          </Routes>
        </BrowserRouter>
      </EventContextProvider>
    </ThemeProvider>
  )
}

export default App