import DashBoard from '@/components/dashboard'
import Howitworks from '@/components/howitworks'
import NavBar from '@/components/navbar'
import ReferralCode from '@/components/referralCode'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <NavBar paths={['Refer & Earn']} />
            <div className='flex flex-col gap-8 md:items-center lg:flex-row lg:items-start lg:justify-between lg:gap-0'>
                <DashBoard />
                <ReferralCode />
            </div>
            <Howitworks />
            <div className='pt-[60px]'>
                <Link href='/referred' className='font-medium'>
                    Friends Who Enrolled
                </Link>
            </div>
            <div className='pt-5'>
                <Link href='/' className='font-medium'>
                    Terms & Conditions
                </Link>
            </div>
        </>
    )
}
