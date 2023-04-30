import style from "../../../styles/table.module.scss";
import { Link } from "react-router-dom";

interface IProp {
  data: any;
  text: string;
  show: boolean;
  className: string;
  to: any;
  idPresent: boolean;
}

const MobileTable = ({ data, text, show, className, to, idPresent }: IProp) => {
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
      {idPresent === true ? (
        <div className={style.contentCon}>
          {data.slice(0, 8).map((item: any, i: any) => (
            <Link to={`${to}${i}`} key={i} className={style.contentWrapper}>
              <div className={style.contents}>
                <h2 className={style.content}>{item.username}</h2>
                <span className={style.content}>{item.email}</span>
              </div>
              <div className={style.contents2}>
                <span className={style.content}>{item.phone}</span>
                <span className={`${statusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={style.contentCon}>
          {data.slice(0, 8).map((item: any) => (
            <div key={item.id} className={style.contentWrapper}>
              <div className={style.contents}>
                <h2 className={style.content}>{item.username}</h2>
                <span className={style.content}>{item.email}</span>
              </div>
              <div className={style.contents2}>
                <span className={style.content}>{item.phone}</span>
                <span className={`${statusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileTable;
