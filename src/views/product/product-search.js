import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";

// import { process } from "@progress/kendo-data-query";
import { ValidationProvider } from 'vee-validate';


export default {
  name: "product-search",
  data() {
    return {
      // Place Holder  for dropdown
      defaultItemWarhouse: { houseText: "Select Warehouse ..." },
      defaultItemProduct: { typeText: "Select UOM Type ..." },
      // Values Dropdowns
      warehouse: null,
      type: null,
      //  datasource for dropowns
      warehouseDatasource: [
        { houseText: "warehouse1", houseId: 1 },
        { houseText: "warehouse2", houseId: 2 }
      ],
      typeDatasource: [
        { typeText: "typeA", houseId: 1 },
        { typeText: "typeB", houseId: 1 },
        { typeText: "typeC", houseId: 1 },
        { typeText: "typeD", houseId: 2 },
        { typeText: "typeE", houseId: 2 },
        { typeText: "typeF", houseId: 2 },
        { typeText: "typeG", houseId: 2 }
      ],
      //  filtered datasource for dropowns
      filteredTypeDatasource: [],
      value: "",
      productValue: null,
      products: [ // datasourse for multiselect
        { text: "product1", id: 1 },
        { text: "product2", id: 2 },
        { text: "product3", id: 3 }
      ],
      dataRadio: [
        { // data for radiobotton
          label: "All product",
          value: "All product"
        },
        {
          label: "Specifec Product",
          value: "Specifec Product"
        }
      ],
      updatedData: [],
      editID: null,
      sort: null,
      filter: null,
      skip: 0,
      take: 3,
      columns: [
        { // grid date field
          field: "ProductID",
          editable: false,
          title: "Product",
          width: "200px"
        },
        { field: "ProductName", title: "On-Hand" },
        {
          field: "FirstOrderedOn",
          editor: "date",
          title: "Type",
          format: "{0:d}"
        }
      ],
      gridData: []
    };
  },

  methods: {
    warehouseChange(event) {
      const warehouse = event.value; // creating const to hold value of warehouse
      this.warehouse = warehouse; // giving the const value of warehouse
      // greating const that will search for identical  houseId
      const type = this.typeDatasource.filter(perType => perType.houseId === warehouse.houseId);
      this.filteredTypeDatasource = type; // the filtered data will show here
      this.type = null; // other than that show nothing
    },
    typeChange(event) {
      const type = event.value; // creating const to hold value of type
      this.type = type // giving the const value of warehouse
    },
    productChange(event) {
      console.log(event)
      if (!event.target.value) {
        this.productValue = null;
        console.log(this.productValue)
      } else {
        this.productValue = [...event.target.value];
      }
      console.log(this.productValue)
    },
    search() {
      alert('search')
      this.gridData = [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitsInStock: 39,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 20)
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitsInStock: 17,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 7, 12)
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitsInStock: 13,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 26)
        }
      ]
    }
  },
  components: {
    combobox: ComboBox,
    multiselect: MultiSelect,
    checkbox: Checkbox,
    radiogroup: RadioGroup,
    Grid: Grid,
    dropdownlist: DropDownList,
    "grid-toolbar": GridToolbar,
    ValidationProvider
  },
  computed: {
    hasWarhouse: function () {
      return this.warehouse && this.warehouse !== this.defaultItemWarhouse;
    },
    canSearch: function () {
      let warehouseValue = this.warehouse && this.warehouse !== this.defaultItemWarhouse;
      let typeValue = this.type && this.type !== this.defaultItemProduct;
      let productValue = this.productValue ? this.productValue : null
      return warehouseValue && typeValue && productValue
    }
  },
  //   getData() {
  //     return this.gridData.map(('item') =>
  //       Object.assign({ inEdit: item.ProductID === this.editID }, item)
  //     );
  //   },
  // },
  result: {
    get: function () {
      return process(this.gridData, {
        sort: this.sort,
        filter: this.filter,
        take: this.take,
        skip: this.skip
      });
    }
  },
  mounted() {}
}

