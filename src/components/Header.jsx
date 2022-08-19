export const Header = () => {
  return (
    <header id="header" className="header">
      <a href="/" className="header__logo-box">
        <img
          className="header__user--img"
          src="img/user.png"
          width="35"
          alt="admin"
        />
        <h1 className="header__logo">BlackBox</h1>
      </a>
      <div className="header__user">
        <h2 className="header__user--title">Harry Potter</h2>
        <svg className="medium-svg">
          <use xlinkHref="img/blackbox.svg#arrow-down"></use>
        </svg>
        <div class="header__user--dropdown">
          <ul>
            <li>Jobs</li>
            <li>Edit Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
