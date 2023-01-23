import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Index.module.css'
const Index = () => {
  return (
    <>
    <header>
    <nav>
    <div className={styles.left}>
    <Link to='/' className={styles.left}>
        <strong>Notary</strong>
    </Link>

</div>
<div className={styles.right}>
    <ul>
        <li> <Link className={styles.link} to='/'>Home</Link></li>
        <li> Practice Areas <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg></li>

        <li><Link to='/addcustomer' className={styles.link}> Added Customers</Link></li>
        <li> About </li>
        
        <li> Contact</li>
    </ul>
</div>
    </nav>
    </header>
    </>
  )
}

export default Index