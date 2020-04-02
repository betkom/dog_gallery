class Dogs extends React.Component {
  constructor() {
    super()

    this.state = {
      dogs: [],
      totalCount: 0,
      perPage: 0,
      currentPage: 1
    }
    this.sort = this.sort.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.updateSearchMetaData = this.updateSearchMetaData.bind(this)
    this.renderPagination = this.renderPagination.bind(this)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(params={}) {
    let query = Object.keys(params).map(k => `${k}=${params[k]}`).join('&')

    fetch(`/dogs.json?${query}`)
    .then((response) => response.json())
    .then(data => {
      this.updateSearchMetaData(data)
    })
  }

  sort() {
    this.fetchData({ sort: 'likes' })
  }

  updateSearchMetaData(data) {
    this.setState({
      dogs: data.records,
      totalCount: data.total_count,
      perPage: data.per_page
    })
  }

  handlePageClick(data) {
    const selected = data.selected
    this.fetchData({ page: selected + 1 })
  }

  renderPagination() {
    const ReactPaginate = window.ReactPaginate.default;

    return (
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(this.state.totalCount / this.state.perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    );
  }

  render () {
    const dogs = this.state.dogs

    if (dogs.length) {
      return (
        <section>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised" onClick={this.sort}>
            Sort By Likes
          </button>
          <div className="mdl-grid">
            {dogs.map(dog => (
            <a href={`dogs/${dog.id}`} key={dog.id}>
              <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--4d" style={{width:320}}>
                <div className="mdl-card__media mdl-shadow--1dp">
                  <img src={dog.images[0]} width="320" height="220" border="0" alt="" />
                </div>
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">{dog.name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                  <span className="mdl-chip">
                    <span className="mdl-chip__text">{dog.likes_count} Likes</span>
                  </span>
                </div>
              </div>
            </a>
            ))}
          </div>
          {this.renderPagination()}
        </section>
      )
    } else {
      return (<div className="mdl-grid">No dogs fetched</div>)
    }
  }
}