const cartReducer = (state, action) => {
    let updatedProduct = "";
    let updatedProductList = null;
    console.log("reducer page")

    switch (action.type) {
        case "SET_CATEGORY":
            return { ...state, category: (window.location.pathname).substring((window.location.pathname).lastIndexOf("/") + 1) }

        case "SET_PRODUCTS":
            const { Products } = action.payload;
            const productsWithQuantity = Products.map(product => ({
                ...product,
                quantity: 0 // Initialize Quantity for each product
            }));
            localStorage.setItem("productList", JSON.stringify(productsWithQuantity));
            return { ...state, productList: productsWithQuantity };

        case "ADD_TO_CART":
            const { productId } = action.payload;

            if (state.productList) {
                const productToAdd = state.productList.find(product => product._id === productId);
                const existingProduct = state.cart.find((curItem) => curItem.id === productId);



                if (existingProduct) {
                    updatedProduct = state.cart.map((curElem) => {
                        if (curElem.id === productId) {
                            let newQuantity = productToAdd.quantity + 1;
                            return {
                                ...curElem,
                                quantity: newQuantity,
                            };
                        } else {
                            return curElem;
                        }
                    });
                } else {
                    const cartProduct = {
                        id: productId,
                        quantity: productToAdd.quantity + 1,
                        Description: productToAdd.Description,
                        SellingPrice: productToAdd.SellingPrice,
                        Brand: productToAdd.Brand,
                        image: productToAdd.ImgUrl
                    };

                    updatedProduct = [...state.cart, cartProduct];
                }
                // Save updated cart to localStorage
                updatedProductList = state.productList.map((product => product._id === action.payload.productId ? { ...product, quantity: product.quantity + 1 } : product));
                localStorage.setItem("productList", JSON.stringify(updatedProductList));

                localStorage.setItem("cartItem", JSON.stringify(updatedProduct));
                return {
                    ...state,
                    cart: updatedProduct,
                    productList: updatedProductList
                };
            } else {
                console.log("No products to Add");
            }

            return state;

        // Handle increment and decrement actions
        case "SET_DECREMENT":
            updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === action.payload.productId) {
                    let decAmount = curElem.quantity - 1;

                    if (decAmount <= 1) {
                        decAmount = 1;
                    }

                    return {
                        ...curElem,
                        quantity: decAmount,
                    };
                } else {
                    return curElem;
                }
            });

            updatedProductList = state.productList.map((product => product._id === action.payload.productId ? { ...product, quantity: product.quantity - 1 } : product));


            localStorage.setItem("cartItem", JSON.stringify(updatedProduct));
            localStorage.setItem("productList", JSON.stringify(updatedProductList));

            return { ...state, cart: updatedProduct, productList: updatedProductList };

        case "SET_INCREMENT":

            updatedProduct = state.cart.map((curElem) => {
                console.log("first")
                if (curElem.id === action.payload.productId) {
                    let incAmount = curElem.quantity + 1;
                    return {
                        ...curElem,
                        quantity: incAmount,
                    };
                } else {
                    return curElem;
                }
            });

            updatedProductList = state.productList.map((product => product._id === action.payload.productId ? { ...product, quantity: product.quantity + 1 } : product));


            localStorage.setItem("cartItem", JSON.stringify(updatedProduct));
            localStorage.setItem("productList", JSON.stringify(updatedProductList));

            return { ...state, cart: updatedProduct, productList: updatedProductList };


        case "DELETE_ITEM":
            console.log("delete")
            let updatedCart = state.cart.filter(
                (curItem) => curItem.id !== action.payload.productId
            );
            updatedProductList = state.productList.map((product => product._id === action.payload.productId ? { ...product, quantity: 0 } : product));
            localStorage.setItem("cartItem", JSON.stringify(updatedCart));
            localStorage.setItem("productList", JSON.stringify(updatedProductList));

            return { ...state, cart: updatedCart, productList: updatedProductList };

        case "CLEAR_CART":
            updatedProductList = state.productList.map(product => ({
                ...product,
                quantity: 0 // Initialize Quantity for each product
            }));
            localStorage.setItem("cartItem", JSON.stringify([]));
            localStorage.setItem("productList", JSON.stringify(updatedProductList));

            return { ...state, cart: [], productList: updatedProductList };

        case "CART_SIZE_PRICE":
            let { totalSize, totalAmount } = state.cart.reduce(
                (accum, curElem) => {
                    let { SellingPrice, quantity } = curElem;

                    let price = '';
                    for (let i = 0; i < SellingPrice.substring(1).length; i++) {
                        let ch = SellingPrice.substring(1).charAt(i);
                        if (ch !== ',')
                            price += ch
                    }
                    console.log(SellingPrice.substring(1), price, quantity, "dfsdokofbkwmfromgwom")
                    accum.totalSize += quantity;
                    accum.totalAmount += parseInt(price, 10) * quantity;
                    console.log(accum.totalAmount, "price")
                    return accum;
                },
                {
                    totalSize: 0,
                    totalAmount: 0,
                }
            );
            return {
                ...state,
                totalSize,
                totalAmount,
            };

        default:
            return state;
    }
};
export default cartReducer;
