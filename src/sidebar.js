export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              {/* <use xlink:href="#home"></use> */}
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link link-dark">
            public
          </a>
        </li>
        <li>
          <a href="/questions/" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16">
              {/* <use xlink:href="#table"></use> */}
            </svg>
            Questions
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16">
              {/* <use xlink:href="#grid"></use> */}
            </svg>
            Tags
          </a>
        </li>
        <li>
          <a href="/users/" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16">
              {/* <use xlink:href="#people-circle"></use> */}
            </svg>
            Users
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width="16" height="16">
              {/* <use xlink:href="#people-circle"></use> */}
            </svg>
            company
          </a>
        </li>
      </ul>
    </div>
  );
}
