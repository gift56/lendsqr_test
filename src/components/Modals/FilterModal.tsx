import { useRef } from "react";
import style from "../../styles/dashoboard.module.scss";
import { CustomizeInput, CustormizeSelect } from "..";

const FilterModal = ({ show, setShow }: any) => {
  const filterOptions = [
    {
      text: "Select",
      value: "",
    },
    {
      text: "Organization",
      value: "organization",
    },
  ];
  return (
    <div className={`${style.filterCon}`}>
      <CustormizeSelect
        showLabel={false}
        label="Organization"
        // value={values.organization}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("organization")}
        htmlFor="organization"
        name="organization"
        labelClassName={style.label}
        className="mainInput"
      >
        {filterOptions.map((option: any, i: any) => (
          <option id="organization" value={option.value} key={i}>
            {option.text}
          </option>
        ))}
      </CustormizeSelect>
      <CustomizeInput
        showLabel={false}
        label="Username"
        htmlFor="username"
        id="username"
        type="text"
        // value={values.username}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("username")}
        name="username"
        labelClassName={style.label}
        className="mainInput"
        placeholder="Username"
      />
    </div>
  );
};

export default FilterModal;
