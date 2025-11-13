import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { FRONTEND_SKILL } from "@/constants";

export const Skills = () => {
  // Define how many items per row
  const layout = [1, 2, 4, 6];
  let index = 0;

  return (
    <>
      <div id="skills">
        <section
          style={{ transform: "scale(0.9)" }}
          className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
        >
          {/* Section Title */}
          <SkillText />

          {/* Skill Rows */}
          <div className="flex flex-col gap-10 mt-6">
            {layout.map((count, rowIndex) => {
              const rowSkills = FRONTEND_SKILL.slice(index, index + count);
              index += count;

              return (
                <div
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-8 items-center"
                >
                  {rowSkills.map((skill, i) => (
                    <SkillDataProvider
                      key={skill.skill_name}
                      src={skill.image}
                      name={skill.skill_name}
                      width={skill.width}
                      height={skill.height}
                      index={i}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Background Video */}
          <div className="w-full h-full absolute">
            <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
              <video
                className="w-full h-auto"
                preload="false"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src="/videos/skills-bg.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
