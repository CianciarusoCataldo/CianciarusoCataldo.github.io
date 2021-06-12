import React from "react";
import { connect } from "react-redux";

import Page from "app/components/molecules/Page";
import Card from "app/components/molecules/Card";
import ProjectList from "app/components/molecules/ProjectsList";

const InfoPage = () => {
  return (
    <Page orientation="orizontal">
      <div className="w-full m-auto">
        <Card body={<ProjectList />} />
      </div>
    </Page>
  );
};

export default connect(() => ({}))(InfoPage);
