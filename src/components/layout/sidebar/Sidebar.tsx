'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import styles from './Sidebar.module.scss';
import { MENU } from './sidebar.data';
import { usePathname } from 'next/navigation';

const isLoggedIn = false;

const Sidebar = () => {
  const pathname = usePathname();
  
  return (
    <aside className={styles.sidebar}>
        <Image src='/icon.svg' priority alt='' width={50} height={50} />
        <div>
            {MENU.map(item => (
              <Link href={item.url} key={item.url}>
                <item.icon size={27} />
              </Link>
            ))}
        </div>
        <Sun size={35} />
    </aside>
  )
}

export default Sidebar