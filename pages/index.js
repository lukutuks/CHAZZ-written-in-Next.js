import styles from '../styles/Hero.module.css'
import Hero from '../components/hero/Hero'
import Popular from '../components/hero/Popular'
import Layout from '../layout/Layout'
import Header from '../components/header/Header'
import Newsletter from '../components/hero/Newsletter'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (

<div className={styles.container}>
    <Hero />
    <Popular />
    <Newsletter />
</div>
 
  
 
   
  )
}
