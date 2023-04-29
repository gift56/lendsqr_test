import style from "../../../styles/table.module.scss";
import { Link } from "react-router-dom";

interface IProp {
  data: any;
  text: string;
  show: boolean;
  className: string;
  to: any;
}

const MobileTable = ({ data, text, show, className, to }: IProp) => {
  const statusColor = (value: any) => {
    if (value === "Active") {
      return style.active;
    } else if (value === "Inactive") {
      return style.inactive;
    } else if (value === "Blacklisted") {
      return style.blacklist;
    } else if (value === "Pending") {
      return style.pendeing;
    }
  };

  return (
    <div
      className={`w-full mx-auto xl:hidden flex items-start flex-col gap-3 justify-start ${className}`}
    >
      {show === true && (
        <h2 className="text-darkColor font-semibold uppercase">{text}</h2>
      )}
      <div className="w-full bg-white rounded-lg flex items-start justify-start flex-col shadow-smallShadow border">
        {data.slice(0, 8).map((item: any, i: any) => (
          <Link
            to={`${to}${item.id}`}
            key={i}
            className="w-full border-b  p-4 text-sm border-[#E6E6E6] last:border-none flex items-start justify-between"
          >
            <div className="flex items-start justify-start flex-col gap-1">
              <div className="flex items-start justify-start flex-col gap-1">
                <h2 className="text-darkColor text-sm font-medium phone:text-base">
                  {item.userName}
                </h2>
                <p className="text-xs text-[#5D6771] font-medium">
                  {item.email}
                </p>
              </div>
            </div>
            <div className="flex items-end justify-end flex-col gap-2">
              <p className="text-darkColor text-sm font-medium phone:text-base">
                {item.phone}
              </p>
              <p
                className={`${statusColor(
                  item.status
                )} text-xs font-semibold capitalize w-fit py-[4px] px-[10px] rounded-[100px]`}
              >
                {item.status}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileTable;
