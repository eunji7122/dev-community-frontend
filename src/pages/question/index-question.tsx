import React from 'react';
import {Outlet} from "react-router-dom";
import Layout from "../../layouts/layout";

const IndexQuestion = () => {
    return (
        <Layout>
            <Outlet/>
        </Layout>
    );
};

export default IndexQuestion;