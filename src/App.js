import React from 'react';
import './dist/TailwindArkan.css'
import Router from './Router/Router';
import Nav from './components/navbar/nav';
import './Router/App.css'

function App() {


  return (
    <div className='bg-slate-50  dark:bg-slate-800'>
      <Nav />
      <Router />
    </div>
  )

}

export default App;
