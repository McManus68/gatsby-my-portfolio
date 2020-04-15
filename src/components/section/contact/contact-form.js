import React, { useState } from 'react'

import style from './contact-form.module.scss'

import { useTranslation } from 'react-i18next'

import Button from '../../ui/button/button'

import Snackbar from '@bit/mui-org.material-ui.snackbar'
import IconButton from '@bit/mui-org.material-ui.icon-button'
import CloseIcon from '@bit/mui-org.material-ui-icons.close'

const ContactForm = (props) => {
  const { t } = useTranslation()

  const [status, setStatus] = useState('')
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const submitForm = function (ev) {
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

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
          className: status === 'success' ? style.success : style.error,
        }}
        autoHideDuration={4000}
        onClose={handleClose}
        message={<span>{t('contact.' + status)}</span>}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </form>
  )
}

export default ContactForm
