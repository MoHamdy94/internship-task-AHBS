<template>
  <div class="container-fluid">
    <div class="page-header">Product</div>
    <div class="page-content">
      <div class="section-title">
        <img class="notepaper" src="./../../assets/edit.png" alt="" />
        Basic Information
      </div>
      <div class="row">
        <div class="col">
          <!-- tried to add the required >
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
          >
            <input v-model="value" type="text" />
            <span>{{ errors[0] }}</span>
          </ValidationProvider> -->
          <div class="input-title">Warehouse
            <span class="astreik">*</span>
          </div>
          <dropdownlist
            :default-item="defaultItemWarhouse"
            :value="warehouse"
            :data-items="warehouseDatasource"
            :text-field="'houseText'"
            :style="{ width: '300px' }"
            @change="warehouseChange"
          ></dropdownlist>
        </div>
        <div class="col">
          <div class="input-title">Type<span class="astreik">*</span></div>
          <dropdownlist
            :default-item="defaultItemProduct"
            :value="type"
            :style="{ width: '300px' }"
            :disabled="!hasWarhouse"
            @change="typeChange"
            :data-items="filteredTypeDatasource"
            :text-field="'typeText'"
          ></dropdownlist>
        </div>
          <div class="col">
            <div class="check">
            <checkbox :label="'show zero balance'" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <br />
          <div class="input-title">Product Specification</div>
          <radiogroup :data-items="dataRadio" />
        </div>
        <div class="col-md-8">
          <br />
          <div class="input-title">Product<span class="astreik">*</span></div>
          <multiselect
            :style="{ width: '500px' }"
            :data-items="products"
            :value="productValue"
            @change="productChange"
            :text-field="'text'"
          ></multiselect>
        </div>
      </div>
      <div class="search-button"><button class="btn" :disabled="!canSearch" @click="search">search</button></div>
      <div class="section-title">
        <img class="notepaper" src="./../../assets/edit.png" alt="" />
        Product Details
      </div>
      <div class="grid-section">
        <Grid
          ref="grid"
          :style="{ height: '320px' }"
          :data-items="gridData"
          :edit-field="'inEdit'"
          :sortable="true"
          :sort="sort"
          :filterable="true"
          :filter="filter"
          :pageable="true"
          :skip="skip"
          :take="take"
          @rowclick="rowClick"
          @sortchange="sortChangeHandler"
          @filterchange="filterChangeHandler"
          @pagechange="pageChangeHandler"
          @itemchange="itemChange"
          :columns="columns"
        >
        </Grid>
      </div>
    </div>
  </div>
</template>
<script src="./product-search.js"></script>
<style>
.page-header {
  font-weight: 700;
  padding: 10px 0;
}
.page-content {
  background-color: white;
  padding: 0 50px;
  border: 1px solid #a1a1a152;
  border-radius: 5px;
}
ul.k-radio-list.k-list-vertical {
  flex-direction: row;
}
.section-title {
  padding-top: 15px;
  border-bottom: 2px solid #deebf7;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #110865;
}
.input-title {
  font-size: 13px;
  margin-bottom: 5px;
  text-transform: capitalize;
  color: #0458ab;
}
.astreik{
  color: red;
  margin: 0 5px;
}
.search-button button {
  background-color: #00e2ff96;
  text-transform: capitalize;
  color: white;
}
.search-button {
  margin: 15px 0;
  display: flex;
  justify-content: flex-end;
}
.grid-section {
  padding-bottom: 50px;
}
.k-grid-header .k-header > .k-link {
  margin: -8px -12px;
  padding: 8px 12px;
  line-height: inherit;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  outline: 0;
  background-color: #eff7ff;
}
img.notepaper {
  width: 30px;
  margin-right: 10px;
}
.check {
    height: 100%;
    display: flex;
    align-items: center;
}
li.k-radio-item {
    margin: 0 10px;
}
.k-dropdownlist.k-picker {
    background-image: none !important;
    background-color: rgb(245,247,249);
    color: gray;
}
.k-dropdownlist.k-picker  button.k-button{
    background-color: rgb(228,237,246);
    color: rgb(3,87,168);
}
li.breadcrumb-item a {
    color: inherit;
}
li.breadcrumb-item {
    color: rgb(129, 129, 129);
}
.breadcrumb-item.active {
    color: #ffffff;
}.k-checkbox:checked, .k-checkbox.k-checked {
    border-color: #5859ff;
    color: white;
    background-color: #5859ff;
    margin:0 5px;
}
.k-radio:checked, .k-radio.k-checked {
    border-color: rgb(3,87,168);
    color: white;
    background-color: rgb(3,87,168);
}

</style>
