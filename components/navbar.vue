<template>
  <nav class="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="">
        <img
          class="logo"
          :src="require('@/assets/images/logo.png')"
          alt="logo image"
          style="display: initial"
        />
        Track-EAT
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#footer-bottom">contact</a>
          </li> -->
        </ul>
        <a href="/login"
          ><button type="button" class="rounded-pill btn-rounded">
            Log in / Sign Up
            <span>
              <img
                :src="require('@/assets/images/arrow-right.png')"
                alt="arrow-right"
              />
            </span>
          </button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
