import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data-with-examples";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Prosze wybrać temat.</p>;

  if (selectedTopic) {
    const selectedExample = EXAMPLES[selectedTopic];
    if (selectedExample) {
      tabContent = (
        <div id="tab-content">
          <h3>{selectedExample.title}</h3>
          {selectedTopic === "experience" && (
            <>
              {selectedExample.companies.map((company, index) => (
                <div key={index}>
                  <h4>{company.name}</h4>
                  <p>{company.date}</p>
                  <ul>
                    {company.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
          {selectedTopic === "test" && selectedExample.projects && (
            <>
              {selectedExample.projects.map((project, index) => (
                <div key={index}>
                  <h4>{project.name}</h4>
                  <p>{project.date}</p>
                  <ul>
                    {project.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
          {selectedTopic === "abilities" && (
            <>
              <ul>
                {selectedExample.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </>
          )}
          {selectedTopic === "lessons" && (
            <>
              <ul>
                {selectedExample.trainings.map((training, trainingIndex) => (
                  <li key={trainingIndex}>{training}</li>
                ))}
              </ul>
            </>
          )}
          {selectedTopic === "about" && (
            <>
              <h4>{selectedExample.description}</h4>
            </>
          )}
        </div>
      );
    }
  }

  return (
    <Section title="Informacje" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "experience"}
              onClick={() => handleSelect("experience")}
            >
              Doświadczenie
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "test"}
              onClick={() => handleSelect("test")}
            >
              Projekty
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "abilities"}
              onClick={() => handleSelect("abilities")}
            >
              Umiejętności
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "lessons"}
              onClick={() => handleSelect("lessons")}
            >
              Szkolenia
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "about"}
              onClick={() => handleSelect("about")}
            >
              O mnie
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
