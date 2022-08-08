import React from 'react'
import ReactDOM from 'react-dom/client'
import { Book } from './Book'
import { books } from './books'
import './index.css'

function BookList() {
  return (
    <section>
      {/* using spread operator */}
      {books.map((book, index) => <Book key={book.id} {...book} />)}
      {/* {books.map((item, index) => <Book key={item.id} title={item.title} author={item.author} img={item.img}/>)} */}
      {/* {books.map((item) => <Book book={item} />)} */}
    </section>
  )
}
// to use the component in our app we must use render method and it takes two parameters
// first - component and 2nd html ID where we want to implement
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)