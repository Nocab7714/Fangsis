<template>
  <div class="py-md-13 py-9 products-header-bkg01">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        全站商品
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">全站商品</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-6">
    <div class="row">
      <div class="search-and-categories col-lg-3 sticky-top-customize">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="搜尋商品..."
            aria-label="搜尋商品..."
            aria-describedby="button-search-product"
          />
          <button class="btn btn-primary" type="button" id="button-search-product">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <select class="form-select mb-5 fs-6" name="product-sorting" id="">
          <option value="" disabled selected>請選擇您要的商品排序</option>
          <option value="sorting01">依照價格"由高到低"排序</option>
          <option value="sorting02">依照價格"由低到高"排序</option>
          <option value="sorting03">依照"商品類別"排序</option>
        </select>

        <div class="products-categories-desktop mb-4 d-none d-lg-block">
          <h2 class="fs-6 mb-3">商品分類</h2>
          <ul class="list-group">
            <button type="button" class="list-group-item list-group-item-action active">
              <li class="d-flex justify-content-between align-items-center">
                全部商品
                <span class="badge bg-primary rounded-pill">37</span>
              </li>
            </button>
            <button type="button" class="list-group-item list-group-item-action">
              <li class="d-flex justify-content-between align-items-center">
                禮盒系列
                <span class="badge bg-primary rounded-pill">10</span>
              </li>
            </button>
            <button type="button" class="list-group-item list-group-item-action">
              <li class="d-flex justify-content-between align-items-center">
                沐浴用品
                <span class="badge bg-primary rounded-pill">6</span>
              </li>
            </button>
            <button type="button" class="list-group-item list-group-item-action">
              <li class="d-flex justify-content-between align-items-center">
                室內香氛
                <span class="badge bg-primary rounded-pill">21</span>
              </li>
            </button>
          </ul>
        </div>
        <div class="products-categories-mobile d-block d-lg-none">
          <h2 class="fs-6 mb-3">商品分類</h2>
          <select class="form-select mb-5 fs-6" name="product-categories" id="">
            <option value="categories01" selected>全部商品</option>
            <option value="categories02">禮盒系列</option>
            <option value="categories03">沐浴用品</option>
            <option value="categories04">室內香氛</option>
          </select>
        </div>
      </div>
      <div class="products col-lg-9">
        <div class="row g-md-4 g-3">
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="/product">
                <div class="position-relative">
                  <span class="position-absolute p-2 bg-pink z-index-3 fs-5 text-white top-0"
                    >HOT</span
                  >
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <!-- <div class="product-info"></div> -->
                  <div class="product-sell-out text-center text-white fs-3">已售完</div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0" disabled>
                加入購物車
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
          <div class="col-lg-4 col-6">
            <div class="card border-0">
              <router-link class="product-link text-decoration-none" to="">
                <div class="position-relative">
                  <div class="product-info"></div>
                  <img
                    class="rounded-0 img-fluid"
                    src="https://shorturl.at/eLQZ4"
                    alt="圖片左上角有顆柚子以及禮盒中有一個薑餅人造型香皂的柚子雪松蠟燭禮盒"
                    width="351"
                    height="320"
                  />
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">柚子雪松蠟燭禮盒</h3>
                <p class="card-text text-black fs-6 mb-2">NT$<span>1999</span></p>
              </router-link>
              <button class="btn btn-sm btn-outline-primary w-100 rounded-0">加入購物車</button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-7">
          <nav aria-label="Page navigation ">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.z-index-2 {
  z-index: 2;
}
.z-index-3 {
  z-index: 3;
}
.z-index-4 {
  z-index: 4;
}

.product-info {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.product-link {
  &:hover {
    .product-info {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}

.product-sell-out {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.75);
  z-index: 4;
}
.sticky-top-customize {
  position: sticky;
  top: 0;
  height: 100%;
}
</style>
