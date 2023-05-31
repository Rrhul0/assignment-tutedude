import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function MainHeader() {
    return (
        <header className='flex items-center justify-between px-20 text-lg font-medium'>
            <Image src={logo} alt='TuteDude' height={63} width='160' />
            <nav className='flex gap-7'>
                <Link href='/' className='opacity-25'>
                    My Assignment
                </Link>
                <Link href='/' className='opacity-25'>
                    Chat with Mentor
                </Link>
                <button className='flex items-center gap-1'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_24539_15779)'>
                            <path
                                d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z'
                                fill='#800080'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_24539_15779'>
                                <rect width='24' height='24' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>ProfileName</span>

                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_24539_15783)'>
                            <path
                                d='M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z'
                                fill='currentColor'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_24539_15783'>
                                <rect width='24' height='24' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </nav>
        </header>
    )
}
