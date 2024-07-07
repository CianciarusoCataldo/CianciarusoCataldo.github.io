import { isInDarkMode } from "mobrix-engine-plugins";
import { BuilderComponent, Container } from "mobrix-ui";
import { useSelector } from "react-redux";

const AppPage = ({
  children,
}: {
  children: BuilderComponent | BuilderComponent[];
}) => {
  const dark: boolean = useSelector(isInDarkMode);

  return (
    <Container
      shadow={false}
      animated={true}
      background={false}
      animation="fade-in"
      className="m-2"
      dark={dark}
    >
      {children}
    </Container>
  );
};

export default AppPage;
