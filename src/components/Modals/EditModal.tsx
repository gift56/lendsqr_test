import { useRef, useEffect } from "react";
import style from "../../styles/dashoboard.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const EditModal = ({ id, show, setShow }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {show == id && (
        <div
          ref={modalRef}
          onClick={() => setShow(null)}
          className={style.editContainer}
        >
          <Link to={`/dashboard/users/${show}`}>
            <span>
              <IoEyeOutline size={18} />
            </span>
            <span>View Details</span>
          </Link>
          <Link to={`/dashboard/users/${show}`}>
            <span>
              <FiUserX size={18} />
            </span>
            <span>Blacklist User</span>
          </Link>
          <Link to={`/dashboard/users/${show}`}>
            <span>
              <FiUserCheck size={18} />
            </span>
            <span>Activate User</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default EditModal;
