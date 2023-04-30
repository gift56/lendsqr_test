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
      <CustomizeInput
        showLabel={false}
        label="Email"
        htmlFor="email"
        id="email"
        type="text"
        // value={values.email}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("email")}
        name="email"
        labelClassName={style.label}
        className="mainInput"
        placeholder="email"
      />
      <CustomizeInput
        showLabel={false}
        label="Date"
        htmlFor="date"
        id="date"
        type="date"
        // value={values.date}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("date")}
        name="date"
        labelClassName={style.label}
        className="mainInput"
        placeholder="date"
      />{" "}
      <CustomizeInput
        showLabel={false}
        label="Phone Number"
        htmlFor="phone"
        id="phone"
        type="text"
        // value={values.phone}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("phone")}
        name="phone"
        labelClassName={style.label}
        className="mainInput"
        placeholder="Phone Number"
      />
      <CustormizeSelect
        showLabel={false}
        label="Status"
        // value={values.status}
        // onChange={handleChange}
        // onBlur={handleBlur}
        // error={getError("status")}
        htmlFor="status"
        name="status"
        labelClassName={style.label}
        className="mainInput"
      >
        {filterOptions.map((option: any, i: any) => (
          <option id="status" value={option.value} key={i}>
            {option.text}
          </option>
        ))}
      </CustormizeSelect>
    </div>
  );
};

export default FilterModal;
