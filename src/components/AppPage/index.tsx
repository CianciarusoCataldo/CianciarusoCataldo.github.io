import { AllowedComponent, Container } from "mobrix-ui";
import { useSelector } from "react-redux";
import { isInDarkMode } from "mobrix-engine-plugins";

const AppPage = ({
  children,
}: {
  children: AllowedComponent | AllowedComponent[];
}) => {
  const dark = useSelector(isInDarkMode);

  return (
    <Container animated unstyled className="m-2" dark={dark}>
      {children}
    </Container>
  );
};

export default AppPage;
