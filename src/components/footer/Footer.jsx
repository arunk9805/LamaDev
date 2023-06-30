import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>
            ©2023 Lamamia. All rights rserved.
        </div>
        <div>
          <div className={styles.social}>
            <Link href="https://www.google.com"> 
              <Image src ="/1.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
            </Link>
            <Image src ="/2.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
            <Image src ="/3.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
            <Image src ="/4.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
          </div>
        </div>
    </div>
  )
}

export default Footer