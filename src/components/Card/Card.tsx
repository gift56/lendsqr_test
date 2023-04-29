import style from "../../styles/dashoboard.module.scss";

interface IProp {
  data: {
    img: string;
    text: string;
    totalNo: string;
  };
}

const Card = ({ data }: IProp) => {
  return (
    <div className={style.card}>
      <img src={data.img} alt="/" />
      <h5>{data.text}</h5>
      <h3>{data.totalNo}</h3>
    </div>
  );
};

export default Card;
