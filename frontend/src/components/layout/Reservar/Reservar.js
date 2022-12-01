import "./reservas.css"


const Reservar = () => {
    return (
        // <h1>Formulario de reservas</h1>
        <section className="section sectionReservas" id="reservas">
            <h2>Reservas</h2>
            <form action="" >
                <div className="formIndex">
                    <div className="divForm">
                        <label for="name" className="labels">Nombre</label>
                        <input type="text" name="name" id="name" className="inputs" placeholder="Alejandro"/>
                    </div>

                    <div className="divForm">
                        <label for="number" className="labels">Telefofono</label>
                        <input type="text" name="number" id="number" className="inputs" placeholder="+ 54 9 299 xxxxxxx"/>
                    </div>

                    <div className="divForm">
                        <label for="people" className="labels">Comensales</label>
                        <input type="number" name="people" id="people" className="inputs" placeholder="0"/>
                    </div>

                    <div className="divForm">
                        <label for="date" className="labels">Fecha</label>
                        <input type="date" name="date" id="date" className="inputs" placeholder=""/>
                    </div>

                    <div className="divForm">
                        <label for="time" className="labels">Hora</label>
                        <input type="time"  name="time" id="time" className="inputs" placeholder="21:00"/>
                    </div>
                </div>
                <button className="buttonReserva">
                <a href="#">Reservar</a> 
                </button>
            </form>

            

        </section>
    )
}

export default Reservar