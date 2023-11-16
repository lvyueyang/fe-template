import React from 'react';
import styles from './index.module.less';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return <div className={styles.mainLayout}>{children}</div>;
}
