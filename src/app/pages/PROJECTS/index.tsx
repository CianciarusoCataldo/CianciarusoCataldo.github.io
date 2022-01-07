import { Card } from "@cianciarusocataldo/modular-ui";
import ProjectList from "app/components/molecules/ProjectsList";
import AppPage from "app/components/molecules/AppPage";

const ProjectsPage = () => {
  return (
    <AppPage orientation="orizontal">
      <div className="w-full m-auto">
        <Card body={<ProjectList />} />
      </div>
    </AppPage>
  );
};

export default ProjectsPage;
