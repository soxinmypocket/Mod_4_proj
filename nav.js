export default class NavBar extends React.Component {
    state = {
      active: false,
    };
    toggleHidden = () => {
      this.setState({
        active: true,
      });
    };
    toggleButton = () => {
      this.setState({
        active: false,
      });
    };
    render() {
      let categories = [
        "iPads",
        "Tablets",
        "Speakers",
        "Microphones",
        "Cables",
      ];
      let sorted = categories.sort((a, b) =>
        a.toLowerCase() > b.toLowerCase() ? 1 : -1
      );
      return (
        <nav
          style={{ "font-weight": "bold", "font-family": "Verdana" }}
          className="navbar navbar-expand-lg navbar navbar-dark bg-info"
        >
          <div class="container-fluid">
            <ul className="navbar-nav mr-auto">
              <div class="navbar-header">
                {this.props.current_user_id == undefined ? (
                  <Link to="/">
                    <li className="nav-item active">
                      <a className="nav-link">
                        Shoptastic <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </Link>
                ) : (
                  <Link
                    to={{
                      pathname: "/home",
                      state: { user: this.props.current_user_id },
                    }}
                  >
                    <li className="nav-item active">
                      <a className="nav-link">
                        Shoptastic <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </Link>
                )}
              </div>
              <li className="nav-item">
                {this.props.current_user_id ? (
                  <Link
                    to={{
                      pathname: "/cart",
                      state: {
                        user: this.props.current_user_id,
                        cart: this.props.carts,
                        removeOrder: this.props.removeOrder,
                      },
                    }}
                  >
                    {" "}
                    <a className="nav-link">Past Orders</a>
                  </Link> //alert("Please log in to see past orders")
                ) : (
                  <div>
                    <a className="nav-link" onClick={() => this.toggleHidden()}>
                      Past Orders
                    </a>
                    <div
                      className={
                        this.state.active === true ? "overlay active" : "overlay "
                      }
                    >
                      <div className="popup">
                        <a className="close" onClick={() => this.toggleButton()}>
                          <br />
                          &times;
                        </a>
                        <div
                          style={{ "font-family": "Verdana" }}
                          className="content"
                        >
                          You are not logged in. Please log in to see your past
                          orders.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className={
                  window.location.href === "http://localhost:3001/"
                    ? "nav-item dropdown"
                    : "nav-item "
                }
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  color="red"
                >
                  Categories
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  {sorted.map((s) => (
                    <a
                      class="dropdown-item"
                      onClick={() => this.props.searchCategory(s)}
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </li>
              <li className="nav-item active">
                <Link
                  to={{
                    pathname: "/locations",
                    state: {
                      user: localStorage.id,
                    },
                  }}
                >
                  <a className="nav-link">Locations</a>
                </Link>
              </li>
              <li className="nav-item">
                {this.props.current_user_id ? (
                  <Link
                    to={{
                      pathname: "/checkout",
                      state: {
                        user: this.props.current_user_id,
                        cart: this.props.carts,
                      },
                    }}
                  >
                    {" "}
                    <a className="btn btn-light">
                      {" "}
                      <i className="fas fa-shopping-cart text-dark">Checkout</i>
                    </a>
                  </Link>
                ) : (
                  <div>
                    <a
                      className="btn btn-light"
                      onClick={() => this.toggleHidden()}
                    >
                      <i className="fas fa-shopping-cart text-dark">Checkout</i>
                    </a>
                    <div
                      className={
                        this.state.active === true ? "overlay active" : "overlay "
                      }
                    >
                      <div className="popup">
                        <a className="close" onClick={() => this.toggleButton()}>
                          &times;
                        </a>
                        <div
                          style={{ "font-family": "Verdana" }}
                          className="content"
                        >
                          You are not logged in. Please log in to checkout.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <Search searchItem={this.props.searchItem} />
            <ul class="nav navbar-nav navbar-right">
              {this.props.current_user_id === undefined ? (
                <Link to="/login">
                  {" "}
                  <li>
                    <a className="text-light">
                      Login/Sign Up
                      <i class="fas fa-user"></i>
                    </a>
                  </li>
                </Link>
              ) : (
                <Link to="/" onClick={() => localStorage.clear()}>
                  <li className="nav-item">
                    <a className="nav-link">Log Out</a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </nav>
      );
    }
  }