import React from 'react';

// Simplified SVG icons for HTML preview to match PDF
const Icons = {
  mail: <svg width="12" height="12" viewBox="0 0 24 24" fill="#8675A9"><path d="M4.3 19.5q-.75 0-1.275-.525A1.74 1.74 0 0 1 2.5 17.7V6.3q0-.75.525-1.275T4.3 4.5h15.4q.75 0 1.275.525T21.5 6.3v11.4q0 .75-.525 1.275T19.7 19.5zm7.7-6.95-8-5.1V17.7q0 .124.088.213A.3.3 0 0 0 4.3 18h15.4a.3.3 0 0 0 .213-.087A.3.3 0 0 0 20 17.7V7.45zM12 11l7.85-5H4.15zM4 7.45V6v11.7q0 .124.088.213A.3.3 0 0 0 4.3 18H4V7.45"/></svg>,
  phone: <svg width="12" height="12" viewBox="0 0 24 24" fill="#8675A9"><path d="M19.44 20.5q-2.827 0-5.68-1.314t-5.242-3.71q-2.389-2.393-3.704-5.241Q3.5 7.386 3.5 4.56A1.03 1.03 0 0 1 4.55 3.5h3.262q.378 0 .668.247.289.247.368.61L9.421 7.3q.06.41-.025.704-.084.293-.304.494l-2.31 2.248q.558 1.02 1.275 1.932.716.91 1.55 1.74a17.3 17.3 0 0 0 3.753 2.842l2.244-2.264q.235-.245.568-.342.334-.099.693-.048l2.777.565q.38.1.619.387.24.285.239.65v3.242q0 .45-.303.75t-.757.3M6.073 9.327l1.785-1.708a.18.18 0 0 0 .062-.106.23.23 0 0 0-.005-.125l-.434-2.234a.2.2 0 0 0-.068-.116A.2.2 0 0 0 7.288 5H5.15a.13.13 0 0 0-.096.038.13.13 0 0 0-.039.097 12.8 12.8 0 0 0 1.058 4.192m8.7 8.642q.994.464 2.074.709t2.018.291a.13.13 0 0 0 .135-.134V16.73a.2.2 0 0 0-.038-.125.2.2 0 0 0-.116-.068l-2.1-.427a.16.16 0 0 0-.1-.004.25.25 0 0 0-.092.062z"/></svg>,
  location: <svg width="12" height="12" viewBox="0 0 24 24" fill="#8675A9"><path d="M12 11.75q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238A1.7 1.7 0 0 0 12 8.25q-.725 0-1.238.512A1.7 1.7 0 0 0 10.25 10q0 .725.512 1.238.513.512 1.238.512m0 8.05q3.1-2.75 4.675-5.263T18.25 10.2q0-2.85-1.812-4.65T12 3.75t-4.438 1.8T5.75 10.2q0 1.825 1.575 4.337Q8.9 17.05 12 19.8m0 2q-3.9-3.4-5.825-6.3T4.25 10.2q0-3.625 2.338-5.788Q8.925 2.25 12 2.25t5.413 2.162Q19.75 6.575 19.75 10.2q0 2.4-1.925 5.3T12 21.8"/></svg>,
  linkedin: <svg width="12" height="12" viewBox="0 0 24 24" fill="#8675A9"><path d="M18.69 18.69h-2.816v-4.41c0-1.05-.019-2.404-1.464-2.404-1.467 0-1.69 1.145-1.69 2.328v4.485H9.903V9.623h2.703v1.239h.037a2.97 2.97 0 0 1 2.667-1.465c2.853 0 3.38 1.877 3.38 4.319zM6.726 8.382A1.64 1.64 0 0 1 5.093 6.75c0-.897.738-1.634 1.634-1.634s1.634.737 1.634 1.633-.738 1.634-1.634 1.634M8.135 18.69H5.317V9.623h2.818zM20.093 2.501H3.902A1.393 1.393 0 0 0 2.5 3.871v16.258c.009.76.642 1.379 1.402 1.37h16.19a1.396 1.396 0 0 0 1.408-1.37V3.869A1.395 1.395 0 0 0 20.093 2.5"/></svg>
};

interface PreviewProps {
  data: {
    profilepic: string;
    firstname: string;
    lastname: string;
    email: string;
    contact: string;
    location: string;
    linkedIn: string;
  };
}

