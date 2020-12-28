import React from 'react';
import StepBar from '../../Components/StepBar'
import CheckBoxList from '../../Components/CheckBoxList'
import Button from "../../Components/Button"
import '../../style/Step3.css'


class Step3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onChange(name, values) {
    console.log(values)
    this.setState({ [name]: values })
  }

  render() {

    const Data1 = ["Secondary School", "High School", "Undergraduate School", "Postgraduate School", "Doctorate"];
    const Data2 = ["An asset manager", "An family office manager", "A retail investor", "Other"]
    const Data3 = ["1-2 years", "2-5years", "5+years"]
    const Data4 = ["Intraday", "Day", "Weekly", "Monthly"]
    const Data5 = ["A week", "More than a week", "More than a month", "More than a year"]
    const Data6 = ["Conservative", "Moderately", "Moderate", "Moderately Aggressive", "Agressive"]
    const Data7 = ["Yes", "No"]
    const Data8 = ["Refered by a friend or collegue", "Website", "Media", "Search Engine", "Other"]

    return (
      <div className="Form2">
        <StepBar />
        <div className="Container-info">
          <span className="title-check">Help us to know more about you</span>
          <div className="Container-subject">
            <div className="Question-check">

              <form className="form">

                <div className="Group">
                  <div className="Subject">Education</div>
                  <div className="list-group">
                    <h4 className="Question-info">What is your level of education?</h4>
                    <CheckBoxList
                      onChange={(Data1) => this.onChange('level', Data1)}
                      values={Data1}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject">General Knowledge and Experience</div>
                  <div className="list-group">
                    <h4 className="Question-info">Who are you?</h4>
                    <CheckBoxList
                      onChange={(Data2) => this.onChange('who', Data2)}
                      values={Data2}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject"></div>
                  <div className="list-group">
                    <h4 className="Question-info">How long have you been training?</h4>
                    <CheckBoxList
                      onChange={(Data3) => this.onChange('how', Data3)}
                      values={Data3}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject">Investement Objective</div>
                  <div className="list-group">
                    <h4 className="Question-info">What is the frequency of trading?</h4>
                    <CheckBoxList
                      onChange={(Data4) => this.onChange('trading', Data4)}
                      values={Data4}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject"></div>
                  <div className="list-group">
                    <h4 className="Question-info">What is your investement horizon?</h4>
                    <CheckBoxList
                      onChange={(Data5) => this.onChange('horizon', Data5)}
                      values={Data5}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject">Risks</div>
                  <div className="list-group">
                    <h4 className="Question-info">WHow would you describe your risk tolerance?</h4>
                    <CheckBoxList
                      onChange={(Data6) => this.onChange('risk', Data6)}
                      values={Data6}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject"></div>
                  <div className="list-group">
                    <h4 className="Question-info">Are you aware of the key regulations financial markets ?</h4>
                    <CheckBoxList
                      onChange={(Data7) => this.onChange('aware', Data7)}
                      values={Data7}
                    />
                  </div>
                </div>

                <div className="Group">
                  <div className="Subject">Common Question</div>
                  <div className="list-group">
                    <h4 className="Question-info">How did you encountered us?</h4>
                    <CheckBoxList
                      onChange={(Data8) => this.onChange('encountered', Data8)}
                      values={Data8}
                    />
                  </div>
                </div>
                <div className="position-send">
                  <Button label="SEND"
                    className=""
                    onClick={(e) => {
                      console.log(this.state);
                      e.preventDefault();
                    }}
                  />
                </div>

              </form>


            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default Step3