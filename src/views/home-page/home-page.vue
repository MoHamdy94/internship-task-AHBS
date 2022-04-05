<template>
  <div class="home-content">
    <div class="center-content">
      <div class="welcomeimage">
        <img class="midlogo"
        src="./../../assets/middlelogo.png" alt="logo" />
      </div>
      <div class="welcomemsg">welcome</div>
    </div>
  </div>
</template>
<style>
.home-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 760px;
}
.welcomemsg {
  font-weight: 700;
  text-transform: capitalize;
  font-size: larger;
  text-align: center;
}
img.midlogo {
    height: 500px;
    width: 500px;
}
</style>
