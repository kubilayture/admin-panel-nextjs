import { updateProduct } from '@/app/lib/actions'
import { fetchProduct } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={'/noproduct.jpg'}
            alt=''
            fill
          />
        </div>
        iPhone 15
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name='id' value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder='Iphone' />
          <label>Price</label>
          <input type="number" name="price" placeholder='999$' />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder='Space Gray' />
          <label>Size</label>
          <textarea name="size" placeholder='5.5inch' />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="mobile phone">Mobile Phone</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows={10} placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage