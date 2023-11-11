export default function Header () {
  return (
    <header>
        <nav>
            <div className="nav-wrapper orange darken-1">
                <form action="#" >
                    <div className="input-field" >
                        <input id="locale" type="search" required />
                        <label className="label-icon" htmlFor="locale"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    </header>
  );
}
