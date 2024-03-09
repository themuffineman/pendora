
const EarningsSummary = () => {
  return (
    <div className='p-4 flex-col flex w-full gap-1'>
        <div className='flex justify-start items-center w-full h-max p-2'>
            <p className="text-4xl tracking-tighter font-bold">Total Earnings</p>
            {/* <svg className="fill-gray-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> */}
        </div>
        <div className='flex flex-col gap-1 w-full h-max p-2'>
            <p className="text-4xl font-extrabold tracking-tight">$45,231.89</p>
            <p className="text-gray-300 tracking-tight text-sm"><span className="text-pendora-yellow pr-1">+20.1%</span>   from last month</p>
        </div>
       
    </div>
  )
}

export default EarningsSummary