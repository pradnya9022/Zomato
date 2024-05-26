import 'bootstrap/dist/css/bootstrap.css'




export function Navbar(){

    return(
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Financials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Announcement</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Governance</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ESG
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">ESG Initiatives</a></li>
            <li><a class="dropdown-item" href="#">ESG Microsite</a></li>
          </ul>
          <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

    )
}