import React from "react";
import "./css/ItemDiary.scss";

const ItemDiary = ({ diaryList, removeHandler }) => {
    return (
        <div>
            {diaryList.map((el, idx) => {
                return (
                    <div className="box" key={el.id}>
                        <ul>
                            <li className="listId">작성 번호 : {el.id}</li>
                            <li className="title">제목 : {el.title}</li>
                            <li className="content">내용 : {el.content}</li>
                        </ul>
                        <button onClick={() => removeHandler(el.id)}>삭제하기</button>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDiary;
