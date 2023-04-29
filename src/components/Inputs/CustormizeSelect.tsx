const CustormizeSelect = ({
  showLabel,
  htmlFor,
  id,
  label,
  className,
  labelClassName,
  containerClass,
  error,
  onChange,
  onBlur,
  inpuClassName,
  ...props
}: any) => {
  return (
    <div className={`customizeInputCon ${containerClass}`}>
      {showLabel === false ? (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <div className={`${inpuClassName} selectCon`}>
        <select
          {...props}
          className={`${className} ${error ? "error" : ""}`}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="errortxt">{error}</p>}
      </div>
    </div>
  );
};

export default CustormizeSelect;
