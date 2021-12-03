import { Consumer } from "./MyContext";

const Display = (props) => {
  return (
    <Consumer>
      {(data) => {
        return (
          <section
            style={{ background: data[0].background, color: data[0].primary }}
          >
            <div className="wrapper">
              <form>
                <div className="form-group">
                  <label>Theme: </label>
                  <select
                    defaultValue="Theme-1"
                    onClick={(e) => props.theme(e.target.value)}
                  >
                    <option value="theme1">Theme-1</option>
                    <option value="theme2">Theme-2</option>
                    <option value="theme3">Theme-3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Language: </label>
                  <select
                    defaultValue="en"
                    onClick={(e) => props.lang(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>
              </form>
              <div>
                <h2>{data[1].name}</h2>
                <h3>{data[1].edu}</h3>
                <h4>{data[1].place}</h4>
              </div>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Display;
