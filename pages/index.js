/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
  // TODO: Set a state for books

  return (
    <div className="text-center my-4">
      <Link href="/books/new" passHref>
        <Button>Add A Book</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        hey
      </div>
    </div>
  );
}

export default Home;
