import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DashboardBlock from './DashboardComp/DashboardBlock'
import "./style/Dashboard2.css"
import ArrowLeft from '../../ArrowLeft'
import ArrowRight from '../../ArrowRight'
import axios from 'axios'

export default function Dashboard2() {
  const [data, setData] = useState();

  useEffect(() => {
    document.title = 'Dashboard2'
    const fetchData = async () => {
      const result = await axios(
        "https://coronavirusapi-france.now.sh/FranceLiveGlobalData",
      );
      console.log(result.data)
      setData(result.data);

      // console.log(data.FranceGlobalLiveData.slice(0, 1))


    };

    fetchData();
  }, []);


  return (
    <div className="Main-container">
      {/* <Sidebar /> */}
      <div className="Container-dashboard">
        <DashboardBlock />
        <div className="Container-dashelement2">

          <div className="block-element-dash2  fade-in" key={data}>
            <div className='Main-title'>Info Covid en France</div>
            <div className="source">
              Source :
            {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.source.nom + ', ' + elem.date))}
            </div>
            <div className="bloc-item-element">
              <div className="Item-title">Décès</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.deces))}
              </div>
            </div>

            <div className="bloc-item-element">
              <div className="Item-title">Cas Confirmés</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.casConfirmes))}
              </div>
            </div>

            <div className="bloc-item">
              <div className="bloc-item-element">
                <div className="Item-title">Hospitalisés</div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.hospitalises))}
                </div>
              </div>

              <div className="bloc-item-element">

                <div className="Item-title">Nouvelles Hospitalisations </div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.nouvellesHospitalisations))}
                </div>
              </div>
            </div>

            <div className="bloc-item">
              <div className="bloc-item-element">
                <div className="Item-title">Réanimation</div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.reanimation))}
                </div>
              </div>

              <div className="bloc-item-element">

                <div className="Item-title">Nouvelles Réanimations </div>
                <div className='data' >
                  {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.nouvellesReanimations))}
                </div>
              </div>
            </div>


            <div className="bloc-item-element">
              <div className="Item-title">Guéris</div>
              <div className='data' >
                {data && data.FranceGlobalLiveData.slice(0, 1).map((elem) => JSON.stringify(elem.gueris))}
              </div>
            </div>
          </div>

          <div className="block-element-dash2">

            <h1 className="title-dash2">Pourquoi une gestion d'état?</h1>

            <div className="explanation">L'état correspond aux données avec lesquelles votre ou vos composants travaillent
             – il contient les données dont un composant a besoin et il dicte le rendu d'un composant. La gestion de
             l'état (State Management) est le processus de gestion de la manière dont l'état est mis à jour et transmis d'un composant à un autre.
             La surveillance et l'utilisation des données dans une application peuvent être difficiles et c'est le besoin de bibliothèques
             de gestion d'état. La gestion de toutes les données de votre application peut être un peu intimidante, en
             particulier lorsque votre application augmente en taille et en complexité, la création de votre propre outil
             de gestion d'état n'est pas seulement fastidieuse mais difficile. C'est pourquoi vous voudrez peut-être utiliser
             une bibliothèque de gestion d'état.
             À mesure que la complexité de l'application augmente, l'état du composant devient instable et le débogage
             de ces applications devient un long processus.</div>

            <h1 className="title-dash2">Choix</h1>
            <div className="explanation">
              Redux => 4millions de telechargement, 163kb leger, 19fichier, complexe<br />
              Mobix => 468000 telechargement, 3,47mo, 118fichiers, plus simple à apprendre<br />
              Tout depend du projet, dans ce projet peu nécéssaire d'utiliser un state management. Car mon projet n'est pas
              d'une grande complexité, mais nécessitera surment un gestionnaire d'état lorsqu'il faudra passé des données à d'autres composants
              et gerer l'état de mes composants. Pour le moment, j'utilise un context qui me permet de transmettre l'état mes données
              via Authcontext.

              </div>


          </div>
          <div className="block-element-dash2">
            <h1 className="title-dash2">Mobx</h1>

            <div className="text-d2"> Une action qui met à jour un observable qui provoque alors une action partout ou l'observable a été observé.
            Met à jour que quelques composant.
            Vous avez des evenements qui ont des actions. ces actions modifient l'etat de l'application et son observable.
            Mobx plus flexible, decide du nombre de magasin et de comment les utiliser. Possibilité de changer de magasin . changer des variables
            Facile à utiliser
            MobX est considéré comme quelque peu simple à interpréter que Redux. La plupart des développeurs JavaScript sont très compétents en programmation orientée objet,
            ce qui facilite le processus d'apprentissage de MobX.
            moins de code.
            MobX utilise des données observables pour suivre les changements de manière transparente et automatique via des abonnements. De toute évidence, l'automatisation simplifie les choses pour le développeur. Il n'est donc pas surprenant que beaucoup trouvent que MobX est un choix absolu dans cette division car il est plus pratique à utiliser.
            Recommandation: Peu de personnes sur un projet
          </div>
            <h1 className="title-dash2">Redux</h1>
            <div className="text-d2">
              Redux crée un reducer. une action qui met à jour le store. peu importe ou l'on se situe dans notre application
              Sorte d'arboresence (single truth of tree) avec des ramifications et mis à jour par le reducer qui a
              generalement une action et une valeur à cela va changer le store et le mettre à jour
              Redux recommande un magasin unique avec une seule source de verité
              Redux immuable on peut pas changer le store sans passer par le dispatcher et ses actions.
              Utilise des fonctions pures
              Plus complexe
              mieux pour debugguer
              Redux utilise des objets JavaScript de base comme structure de données pour stocker l'état, cela permet de surveiller manuellement les modifications. Cela peut ajouter un peu de surcharge lorsqu'il s'agit d'applications avec des états complexes à gérer et à maintenir.
              Recommandation : grosse application, avec beaucoup de personnes sur le projet
</div>

          </div>

        </div>
        <div className="arrow-block">
          <div className="arrowLeft">
            <Link to='/Dashboard' ><ArrowLeft /></Link>
          </div>
          <div className="arrowRight">
            <Link to='/Dashboard3' ><ArrowRight /></Link>
          </div>
        </div>
      </div>
    </div >
  )
}

