import React from "react";
import HomeContainer from "./HomeContainer";
import SalesTrend from "./SalesTrend";
import TotalOrder from "./TotalOrder";
import TotalRefund from "./TotalRefund";
import AverageSales from "./AverageSales";
import TotalIncome from "./TotalIncome";
import LastOrder from "./LastOrder";
import TopPlatforms from "./TopPlatforms";
import handleWindowSize from "../utils/HandleWindowSize";

export default function Dashboard() {
  const { Height, Width } = handleWindowSize();
  return (
    <div>
      {Number(Width) <= 1024}
      <HomeContainer>
        <div className="w-full">
          <div className="flex-col lg:flex-row lg:h-[374px] gap-[20px] flex">
            <div className="sm:w-full overflow-x-scroll sm:overflow-visible lg:w-[60%] 2xl:w-[70%] ">
              <SalesTrend />
            </div>
            <div className="flex flex-col w-full lg:w-[500px] gap-[16px]">
              <div className="sm:flex sm:flex-row flex-col gap-[16px]">
                <TotalOrder />
                <TotalRefund />
              </div>
              <div className="sm:flex sm:flex-row flex-col gap-[16px] w-full">
                <AverageSales />
                <TotalIncome />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[26px] mt-[20px] mb-[100px] ">
            <div className="lg:w-[55.5%] sm:w-full overflow-x-scroll sm:overflow-visible 2xl:w-[70%]">
              <LastOrder />
            </div>
            <div className="xl:w-[500px] w-full lg:w-[500px]">
              <TopPlatforms />
            </div>
          </div>
        </div>
      </HomeContainer>
    </div>
  );
}