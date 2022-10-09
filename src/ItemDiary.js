import React from "react";
import "./css/ItemDiary.scss";

const ItemDiary = ({ diaryList, removeHandler }) => {
    const currentDate = new Date().getTime();
    const diaryDate = new Date(currentDate).toLocaleDateString();

    return (
        <div className="ItemDiary">
            {diaryList.map((el, idx) => {
                return (
                    <div className="box" key={el.id}>
                        <ul>
                            <div className="titleArea">
                                <li className="title">제목 : {el.title}</li>
                                <li className="listId">작성 번호 : {el.id}</li>
                            </div>
                            <li className="date">작성 날짜 : {diaryDate}</li>
                            <li className="content">내용 : {el.content}</li>
                        </ul>
                        <div className="buttonArea">
                            <button onClick={() => removeHandler(el.id)}>수정하기</button>
                            <button onClick={() => removeHandler(el.id)}>삭제하기</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDiary;
