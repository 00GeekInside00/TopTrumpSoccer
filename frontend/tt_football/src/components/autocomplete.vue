<template>
  <div class="autocomplete">
    <input 
    type="text"
    v-model="search"
    @input="onChange"
    :placeholder="placeholder" 
    />
     <ul
    v-show="isOpen"
    class="autocomplete-results"
  >
    <li
      v-for="(result, i) in results"
      :key="i"
      class="autocomplete-result"
      @click="setResult(result)"
    >
      {{ result }}
    </li>
  </ul>
  </div>
</template>
<script>
  export default {
    name:"autocompelete",
    props: {
      items: {
        type: Array,
        required: false,
        default: () => [],
      },placeholder: {
        type: String,
        required: false,
        default: () => "type something",
      },
       value: {
            type: String,
            default: '',
            required: true
        }
    },
    data() {
      return {
        search: '',
        results: [],
        isOpen: false,
      };
    },
    methods: {
      onChange() {
        this.isOpen = true;
        this.filterResults();
      },
      filterResults() {
        this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
      },
       setResult(result) {
        this.search = result;
        this.isOpen = false;
        this.$emit('input',this.search)
      },
    },
  }
</script>
<style>
  .autocomplete {
    position: relative;
    width: 130px;
    background:white;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>