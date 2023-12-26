import Header from "@/components/Header/Header";
import NextUiProvider from "@/components/Providers/NextUiProvider";

const LandingPageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
};

export default LandingPageLayout;
