
function GridLayout({itemlist}) {
  
  return (
    <div className="grid-container">
      {itemlist.map((item) => (
        <div key={item.id} className="grid-container__item">
          <div>
            <img src={item.thumb} alt="" width="100%" />
          </div>
          <div className="title">{item.title}</div>
          <div>{item.artist}</div>
          <div>{item.released}</div>
          <div className="lyrics">{item.style}</div>
        </div>
      ))}
    </div>
  );
}

export default GridLayout;
