import React from 'react';

export const Book = (props) => {
  // props destructuring
  const { title, author, img } = props;
  function mouseOverHandler(){
    console.log("Hovering effect is working fine")
  }
  return (
    <article className='component'>
      <img src={img} alt="Harry Potter" />
      <h1 onClick={()=> alert('You just click Title')}>{title}</h1>
      <h3 onMouseOver={mouseOverHandler}>{author}</h3>
      {/* <img src={props.book.img} alt="Harry Potter" />
            <h1>{props.book.title}</h1>
            <h3>{props.book.author}</h3> */}
    </article>
  );
};
