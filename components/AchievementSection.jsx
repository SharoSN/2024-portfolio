"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects Completed",
    value: 25,
    postfix: "+",
  },
  {
    metric: "Bug Fixing Success Rate",
    value: 95,
    postfix: "%",
  },
  {
    metric: "Customer Satisfaction",
    value: 98,
    postfix: "%",
  },
  {
    metric: "Years of Experience",
    value: 2,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div id="about" className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex items-center">
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-2">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;

