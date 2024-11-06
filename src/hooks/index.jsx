import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContent";

const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
            </UserProvider>

    );


};

export default AppProvider;