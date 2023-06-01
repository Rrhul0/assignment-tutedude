export default function DashBoard() {
    return (
        <div className='flex w-fit flex-col items-center gap-4 rounded-[20px] p-5 shadow-[0px_3px_100px_rgba(0,0,0,0.1)]'>
            <div className='grid grid-cols-12 justify-between gap-4'>
                <div className='col-span-6 lg:col-span-4'>
                    <div className='text-sm'>Referral Earning</div>
                    <div className='text-[32px] leading-[48px] text-black'>₹ 2,500</div>
                </div>
                <div className='col-span-6 lg:col-span-4'>
                    <div className='text-sm'>Total Referrals</div>
                    <div className='text-[32px] leading-[48px] text-black'>5</div>
                </div>
                <div className='col-span-5 lg:col-span-4'>
                    <div className='text-sm'>Wallet Balance</div>
                    <div className='text-[32px] leading-[48px] text-black'>₹ 500</div>
                </div>
                <div className='col-span-7 flex justify-center lg:col-span-12 '>
                    <button className='my-2 rounded-full bg-primary px-4 py-2 text-white'>Withdraw Balance</button>
                </div>
            </div>
        </div>
    )
}
