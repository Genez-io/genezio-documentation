import React from "react";
import DocCard from "@theme-original/DocCard";
import {
  ItemsExamples,
  ItemsFeatures,
  ItemsGettingStarted,
} from "../Constants";


export default function GenezioUserDocCard(props) {
  let items;
  switch (props.type) {
    case "getting-started":
      items = ItemsGettingStarted;
      break;
    case "features":
      items = ItemsFeatures;
      break;
    case "examples":
      items = ItemsExamples;
      break;
    default:
      items = ItemsGettingStarted;
      break;
  }
  return (
    <div
    className="doc-card-wrapper"
    >
      {items.map((item, index) => {
        return (
          <div key={index}>
            <DocCard item={item}></DocCard>
          </div>
        );
      })}
    </div>
  );
}
