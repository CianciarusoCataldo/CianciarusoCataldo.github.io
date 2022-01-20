import { Card } from "@cianciarusocataldo/modular-ui";
import ProjectList from "app/components/molecules/ProjectsList";
import AppPage from "app/components/predefined/AppPage";

const ProjectsPage = () => {
  return (
    <AppPage>
      <div className="w-full m-auto">
        <Card shadow body={<ProjectList />} />
      </div>
    </AppPage>
  );
};

export default ProjectsPage;
