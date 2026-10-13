import CtaButton from '../components/CtaButton'

interface SafetyScreenProps {
  situation: string
  onTryAgain: () => void
  onContinue: () => void
}

export default function SafetyScreen({
  situation,
  onTryAgain,
  onContinue,
}: SafetyScreenProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-start justify-between gap-8 px-5 pt-8 pb-16">
      <div className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full items-start justify-center rounded-lg bg-purple px-3 pt-2 pb-2.5">
          <p className="flex-1 text-center text-xl font-bold text-white uppercase">
            A gentle pause
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 border border-black bg-white p-4 text-sm text-[#333]">
          <p className="font-bold">You wrote:</p>
          <p className="break-words">{situation}</p>
          <p>
            This is a luck-enhancement ritual for entertainment and reflection
            only. It is not medical, legal, financial, or professional advice.
            Please speak with a trusted person or an appropriate local service
            for help with serious or urgent situations.
          </p>
          <p>Try a lighter, everyday prompt if you would like to continue.</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3">
        <CtaButton onClick={onTryAgain}>Try Again</CtaButton>
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded px-2 py-2 text-sm underline transition-colors hover:text-cta focus-visible:ring-3 focus-visible:ring-purple/70"
        >
          Continue with a general ritual
        </button>
      </div>
    </div>
  )
}
