'use client'

import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

const Search = ({ placeholder }: { placeholder: string }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', '1')

    if (e.target.value) {
      params.set('q', e.target.value)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 300)

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        onChange={handleSearch}
        className={styles.input}
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Search