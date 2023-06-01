import FriendsEnrolled from '@/components/freindsEnrolled'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between'>
                <div className='flex w-fit flex-col gap-2'>
                    <h3 className=''>Your Referral Code</h3>
                    <div className='rounded-xl border-[1.5px] bg-white px-4 py-2'>
                        <div className='font-medium tracking-[0.75rem] text-black'>EDCH54</div>
                    </div>
                </div>
                <div className='rounded-[20px] p-5 shadow-[0px_2px_8px_rgba(128,0,128,0.15)]'>
                    <h3>Wallet Balance</h3>
                    <p className='text-black'>₹ 500</p>
                </div>
            </div>
            <FriendsEnrolled />
            <div>
                <Link href='/' className='font-medium'>
                    Terms & Conditions
                </Link>
            </div>
        </div>
    )
}
