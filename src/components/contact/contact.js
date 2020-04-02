import React from 'react'

import style from './contact.module.scss'

import Separator from '../separator/separator'
import Button from '../button/button'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <section data-section="contact">
        <div className={style.contact}>
          <h2>Contact</h2>

          <Separator></Separator>

          <form
            className={style.form}
            onSubmit={this.submitForm}
            action="https://formspree.io/xgelendk"
            method="POST"
          >
            <label> Votre nom: </label>
            <span className={style.formItem}>
              <input type="text" name="name" />
            </span>

            <label> Votre adresse de messagerie: </label>
            <span className={style.formItem}>
              <input type="email" name="email" />
            </span>

            <label> Votre message: </label>
            <span className={style.formItem + ' ' + style.textarea}>
              <textarea name="message" />
            </span>

            <p className={style.buttonContainer}>
              <Button label="Envoyer"></Button>
            </p>

            {status === 'SUCCESS' && <p>Thanks!</p>}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </section>
    )
  }

  submitForm(ev) {
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
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
