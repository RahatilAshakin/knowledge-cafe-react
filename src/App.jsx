
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {


  const [bookmarks, setBokmarks]=useState([])

  const [readingTime, setReadingTime]=useState(0)

  const handleBookmarks=(blog)=>{
    console.log(blog);

    const newBookmarks =[...bookmarks, blog]
    setBokmarks(newBookmarks)
  }
  
  const handleMarkAsRead = (id, time) =>{
    // console.log('kjskas.jlkasj', time)

    const newTime= readingTime+time
    setReadingTime(newTime)

    console.log('remove id', id);

    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !==id);
    setBokmarks(remainingBookmarks)
    
  }

  return (
    <>
  
      
      <h1 className='text-2xl te'></h1>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-6'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks} 
      readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
