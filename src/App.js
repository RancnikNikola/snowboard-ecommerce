import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import { checkUserSession } from "./store/user/user.action";
import Check from "./routes/checkout/check.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
   <Routes>
    <Route path="/" element={ <Navigation /> }>
      <Route index element={ <Home />} />
      <Route path="shop/*" element={ <Shop /> } />
      <Route path="auth" element={ <Auth /> } />
      <Route path="checkout" element={ <Check /> } />
    </Route>
   </Routes>
  );
}

export default App;