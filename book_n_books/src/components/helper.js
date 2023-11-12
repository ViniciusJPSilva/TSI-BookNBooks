

export default function Helper() {
    return (
        <section className="section logo-section valign-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l4">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Velocidade do Vento</span>
                            <div className="valign-wrapper wind">
                                <span id="wind-speed" className="col s6 txt">00 Km/h</span>
                                <span className="material-symbols-outlined col s6 img">
                                    air
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m12 l4"></div>
                    <div className="col s12 m12 l4"></div>
                </div>
            </div>
        </section>
    );
}