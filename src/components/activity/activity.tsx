import { Button, SectionWrapper } from "@/modules";
import React from "react";
import { activities } from "./utils";
import { CardItem } from "../card-item";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Activity = () => {
  return (
    <SectionWrapper id="activity">
      <h2 className="text-center">Best Activity</h2>

      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {activities.map((obj, idx) => (
          <CardItem data={obj} key={idx} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="primary"
          size="large"
          icon={<ChevronRightIcon className="w-4 h-4 my-auto" />}
          iconPosition="right"
        >
          More Activities
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Activity;
