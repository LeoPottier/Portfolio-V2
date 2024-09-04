import "./style.scss";

function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, tagIndex) => (
        <span className="projet-card-tags" key={tagIndex}>
          <img
            className="projet-card-tag-logo"
            src={`/logos/${tag.logo}`}
            alt={tag.name}
          />
          {tag.name}
        </span>
      ))}
    </div>
  );
}

export default Tags;
