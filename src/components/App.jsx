import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function content(contentDetails) {
  return (
    <Entry
      key={contentDetails.id}
      emoji={contentDetails.emoji}
      name={contentDetails.name}
      meaning={contentDetails.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(content)}</dl>
    </div>
  );
}

export default App;
