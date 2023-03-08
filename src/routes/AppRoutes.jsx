import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ItemListContainer } from '../pages/HomePage'
import { PacksPage } from '../pages/PacksPage'
import { FaqsPage } from '../pages/FaqsPage'
import { RecipetPage } from '../pages/RecipetPage'
import { ContactPage } from '../pages/ContactPage'
import { ItemPage } from '../pages/ItemPage'


import { Navmenubar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Carousel } from '../components/Carousel'
import { CategoryPage } from '../pages/CategoryPage'

export const AppRoutes = () => {
  return (
    <>
      <Navmenubar />
      <Carousel />
      <Routes>
          <Route path="/" element={ <Navigate to="item" /> } />
          <Route path="/item" element={ <ItemListContainer /> } />
          <Route path="/item/:id" element={ <ItemPage /> } />
          <Route path="/item/category/:id" element={ <CategoryPage /> } />
          <Route path="/packs" element={ <PacksPage /> } />
          <Route path="/options/faqs" element={ <FaqsPage /> } />
          <Route path="/options/recipet" element={ <RecipetPage /> } />
          <Route path="/options/contact" element={ <ContactPage /> } />
          <Route path="*" element={ <h2>404</h2> } />
      </Routes>
      <Footer />
    </>
  )
}
