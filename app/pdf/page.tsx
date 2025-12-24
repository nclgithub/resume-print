"use client";

import Image from "next/image";
import myphoto from "../../public/my-photo.png";

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

export default function PDF({ data }: PreviewProps) {
  return (
    <div className="text-sm leading-tight bg-white transition-all origin-top-left resume-template-wrapper m-auto" id="resume-container" style={{ width: "795px", minWidth: "795px" }}>
      <div className="overflow-hidden leading-normal text-black">
        <div>
          <div className="relative px-12 mb-3 text-2xl font-semibold" style={{ color: "#8675A9" }}>
            <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundColor: "#8675A9" }}>
            </div>
            <div className="flex items-center">
              <div className="py-12">{data?.firstname || "Ng"} {data?.lastname || "Chun Liang"}<div style={{ display: "none" }}
                className="mt-1 text-sm text-subtle"></div>
              </div>
              <Image src={data?.profilepic || ''} className="absolute right-12"
                style={{ top: "1.5rem", borderRadius: "90px", filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.3))" }} alt="Ng Chun Liang" width={180} height={180} />
            </div>
          </div>
          <div className="flex px-12 py-3 space-x-3">
            <div className="w-1/4 font-semibold uppercase shrink-0" style={{ color: "#8675A9" }}>Contact</div>
            <div className="grow"><span className="flex items-center space-x-1"><span
              className="jlu-icon jlu-icon_mail-outline"
              style={{ width: "14px", height: "14px", color: "#8675A9" }}></span> <span
                className="no-underline">{data?.email || "ngchunliangy@gmail.com"}</span></span><span
                  className="flex items-center space-x-1"><span className="jlu-icon jlu-icon_call"
                    style={{ width: "14px", height: "14px", color: "#8675A9" }}></span> <span className="no-underline">{data?.contact || "+65 8433 2042"}</span></span><span className="flex items-center"><span
                      className="jlu-icon jlu-icon_location_on mr-1"
                      style={{ width: "14px", height: "14px", color: "#8675A9" }}></span><span>{data?.location || "3 Ghim Moh Road #10-278 Singapore 270003."}</span><span style={{ display: "none" }}>,
                </span><span style={{ display: "none" }}>,
                </span></span><a className="flex items-center space-x-1 no-underline"
                  href={data?.linkedIn || "https://www.linkedin.com/in/ng-chun-liang-09142528a"} target="_blank"><span
                    className="jlu-icon jlu-icon_linkedin"
                    style={{ width: "14px", height: "14px", color: "#8675A9" }}></span>
                <span>{data?.linkedIn || "https://www.linkedin.com/in/ng-chun-liang-09142528a"}</span></a>
            </div>
          </div>
        </div>
        {/* <div className="flex px-12 space-x-3 avoid-page-break">
            <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
              style={{ color: "#8675A9" }}>Summary</div>
            <div className="py-3 border-t-2 grow border-subtle justify-text">Dynamic Software Engineer
              with over two years of experience in developing innovative applications
              and integrating AI technologies. Proficient in coordinating development
              efforts, enhancing user experiences, and ensuring high-quality outcomes.
              Achievements include leading the enhancement of x-ray image management
              software, which significantly improved operational efficiency. Eager to
              leverage unique skills in software development to meet the challenges of
              the industry.</div>
          </div> */}
        <div className="flex px-12 space-x-3 avoid-page-break">
          <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
            style={{ color: "#8675A9" }}>Achievements</div>
          <div className="py-3 border-t-2 grow border-subtle">
            <ul className="pl-4 mt-1 list-disc justify-text">
              <li>Coordinated international business trips to Abu Dhabi,
                Saudi Arabia, and Thailand, delivering technical product
                demonstrations and supporting key client engagements.
                Led and executed on-site software deployment and
                optimized system performance based on customer insights,
                ensuring a high-quality user experience.</li>
              <li>Spearheaded the research and development of an AI-based
                image recognition model, and successfully integrated it
                with our company’s software solution, contributing to
                the enhancement of security systems for ICA at Woodlands
                Checkpoint.</li>
            </ul>
          </div>
        </div>
        <div className="px-12">
          <div className="avoid-page-break">
            <div className="flex space-x-3">
              <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
              <div className="border-t-2 grow border-subtle"></div>
            </div>
            <div className="py-3 font-semibold uppercase" style={{ color: "#8675A9" }}>Work
              Experience</div>
            <div className="flex pb-3 space-x-3 avoid-page-break">
              <div className="w-1/4 shrink-0 text-subtle">Singapore <br />
                06/2023 – Present</div>
              <div className="grow">
                <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Software
                  Engineer</span><br />Teleradio Engineering Pte. Ltd.</div>
                <ul className="pl-4 mt-1 list-disc justify-text">
                  <li>Spearheaded the development and maintenance of a
                    standalone application designed to manage and enhance
                    x-ray images captured by our proprietary under-vehicle
                    surveillance systems, ensuring high-quality imaging for
                    security inspections.</li>
                  <li>Conceived and implemented new software designs and features
                    to modernise our application, thus improving
                    user experience and operational efficiency.</li>
                  <li>Researched and integrated AI-based image recognition
                    models into the software, enabling officers to
                    effectively identify anomalies in x-ray images.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Kuala Lumpur, Malaysia <br />
              05/2022 – 08/2022</div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Full-Stack Web
                Developer</span><br />Antlysis Design Sdn. Bhd.</div>
              <ul className="pl-4 mt-1 list-disc justify-text">
                <li>Utilised HTML, CSS, and JavaScript to create web pages that
                  accurately reflect the client’s design, ensuring
                  compatibility across various devices and screen sizes.</li>
                <li>Ensured the final web pages adhered strictly to the client’s
                  design specifications, paying meticulous attention to
                  details such as typography, colour schemes, and layout
                  alignment.</li>
              </ul>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Johor Bahru, Malaysia <br />
              03/2020 – 06/2020</div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Database
                Administrator</span><br />Newpages Network Sdn. Bhd.</div>
              <ul className="pl-4 mt-1 list-disc justify-text">
                <li>Updated and maintained product stock numbers on the
                  company’s website to guarantee accuracy and facilitate
                  real-time inventory tracking.</li>
                <li>Assisted in managing and organising product information
                  within the company’s database, ensuring efficient data
                  storage and retrieval.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-12">
          <div className="avoid-page-break">
            <div className="flex space-x-3">
              <div className="w-1/4 border-t-2 shrink-0 border-subtle"></div>
              <div className="border-t-2 grow border-subtle"></div>
            </div>
            <div className="py-3 font-semibold uppercase" style={{ color: "#8675A9" }}>Education</div>
            Education</div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Singapore <br /> 04/2024 – 04/2024</div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Basic Ionising Radiation Safety (Industrial Radiography)
                For R1 Certificate </span><br />Republic Polytechnic
              </div>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Online <br /> 02/2023 – 03/2023
            </div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">HUAWEI HCIA-AI
              </span><br />Huawei</div>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Malacca, Malaysia <br /> 11/2020 – 01/2023</div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Bachelor of
                Computer Science (Hons.)
                Artificial Intelligence - Artificial
                Intelligence</span><br />Multimedia University (Malacca)</div>
              <ul className="pl-4 mt-1 list-disc">
                <li>CGPA: 3.87 (First className Honours)</li>
              </ul>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Malacca, Malaysia <br /> 07/2018 – 10/2020</div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Diploma in
                Information Technology -
                Information Technology</span><br />Multimedia University
                (Malacca)</div>
              <ul className="pl-4 mt-1 list-disc">
                <li>CGPA: 3.85</li>
              </ul>
            </div>
          </div>
          <div className="flex pb-3 space-x-3 avoid-page-break">
            <div className="w-1/4 shrink-0 text-subtle">Batu Pahat, Malaysia <br /> 01/2013 – 12/2017
            </div>
            <div className="grow">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Sijil Pelajaran
                Malaysia (SPM)
              </span><br />Sekolah Menengah Kebangsaan (SMK) Munshi Sulaiman
              </div>
              <ul className="pl-4 mt-1 list-disc">
                <li>2A+, 1A, 1A-, 2B, 2C+, 2D</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-12 space-x-3 avoid-page-break">
        <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
          style={{ color: "#8675A9" }}>Skills</div>
        <div className="flex flex-wrap py-3 border-t-2 grow border-subtle">
          <div className="pr-2 w-1/3">C</div>
          <div className="pr-2 w-1/3">C++</div>
          <div className="pr-2 w-1/3">C#</div>
          <div className="pr-2 w-1/3">HTML</div>
          <div className="pr-2 w-1/3">CSS</div>
          <div className="pr-2 w-1/3">PHP</div>
          <div className="pr-2 w-1/3">Visual Basic</div>
          <div className="pr-2 w-1/3">JavaScript</div>
          <div className="pr-2 w-1/3">Python</div>
          <div className="pr-2 w-1/3">Java</div>
          <div className="pr-2 w-1/3">WPF</div>
          <div className="pr-2 w-1/3">WinForms</div>
          <div className="pr-2 w-1/3">React.JS</div>
          <div className="pr-2 w-1/3">Node.JS</div>
          <div className="pr-2 w-1/3">.NET</div>
          <div className="pr-2 w-1/3">Bootstrap</div>
          <div className="pr-2 w-1/3">Ant Design</div>
          <div className="pr-2 w-1/3">Material UI</div>
          <div className="pr-2 w-1/3">Label Studio</div>
          <div className="pr-2 w-1/3">FiftyOne</div>
          <div className="pr-2 w-1/3">LangChain</div>
          <div className="pr-2 w-1/3">Microsoft Visual Studio</div>
          <div className="pr-2 w-1/3">Visual Studio Code</div>
          <div className="pr-2 w-1/3">GitHub</div>
          <div className="pr-2 w-1/3">MongoDB</div>
          <div className="pr-2 w-1/3">PostgreSQL</div>
          <div className="pr-2 w-1/3">MySQL</div>
          <div className="pr-2 w-1/3">XAMPP</div>
          <div className="pr-2 w-1/3">Web API</div>
          <div className="pr-2 w-1/3">Postman</div>
          <div className="pr-2 w-1/3">Android Studio</div>
          <div className="pr-2 w-1/3">Adobe Photoshop</div>
          <div className="pr-2 w-1/3">Adobe Illustrator</div>
          <div className="pr-2 w-1/3">Adobe Premiere</div>
          <div className="pr-2 w-1/3">Adobe After Effect</div>
        </div>
      </div>
      <div className="flex px-12 space-x-3 avoid-page-break">
        <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
          style={{ color: "#8675A9" }}>Languages</div>
        <div className="py-3 border-t-2 grow border-subtle">
          <div className="flex flex-wrap -mt-3">
            <div className="pr-6 flex flex-wrap pt-3 w-1/2"><span className="mr-1 grow">English</span><span
              className="text-subtle">Advanced</span>
              <div className="flex mt-1 space-x-1 w-full"><span style={{ backgroundColor: "#8675A9" }}
                className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                  className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                    className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#f4f4f4" }}
                      className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#f4f4f4" }}
                        className="h-1 grow bg-light"></span></div>
            </div>
            <div className="pl-6 flex flex-wrap pt-3 w-1/2"><span className="mr-1 grow">Chinese</span><span
              className="text-subtle">Fluent</span>
              <div className="flex mt-1 space-x-1 w-full"><span style={{ backgroundColor: "#8675A9" }}
                className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                  className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                    className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                      className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#f4f4f4" }}
                        className="h-1 grow bg-light"></span></div>
            </div>
            <div className="pr-6 flex flex-wrap pt-3 w-1/2"><span className="mr-1 grow">Malay</span><span
              className="text-subtle">Advanced</span>
              <div className="flex mt-1 space-x-1 w-full"><span style={{ backgroundColor: "#8675A9" }}
                className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                  className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#8675A9" }}
                    className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#f4f4f4" }}
                      className="h-1 grow bg-light"></span><span style={{ backgroundColor: "#f4f4f4" }}
                        className="h-1 grow bg-light"></span></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex px-12 space-x-3 avoid-page-break">
          <div className="py-3 w-1/4 font-semibold uppercase border-t-2 shrink-0 border-subtle"
            style={{ color: "#8675A9" }}>Certificates</div>
          <div className="pt-3 border-t-2 grow border-subtle">
            <div className="pb-3">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">Basic Ionising Radiation Safety (Industrial Radiography)
                For R1 Certificate </span><br />Republic Polytechnic</div>
              <div className="mt-1 text-sm">04/2024</div>
            </div>
            <div className="pb-3">
              <div className="text-base" style={{ color: "#8675A9" }}><span className="font-semibold">HUAWEI
                HCIA-AI</span><br />Huawei</div>
              <div className="mt-1 text-sm">02/2023</div>
            </div>
          </div>
        </div> */}
    </div>
  );
}