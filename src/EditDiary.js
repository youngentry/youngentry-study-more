import React, { useRef, useState } from "react";

const ListDiary = ({ diaryList, setDiaryList }) => {
    const listNum = useRef(1);
    const titleRef = useRef();
    const contentRef = useRef();

    const [write, setWrite] = useState({
        title: "",
        content: "",
    });

    const writeHandler = (e) => {
        setWrite({ ...write, [e.target.name]: e.target.value, id: listNum.current });
    };

    const listHandler = () => {
        if (write.title.length < 1) {
            alert("제목을 입력해주세요.");
            titleRef.current.focus();
            return;
        }
        if (write.content.length < 1) {
            alert("내용을 입력해주세요.");
            contentRef.current.focus();
            return;
        }

        setDiaryList([...diaryList, write]);
        listNum.current++;

        setWrite({
            title: "",
            content: "",
        });
    };

    return (
        <div>
            <input type="text" name="title" onChange={writeHandler} value={write.title} ref={titleRef} />
            <input type="text" name="content" onChange={writeHandler} value={write.content} ref={contentRef} />
            <button onClick={listHandler}>작성하기</button>
        </div>
    );
};

export default ListDiary;
