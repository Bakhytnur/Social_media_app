import Sidebar from './sidebar/Sidebar';
import React, { PropsWithChildren } from 'react'
import styles from './Layout.module.css'

const LayoutClient = ({children}: PropsWithChildren<unknown>) => {
  return (
    <main className={styles.layout}>
        <Sidebar />
        <section>{children}</section>
    </main>
  )
}

export default LayoutClient;