let basketModule = (function() {

    let basket = [];

    return {

        //Add items to our basket
        addItem: function(values) {
            basket.push(values);
        },
        
        //Get the number of items in the basket
        getItemCount: function() {
            return basket.length;
        },

        //Get the total price of all items in the basket
        getTotal: function() {
            return basket.reduce((acc, item) => acc + item.price), 0;
        }
    };
})();   