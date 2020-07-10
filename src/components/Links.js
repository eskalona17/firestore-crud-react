import React from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";

export const Links = () => {
  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
    console.log('new task added')
  };

  return (
    <>
      <LinkForm addOrEditLink={addOrEditLink} />
    </>
  );
};

export default Links;
