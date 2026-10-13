import { LOADOUT, type BuffKey, type LoadoutItem } from './types'

const SENSITIVE_TERMS = [
  'suicide',
  'self harm',
  'self-harm',
  'kill myself',
  'emergency',
  'hospital',
  'diagnosis',
  'medicine',
  'medical',
  'lawyer',
  'lawsuit',
  'legal',
  'debt',
  'bankruptcy',
  'investment',
  'pregnant',
  'pregnancy',
  '죽고',
  '자살',
  '응급',
  '병원',
  '대출',
  '투자',
]

export function isSensitiveSituation(situation: string): boolean {
  const normalized = situation.toLocaleLowerCase()
  return SENSITIVE_TERMS.some((term) => normalized.includes(term))
}

export function selectLoadout(
  _situation: string,
  selectedBuffs: BuffKey[],
): LoadoutItem[] {
  const eligible = LOADOUT.filter(
    (item) =>
      selectedBuffs.length === 0 ||
      item.buffs.some((buff) => selectedBuffs.includes(buff)),
  )
  const pool = eligible.length >= 3 ? eligible : LOADOUT
  return shuffle(pool).slice(0, 3)
}

function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ]
  }
  return shuffled
}
