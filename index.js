const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello',
      owner: {
        r: 1,
        w: 0,
        x: 0,
      },
      groups: {
        r: 0,
        w: 0,
        x: 0,
      },
      others: {
        r: 0,
        w: 0,
        x: 0,
      },
    };
  },
  filters: {
    bit(value) {
      return String(~~value);
    },
  },
  computed: {
    ownerPermission() {
      return String(this.getBinaryAsDecimal(this.owner));
    },
    groupsPermission() {
      return String(this.getBinaryAsDecimal(this.groups));
    },
    othersPermission() {
      return String(this.getBinaryAsDecimal(this.others));
    },
    permission() {
      return `${this.ownerPermission}${this.groupsPermission}${this.othersPermission}`;
    },
  },
  methods: {
    getBinaryAsDecimal(object) {
      let output = 0;
      if (object.x) {
        output += 1
      }
      
      if (object.w) {
        output += 2
      }
      
      if (object.r) {
        output += 4
      }
      return output;
    },
  },
});
