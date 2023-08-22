import ComingSoon from "../../components/comingSoon/ComingSoon";
import "./transactions.css";

const Transactions = () => {
  return (
    <div className="transactions">
      <h1>Transactions</h1>
      <div className="transactionsContent">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Transactions;
