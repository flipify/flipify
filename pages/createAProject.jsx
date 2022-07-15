import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import DashboardNav from "../Components/DashboardNav/DashboardNav";
import DashContent from "../Components/DashboardNav/DashContent";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { ProjectsArrowDown } from "../Components/SVG/Svgs";
import styles from "../styles/createproject.module.css";

function CreateAProject() {
  const [value, setValue] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const CreateBtns = () => {
    if (value === "Add a new repo from Git") {
      return (
        <button className={`${styles.createProject__AddGitBtn} nextBtn`}>
          Add from GitHub
        </button>
      );
    }
    return (
      <button
        onClick={() => console.log(value)}
        className={`${styles.createProject__NextBtn} nextBtn`}
      >
        Next
      </button>
    );
  };

  return (
    <div className="bgContainer dashContainer__Parent">
      <Head>
        <title>Create a New Project - Flipify</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>&nbsp;</div>
      <div className="gridContainer">
        <DashboardNav />
        <DashContent>
          <div className={styles.createProject__Parent}>
            <h2>Create a New Project</h2>
            <Input
              className={styles.createProject__Parent_Name}
              placeholder="Enter project name"
            />
            <div className="createProject__SelectWrapper">
              <Select
                className={styles.createProject__SelectRepo}
                icon={
                  <ProjectsArrowDown />
                }
                iconSize="1em"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                placeholder="Select a repository"
              >
                <option value="Add a new repo from Git">
                  Add a new repo from Git
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            {CreateBtns()}
          </div>
        </DashContent>
      </div>
    </div>
  );
}

export default CreateAProject;
