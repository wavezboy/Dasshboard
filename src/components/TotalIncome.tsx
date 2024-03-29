import StockBox from "../utils/StockBox";
import { CoinIcon } from "../assets/Icons";

export default function TotalIncome() {
  return (
    <StockBox
      Icon={<CoinIcon />}
      number={"$350.000"}
      percentage="70,5"
      status="success"
      title="Total Income"
    />
  );
}
