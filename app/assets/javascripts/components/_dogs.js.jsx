class Dogs extends React.Component {
  constructor() {
    super()

    this.state = {dogs: []}
  }
  
  componentDidMount() {
    fetch('/dogs.json')
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      this.setState({dogs: data.records})
    })
  }

  render () {
    console.log(this.state.dogs)
    return (
      <div className="mdl-grid">
        {this.state.dogs.map(dog => (
        <a href="#">
          <div className="mdl-card mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--4d" style={{width:320}}>
            <div 
              className="mdl-card__title" 
            >
            <img src={dog.images[0]} />
            </div>
              <h2 className="mdl-card__title-text">{dog.name}</h2>

            <div className="mdl-card__supporting-text">
              <span className="mdl-chip">
                <span className="mdl-chip__text">{dog.likes_count} Likes</span>
              </span>
            
            </div>
          </div>
        </a>
        ))  }
      </div>
    )
  }
}