

function Form() {
    return (
        <> 
        <div className="flex w-8/12 overflow-hidden justify-center mx-auto">
            <div className="dark:bg-purple-800">
            <label>Em Quantos Segundos Você Minera?</label>
            <br />
            <input type="number" id="cadaminerada" />
            <br />
            <label>Media de Dark Steel Minerado por Vez?</label>
            <br />
            <input type="number" id="dsvez" />
            <br />
            <label>Tempo Restante em Minuto?</label>
            <br />
            <input type="number" id="tempores" />
            </div>
        </div>
        </>
    )
}

export default Form;

