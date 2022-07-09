import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
// import ReactDOM from 'react-dom/client';


const Cards = () => {
  return (
    <>
        <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J" 
        rating="7.5"
        title="The Matrix"
        category= "Action"
        />

        <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J" 
        rating="7.5"
        title="Focus"
        category= "Comedy"
        />

        <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J" 
        rating="7.5"
        title="The Lazarus Effect"
        category= "Action"
        />

        <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J" 
        rating="7.5"
        title="Everly"
        category= "Action"
        />

        <Card 
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHjE4eApjpFWlpAdiC_aFG2FkfvimiGW0TK4mB-hc_T4Uitj9J" 
        rating="7.5"
        title="Maps to the stars"
        category= "Action"
        />
    </>
  )
}

export default Cards;