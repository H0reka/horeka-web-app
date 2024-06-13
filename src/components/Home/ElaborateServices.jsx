import React from "react";
import LongCard from "./LongCard";
import "./home.css";

const ElaborateServices = () => {
  return (
    <div className="text-center py-[40px]">
      <LongCard
        title="Save Money"
        content="Get bulk prices without bulky orders. Order smaller quantities of fresh, perishable goods and save. Want more savings? Choose Cash on Delivery (COD) for additional discounts!
"
        rev="0"
        img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/650718921f75da154767140c_Frame%2037032.png"
        alt="Save Money, Choose COD for extra savings"
      />
      <LongCard
        title="Save Time"
        content="Order in 2-clicks with our daily lists, plus receive reminders. Or, set a fixed daily quantity and relax—we'll deliver it automatically. Simplify your perishable goods ordering process with our efficient, hassle-free service.
"
        rev="1"
        img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/6507177ece2d9d36a2d8f4e8_Frame%2037031.png"
        alt="Order in 2-clicks, set daily quantities"
      />
      <LongCard
        title="Save Your Business"
        content="Forgot to place an order last night? No worries, we’ve got you covered. With our automated replenishment, you'll never run out of stock or need to apologize again. Ensure consistent supply of perishable goods effortlessly.</br><h5>*not for certain products
</h5>"
        rev="0"
        img="https://assets-global.website-files.com/6489e6bc11d0980ebc5de881/64c0059a6c4e07c4f1f7915c_appmockup.png"
        alt="No more out of stock for your menu"
      />
    </div>
  );
};

export default ElaborateServices;
