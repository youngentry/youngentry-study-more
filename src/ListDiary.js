import React from "react";
import "./css/ListDiary.scss";
import ItemDiary from "./ItemDiary";

const ListDiary = ({ diaryList, removeHandler }) => {
    return (
        <section className="ListDiary">
            <div className="container">
                <h2>0개의 일기가 있습니다.</h2>
                <ItemDiary removeHandler={removeHandler} diaryList={diaryList} />
            </div>
        </section>
    );
};

export default ListDiary;
