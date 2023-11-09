import styles from "./TaskCard.module.css";
import work from "/src/assets/images/icon-work.svg";
import study from "/src/assets/images/icon-study.svg";
import play from "/src/assets/images/icon-play.svg";
import exc from "/src/assets/images/icon-exercise.svg";
import social from "/src/assets/images/icon-social.svg";
import selfCare from "/src/assets/images/icon-self-care.svg";
import ellipsis from "/src/assets/images/icon-ellipsis.svg";
const TaskCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.work}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Work</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>32hrs</div>
              <div className={styles.prev}>Last Week - 36hrs</div>
            </div>
          </div>
          <img src={work} alt="" className={styles.cardIcon} />
        </div>
        <div className={styles.play}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Play</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>10hrs</div>
              <div className={styles.prev}>Last Week - 8hrs</div>
            </div>
          </div>
          <img src={play} alt="" className={styles.cardIcon} />
        </div>
        <div className={styles.study}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Study</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>4hrs</div>
              <div className={styles.prev}>Last Week - 7hrs</div>
            </div>
          </div>
          <img src={study} alt="" className={styles.cardIcon} />
        </div>
        <div className={styles.exc}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Exercise</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>4hrs</div>
              <div className={styles.prev}>Last Week - 5hrs</div>
            </div>
          </div>
          <img
            src={exc}
            alt=""
            style={{ marginTop: "-0.1em", height: "3em", width: "4.25em" }}
            className={styles.cardIcon}
          />
        </div>
        <div className={styles.social}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Social</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>5hrs</div>
              <div className={styles.prev}>Last Week - 10hrs</div>
            </div>
          </div>
          <img
            src={social}
            style={{ marginTop: "-0.29em", height: "4.5em" }}
            alt=""
            className={styles.cardIcon}
          />
        </div>
        <div className={styles.selfCare}>
          <div className={styles.details}>
            <div className={styles.heading}>
              <div className={styles.txt}>Self Care</div>
              <img src={ellipsis} alt="" className={styles.elp} />
            </div>
            <div className={styles.data}>
              <div className={styles.current}>2hrs</div>
              <div className={styles.prev}>Last Week - 2hrs</div>
            </div>
          </div>
          <img
            src={selfCare}
            style={{ marginTop: "-0.29em", height: "3.5em", width: "3.5em" }}
            alt=""
            className={styles.cardIcon}
          />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
