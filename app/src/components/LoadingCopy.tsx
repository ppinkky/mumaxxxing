import { useEffect, useState } from 'react'

const LOADING_MESSAGES = [
  'Analyzing the vibes...',
  'Consulting the universe...',
  'Calculating your luck...',
  'Reading the cosmic fine print...',
  'Aligning the good energy...',
  'Checking the vibes twice...',
  'Negotiating with destiny...',
  'Finding the lucky angle...',
  'Cross-referencing the signs...',
  'This might work...',
]

export default function LoadingCopy() {
  const [message, setMessage] = useState(LOADING_MESSAGES[0])

  useEffect(() => {
    let previousIndex = 0
    const interval = setInterval(() => {
      let nextIndex = Math.floor(Math.random() * LOADING_MESSAGES.length)
      while (nextIndex === previousIndex) {
        nextIndex = Math.floor(Math.random() * LOADING_MESSAGES.length)
      }
      previousIndex = nextIndex
      setMessage(LOADING_MESSAGES[nextIndex])
    }, 650)

    return () => clearInterval(interval)
  }, [])

  return <p className="min-h-[1.2em]">{message}</p>
}
