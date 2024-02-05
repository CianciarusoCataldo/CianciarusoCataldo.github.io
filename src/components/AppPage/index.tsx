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
      className="m-2"
      dark={dark}
      additionalProps={{
        "data-mbx-animation": "fade-in",
      }}
    >
      {children}
    </Container>
  );
};

export default AppPage;
