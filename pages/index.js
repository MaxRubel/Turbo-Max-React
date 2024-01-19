/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import SayHello from '../components/SayHello';
import { useAuth } from '../utils/context/authContext';

function Home() {
  return (
    <>
      <SayHello />
    </>
  );
}

export default Home;
