import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Preview from "./pages/Preview";
import SellersFlowPropertyDetail from "./pages/SellersFlowPropertyDetail";
import SellersFlowLOCATIONDetail from "./pages/SellersFlowLOCATIONDetail";
import SellersFlowPropertyFeatures from "./pages/SellersFlowPropertyFeatures";
import SellersFlowPriceDetails from "./pages/SellersFlowPriceDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-location-detail":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-property-features-and-amenities":
        title = "";
        metaDescription = "";
        break;
      case "/sellers-flow-price-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Preview />} />
      <Route
        path="/sellers-flow-property-detail"
        element={<SellersFlowPropertyDetail />}
      />
      <Route
        path="/sellers-flow-location-detail"
        element={<SellersFlowLOCATIONDetail />}
      />
      <Route
        path="/sellers-flow-property-features-and-amenities"
        element={<SellersFlowPropertyFeatures />}
      />
      <Route
        path="/sellers-flow-price-details"
        element={<SellersFlowPriceDetails />}
      />
    </Routes>
  );
}
export default App;
