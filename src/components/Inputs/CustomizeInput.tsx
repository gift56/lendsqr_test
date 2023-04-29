const CustomizeInput = ({
  htmlFor,
  showLabel,
  id,
  label,
  className,
  labelClassName,
  inpuClassName,
  error,
  onChange,
  onKeyDown,
  onBlur,
  accept,
  containerClass,
  ...props
}: any) => {
  return (
    <div className={`customizeInputCon ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <input
        {...props}
        className={`${className} ${error ? "error" : ""}`}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        accept={accept}
        onKeyDown={onKeyDown}
      />
      {error ? <p className="errortxt">{error}</p> : null}
    </div>
  );
};

export default CustomizeInput;
