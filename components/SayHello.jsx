import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function SayHello() {
  const { user } = useAuth();
  const [userFirstName] = user.displayName.split(' ');
  const fullString = `Hey ${userFirstName}  :)`;
  const [message, setMessage] = useState('');
  console.log(fullString[0]);
  const delay = 600;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullString.length) {
        setMessage(fullString.substring(0, currentIndex));
        currentIndex += 1;
      } else {
        setMessage('');
        currentIndex = 0;
      }
    }, delay);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [fullString, delay]);

  return <div style={{ fontSize: '24px' }}>{message}</div>;
}
