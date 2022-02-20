import React from "react";

function Upload() {
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    return(
        <div class="row">
            <div class="container">
                <div class="container col-xs-8 p-5 my-5 border border-2">
                    <div class="mx-5 mt-2 mb-5">
                        <input type="file" />
                    </div>
                    <div class="col-xs-3 mx-5 my-3 row" style={{margin: "0 auto", width: "1272px"}}>
                        <input type="text" placeholder="제목" style={{width: "250px"}} />
                    </div>
                    <div class="col-xs-3 mx-5 my-3 row">
                        <select style={{width: "250px"}} onChange={changeSelectOptionHandler}>
                            <option value="0">종류를 선택해주세요</option>
                            <option value="1">의류</option>
                            <option value="2">가구</option>
                            <option value="3">소품</option>
                            <option value="4">잡화</option>
                        </select>
                    </div>
                    <div class="col-xs-3 mx-5 my-3 row"  style={{width: "250px"}}>
                        <input type="text" placeholder="경매 시작 금액" />
                    </div>
                    <div class="col-xs-3 mx-5 my-3 row"  style={{width: "250px"}}>
                        <input type="text" placeholder="즉시 구매 금액" />
                    </div>
                    <div class="col-xs-3 mx-5 my-3 row">
                        <textarea placeholder="게시글을 입력해주세요" rows="20"   />
                    </div>
                    <div class="mx-5 mt-3 mb-5" align="right">
                        <button type="button" class="mx-2 btn btn-primary">등록</button>
                        <button type="button" class="mx-2 btn btn-warning">취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;