import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface CountdownProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  elapsed: boolean
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (Number.isNaN(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, elapsed: true }
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    elapsed: false,
  }
}

export default function Countdown({ targetDate }: CountdownProps) {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(new Date(targetDate)),
  )

  useEffect(() => {
    const target = new Date(targetDate)
    setTimeLeft(calcTimeLeft(target))
    const timer = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (timeLeft.elapsed) {
    return (
      <div className="card-glow rounded-xl bg-krono-card p-8 text-center">
        <p className="font-display text-2xl font-bold text-krono-red-glow sm:text-3xl">
          {t.challenge.eventStarted}
        </p>
        <p className="mt-3 text-sm text-krono-muted">{t.challenge.eventStartedSub}</p>
      </div>
    )
  }

  const units = [
    { value: timeLeft.days, label: t.challenge.days },
    { value: timeLeft.hours, label: t.challenge.hours },
    { value: timeLeft.minutes, label: t.challenge.minutes },
    { value: timeLeft.seconds, label: t.challenge.seconds },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {units.map(({ value, label }) => (
        <div
          key={label}
          className="card-glow flex flex-col items-center rounded-xl bg-krono-card p-4 sm:p-6"
        >
          <span className="font-display text-3xl font-bold text-krono-red-glow sm:text-5xl">
            {String(value).padStart(2, '0')}
          </span>
          <span className="mt-2 text-xs font-medium uppercase tracking-wider text-krono-muted sm:text-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
