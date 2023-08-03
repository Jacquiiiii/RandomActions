import { useState } from "react"

const useHookBubble = () => {
  const [hookBubble, setHookBubble] = useState(false)

  const handleClick = () => {
    hookBubble ? setHookBubble(false) : setHookBubble(true)
  }

  return { hookBubble, handleClick }
}

export default useHookBubble