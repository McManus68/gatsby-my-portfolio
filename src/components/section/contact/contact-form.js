import React, { useState, useEffect } from 'react'

import style from './contact-form.module.scss'

import { useTranslation } from 'react-i18next'
import Button from '../../ui/button/button'

import ContactSnackBar from './contact-snackbar'

import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = (props) => {
  const { t } = useTranslation()

  const [status, setStatus] = useState('')
  const [open, setOpen] = useState(false)

  let recaptchaRef = React.createRef()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (recaptchaRef) {
      recaptchaRef.reset()
      recaptchaRef.execute()
    }
  }, [])

  const resetCaptcha = () => {
    if (recaptchaRef) {
      recaptchaRef.reset()
      recaptchaRef.execute()
    }
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      setOpen(true)
      if (xhr.status === 200) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    }
    xhr.send(data)
    resetCaptcha()
  }

  return (
    <form
      className={style.contactForm}
      onSubmit={submitForm}
      action="https://formspree.io/xgelendk"
      method="POST"
    >
      <ReCAPTCHA
        ref={(el) => (recaptchaRef = el)}
        size="invisible"
        render="explicit"
        sitekey="6Lc3DOwUAAAAALrXfLSWEctsts1g7NN6Si4ez1rB"
      />

      <label htmlFor="name">{t('contact.name')}</label>
      <span className={style.formItem}>
        <input type="text" name="name" />
      </span>

      <label htmlFor="email">{t('contact.email')}</label>
      <span className={style.formItem}>
        <input required type="email" name="email" />
      </span>

      <label htmlFor="message">{t('contact.message')}</label>
      <span className={style.formItem + ' ' + style.textarea}>
        <textarea required name="message" />
      </span>

      <p className={style.buttonContainer}>
        <Button label={t('contact.send')}></Button>
      </p>

      <ContactSnackBar open={open} status={status} callback={handleClose} />
    </form>
  )
}

export default ContactForm
