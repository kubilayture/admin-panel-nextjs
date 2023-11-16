import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={'/noavatar.png'}
            alt=''
            fill
          />
        </div>
        Kubilay Türe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder='user.name' />
          <label>Email</label>
          <input type="email" name="email" placeholder='user.name@mail.com' />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder='123-123-12-12' />
          <label>Address</label>
          <textarea name="address" placeholder='Sheet St.' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage