import React from 'react';
import { useAppData } from 'umi';
import styles from './index.module.less';

interface HeaderProps {
  title?: React.ReactNode;
}

export default function Header({ title, children }: React.PropsWithChildren<HeaderProps>) {
  const { routes } = useAppData();
  const defaultTitle = (
    Object.values(routes).find((item) => '/' + item.path === location.pathname) as any
  )?.title;

  return (
    <div className={`${styles.headerContainer} header`}>
      <div className={styles.title}>{title ?? defaultTitle}</div>
      <div>{children}</div>
    </div>
  );
}
