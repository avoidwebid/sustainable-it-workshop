export function Advices() {
  return (
    <>
      <a className='screenreader-text' href='advices/#main-content'>
        Accéder au contenu principal
      </a>

      <div id="some_story_title" className="nes-text is-primary title">Le repas : une petite définition</div>
      <p>
        D'un point de vue sociologique et anthropologique, le repas n'est pas uniquement pensé comme un moyen de se rassasier, mais aussi comme une manière ritualisée de produire et entretenir du lien social1 ;
        en témoigne la forte charge symbolique sociale, culturelle et/ou religieuse que contiennent les aliments dans les représentations humaines2.
        En tant que nécessité vitale répondant à des impératifs chimiques et biologiques qui permettent la survie et la reconstitution des tissus biologiques, il est objet d'étude pour la diététique.
        Comme acte de commensalité, il appartient à la culture et relève de l'anthropologie, de l'ethnographie, de la sociologie, de la psychologie, de l'éducation, de l'enseignement, de la technique.
      </p>
      <p>Une petite image pour en attester :</p>
      <img className="mediumImage" src="../../assets/family-meal.jpeg" alt="Un repas de famille."/>

      <p>Les repas peuvent aussi être pris en extérieur :</p>
      <img className="mediumImage" src="../../assets/herbe.jpeg"/>

      <div id="profile_title" className="nes-text is-primary title">Les spécificités</div>
      <p>La grande majorité des cultures distingue plusieurs types de repas, selon le moment de la journée et la quantité d'aliments qu'ils comportent,
        les plus importants correspondant aux moments de convivialité les plus intenses et possédant une forte charge symbolique ou religieuse. :</p>
      <p>
        Le matin <img src="../../assets/matin.jpeg" className="smallIcon"/>
      </p>
      <p>
        Le midi <img src="../../assets/midi.jpeg" className="smallIcon"/>
      </p>

      <p>En complément voici un graphique représentant le repas équilibré :
      </p>

      <img className="bigImage" src="../../assets/graph.jpeg"/>

      <div id="stars_title" className="nes-text is-primary title">Les repas préférés.</div>
      <p>Quoi de mieux que nos repas préférés ?</p>
      <p>Voici une liste des repas préférés des fançais·e·s</p>
      <ul className="nes-list is-disc">
        <li>
          Le poulet rôti :
          <a href="https://www.youtube.com/watch?v=Dkeynj9T2VY">
            <img src="../../assets/pouletroti.png" className="smallIcon"/>
          </a>
        </li>
        <li>
          La blanquette de veau :
          <a href="https://www.youtube.com/watch?v=xn1BTnRmEb8">
            <img src="../../assets/blanquette.png" className="smallIcon"/>
          </a>
        </li>
        <li>
          Le merlu beurre blanc :
          <a href="https://www.youtube.com/watch?v=px_nqt_Zw1o">
            <img src="../../assets/fish.png" className="smallIcon"/>
          </a>
        </li>
      </ul>

      <p>Certains d'entre eux seront présent au salon du restaurant</p>
      <img className="mediumImage" src="../../assets/salonrestaurant.png" alt="Affiche salon du restaurant"/>
    </>
  )
}

export default Advices;
