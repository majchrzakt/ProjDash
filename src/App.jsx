import { useState } from "react";

export default function App() {
  const [groups, setGroups] = useState(null);

  const parseFile = (text) => {
    const result = { yes: [], maybe: [], no: [] };
    let current = null;

    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed === "end") continue;
      if (trimmed === "yes") {
        current = "yes";
        continue;
      }
      if (trimmed === "maybe") {
        current = "maybe";
        continue;
      }
      if (trimmed === "no") {
        current = "no";
        continue;
      }
      if (current) result[current].push(trimmed);
    }
    return result;
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setGroups(parseFile(ev.target.result));
    reader.readAsText(file);
  };

  const Section = ({ title, names, color }) => (
    <div style={{ marginBottom: 24 }}>
      <h2
        style={{ color, borderBottom: `2px solid ${color}`, paddingBottom: 6 }}
      >
        {title} ({names.length})
      </h2>
      <ul style={{ listStyle: "none", padding: 0, columns: 3 }}>
        {names.map((name) => (
          <li key={name} style={{ padding: "4px 0", fontSize: 16 }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: 24,
      }}
    >
      <h1 style={{ marginBottom: 24 }}>RSVP List</h1>

      <input
        type="file"
        accept=".txt"
        onChange={handleFile}
        style={{ marginBottom: 32 }}
      />

      {groups && (
        <>
          <Section title="Yes" names={groups.yes} color="#16a34a" />
          <Section title="Maybe" names={groups.maybe} color="#d97706" />
          <Section title="No" names={groups.no} color="#dc2626" />
        </>
      )}
    </div>
  );
}
