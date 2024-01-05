type ActivityCardProps = {
  title: string;
  color: string;
  icon: string;
  current: number;
  previous: number;
  timeline: "daily" | "weekly" | "monthly";
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  color,
  current,
  icon,
  previous,
  timeline,
  title,
}) => {
  return (
    <div className="flex flex-col w-full ">
      <div className={color + " rounded-t-2xl flex justify-end w-full pr-5 "}>
        <img
          width={50}
          height={50}
          className="h-[50px]"
          src={icon}
          alt={`${title} icon`}
        />
      </div>
      <div className="flex flex-col gap-6 -mt-3 bg-dark-blue w-full p-6 hover:bg-[#33387a] rounded-2xl">
        <div className="flex justify-between w-full">
          <p className="text-white">{title}</p>
          <button className="group">
            <svg
              width="21"
              height="5"
              className="fill-[#BBC0FF] group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-3xl font-light">
            {" "}
            {current + " hrs"}
          </h2>
          <p className="text-pale-blue text-xs ">
            {timeline == "weekly"
              ? "Last Week "
              : timeline == "daily"
              ? "Yesterday "
              : "Last Month "}
            {previous} hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
