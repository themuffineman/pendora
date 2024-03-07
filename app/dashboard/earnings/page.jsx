import EarningChart from '@/components/EarningsChart'
import EarningsSummary from '@/components/EarningsSummary'
import RecentSales from '@/components/RecentSales'

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full p-4">
        <EarningsSummary/>
        <RecentSales/>
    </div>
  )
}

export default Page