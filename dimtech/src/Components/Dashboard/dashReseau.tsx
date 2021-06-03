import React, { FC } from 'react'
import gare1 from '../../assets/gare1.svg';
import gare2 from '../../assets/gare2.svg';
import gare3 from '../../assets/gare3.svg';

import "./style/dashResaux.css"

interface Props {

}

const Dashreseau: FC<Props> = () => {

  return (
    <div>
      <main>
        <section className="reseauxKM" >
          <div className="main-title" >
            <div className="title_grey"> Actuellement </div>
            < div className="title_pink"> sur le réseau </div>
          </div>

          < section className="slideInfo" >
            <div className="slider-content slide-in" >
              <article className="fl_ctr fl_col display display_1" >

                <div className="container-top" >
                  <div className="reseauxKM-img_trainFront" >
                    <img src={gare1}
                    // height="40px" width="40px" 
                    />

                  </div>

                  < div className="reseauxKM-counter1" >
                    <div className="title_pink" >
                      <span className="counter-value" id="train_gare" > </span>
                    </div>

                    < article className="subtitle fl_ctr fl_col" >
                      <div className="title_medium" > trains en gare </div>
                      < div className="title_thin" > actuellement </div>
                    </article>
                  </div>

                </div>
                < div className="container-bottom" >
                  <div className="slider1" >
                    <span className="slider_point" > </span>
                    <span className="point_active" > </span>
                    <span className="point_active" > </span>

                  </div>
                </div>


              </article>



              < article className="fl_ctr fl_col display display_2" >


                <div className="container-top" >
                  <div className="reseauxKM-img_trainFront1" >
                    <img src={gare1}
                    // height="540px" width="540px"
                    />



                  </div>
                  < div className="reseauxKM-counter3" >
                    <div className="title_pink" >
                      <span className="counter-value" id="train_tunnel" > </span>
                    </div>


                    < article className="subtitle fl_ctr fl_col" >
                      <div className="title_medium" > trains dans des tunnels </div>
                      < div className="title_thin" > actuellement </div>
                    </article>
                  </div>
                </div>

                < div className="container-bottom" >
                  <div className="slider1" >
                    <span className="point_active" > </span>
                    <span className="slider_point" > </span>
                    <span className="point_active" > </span>


                  </div>
                </div>
              </article>

              <article className="fl_ctr fl_col display display_3" >


                <div className="container-top" >
                  <div className="reseauxKM-img_trainFront-last" >

                    <img src={gare3}
                      height="240px" width="240px"
                    />
                  </div>
                  < div className="reseauxKM-counter3" >
                    <div className="title_pink">
                      <span className="counter-value" id="train_pont" > </span>
                    </div>


                    < article className="subtitle fl_ctr fl_col" >
                      <div className="title_medium" > trains sur des ponts </div>
                      < div className="title_thin" > actuellement </div>
                    </article>
                  </div>
                </div>

                < div className="container-bottom" >
                  <div className="slider1">
                    <span className="point_active" > </span>
                    <span className="point_active" > </span>
                    <span className="slider_point" > </span>


                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Dashreseau
