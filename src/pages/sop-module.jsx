import React from "react";
import Layouts from "../layouts/Layouts";
import Head from "next/head";
import dynamic from "next/dynamic";
import SOPModuleDetails from "../components/sections/SOPModuleDetails";

const SOPModuleHero = dynamic(() => import("../components/sections/SOPModuleHero"), { ssr: false });
const GlobalSOP3DScene = dynamic(() => import("../components/3d/GlobalSOP3DScene"), { ssr: false });

const SOPModulePage = () => {
    return (
        <>
            <Head>
                <title>SOP Module | NextGen Quality Management</title>
                <meta
                    name="description"
                    content="Transform your organizational knowledge with our interactive, secure, and compliant Standard Operating Procedures module. Experience the future of QMS."
                />
                <meta
                    name="keywords"
                    content="SOP, Standard Operating Procedures, QMS, Quality Management System, Compliance, FDA 21 CFR Part 11, ISO 9001"
                />
                <meta property="og:title" content="SOP Module | NextGen Quality Management" />
                <meta property="og:description" content="Digitize, streamline, and secure your organizational knowledge with our next-gen SOP module." />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourwebsite.com/sop-module" />
            </Head>

            <Layouts transparent>
                {/* The Hero component now includes its own starry 3D background for QMS consistency */}
                <SOPModuleHero />

                {/* Details section with video and feature breakdown */}
                <SOPModuleDetails />
            </Layouts>
        </>
    );
};

export default SOPModulePage;
