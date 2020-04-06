import React, { useState } from 'react'

import style from './contact-form.module.scss'

import { useTranslation } from 'react-i18next'

import Button from '../../ui/button/button'

const ContactForm = props => {
  const { t } = useTranslation()

  let [status, setStatus] = useState('')

  let submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <form
      className={style.contactForm}
      onSubmit={submitForm}
      action="https://formspree.io/xgelendk"
      method="POST"
    >
      <label htmlFor="name">{t('contact.name')}</label>
      <span className={style.formItem}>
        <input type="text" name="name" />
      </span>

      <label htmlFor="email">{t('contact.email')}</label>
      <span className={style.formItem}>
        <input type="email" name="email" />
      </span>

      <label htmlFor="message">{t('contact.message')}</label>
      <span className={style.formItem + ' ' + style.textarea}>
        <textarea name="message" />
      </span>

      <p className={style.buttonContainer}>
        <Button label={t('contact.send')}></Button>
      </p>

      {status === 'SUCCESS' && <p>Thanks!</p>}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
    </form>
  )
}

export default ContactForm
