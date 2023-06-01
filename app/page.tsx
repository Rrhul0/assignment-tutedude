import DashBoard from '@/components/dashboard'
import Howitworks from '@/components/howitworks'
import ReferralCode from '@/components/referralCode'

export default function Home() {
    return (
        <>
            <div className='flex gap-24'>
                <DashBoard />
                <ReferralCode />
            </div>
            <Howitworks />
        </>
    )
}
