import Navbar from '../ui/dashboard/navbar/navbar'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import styles from '@/app/ui/dashboard/dashboard.module.css'

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout