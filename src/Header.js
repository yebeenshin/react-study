// import "../css/headers.css";
function Header() {
  return (
    <div class="container-fluid navbar navbar-expand-sm navbar-light bg-light justify-content-sm-center">
      <div>
        <div class="collapse navbar-collapse" id="mynavbar">
          <a class="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Search" />
            <button class="btn btn-primary" type="button">
              Search
            </button>
          </form>

          <ul class="navbar-nav ms-4">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">
                {" "}
                로그인
              </a>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse text-primary mt-1">
          경기도 의왕시 근처를 검색하고 있어요.
        </div>
      </div>
    </div>
  );
}

export default Header;
