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
    <div className={`${style.table} ${className}`}>
      {show === true && <h2 className={style.h2}>{text}</h2>}
      <div className="w-full bg-white rounded-lg flex items-start justify-start flex-col shadow-smallShadow border">
        {data.slice(0, 8).map((item: any, i: any) => (
          <Link to={`${to}${item.id}`} key={i} className={style.contentWrapper}>
            <div className={style.contents}>
              <h2 className={style.content}>{item.userName}</h2>
              <p className={style.content}>{item.email}</p>
            </div>
            <div className={style.contents}>
              <p className={style.content}>{item.phone}</p>
              <p className={`${statusColor(item.status)}`}>{item.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileTable;
