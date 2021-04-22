import React from 'react';
import { string } from 'prop-types';

import {
  Warning,
  Check,
  Block,
  PortableWifiOff,
  ErrorOutline
} from '@material-ui/icons';
import Loader from './Loader';

const statusIcons = {
  ERROR: ErrorOutline,
  ERROR_CONFIGURATION: Warning,
  IN_PROGRESS: Loader,
  OK: Check,
  Disabled: Block
};

const iconSizes = {
  default: 24,
  small: 17.5,
  large: 30.5
};

const StatusIcon = ({ 
  status, 
  size 
}) => {
  let IconComponent = statusIcons[status] || null;
  let sizeProp;
  
  if(status === 'IN_PROGRESS') {
    sizeProp = { size: iconSizes[size] };
  }else {
    sizeProp = { fontSize: size }
  }

  return <IconComponent color="inherit" {...sizeProp} />;
};

export default StatusIcon;

StatusIcon.propTypes = {
  status: string,
  size: string
};

StatusIcon.defaultProps = {
  status: '',
  size: ''
};
