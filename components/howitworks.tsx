import Image from 'next/image'
import invitePeopleIcon from '@/public/invitepeople.svg'
import walletIcon from '@/public/wallet.svg'
import referralCouponIcon from '@/public/referralcoupon.svg'
import offerIcon from '@/public/bxs_offer.png'

export default function Howitworks() {
    return (
        <section className='flex flex-col items-center pt-10 md:items-start'>
            <h4 className='text-2xl font-semibold '>How does it work ?</h4>
            <div className='mt-5 flex flex-wrap justify-center gap-12 md:justify-normal'>
                <div className='flex w-80 items-center gap-5'>
                    <div className='aspect-square rounded-full bg-[#D9D9D9] bg-opacity-25 p-4'>
                        <Image src={invitePeopleIcon} alt='' height={32} width={32} />
                    </div>
                    <div>
                        <h5 className='font-medium text-black'>Invite your Friends</h5>
                        <p className='text-dark'>Share the link tutedude.com with your friends</p>
                    </div>
                </div>
                <div className='flex w-80 items-center gap-5'>
                    <div className='aspect-square rounded-full bg-[#D9D9D9] bg-opacity-25 p-4'>
                        <Image src={walletIcon} alt='' height={32} width={32} />
                    </div>
                    <div>
                        <h5 className='font-medium text-black'>Transfer money from wallet</h5>
                        <p className='text-dark'>When the wallet balance reaches ₹200 or more, you can withdraw it</p>
                    </div>
                </div>
                <div className='flex w-80 items-center gap-5'>
                    <div className='aspect-square rounded-full bg-[#D9D9D9] bg-opacity-25 p-4'>
                        <div className='h-8 w-8 bg-gradient bg-clip-text text-center text-[32px] font-bold leading-[32px] text-transparent'>
                            ₹
                        </div>
                    </div>
                    <div>
                        <h5 className='font-medium text-black'>You get ₹ 200 as referral money</h5>
                        <p className='text-dark'>On total purchase the friend makes, into your wallet</p>
                    </div>
                </div>
                <div className='flex w-80 items-center gap-5'>
                    <div className='aspect-square rounded-full bg-[#D9D9D9] bg-opacity-25 p-4'>
                        <Image src={offerIcon} alt='' height={32} width={32} />
                    </div>
                    <div>
                        <h5 className='font-medium text-black'>Your Friend gets ₹ 200 Off </h5>
                        <p className='text-dark'>On his overall fee on successful purchase using your referral code </p>
                    </div>
                </div>
                <div className='flex w-80 items-center gap-5'>
                    <div className='aspect-square rounded-full bg-[#D9D9D9] bg-opacity-25 p-4'>
                        <Image src={referralCouponIcon} alt='' height={32} width={32} />
                    </div>
                    <div>
                        <h5 className='font-medium text-black'>Friend purchases any course</h5>
                        <p className='text-dark'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
