
const EarningChart = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4 ">
      <div className="flex flex-col gap-1 items-start p-2 w-full">
        <p className="text-white text-xl capitalize font-medium tracking-tighter">
          Earning Summary
        </p>
        <p className="text-gray-300 text-md tracking-tighter ">
          Your earnings from March 9, 2023 to March 7, 2024.
        </p>
        <h1 className="text-4xl text-white font-extrabold tracking-tighter">
          $9.23
        </h1>
      </div>
      <div></div>
    </div>
  )
}

export default EarningChart