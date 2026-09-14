/**
 * Motion pulled from the Figma file (get_motion_context). Every screen with
 * motion in Figma runs one 2s timeline, played once. Values here are verbatim
 * from Figma; the only addition is `receiptPrintMotion`'s clip-path reveal,
 * noted below.
 *
 *   Screen 0 - VENDING MACHINE  2068:3389
 *   Screen 2 - LOADING          2068:3285
 *   Screen 4 - VENDING MACHINE  2068:3654
 *   Screen 5 - SLIP             2068:3315
 */

import type { Easing, MotionProps, Variants } from 'motion/react'

export const FIGMA_TIMELINE_S = 2

/** Figma CUSTOM_SPRING — the tight one used by most nodes. */
const spring = (t: number) =>
  1 - Math.exp(-t * 7.1866) * (Math.cos(t * 22.3441) + 0.3216 * Math.sin(t * 22.3441))

/** Figma CUSTOM_SPRING — the softer one on the loading status panel. */
const softSpring = (t: number) =>
  1 - Math.exp(-t * 7.4426) * (Math.cos(t * 10.5254) + 0.7071 * Math.sin(t * 10.5254))

/** Header — shared by Screens 0, 2 and 4 (identical tracks in Figma). */
export const headerMotion: MotionProps = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: [0, 0, 1, 1], y: [-20, -20, 0, 0] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.05, 0.2, 1],
      ease: ['linear', 'easeOut', 'linear'],
    },
    y: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.05, 0.25, 1],
      ease: ['linear', spring, 'linear'],
    },
  },
}

/** Machine Illustration — Screens 0 and 4. */
export const machineMotion: MotionProps = {
  initial: { opacity: 0, scaleX: 0.8, scaleY: 0.8 },
  animate: {
    opacity: [0, 0, 1, 1],
    scaleX: [0.8, 0.8, 1, 1],
    scaleY: [0.8, 0.8, 1, 1],
  },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.15, 0.25, 1],
      ease: ['linear', 'easeOut', 'linear'],
    },
    scaleX: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.15, 0.35, 1],
      ease: ['linear', spring, 'linear'],
    },
    scaleY: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.15, 0.35, 1],
      ease: ['linear', spring, 'linear'],
    },
  },
}

/** Receipt Paper — Screens 0, 2 and 4 (identical tracks in Figma). */
const receiptInitial = { opacity: 0, y: -30 }
const receiptAnimate = { opacity: [0, 0, 1, 1], y: [-30, -30, 0, 0] }
const receiptTransition = {
  opacity: {
    duration: FIGMA_TIMELINE_S,
    times: [0, 0.4249, 0.425, 1],
    ease: 'linear' as const,
  },
  y: {
    duration: FIGMA_TIMELINE_S,
    times: [0, 0.4, 0.8, 1],
    ease: ['linear', 'easeOut', 'linear'] as Easing[],
  },
}

export const receiptMotion: MotionProps = {
  initial: receiptInitial,
  animate: receiptAnimate,
  transition: receiptTransition,
}

/**
 * Printing screen only: Figma's receipt tracks plus a clip-path reveal on the
 * same 0.4→0.8 window, so the long slip feeds out of the slot top-down rather
 * than appearing whole. The clip is the one value not in Figma's data.
 */
export const receiptPrintMotion: MotionProps = {
  initial: { ...receiptInitial, clipPath: 'inset(0% 0% 100% 0%)' },
  animate: {
    ...receiptAnimate,
    clipPath: [
      'inset(0% 0% 100% 0%)',
      'inset(0% 0% 100% 0%)',
      'inset(0% 0% 0% 0%)',
      'inset(0% 0% 0% 0%)',
    ],
  },
  transition: {
    ...receiptTransition,
    clipPath: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.4, 0.8, 1],
      ease: ['linear', 'easeOut', 'linear'] as Easing[],
    },
  },
}

/** Screen 0 CTA — rises into place from below. */
export const introCtaMotion: MotionProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: [0, 0, 1, 1], y: [30, 30, 0, 0] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.3, 0.425, 1],
      ease: ['linear', 'easeOut', 'linear'],
    },
    y: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.3, 0.475, 1],
      ease: ['linear', spring, 'linear'],
    },
  },
}

/** Screen 2 status panel. */
export const statusPanelMotion: MotionProps = {
  initial: { opacity: 0, scaleX: 0.95, scaleY: 0.95 },
  animate: { opacity: [0, 1, 1], scaleX: [0.95, 1, 1], scaleY: [0.95, 1, 1] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.1, 1],
      ease: ['easeOut', 'linear'],
    },
    scaleX: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.15, 1],
      ease: [softSpring, 'linear'],
    },
    scaleY: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.15, 1],
      ease: [softSpring, 'linear'],
    },
  },
}

/** Screen 2 progress row — appears just before the bar fills. */
export const progressRowMotion: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 0, 1, 1] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.5749, 0.575, 1],
      ease: 'linear',
    },
  },
}

/** Screen 2 bar fill — Figma fills it between 55% and 90% of the timeline. */
export const BAR_FILL_TIMES: number[] = [0, 0.55, 0.9, 1]
export const BAR_FILL_EASE: Easing[] = ['linear', 'easeInOut', 'linear']

/** Screen 5 slip card — springs up from 85%. */
export const slipCardMotion: MotionProps = {
  initial: { opacity: 0, scaleX: 0.85, scaleY: 0.85 },
  animate: { opacity: [0, 0, 1, 1], scaleX: [0.85, 1, 1], scaleY: [0.85, 1, 1] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.0249, 0.025, 1],
      ease: 'linear',
    },
    scaleX: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.25, 1],
      ease: [spring, 'linear'],
    },
    scaleY: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.25, 1],
      ease: [spring, 'linear'],
    },
  },
}

/** Screen 5 CTA group. */
export const slipCtaMotion: MotionProps = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: [0, 0, 1, 1], y: [15, 15, 0, 0] },
  transition: {
    opacity: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.25, 0.4, 1],
      ease: ['linear', 'easeOut', 'linear'],
    },
    y: {
      duration: FIGMA_TIMELINE_S,
      times: [0, 0.25, 0.45, 1],
      ease: ['linear', spring, 'linear'],
    },
  },
}

/**
 * Screen-to-screen transition. Figma has no prototype transition data, so this
 * is ours: a short directional slide + fade that hands off to each screen's own
 * Figma entrance. `direction` is 1 going forward, -1 going back.
 */
export const SCREEN_TRANSITION = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
} as const

export const screenVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 32 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -32 }),
}
