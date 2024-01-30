import React from "react";
import HeaderOne from "./HeaderOne";
import ParOne from "./ParOne";
import CompBar from "./CompBar";
import CompSkillsLeft from "./CompSkillsLeft";
class ComSkills extends React.Component {
    render() {

        return (
            <div className=" row">
                <div className="row ">
                    <HeaderOne color="light" name="Skills" />
                </div>
                <div className="row ">
                    <ParOne color="light" txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like" />
                </div>
                <div className="row p-5 ">
                    <div className="col-md-6  sec-skills">
                        <CompSkillsLeft />
                    </div>
                    <div className="col-md-6 mt-5 justify-content-end">
                        <CompBar data='80%' name="html" />
                        <CompBar data='70%' name="CSs" />
                        <CompBar data='60%' name="JS" />
                        <CompBar data='75%' name="Docker" />
                        <CompBar data='85%' name="Python" />
                        <CompBar data='55%' name="Bash" />
                        <CompBar data='80%' name="SQL" />

                    </div>
                </div>
            </div>
        )
    }
}

export default ComSkills;
