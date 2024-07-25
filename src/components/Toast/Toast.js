import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({variant, id, children}) {
  const ICON = ICONS_BY_VARIANT[variant];
  const { RemoveToast } = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[variant]}`} key={id}>
      <div className={styles.iconContainer}>
        <ICON size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button 
      className={styles.closeButton}
      onClick={() =>{RemoveToast(id)}}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
