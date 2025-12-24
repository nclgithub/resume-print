import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Link,
  Svg,
  Path,
} from '@react-pdf/renderer';

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff',
    }, // Regular
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff',
      fontWeight: 600,
    }, // SemiBold
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff',
      fontWeight: 700,
    }, // Bold
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#000000',
  },
  header: {
    position: 'relative',
    padding: '30 48 10 48', // Top Right Bottom Left
    marginBottom: 10,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#8675A9',
    opacity: 0.1,
  },
  nameSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    color: '#8675A9',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: 'cover',
  },
  contactSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactText: {
    textDecoration: 'none',
    color: '#000000',
  },
  section: {
    flexDirection: 'row',
    padding: '10 48',
    marginBottom: 5,
  },
  sectionTitleContainer: {
    width: '25%',
    borderTop: '1 solid #ccc',
    paddingTop: 10,
  },
  sectionTitle: {
    color: '#8675A9',
    fontWeight: 700,
    fontSize: 10,
    textTransform: 'uppercase',
  },
  sectionContent: {
    width: '75%',
    borderTop: '1 solid #ccc',
    paddingTop: 10,
    paddingLeft: 10,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletContent: {
    flex: 1,
  },
  jobBlock: {
    marginBottom: 10,
  },
  jobHeader: {
    color: '#8675A9',
    fontSize: 11,
    marginBottom: 2,
  },
  bold: {
    fontWeight: 600,
  },
  dateLocation: {
    color: '#999',
    fontSize: 9,
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '33%',
    marginBottom: 4,
  },
  languageItem: {
    width: '50%',
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 10,
  },
  languageName: {
    marginRight: 5,
    flex: 1,
  },
  languageLevel: {
    color: '#999',
    fontSize: 9,
    marginRight: 5,
  },
  progressBar: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 2,
    width: '100%',
  },
  progressSegment: {
    height: 4,
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  progressFilled: {
    backgroundColor: '#8675A9',
  },
});

interface ResumeData {
  profilepic: string;
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  location: string;
  linkedIn: string;
}

// SVG Paths extracted from project globals.css (decoded from data URIs)
const Icons = {
  mail: 'M4.3 19.5q-.75 0-1.275-.525A1.74 1.74 0 0 1 2.5 17.7V6.3q0-.75.525-1.275T4.3 4.5h15.4q.75 0 1.275.525T21.5 6.3v11.4q0 .75-.525 1.275T19.7 19.5zm7.7-6.95-8-5.1V17.7q0 .124.088.213A.3.3 0 0 0 4.3 18h15.4a.3.3 0 0 0 .213-.087A.3.3 0 0 0 20 17.7V7.45zM12 11l7.85-5H4.15zM4 7.45V6v11.7q0 .124.088.213A.3.3 0 0 0 4.3 18H4V7.45',
  phone:
    'M19.44 20.5q-2.827 0-5.68-1.314t-5.242-3.71q-2.389-2.393-3.704-5.241Q3.5 7.386 3.5 4.56A1.03 1.03 0 0 1 4.55 3.5h3.262q.378 0 .668.247.289.247.368.61L9.421 7.3q.06.41-.025.704-.084.293-.304.494l-2.31 2.248q.558 1.02 1.275 1.932.716.91 1.55 1.74a17.3 17.3 0 0 0 3.753 2.842l2.244-2.264q.235-.245.568-.342.334-.099.693-.048l2.777.565q.38.1.619.387.24.285.239.65v3.242q0 .45-.303.75t-.757.3M6.073 9.327l1.785-1.708a.18.18 0 0 0 .062-.106.23.23 0 0 0-.005-.125l-.434-2.234a.2.2 0 0 0-.068-.116A.2.2 0 0 0 7.288 5H5.15a.13.13 0 0 0-.096.038.13.13 0 0 0-.039.097 12.8 12.8 0 0 0 1.058 4.192m8.7 8.642q.994.464 2.074.709t2.018.291a.13.13 0 0 0 .135-.134V16.73a.2.2 0 0 0-.038-.125.2.2 0 0 0-.116-.068l-2.1-.427a.16.16 0 0 0-.1-.004.25.25 0 0 0-.092.062z',
  location:
    'M12 11.75q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238A1.7 1.7 0 0 0 12 8.25q-.725 0-1.238.512A1.7 1.7 0 0 0 10.25 10q0 .725.512 1.238.513.512 1.238.512m0 8.05q3.1-2.75 4.675-5.263T18.25 10.2q0-2.85-1.812-4.65T12 3.75t-4.438 1.8T5.75 10.2q0 1.825 1.575 4.337Q8.9 17.05 12 19.8m0 2q-3.9-3.4-5.825-6.3T4.25 10.2q0-3.625 2.338-5.788Q8.925 2.25 12 2.25t5.413 2.162Q19.75 6.575 19.75 10.2q0 2.4-1.925 5.3T12 21.8',
  linkedin:
    'M18.69 18.69h-2.816v-4.41c0-1.05-.019-2.404-1.464-2.404-1.467 0-1.69 1.145-1.69 2.328v4.485H9.903V9.623h2.703v1.239h.037a2.97 2.97 0 0 1 2.667-1.465c2.853 0 3.38 1.877 3.38 4.319zM6.726 8.382A1.64 1.64 0 0 1 5.093 6.75c0-.897.738-1.634 1.634-1.634s1.634.737 1.634 1.633-.738 1.634-1.634 1.634M8.135 18.69H5.317V9.623h2.818zM20.093 2.501H3.902A1.393 1.393 0 0 0 2.5 3.871v16.258c.009.76.642 1.379 1.402 1.37h16.19a1.396 1.396 0 0 0 1.408-1.37V3.869A1.395 1.395 0 0 0 20.093 2.5',
};

