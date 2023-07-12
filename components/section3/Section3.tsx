import React from "react";
import styles from "./extraStyles.module.css";
import Image from "next/image";
import customerPhoto from "../../public/assets/user.jpg";
import customerPhoto2 from "../../public/assets/user2.jpg";
import { CardCustomer } from "@/components";

const Section3: React.FC = () => {
  return (
    <section className="hero mt-56 px-32 ">
      <div className="flex flex-col  items-center">
        <h1 className="text-white  font-bold text-3xl z-10">
          The feedback from our{" "}
          <span className={`${styles["text-gradient"]}`}>customers</span>
        </h1>

        <div
          className={`${styles["container-glass"]} relative flex flex-col mt-24 z-10 p-10 gap-20`}
        >
          <CardCustomer
            image={customerPhoto}
            name="Dave Richard"
            text="“I Had The Pleasure Of Working With Dizayn On A Number Of Projects At Fennel Street. They Are Very Responsive And Always Come To The Table With Unique Ideas. I Would Recommend Team Dizayn For Any Type Of UX/UI, Design Or Development Type Projects.”"
          />
          <CardCustomer
            image={customerPhoto2}
            name="Monica Nayak"
            text="“Dizayn Creative Studio Excels At Turning Our Website Goal Into Reality. We Are So Proud Of The Work They’ve Done For Us That We Have Already Recommended Them To Many Of Our Partners. The Team Is Heads And Shoulders Above Their Competition, I Am Very Thankful To Them.”

"
          />
        </div>
      </div>

      <div
        className={`${styles.ball1} absolute bg-[#00dbdf] w-20 h-20 top-[50%] left-[21%] z-o rounded-full`}
      />
      <div
        className={`${styles.ball2} absolute bg-[#fc00ff] w-16 h-16 top-[60%] right-[41%] z-o rounded-full`}
      />
      <div
        className={`${styles.ball3} absolute bg-[#6b7eed] w-14 h-14 top-[55%] right-[59%] z-o rounded-full`}
      />
    </section>
  );
};

export default Section3;
