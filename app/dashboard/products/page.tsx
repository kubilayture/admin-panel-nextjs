import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href={'/dashboard/products/add'}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={'/noproduct.jpg'}
                  alt=''
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Macbook Air
              </div>
            </td>
            <td>8GB Ram 256GB Rom</td>
            <td>$799</td>
            <td>15.11.2023</td>
            <td>7123123123</td>
            <td>
              <div className={styles.buttons}>
                <Link href={'/'}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href={'/'}>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage