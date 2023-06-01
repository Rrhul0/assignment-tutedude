'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import arrow from '@/public/arrow.png'

export default function NavBar({ paths, showBack }: { paths: string[]; showBack?: boolean }) {
    const router = useRouter()
    return (
        <div className='py-7'>
            <nav className='pb-5 text-black'>{['UI/UX', ...paths].join(' > ')}</nav>
            {showBack && (
                <Link
                    href='/'
                    onClick={e => {
                        e.preventDefault()
                        router.back()
                    }}
                    className='flex items-center'
                >
                    <Image src={arrow.src} width={arrow.width} alt='' height={arrow.height} className='-rotate-90' />
                    go back
                </Link>
            )}
        </div>
    )
}
