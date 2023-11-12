export default function Header () {
  return (
    <header>
        <nav>
            <div className="nav-wrapper orange darken-1">
                <form action="#" >
                    <div className="input-field" >
                        <input id="bookSearch" className="search-field" type="search" placeholder="Busque um livro..." required />
                        <label className="label-icon" htmlFor="bookSearch"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    </header>
  );
}
