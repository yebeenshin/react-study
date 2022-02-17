function Upload() {
    return(
        <div class="row">
            <div class="container col-md-8 px-5 py-5 my-5 border border-2">
                <div className="imageUpload" class="mt-2 mb-5 mx-5">
                    <input type="file" />
                </div>
                <div className="title" class="mx-5 my-3 row">
                    <input type="text" placeholder="제목" class="container col-md-3" />
                </div>
                <div class="dropdown my-3 row">
                    <button class="container col-md-2 btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        카테고리
                    </button>
                    <ul class="dropdown-menu container col-md-3">
                        <li><a class="dropdown-item" href="#">의류</a></li>
                        <li><a class="dropdown-item" href="#">잡화</a></li>
                        <li><a class="dropdown-item" href="#">인테리어</a></li>
                        <li><a class="dropdown-item" href="#">기타</a></li>
                    </ul>
                </div>
                <div className="octionPrice" class="mx-5 my-3 row">
                    <input type="text" placeholder="경매 시작 금액" class="container col-md-3" />
                </div>
                <div className="price" class="mx-5 my-3 row">
                    <input type="text" placeholder="즉시 구매 금액" class="container col-md-3" />
                </div>
                <div className="content" class="mx-5 my-3 row">
                    <textarea placeholder="게시글을 입력해주세요" rows="20" class="container col-md-6"   />
                </div>
                <div class="mx-5 mt-3 mb-5">
                    <button type="button" class="btn btn-primary" style={{position: 'absolute', right: 0, marginRight: "440px"}}>등록</button>
                    <button type="button" class="btn btn-warning" style={{position: 'absolute', right: 0, marginRight: "370px"}}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;