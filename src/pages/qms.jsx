import React from "react";
import Layouts from "../layouts/Layouts";
import Head from "next/head";
import dynamic from "next/dynamic";

const QMSHero = dynamic(() => import("../components/sections/QMSHero"), { ssr: false });
const QMSRoadmap = dynamic(() => import("../components/sections/QMSRoadmap"), { ssr: false });

const QMSPage = () => {
    return (
        <>
            <Head>
                <title>QMS Suite | NextGen Quality Management</title>
                <meta
                    name="description"
                    content="Explore the NextGen QMS software suite. From SOP management to CAPA and Risk Assessment, our integrated compliance ecosystem is built for the future."
                />
            </Head>

            <Layouts transparent>
                <QMSHero />
                <QMSRoadmap />
            </Layouts>
        </>
    );
};

export default QMSPage;
