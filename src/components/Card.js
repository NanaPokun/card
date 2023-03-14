import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import styles from '../styles/Card.module.css'
import ReadMore from "./Layout/ReadMore";

const Card = ({ title, likes, image, order, desc}) => {
    return (
        <div className={classNames([styles.wrapper, styles.wrapperAnime, "container mx-auto px-4 object-center"])}>
            <div className={styles.header}>
                <div className={[styles.imageWrapper, "m-4 p-4"]}>
                    <img src={image} className={styles.image} alt="" />
                </div>
                <div className={styles.badgeWrapper}>
                    <div
                        className={classNames([styles.dangerBadge, styles.badgeAnime, "py-2 px-2"])}
                    >
                        <AiFillHeart />
                    </div>
                    <div
                        className={classNames([
                        styles.primaryBadge,
                        styles.badgeAnime,
                        "py-2 px-2",
                        ])}
                    >
                        <BsChatSquareFill />
                        <span
                        className={classNames([styles.counter, "group-hover:text-white"])}
                        >
                        {likes}
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.textWrapper}>
                <h1 className={styles.text}>{`${order}. ${title}`}</h1>
                <ReadMore desc={desc}/>
            </div>
        </div>
    );
}
 
export default Card