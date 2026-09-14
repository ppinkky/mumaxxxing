import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import PhoneShell from './components/PhoneShell'
import { SCREEN_TRANSITION, screenVariants } from './figmaMotion'
import AddOnsScreen from './screens/AddOnsScreen'
import IntroScreen from './screens/IntroScreen'
import InputScreen from './screens/InputScreen'
import LoadingScreen from './screens/LoadingScreen'
import PrintingScreen from './screens/PrintingScreen'
import SlipScreen from './screens/SlipScreen'
import { BUFFS, type BuffKey, type Screen } from './types'

function randomLuckyNumbers(): number[] {
  const numbers = new Set<number>()
  while (numbers.size < 3) {
    numbers.add(1 + Math.floor(Math.random() * 45))
  }
  return Array.from(numbers).sort((a, b) => a - b)
}

function scoreFromText(text: string): number {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) % 97
  }
  return 1 + (hash % 40)
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [direction, setDirection] = useState(1)
  const [situation, setSituation] = useState('')
  const [buffs, setBuffs] = useState<BuffKey[]>([])
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([])
  const reduceMotion = useReducedMotion()

  /** Move to another screen; direction drives which way the transition slides. */
  const go = (next: Screen, dir = 1) => {
    setDirection(dir)
    setScreen(next)
  }

  const restart = () => {
    setSituation('')
    setBuffs([])
    setLuckyNumbers([])
    go('intro', -1)
  }

  const toggleBuff = (key: BuffKey) => {
    setBuffs((prev) =>
      prev.includes(key) ? prev.filter((b) => b !== key) : [...prev, key],
    )
  }

  const selectedBuffDefs = BUFFS.filter((b) => buffs.includes(b.key))
  const buffPointsTotal = selectedBuffDefs.reduce((sum, b) => sum + b.points, 0)
  const situationScore = scoreFromText(situation)
  const powerLevel = Math.min(100, 58 + (situationScore % 20) + buffPointsTotal)

  return (
    <PhoneShell>
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={screen}
          custom={direction}
          variants={reduceMotion ? undefined : screenVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={SCREEN_TRANSITION}
          className="flex min-h-full w-full flex-col"
        >
          {screen === 'intro' && (
            <IntroScreen onStart={() => go('input')} />
          )}

          {screen === 'input' && (
            <InputScreen
              situation={situation}
              onChangeSituation={setSituation}
              onSubmit={() => go('loading')}
            />
          )}

          {screen === 'loading' && (
            <LoadingScreen onDone={() => go('addons')} />
          )}

          {screen === 'addons' && (
            <AddOnsScreen
              selected={buffs}
              onToggle={toggleBuff}
              onSubmit={() => go('printing')}
            />
          )}

          {screen === 'printing' && (
            <PrintingScreen
              onDone={() => {
                setLuckyNumbers(randomLuckyNumbers())
                go('slip')
              }}
            />
          )}

          {screen === 'slip' && (
            <SlipScreen
              situation={situation}
              situationScore={situationScore}
              luckyNumbers={luckyNumbers}
              buffs={
                selectedBuffDefs.length > 0
                  ? selectedBuffDefs
                  : BUFFS.filter((b) => b.key === 'General')
              }
              powerLevel={powerLevel}
              onRestart={restart}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </PhoneShell>
  )
}
