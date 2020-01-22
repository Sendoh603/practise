
class Header extends React.Component {
    render() {
      return (
        <header>My Timeline</header>
      );
    }
  }
class AddNewNtatusBox extends React.Component {
  render() {
    return (
      <div class="add_new_status-box">
        <div class="add_new_status">Add New Status</div>
        <input type="text" placeholder="Message goes here..." class="message">
        <div class="button">
            <button>Post</button>
        </div>
      </div>
      );
    }
  }

class Post extends React.Component {
  render() {
    return (
      <div class="first_post">
        <div class="first-line">{props.time}</div>
        <img src="./tachometer.png" alt="user">
        <div class="content_of_message">{props.content}</div>
      </div>
      );
    }
  }
class TheWholePostBody extends React.Component {
    render() {
      return (
        <div>
          <post content={asfdafa} time={Monday} />
          <post content={dfdf} time={Tuesday}/>
          <post content={dfafds} time={Sunday}/>
        </div>
      );
    }
  }

  class TheWholeBody extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <AddNewNtatusBox />
          <TheWholePostBody />
          <ForthPartOfWholeBody />
          <FifthPartOfWholeBody />
        </div>
      );
    }
  }

  ReactDOM.render(
    <TheWholeBody />,
    document.getElementById('root')
  );