import styles from '@/app/ui/dashboard/dashboard.module.css'
import Navbar from '@/app/ui/dashboard/navbar/navbar'
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar'
import Footer from '@/app/ui/dashboard/footer/footer'

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
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout