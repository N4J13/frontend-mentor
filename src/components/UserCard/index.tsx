import { useEffect, useState } from "react";
import icons from "../../assets";
import TimeLinesortButton from "./TimeLinesortButton";
import data from "../../assets/data.json";

type timelines = {
  id: number;
  text: string;
  onClick: () => void;
};


const UserCard = () => {

  useEffect(() => {
    dailyTimeline()
  },[])


  const [activeID, setActiveID] = useState(1);
  const [currenthours, setCurrentHours] = useState<number[]>([]);

  const dailyTimeline = () => {
    setCurrentHours(() => {
      const newHours = [];
      const dailyValues = data.map((item) => item.timeframes.daily.current);
      newHours.push(...dailyValues);
      return newHours;
    });

    setActiveID(1);
  };

  const weeklyTimeline = () => {
    setCurrentHours(() => {
      const newHours = [];
      const weeklyValues = data.map((item) => item.timeframes.weekly.current);
      newHours.push(...weeklyValues);

      return newHours;
    });
    setActiveID(2);
  };

  const monthlyTimeline = () => {
    setCurrentHours(() => {
      const newHours = [];
      const monthlyValues = data.map((item) => item.timeframes.monthly.current);
      newHours.push(...monthlyValues);

      return newHours;
    });
    setActiveID(3);
  };
  const timelines: timelines[] = [
    { id: 1, text: "Daily", onClick: dailyTimeline },
    { id: 2, text: "Weekly", onClick: weeklyTimeline },
    { id: 3, text: "Monthly", onClick: monthlyTimeline },
  ];

  console.log(currenthours);

  return (
    <div className="flex flex-col col-span-1 row-span-2  ">
      <div className="bg-blue flex items-center gap-6 lg:block p-7 relative z-10 space-y-10 rounded-xl ">
        <img
          src={icons.ImageJeremy}
          className=" border-[3px] h-fit  rounded-full border-white"
          width={75}
          height={75}
        />
        <div className="pb-10">
          <div className="text-xs text-pale-blue">Report for</div>
          <h1 className="text-3xl font-light">Jeremy <br className="hidden lg:block" /> Robson</h1>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col justify-evenly lg:justify-start gap-2 items-start p-7 -mt-2 rounded-b-xl bg-dark-blue">
        {timelines.map((timeline) => (
          <TimeLinesortButton
            key={timeline.id}
            text={timeline.text}
            activeId={activeID}
            id={timeline.id}
            onClick={timeline.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
