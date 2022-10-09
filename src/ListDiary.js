import React from "react";
import "./css/ListDiary.scss";
import ItemDiary from "./ItemDiary";

const ListDiary = ({ diaryList, setDiaryList }) => {
    const removeHandler = (listId) => {
        if (window.confirm(`${listId}번 일기를 정말 삭제하시겠습니까?`)) {
            setDiaryList(diaryList.filter((el) => el.id !== listId));
        }
    };

    return (
        <section className="ListDiary">
            <div className="container">
                <h2>{diaryList.length}개의 일기가 있습니다.</h2>
                <ItemDiary removeHandler={removeHandler} diaryList={diaryList} />
            </div>
        </section>
    );
};

export default ListDiary;
