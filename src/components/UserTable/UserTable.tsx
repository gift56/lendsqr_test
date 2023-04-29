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
      <tbody className="w-full">
        {data &&
          data.map((row: any, i: any) => (
            <tr
              key={i}
              className={`h-[50px] text-sm leading-5 w-full even:bg-[#f4f4f4] ${containerClassName}`}
            >
              {(columns as unknown as [])?.map((col: any, i: any) => (
                <td key={i} className={style.td}>
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserTable;
