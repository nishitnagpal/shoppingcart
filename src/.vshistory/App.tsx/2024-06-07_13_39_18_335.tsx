
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import './App.module.scss'

function App() {
    return (
        <BrowserRouter>
            <Header />
            {/*<Products />*/}
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Products />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart />}
                    />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
