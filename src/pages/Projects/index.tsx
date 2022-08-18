import { Card } from "mobrix-ui";
import ProjectList from "components/ProjectsList";
import AppPage from "components/AppPage";

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
