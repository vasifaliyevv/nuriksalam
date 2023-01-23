import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Index.module.css'
const Customer = ({costumer}) => {
  return (
    <div className={styles.customercard}>
<div className={styles.card}>
<div style={{display:"flex"}}>
<img src="https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp" alt="sekildl"/>
<div style={{marginLeft:'15px'}}>
<h5>{costumer.name} {costumer.surname}</h5>
<h5 style={{opacity:.5}}>{costumer.position}</h5>
</div>
</div>

<p>{costumer.desc}</p>
</div>
<Link to={`/detail/${costumer._id}`}>Details</Link>

</div>
  )
}

export default Customer