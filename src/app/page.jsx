'use client';
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";
import { useState } from 'react';

const HomePage = () => {
  const [books, setBooks] = useState([{ title: "Clean Code" }]);
  return (
    <div>
      <AddBookForm setBooks={setBooks} />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
