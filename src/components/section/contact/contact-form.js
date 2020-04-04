import React, { useState } from 'react'

import style from './contact-form.module.scss'

import Button from '../../ui/button/button'

const ContactForm = props => {
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
      <label htmlFor="name"> Votre nom: </label>
      <span className={style.formItem}>
        <input type="text" name="name" />
      </span>

      <label htmlFor="email"> Votre adresse de messagerie: </label>
      <span className={style.formItem}>
        <input type="email" name="email" />
      </span>

      <label htmlFor="message"> Votre message: </label>
      <span className={style.formItem + ' ' + style.textarea}>
        <textarea name="message" />
      </span>

      <p className={style.buttonContainer}>
        <Button label="Envoyer"></Button>
      </p>

      {status === 'SUCCESS' && <p>Thanks!</p>}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
    </form>
  )
}

export default ContactForm
