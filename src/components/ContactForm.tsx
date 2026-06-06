import { useState, type FormEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { CONTACT_EMAIL } from '../data/site'

export default function ContactForm() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Team Krono Contact — ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await res.json()
      if (!res.ok || !data.success) throw new Error('Failed')

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-krono-silver">
          {t.about.name}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-krono-red/20 bg-krono-black px-4 py-3 text-white outline-none transition-colors focus:border-krono-red"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-krono-silver">
          {t.about.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-krono-red/20 bg-krono-black px-4 py-3 text-white outline-none transition-colors focus:border-krono-red"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-krono-silver">
          {t.about.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-lg border border-krono-red/20 bg-krono-black px-4 py-3 text-white outline-none transition-colors focus:border-krono-red"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full rounded-lg px-6 py-3 font-semibold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? t.about.sending : t.about.send}
      </button>
      {status === 'success' && (
        <p className="text-sm text-green-400">{t.about.success}</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400">
          {t.about.error}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      )}
    </form>
  )
}
