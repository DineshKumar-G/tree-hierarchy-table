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
        this.classList.toggle("caret-down");
      });
    }
  },
  methods: {
    getChildLi(id = null) {
      let li = "";
      const node = _.filter(data.rD(), { parentId: id });
      _.forEach(node, (el) => {
        li = li + `<li>${this.spawnCaret(el)}</li>`;
      });
      return li;
    },
    spawnCaret(c) {
      const childs = _.filter(data.rD(), { parentId: c._id });
      if (childs.length === 0)
        return `${c.name}   ${c.avail}   ${c.need}   ${c.taken}`;
      const hier = `<span class="caret">${c.name}   ${c.avail}   ${c.need}   ${c.taken}</span>
										<ul class="nested"> ${this.getChildLi(c._id)}</ul>`;
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

.caret::before {
  content: "\25B6";
  color: black;
  display: inline-block;
  margin-right: 6px;
}

.caret-down::before {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Safari */
  transform: rotate(90deg);
}

.nested {
  display: none;
}

.active {
  display: block;
}
</style>