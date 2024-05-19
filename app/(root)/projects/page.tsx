import React from "react";

interface Project {
  id: number;
  name: string;
  description: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Project One",
      description: "This is the first project description.",
    },
    {
      id: 2,
      name: "Project Two",
      description: "This is the second project description.",
    },
    {
      id: 3,
      name: "Project Three",
      description: "This is the third project description.",
    },
    {
      id: 4,
      name: "Project Four",
      description: "This is the fourth project description.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Projects
        </h2>
        <ul className="mt-8 space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <h3 className="text-lg font-medium text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
