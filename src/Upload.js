function Upload() {
    return(
        <div class="row">
            <div class="container">
                <div class="container col-xs-8 p-5 my-5 border border-2">
                    <div className="imageUpload" class="mx-5 mt-2 mb-5">
                        <input type="file" />
                    </div>
                    <div className="title" class="col-xs-6 mx-5 my-3 row">
                        <input type="text" placeholder="제목" class="" />
                    </div>
                    <div class="col-xs-2 dropdown mx-5 my-3 row">
                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            카테고리
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">의류</a></li>
                            <li><a class="dropdown-item" href="#">잡화</a></li>
                            <li><a class="dropdown-item" href="#">인테리어</a></li>
                            <li><a class="dropdown-item" href="#">기타</a></li>
                        </ul>
                    </div>
                    <div className="octionPrice" class="mx-5 my-3 row">
                        <input type="text" placeholder="경매 시작 금액" class="col-xs-3" />
                    </div>
                    <div className="price" class="mx-5 my-3 row">
                        <input type="text" placeholder="즉시 구매 금액" class="col-xs-3" />
                    </div>
                    <div className="content" class="mx-5 my-3 row">
                        <textarea placeholder="게시글을 입력해주세요" rows="20" class="col-xs-6"   />
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