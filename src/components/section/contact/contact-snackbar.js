import React from 'react'
import PropTypes from 'prop-types'

import style from './contact-snackbar.module.scss'

import { useTranslation } from 'react-i18next'

import Snackbar from '@bit/mui-org.material-ui.snackbar'
import IconButton from '@bit/mui-org.material-ui.icon-button'
import CloseIcon from '@bit/mui-org.material-ui-icons.close'

const ContactSnackBar = ({ open, status, callback }) => {
  const { t } = useTranslation()

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      className={style.contactSnackbar}
      ContentProps={{
        'aria-describedby': 'message-id',
        className: status === 'success' ? style.success : style.error,
      }}
      autoHideDuration={4000}
      onClose={callback}
      message={<span>{t('contact.' + status)}</span>}
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={callback}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

ContactSnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default ContactSnackBar
