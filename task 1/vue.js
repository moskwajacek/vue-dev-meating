console.log("hello");

const app = new Vue({
    el: '#app',
    data: {
      //7/ 1. We can define any JavaScript some array of objects
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }]
    },
    // 3. To get some events from user we can define a method in 'methods'
    methods: {
      //3/ 4. The important thing is to use function with execution-based context
      removeLast() {
        this.products.pop();
      }
    }
  });