import { useState } from 'react'
import CtaButton from '../components/CtaButton'

const MAX_LENGTH = 140

interface InputScreenProps {
  situation: string
  onChangeSituation: (value: string) => void
  onSubmit: () => void
}

export default function InputScreen({
  situation,
  onChangeSituation,
  onSubmit,
}: InputScreenProps) {
  const [focused, setFocused] = useState(false)
  const empty = situation.trim().length === 0

  return (
    <div className="flex w-full flex-1 flex-col items-start justify-between gap-8 px-5 pt-8 pb-16">
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full items-start justify-center rounded-lg bg-purple px-3 pt-2 pb-2.5">
          <p className="flex-1 text-center text-xl font-bold text-white uppercase">
            What&rsquo;s going on?
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-3">
          <p className="w-full text-[10px] text-black italic">
            Modern Problem requires, Ancient Solution
          </p>
          <div className="w-full">
            <textarea
              value={situation}
              maxLength={MAX_LENGTH}
              onChange={(e) => onChangeSituation(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={
                'e.g. I have a job interview tomorrow\nand I need all the luck I can get...'
              }
              className="h-[188px] w-full resize-none border border-black bg-white p-1.5 text-[10px] text-[#333]
                transition-all duration-100 outline-none
                placeholder:text-[#999]
                hover:border-purple hover:bg-[#fffdfb]
                focus:border-2 focus:border-purple focus:bg-white focus:shadow-[0_0_0_3px_rgba(91,74,138,0.18)]"
            />
            <div className="mt-1 flex w-full items-center justify-between text-[8px]">
              <span
                className={`italic transition-colors ${focused && empty ? 'text-cta' : 'text-transparent'}`}
              >
                the universe is listening...
              </span>
              <span
                className={
                  situation.length >= MAX_LENGTH
                    ? 'text-cta'
                    : 'text-purple-muted'
                }
              >
                {situation.length}/{MAX_LENGTH}
              </span>
            </div>
          </div>
        </div>
      </div>
      <CtaButton onClick={onSubmit} disabled={empty}>
        Maxx My Luck
      </CtaButton>
    </div>
  )
}
