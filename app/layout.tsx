import './globals.css'
import { Poppins } from 'next/font/google'
import MainHeader from '@/components/header'
import NavBar from '@/components/navbar'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata = {
    title: 'Refer & Earn',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={poppins.className + ' text-primary'}>
                <MainHeader />
                <main className='px-48 pb-20'>
                    <NavBar />

                    {children}
                </main>
            </body>
        </html>
    )
}
