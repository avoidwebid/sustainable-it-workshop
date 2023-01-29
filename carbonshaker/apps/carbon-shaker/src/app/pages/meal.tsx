export function Meal() {
  return (
    <>
      <h2 className="nes-text is-primary"> Ajouter un repas </h2>
      <form>
        <label>Titre *</label><br/>
        <div>
          <input type="text" />
        </div>
        <br/>
        <label>Description *</label><br/>
        <div>
          <textarea />
        </div>
        <br/>
        <br/>
        <p>Fréquence de ce repas *</p>
        <input type="radio" value="0"/>
        <label>1 fois par mois</label>
        <br/>
        <input type="radio" value="1"/>
        <label>1 fois par semaine</label>
        <br/>
        <input type="radio" value="2"/>
        <label>1 fois par jour</label>
        <br/>
        <p>Repas à base de *</p>
        <input type="checkbox" value="viande"/>
        <label><img className="smallIcon" src="./../../assets/steak.png"/></label>
        <br/>
        <input type="checkbox" value="poisson"/>
        <label><img className="smallIcon" src="./../../assets/fish.png"/></label>
        <br/>
        <input type="checkbox" value="legumes"/>
        <label><img className="smallIcon" src="./../../assets/vege.png"/></label>
        <br/>
        <label>Prise du repas *</label>
        <div>
          <select>
            <option disabled selected> -- Choisir le moment de la journée --</option>
            <option value="matin">Matin</option>
            <option value="midi">Midi</option>
            <option value="soir">Soir</option>
          </select>
        </div>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default Meal;
