// import { useState } from "react";

import ActivityCard from "./ActivityCard";
import UserCard from "./UserCard";
import icons from "../assets";

const DashboardLayout = () => {
  // const [isActive , setisActive] = useState<boolean>(false)

  return (
    <section className="max-w-5xl  w-full grid grid-cols-4 grid-rows-2 gap-8">
      <UserCard />

      <ActivityCard
        color="bg-light-red-work"
        current={32}
        icon={icons.IconWork}
        previous={36}
        timeline="weekly"
        title="Work"
      />
      <ActivityCard
        color="bg-soft-blue"
        current={32}
        icon={icons.IconPlay}
        previous={36}
        timeline="weekly"
        title="Play"
      />
      <ActivityCard
        color="bg-light-red-study"
        current={32}
        icon={icons.IconStudy}
        previous={36}
        timeline="weekly"
        title="Study"
      />
      <ActivityCard
        color="bg-lime-green"
        current={32}
        icon={icons.IconExercise}
        previous={36}
        timeline="weekly"
        title="Exercise"
      />
      <ActivityCard
        color="bg-violet"
        current={32}
        icon={icons.IconSocial}
        previous={36}
        timeline="weekly"
        title="Social"
      />
      <ActivityCard
        color="bg-soft-orange"
        current={32}
        icon={icons.IconSelfCare}
        previous={36}
        timeline="weekly"
        title="Selfcare"
        
      />
    </section>
  );
};

export default DashboardLayout;
