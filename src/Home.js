import React, { useContext } from 'react'
// import { AppContext } from './context';
import {useGlobalContext} from './context';

const Home = () => {

  // const name = useContext(AppContext);
  const name = useGlobalContext();

  const people = [
    {name: 'Adam', age: 30},
    {name: 'Bob', age: 40},
    {name: 'Carlam', age: 30},
  ];
  
  const results = people.filter(element => {
    return element.age === 30 && element.name.match('am');
    
  });
  
  console.log(results);
  
  return (
    <>
        {/* <h1> Home page {name}</h1> */}


    </>
  )
}

export default Home