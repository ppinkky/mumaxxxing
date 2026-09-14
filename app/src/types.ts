import heartIcon from './assets/icons/heart.svg'
import savingsIcon from './assets/icons/savings.svg'
import workOutlineIcon from './assets/icons/work-outline.svg'
import libraryBooksIcon from './assets/icons/library-books.svg'
import gppGoodIcon from './assets/icons/gpp-good.svg'
import autoAwesomeIcon from './assets/icons/auto-awesome.svg'
import flareIcon from './assets/icons/flare.svg'
import tagFacesIcon from './assets/icons/tag-faces.svg'

export type BuffKey =
  | 'Love'
  | 'Wealth'
  | 'Career'
  | 'Study'
  | 'Protection'
  | 'Luck'
  | 'Confidence'
  | 'General'

export type Screen =
  | 'intro'
  | 'input'
  | 'loading'
  | 'addons'
  | 'printing'
  | 'slip'

export interface BuffDef {
  key: BuffKey
  icon: string
  iconBg: string
  points: number
}

export const BUFFS: BuffDef[] = [
  { key: 'Love', icon: heartIcon, iconBg: '#e8c0d8', points: 8 },
  { key: 'Wealth', icon: savingsIcon, iconBg: '#f5d88a', points: 14 },
  { key: 'Career', icon: workOutlineIcon, iconBg: '#d4b896', points: 12 },
  { key: 'Study', icon: libraryBooksIcon, iconBg: '#baec9d', points: 9 },
  { key: 'Protection', icon: gppGoodIcon, iconBg: '#b8ccf0', points: 10 },
  { key: 'Luck', icon: autoAwesomeIcon, iconBg: '#b8e8c0', points: 15 },
  { key: 'Confidence', icon: flareIcon, iconBg: '#f6a4b4', points: 11 },
  { key: 'General', icon: tagFacesIcon, iconBg: '#a8d8e8', points: 7 },
]

export interface LoadoutItem {
  origin: string
  title: string
  points: number
  description: string
}

export const LOADOUT: LoadoutItem[] = [
  {
    origin: 'ORIGIN: CHINA',
    title: 'WEAR SOMETHING RED',
    points: 12,
    description: 'Red is associated with luck, prosperity and celebration.',
  },
  {
    origin: 'ORIGIN: MEDITERRANEAN + WEST ASIAN',
    title: 'CARRY AN EVIL EYE CHARM PROTECTION',
    points: 10,
    description:
      'Protective eye symbols have been used across multiple cultures against the evil eye.',
  },
  {
    origin: 'ORIGIN: MULTIPLE TRADITIONS',
    title: 'KNOCK ON WOOD',
    points: 9,
    description: 'Versions of this practice appear across several cultures.',
  },
]
