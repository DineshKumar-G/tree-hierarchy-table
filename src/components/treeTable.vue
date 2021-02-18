<template>
  <div v-html="parent"></div>
</template>

<script>
import data from "../data";
import _ from "lodash";

export default {
  name: "TreeTable",
  data() {
    return {
      parent: "",
    };
  },
  props: ['fields'],
  created() {
    this.parent = `<ul id="myUL">
    	${this.getChildLi()}
    </ul>`;
  },
  mounted() {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        // this.classList.toggle("caret-down");
        const locParent = this.querySelector('.show-arrow');
        locParent.classList.toggle('show-down-arrow');
      });
    }
  },
  methods: {
    getChildLi(id = null) {
      let li = "";
      const node = _.filter(data.tableData, { parentId: id });
      _.forEach(node, (el) => {
        li = li + `<li>${this.spawnCaret(el)}</li>`;
      });
      return li;
    },
    getFieldsUITemplate(fields, rowData) {
      let fieldTemplate = '';
      fields.forEach((field) => {
        fieldTemplate += `<span class="column">${rowData[field]}</span>`;
      })
      return fieldTemplate;
    },
    spawnCaret(c) {
      const childs = _.filter(data.tableData, { parentId: c._id });
      let isGeneralStorage = false;
      this.fields.forEach((field) => {
        if (!isGeneralStorage) {
          const val = _(childs).map(field).sum();
          if (val !== c[field]) {
            isGeneralStorage = true;
          }
        }
      });
      let generalStorageText = '';
      if (isGeneralStorage) {
        generalStorageText = `<li>
          <span class="column" style="margin-left:${(c.level+1)*(childs.length ? 20 : 25)}px">
            ${c.name} - General Storage
          </span>
        </li>`
      }
      let ellipses = '';
      for (let i = 0; i < (c.level -1); i++) {
        ellipses += '<i></i><u></u>'; 
      }
      const currFields = !_.isEmpty(this.fields) ? this.getFieldsUITemplate(this.fields, c) : '';
      const lists = `<span class="${childs.length ? 'caret' : ''}">
        <span class="columns">
          <span class="column ${!_.isEmpty(this.fields) ? 'is-half' : 'is-full'} is-relative flex">
            <span class="ellipses" style="margin-left:${c.level*25}px">
              ${ellipses}
            </span>
            <span class="${childs.length ? 'show-arrow' : ''}">${c.name}</span>
          </span>
          ${currFields}
        </span>
      </span>`;
      if (childs.length === 0) return lists
      const hier = `${lists}
        <ul class="nested">
          ${generalStorageText}
          ${this.getChildLi(c._id)}
        </ul>`;
      return hier;
		},
  },
};
</script>

<style>
ul,
#myUL {
  list-style-type: none;
}

#myUL {
  margin: 0;
  padding: 0;
}

.caret {
  cursor: pointer;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}

/* .caret::before,  */
.show-arrow::before {
  content: "\f330";
  font-family: 'Font Awesome 5 Pro';
  color: black;
  display: inline-block;
  margin-right: 6px;
  font-weight: 900;
  color: rgba(0, 0, 255, 0.631);
  font-size: 25px;
  transition: all  0.2s;
}

.caret-down::before, .show-down-arrow::before {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
  transition: transform  0.2s;
}

.nested {
  display: none;
}

.active {
  display: block;
}
.flex {
  display: flex !important;
}
i {
  width: 10px;
  height: 10px;
  background: blue;
  display: block;
  border-radius: 50%;
}
u {
  padding: 5px;
}
.ellipses {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>