export const ResumeHtmlPreview = ({ data }: PreviewProps) => {
  return (
    <div
      className="text-sm leading-tight bg-white transition-all origin-top-left resume-template-wrapper m-auto shadow-lg"
      id="resume-container"
      style={{ width: '795px', minWidth: '795px', minHeight: '1123px', padding: 0, fontFamily: 'Inter, sans-serif' }}
    >
      <div className="overflow-hidden leading-normal text-black">
        <div>
          <div className="relative px-12 mb-3 text-2xl font-semibold" style={{ color: '#8675A9', paddingTop: '30px' }}>
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundColor: '#8675A9' }}></div>
            <div className="flex items-center justify-between">
              <div className="py-4">
                {data?.firstname || 'Ng'} {data?.lastname || 'Chun Liang'}
              </div>
              {data?.profilepic && (
                <img
                  src={data.profilepic}
                  className="rounded-full shadow-lg object-cover"
                  style={{ width: '80px', height: '80px' }}
                  alt="Profile"
                />
              )}
            </div>
          </div>
          <div className="flex px-12 py-3 gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              {Icons.mail}
              <span>{data?.email || 'ngchunliangy@gmail.com'}</span>
            </div>
            <div className="flex items-center gap-1">
              {Icons.phone}
              <span>{data?.contact || '+65 8433 2042'}</span>
            </div>
            <div className="flex items-center gap-1">
              {Icons.location}
              <span>{data?.location || 'Singapore'}</span>
            </div>
            <div className="flex items-center gap-1">
              {Icons.linkedin}
              <a href={data?.linkedIn || '#'} target="_blank" rel="noreferrer" className="text-black no-underline">
                {data?.linkedIn || 'LinkedIn Profile'}
              </a>
            </div>
          </div>
        </div>

        {/* Reusing structure from PDF but in HTML/Tailwind */}
        <div className="flex px-12 mt-4 space-x-3">
          <div className="w-1/4 font-semibold uppercase border-t border-gray-300 pt-2" style={{ color: '#8675A9' }}>Achievements</div>
          <div className="w-3/4 border-t border-gray-300 pt-2 pl-2">
            <ul className="list-disc pl-4 text-xs space-y-1">
              <li>Coordinated international business trips to Abu Dhabi, Saudi Arabia, and Thailand, delivering technical product demonstrations and supporting key client engagements.</li>
              <li>Spearheaded the research and development of an AI-based image recognition model, contributing to the enhancement of security systems for ICA at Woodlands Checkpoint.</li>
            </ul>
          </div>
        </div>

        <div className="flex px-12 mt-4 space-x-3">
          <div className="w-1/4 font-semibold uppercase border-t border-gray-300 pt-2" style={{ color: '#8675A9' }}>Work Experience</div>
          <div className="w-3/4 border-t border-gray-300 pt-2 pl-2">
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Singapore | 06/2023 – Present</div>
              <div className="text-sm font-semibold" style={{ color: '#8675A9' }}>Software Engineer</div>
              <div className="text-sm mb-1">Teleradio Engineering Pte. Ltd.</div>
              <ul className="list-disc pl-4 text-xs space-y-1">
                <li>Spearheaded the development and maintenance of a standalone application designed to manage and enhance x-ray images.</li>
                <li>Conceived and implemented new software designs and features to modernise our application.</li>
                <li>Researched and integrated AI-based image recognition models into the software.</li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Kuala Lumpur, Malaysia | 05/2022 – 08/2022</div>
              <div className="text-sm font-semibold" style={{ color: '#8675A9' }}>Full-Stack Web Developer</div>
              <div className="text-sm mb-1">Antlysis Design Sdn. Bhd.</div>
              <ul className="list-disc pl-4 text-xs space-y-1">
                <li>Utilised HTML, CSS, and JavaScript to create web pages that accurately reflect the client’s design.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex px-12 mt-4 space-x-3">
          <div className="w-1/4 font-semibold uppercase border-t border-gray-300 pt-2" style={{ color: '#8675A9' }}>Education</div>
          <div className="w-3/4 border-t border-gray-300 pt-2 pl-2">
             <div className="mb-2">
              <div className="text-xs text-gray-500">Singapore | 04/2024</div>
              <div className="text-sm font-semibold" style={{ color: '#8675A9' }}>Basic Ionising Radiation Safety (R1)</div>
              <div className="text-xs">Republic Polytechnic</div>
            </div>
            <div className="mb-2">
              <div className="text-xs text-gray-500">Malacca, Malaysia | 11/2020 – 01/2023</div>
              <div className="text-sm font-semibold" style={{ color: '#8675A9' }}>Bachelor of Computer Science (Hons.) AI</div>
              <div className="text-xs">Multimedia University (Malacca)</div>
              <div className="text-xs text-gray-500">CGPA: 3.87 (First Class Honours)</div>
            </div>
          </div>
        </div>

        <div className="flex px-12 mt-4 space-x-3">
          <div className="w-1/4 font-semibold uppercase border-t border-gray-300 pt-2" style={{ color: '#8675A9' }}>Skills</div>
          <div className="w-3/4 border-t border-gray-300 pt-2 pl-2 flex flex-wrap">
            {['C', 'C++', 'C#', 'HTML', 'CSS', 'PHP', 'Visual Basic', 'JavaScript', 'Python', 'Java', 'WPF', 'WinForms', 'React.JS', 'Node.JS', '.NET', 'Bootstrap', 'Ant Design', 'Material UI'].map(skill => (
                <div key={skill} className="w-1/3 text-xs mb-1">{skill}</div>
            ))}
          </div>
        </div>

        <div className="flex px-12 mt-4 space-x-3 mb-8">
          <div className="w-1/4 font-semibold uppercase border-t border-gray-300 pt-2" style={{ color: '#8675A9' }}>Languages</div>
          <div className="w-3/4 border-t border-gray-300 pt-2 pl-2 flex flex-wrap">
             {[
              { name: "English", level: "Advanced", score: 3 },
              { name: "Chinese", level: "Fluent", score: 4 },
              { name: "Malay", level: "Advanced", score: 3 }
            ].map((lang, i) => (
              <div key={i} className="w-1/2 pr-4 mb-2">
                <div className="flex justify-between text-xs mb-1">
                    <span>{lang.name}</span>
                    <span className="text-gray-500">{lang.level}</span>
                </div>
                <div className="flex gap-1 h-1">
                  {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className={`flex-1 ${step <= lang.score ? 'bg-[#8675A9]' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
