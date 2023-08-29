<template>
  <div class="login-bkg py-22">
    <div class="login-bkg-mask"></div>
    <div class="container z-index-3 mb-1">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="d-flex justify-content-between align-items-end">
            <img
              class="img-fluid z-index-3 d-block d-md-none mb-1"
              src="https://shorturl.at/egjwJ"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="175"
              height="109"
            />
            <img
              class="img-fluid z-index-3 d-none d-md-block mb-1"
              src="https://shorturl.at/egjwJ"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="350"
              height="219"
            />
            <h2 class="fs-6 fs-md-4 text-light z-index-3 mb-0">會員登入</h2>
          </div>
          <div class="bg-light z-index-3 py-7 py-md-7 py-7 px-3 px-md-7 position-relative rounded">
            <form>
              <div class="mb-3">
                <label for="MemberLoginAccount" class="form-label">帳號 / Account </label>
                <div class="position-relative">
                  <i class="bi bi-person-fill fs-5 text-secondary position-absolute input-icon"></i>
                  <input type="text" class="form-control input-text" id="MemberLoginAccount" />
                </div>
              </div>
              <div class="mb-3">
                <label for="MemberLoginPassword" class="form-label fs-6">密碼 / Password </label>
                <div class="position-relative">
                  <i class="bi bi-key-fill fs-5 text-secondary position-absolute input-icon"></i>
                  <input type="password" class="form-control input-text" id="MemberLoginPassword" />
                </div>
              </div>
              <div class="mb-4">
                <router-link to="">忘記密碼?</router-link>
              </div>

              <div class="row gx-2 justify-content-end">
                <div class="col-lg-3 col-6">
                  <router-link to="/MemberSignUp" class="btn btn-secondary w-100"
                    >註冊會員</router-link
                  >
                </div>
                <div class="col-lg-3 col-6">
                  <button type="submit" class="btn btn-primary w-100">登入</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.login-bkg {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1617351167197-1a8715231753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.login-bkg-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $primary;
  opacity: 50%;
  z-index: 2;
}
.input-icon {
  left: 10px;
  top: 5px;
}
.input-text {
  text-indent: 25px;
}
</style>
