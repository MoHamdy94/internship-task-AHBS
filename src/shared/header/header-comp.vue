<template>
<div>
  <header class="headertop">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
         <img class="toplogo" src="./../../assets/logo3.png" alt="logo" /> <!--header logo -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"></li>
            <li class="nav-item"></li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>
            <li class="nav-item"></li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- sub header -->
  <div class="breadcrumbbar">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb ahbs-breadcrumb">
        <img class="menucrumb" src="./../../assets/apps.png" alt="">
        <img class="menucrumb" src="./../../assets/home.png" alt="">
        <div class="arrow">></div>
         <li class="breadcrumb-item"><router-link to="/"> Home</router-link></li> <!--navigate to homepage -->
         <!-- navigate to product -->
        <li class="breadcrumb-item active" aria-current="page"><router-link to="/product">Product</router-link></li>
      </ol>
    </nav>
  </div>
    </div>
</template>
// importing js file
<script src="./header-comp"></script>
<style>
.HeaderFooter {
  height: 100%;
  position: relative;
}
.navbar-expand-lg .navbar-collapse {
  display: flex !important;
  justify-content: flex-end;
}
nav .breadcrumb.ahbs-breadcrumb {
  list-style: none;
  background-color: #204390;
  width: 100%;
}
nav .breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  color: #868e96;
  content: ">";
}
img {
  width: 100px;
}
img.menucrumb {
    width: 35px;
    padding-right: 10px;
    margin: 0 5px;
}
router-link {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}
.arrow{
  color: #5d7694;
  padding-right: 15px;
}
</style>
