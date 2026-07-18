import MediaGallery from "./MediaGallery";

function DataTable({ block }) {
  return (
    <div className={`table-scroll ${block.wide ? "is-wide" : ""}`}>
      <table>
        <thead><tr>{block.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
        <tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function PromptSet({ items }) {
  return <div className="prompt-set">{items.map((item, index) => <article key={item.label}><div><span>0{index + 1}</span><strong>{item.label}</strong></div><p>{item.text}</p></article>)}</div>;
}

function ProcessSteps({ items }) {
  return <ol className="process-steps">{items.map((item, index) => <li key={`${item.title}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></li>)}</ol>;
}

function DetailedSteps({ items }) {
  return <div className="detailed-steps">{items.map((item, index) => <article key={item.title} id={`step-${index + 1}`}><div className="step-copy"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>{item.images?.length > 0 && <MediaGallery items={item.images} columns={item.images.length > 1 ? 2 : 1}/>}</article>)}</div>;
}

export default function ContentBlocks({ blocks }) {
  return blocks.map((block, index) => {
    const key = `${block.type}-${index}`;
    switch (block.type) {
      case "paragraphs":
        return <div className="copy-block" key={key}>{block.title && <h3>{block.title}</h3>}{block.items.map((item, i) => <p key={i}>{item}</p>)}</div>;
      case "bullets":
        return <div className="list-block" key={key}>{block.title && <h3>{block.title}</h3>}<ul>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul></div>;
      case "numbered":
        return <ol className="numbered-principles" key={key}>{block.items.map((item, i) => <li key={i}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>;
      case "prompt":
        return <div className="single-prompt" key={key}><span>{block.label || "Prompt"}</span><p>{block.text}</p></div>;
      case "prompt-set":
        return <PromptSet key={key} items={block.items}/>;
      case "table":
        return <DataTable key={key} block={block}/>;
      case "gallery":
        return <MediaGallery key={key} items={block.items} columns={block.columns || (block.items.length === 1 ? 1 : 2)}/>;
      case "steps":
        return <DetailedSteps key={key} items={block.items}/>;
      case "steps-simple":
        return <ProcessSteps key={key} items={block.items}/>;
      case "cards":
        return <div className="content-cards" key={key}>{block.items.map((item, i) => <article key={i}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
      case "references":
        return <ol className="references" key={key}>{block.items.map((item, i) => <li key={i}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{item.author}</strong><p><em>{item.title}</em> {item.source}</p><a href={item.url} target="_blank" rel="noreferrer">{item.url}</a></div></li>)}</ol>;
      case "note":
        return <aside className="note-block" key={key}>{block.title && <strong>{block.title}</strong>}<p>{block.text}</p></aside>;
      default:
        return null;
    }
  });
}
