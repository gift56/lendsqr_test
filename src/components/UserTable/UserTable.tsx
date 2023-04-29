import { FilterIcon } from "../../assets";
import style from "../../styles/table.module.scss";

const UserTable = ({ data, columns, tableClassName, trClassName }: any) => {
  return (
    <table className={`${style.table} ${tableClassName}`}>
      <thead>
        <tr className={`${trClassName}`}>
          {columns &&
            columns.map((head: any, i: any) => (
              <th key={i} className={style.thCon}>
                <div className={style.th}>
                  <span>{head.header}</span>
                  {head.header && <img src={FilterIcon} alt="/" />}
                </div>
              </th>
            ))}
        </tr>
      </thead>
    </table>
  );
};

export default UserTable;
