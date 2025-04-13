import React from 'react'
import emails from '../emails.json';
import MailListItem from './MailListItem';

const MailList = () => {

  return (
    <div>
        {emails.map((email) => (
          <MailListItem key={email.id} {...email} />
        ))}
    </div>
  )
}

export default MailList