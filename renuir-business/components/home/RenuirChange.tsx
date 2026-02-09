import React from "react";
import { Typography } from "../ui/typography";

const RenuirChange = () => {
  return (
    <section className="bg-[#f0f6fc]">
      <div className="app-container py-32">
        <div className="flex flex-col gap-4 items-center">
          <Typography variant="h2" className="text-center">
            That moment when you reach for your pocket...
            <br />
            and your wallet is gone.
          </Typography>
          <Typography
            variant="lead"
            className="m-6 max-w-xl leading-12 text-center"
          >
            The panic. The frustration. The uncertainty.
            <br /> It’s a nightmare we all know too well.
            <br /> Where to look? Who to call?
            <br /> Venues are stuck in chaos, manual logs, frantic calls, no
            clarity.
            <br />
            <strong>There’s no system. No peace of mind. Until now.</strong>
          </Typography>

          <Typography variant="h4" className=" text-primary font-bold">
            RENUIR IS HERE TO CHANGE THAT.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default RenuirChange;
