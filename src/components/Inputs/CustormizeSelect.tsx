const CustormizeSelect = ({
  showLabel,
  htmlFor,
  id,
  label,
  className,
  labelClassName,
  error,
  onChange,
  onBlur,
  inpuClassName,
  ...props
}: any) => {
  return (
    <>
      {showLabel === false ? (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      ) : null}
      <div className={`flex flex-col gap-1 w-full ${inpuClassName}`}>
        <select
          {...props}
          className={`${className} ${error ? "border border-red-400" : ""}`}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="text-sm mt-1 text-red-600">{error}</p>}
      </div>
    </>
  );
};

export default CustormizeSelect;
