<template>
  <div></div>
</template>

<script>
// sweetalert2
import Swal from 'sweetalert2';

const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      sidebarToggledStatus: false, // 打開/收合 sidebar 的狀態
      pages: {}, // 存放 Pagination 的分頁狀態
      editModalIsShow: false, // 打開/關閉 editModal 的狀態
      deleteModalIsShow: false, // 打開/關閉 editModal 的狀態
      // loading 狀態管理
      isLoading: false,
    };
  },
  methods: {
    // 打開與收合 sidebar
    sidebarToggled() {
      this.sidebarToggledStatus = !this.sidebarToggledStatus;
    },
    // 確認登入狀態，並執行相對應行為
    checkAdmin() {
      this.$http
        .post(`${VITE_APP_URL}/v2/api/user/check`)
        .then(() => {})
        .catch(() => {
          Swal.fire({
            title: '驗證錯誤',
            text: '您尚未登入後台系統，請重新登入!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/admin');
            }
          });
        });
    },
    // 後台系統登出
    adminLogout() {
      this.$http
        .post(`${VITE_APP_URL}/v2/logout`)
        .then(() => {
          Swal.fire({
            title: '登出成功',
            text: '您已成功登出後台系統!',
            icon: 'success',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/admin');
            }
          });
        })
        .catch(() => {});
    },
  },
  mounted() {
    // 取出 cookie 上儲存的 token
    // 執行 proxy 上的 ckeckAdmin 方法，確認是否為登入成功的狀態
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexPeihanWangToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    this.checkAdmin();
  },
};
</script>

<style lang="scss">
$sidebar-width: 280px;

.sidebar {
  width: $sidebar-width;
  transition: all 0.5s;
}

.main {
  width: calc(100vw - #{$sidebar-width});
  transition: all 0.5s;
}

.sidebar-toggled {
  .sidebar {
    margin-left: -$sidebar-width;
  }
  .main {
    width: 100%;
    margin-left: 0;
  }
}

.list-group-item {
  &:hover {
    background-color: #728a7f !important;
  }
}
.list-group-item-active {
  background-color: #728a7f !important;
}
</style>
