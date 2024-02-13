import styles from "./arrow-down-simple.module.scss";
import arrowDownSimple from "../../../assets/images/arrowDownSimple.png";

interface ArrowDownSimpleProps {
  task: () => void;
  id: string;
}

export const ArrowDownSimple: React.FC<ArrowDownSimpleProps> = ({
  task,
  id,
}: Function) => {
  return (
    <img
      className={styles.img}
      src={arrowDownSimple}
      onClick={() => task(id)}
    ></img>
  );
};
