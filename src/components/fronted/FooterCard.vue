<template>
  <footer class="bg-primary">
    <div class="container">
      <div class="py-lg-55 pt-4 pb-5">
        <div
          class="d-flex mb-lg-9 mb-55 flex-column flex-lg-row align-items-lg-start align-items-center"
        >
          <object
            class="me-lg-7 me-0 mb-7 mb-lg-0 img-fluid"
            type="image/svg+xml"
            :data="logoSvgUrl.fangsisWhiteLogo3x"
            width="240"
            height="80"
          ></object>
          <ul class="list-unstyled text-center d-flex mb-0 flex-column flex-lg-row">
            <li class="mx-lg-7 mx-0 mb-lg-0 mb-4">
              <router-link class="link-light text-decoration-none fs-5" to="/PrivacyPolicy"
                >隱私權服務條款</router-link
              >
            </li>
            <li class="mx-lg-7 mx-0 mb-lg-0 mb-4">
              <router-link class="link-light text-decoration-none fs-5" to="/ShoppingGuidelines"
                >購物流程與常見Q&A
              </router-link>
            </li>
            <li class="mx-lg-7 mx-0">
              <span class="text-white fs-5">合作夥伴</span>
              <ul class="list-unstyled mt-lg-5 mt-4 d-lg-block d-flex">
                <li class="py-lg-25 py-0 me-2 me-lg-0">
                  <a
                    class="text-decoration-none link-light fs-6"
                    href="https://smallstepsgreen.com/"
                    target="_blank"
                  >
                    <span class="d-lg-block d-none">綠印生活</span>
                    <object
                      class="d-lg-none d-block img-fluid"
                      type="image/svg+xml"
                      :data="logoSvgUrl.smallstepsgreenLogo"
                      width="70"
                      height="70"
                      style="pointer-events: none"
                    ></object>
                  </a>
                </li>
                <li class="py-lg-25 py-0 ms-2 ms-lg-0">
                  <a
                    class="text-decoration-none link-light fs-6"
                    href="https://www.facebook.com/banai.savon/?locale=zh_TW"
                    target="_blank"
                    ><span class="d-lg-block d-none">白娜Banai</span>
                    <object
                      class="d-lg-none d-block img-fluid"
                      type="image/svg+xml"
                      :data="logoSvgUrl.banaiLogo"
                      width="70"
                      height="70"
                      style="pointer-events: none"
                    ></object>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul
          class="d-flex justify-content-between align-items-center flex-column flex-lg-row list-unstyled mb-0"
          style="color: var(--bs-gray-500)"
        >
          <li class="mb-lg-0 mb-3 order-2 order-lg-1 text-center">
            僅個人作品練習，無任何商業用途
          </li>
          <li class="order-3 order-lg-2 text-center">
            Copyright © 2023 HikinigTogether.All rights reserved.
          </li>
          <li class="mb-lg-0 mb-3 order-1 order-lg-3">
            <a class="me-4" href="https://www.instagram.com/fangsis_fragrance/"
              ><i class="bi bi-instagram fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
            <a class="me-4" href="https://www.facebook.com/fangsisfragrance/"
              ><i class="bi bi-facebook fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
            <a href="mailto:fangsisfragrance@gmail.com"
              ><i class="bi bi-envelope-fill fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
// logo
import banaiLogo from '@/assets/svg/banai-logo.svg'
import smallstepsgreenLogo from '@/assets/svg/smallstepsgreen-logo.svg'
import fangsisWhiteLogo3x from '@/assets/svg/logo-fangsis-white.svg'

export default {
  data() {
    return {
      // logo
      logoSvgUrl: {
        fangsisWhiteLogo3x: fangsisWhiteLogo3x,
        banaiLogo: banaiLogo,
        smallstepsgreenLogo: smallstepsgreenLogo
      }
    }
  }
}
</script>
