import React, { useState } from "react";
import draftimg1 from "../assets/draftimg1.png";

import draftimg2 from "../assets/draftimg2.png";
import draftimg3 from "../assets/draftimg3.png";
import draftimg4 from "../assets/draftimg4.png";
import draftimg5 from "../assets/draftimg5.png";
import DraftCard from "./DraftCard";

const draftItems = [
  {
    id: 1,
    title: "Title of the draft",
    image: draftimg1,
    content:
      "This is the body of the template. This is the body of the template. This is the body of the template. This is the body of the template.",
  },
  {
    id: 2,
    title: "Title of the draft",
    image: draftimg2,
    content:
      "This is the body of the template. This is the body of the template. This is the body of the template. This is the body of the template.",
  },
  {
    id: 3,
    title: "Title of the draft",
    image: draftimg3,
    content:
      "Body of the template. This is the body of the template. This is the body of the template. This is the body of the.",
  },
  {
    id: 4,
    title: "Title of the draft",
    image: draftimg4,
    content:
      "Template. This is the body of the template. This is the body of the template. This is the body of the.",
  },
  {
    id: 5,
    title: "Title of the draft",
    image: draftimg5,
    content:
      "Of the template plate.This is the body of the template. This is the body of the.",
  },
  {
    id: 6,
    title: "Title of the draft",
    image: draftimg3,
    content:
      "Body of the template. This is the body of the template. This is the body of the template. This is the body of the.",
  },
  {
    id: 7,
    title: "Title of the draft",
    image: draftimg5,
    content:
      "Of the template plate.This is the body of the template. This is the body of the.",
  },
];

const DraftGrid = () => {
  const [drafts, setDrafts] = useState(draftItems);

  const handleEdit = (id) => {
    console.log("Editing draft:", id);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Deleting draft:", id);
    setDrafts(drafts.filter((draft) => draft.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {drafts.map((draft) => (
        <DraftCard
          key={draft.id}
          draft={draft}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default DraftGrid;
