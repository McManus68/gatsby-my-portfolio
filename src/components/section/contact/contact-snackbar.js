import React from 'react'

import style from './contact-snackbar.module.scss'

import { useTranslation } from 'react-i18next'

import Snackbar from '@bit/mui-org.material-ui.snackbar'
import IconButton from '@bit/mui-org.material-ui.icon-button'
import CloseIcon from '@bit/mui-org.material-ui-icons.close'

const ContactSnackBar = (props) => {
  const { t } = useTranslation()

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={props.open}
      className={style.contactSnackbar}
      ContentProps={{
        'aria-describedby': 'message-id',
        className: props.status === 'success' ? style.success : style.error,
      }}
      autoHideDuration={4000}
      onClose={props.callback}
      message={<span>{t('contact.' + props.status)}</span>}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={props.callback}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

export default ContactSnackBar