export const ResumePdfDocument = ({ data }: { data: ResumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerBackground} />
          <View style={styles.nameSection}>
            <Text style={styles.name}>
              {data.firstname || 'Ng'} {data.lastname || 'Chun Liang'}
            </Text>
            {data.profilepic ? (
              <Image src={data.profilepic} style={styles.profileImage} />
            ) : null}
          </View>

          <View style={styles.contactSection}>
            <View style={styles.contactItem}>
              <Svg width={12} height={12} viewBox="0 0 24 24">
                <Path d={Icons.mail} fill="#8675A9" />
              </Svg>
              <Text style={styles.contactText}>
                {data.email || 'ngchunliangy@gmail.com'}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Svg width={12} height={12} viewBox="0 0 24 24">
                <Path d={Icons.phone} fill="#8675A9" />
              </Svg>
              <Text style={styles.contactText}>
                {data.contact || '+65 8433 2042'}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Svg width={12} height={12} viewBox="0 0 24 24">
                <Path d={Icons.location} fill="#8675A9" />
              </Svg>
              <Text style={styles.contactText}>
                {data.location || 'Singapore'}
              </Text>
            </View>
            <View style={styles.contactItem}>
              <Svg width={12} height={12} viewBox="0 0 24 24">
                <Path d={Icons.linkedin} fill="#8675A9" />
              </Svg>
              <Link src={data.linkedIn || '#'} style={styles.contactText}>
                {data.linkedIn || 'LinkedIn Profile'}
              </Link>
            </View>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Achievements</Text>
          </View>
          <View style={styles.sectionContent}>
            {[
              'Coordinated international business trips to Abu Dhabi, Saudi Arabia, and Thailand, delivering technical product demonstrations and supporting key client engagements. Led and executed on-site software deployment and optimized system performance based on customer insights.',
              'Spearheaded the research and development of an AI-based image recognition model, and successfully integrated it with our company’s software solution, contributing to the enhancement of security systems for ICA at Woodlands Checkpoint.',
            ].map((text, i) => (
              <View key={i} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>{text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
          </View>
          <View style={styles.sectionContent}>
            {/* Job 1 */}
            <View style={styles.jobBlock}>
              <Text style={styles.dateLocation}>
                Singapore | 06/2023 – Present
              </Text>
              <Text style={styles.jobHeader}>
                <Text style={styles.bold}>Software Engineer</Text>
                {'\n'}
                Teleradio Engineering Pte. Ltd.
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>
                  Spearheaded the development and maintenance of a standalone
                  application designed to manage and enhance x-ray images
                  captured by proprietary under-vehicle surveillance systems.
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>
                  Conceived and implemented new software designs and features to
                  modernise application, improving user experience and
                  operational efficiency.
                </Text>
              </View>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>
                  Researched and integrated AI-based image recognition models
                  into the software, enabling officers to effectively identify
                  anomalies in x-ray images.
                </Text>
              </View>
            </View>

            {/* Job 2 */}
            <View style={styles.jobBlock}>
              <Text style={styles.dateLocation}>
                Kuala Lumpur, Malaysia | 05/2022 – 08/2022
              </Text>
              <Text style={styles.jobHeader}>
                <Text style={styles.bold}>Full-Stack Web Developer</Text>
                {'\n'}
                Antlysis Design Sdn. Bhd.
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>
                  Utilised HTML, CSS, and JavaScript to create web pages that
                  accurately reflect the client’s design, ensuring compatibility
                  across various devices and screen sizes.
                </Text>
              </View>
            </View>

            {/* Job 3 */}
            <View style={styles.jobBlock}>
              <Text style={styles.dateLocation}>
                Johor Bahru, Malaysia | 03/2020 – 06/2020
              </Text>
              <Text style={styles.jobHeader}>
                <Text style={styles.bold}>Database Administrator</Text>
                {'\n'}
                Newpages Network Sdn. Bhd.
              </Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletContent}>
                  Updated and maintained product stock numbers on the company’s
                  website to guarantee accuracy and facilitate real-time
                  inventory tracking.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Education</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.jobBlock}>
              <Text style={styles.dateLocation}>Singapore | 04/2024</Text>
              <Text style={styles.jobHeader}>
                <Text style={styles.bold}>
                  Basic Ionising Radiation Safety (R1)
                </Text>
                {'\n'}
                Republic Polytechnic
              </Text>
            </View>
            <View style={styles.jobBlock}>
              <Text style={styles.dateLocation}>
                Malacca, Malaysia | 11/2020 – 01/2023
              </Text>
              <Text style={styles.jobHeader}>
                <Text style={styles.bold}>
                  Bachelor of Computer Science (Hons.) AI
                </Text>
                {'\n'}
                Multimedia University
              </Text>
              <Text style={{ fontSize: 9, color: '#555' }}>
                CGPA: 3.87 (First Class Honours)
              </Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Skills</Text>
          </View>
          <View style={styles.sectionContent}>
            <View style={styles.skillsContainer}>
              {[
                'C',
                'C++',
                'C#',
                'HTML',
                'CSS',
                'PHP',
                'Visual Basic',
                'JavaScript',
                'Python',
                'Java',
                'WPF',
                'WinForms',
                'React.JS',
                'Node.JS',
                '.NET',
                'Bootstrap',
                'Ant Design',
                'Material UI',
              ].map((skill) => (
                <Text key={skill} style={styles.skillItem}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Languages</Text>
          </View>
          <View
            style={[
              styles.sectionContent,
              { flexDirection: 'row', flexWrap: 'wrap' },
            ]}
          >
            {[
              { name: 'English', level: 'Advanced', score: 3 },
              { name: 'Chinese', level: 'Fluent', score: 4 },
              { name: 'Malay', level: 'Advanced', score: 3 },
            ].map((lang, i) => (
              <View key={i} style={styles.languageItem}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Text style={styles.languageName}>{lang.name}</Text>
                  <Text style={styles.languageLevel}>{lang.level}</Text>
                </View>
                <View style={styles.progressBar}>
                  {[1, 2, 3, 4, 5].map((step) => (
                    <View
                      key={step}
                      style={[
                        styles.progressSegment,
                        (step <= lang.score
                          ? styles.progressFilled
                          : {}) as any,
                      ]}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
