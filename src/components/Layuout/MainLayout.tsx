import React from 'react'
import Footer from './Footer'
import Header from '../Navbar/Header'
import TopNav from '../Navbar/TopNav'
function MainLayout({children} : any) {
  return (
    <div className='overflow-hidden'>
      <TopNav/>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
