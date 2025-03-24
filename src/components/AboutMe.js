

export default function AboutMe() {
    return(
        <div>
            <h1> Hello, I am Nate Rengo!</h1>
            <img src={`${process.env.PUBLIC_URL}/images/me.png`} alt="Nate Rengo" className="profile" />
            <div id="AboutMe">
                <h2>Read a little bit about me below!</h2>
                <p>
                    I will be graduating from Western Colorado University in May of 2025 with a double major in Mathematics and Computer Science, as well as my Private Pilot License. Throughout my academic journey at Western, I’ve gained experience in a variety of programming languages, including Python, Java, SQL, JavaScript, C, C++, Python Flask, HTML, CSS, R, and Git. On the Math side, I’ve gained expertise in Cryptography and general math courses such as proofs and the Calculus sequence.
                </p>

                <p>
                    Outside of academics, I am an avid mountain athlete and a trail runner on one of the only Collegiate trail running teams in the country. I’ve had the opportunity to race across the Western United States and even ran a 50-mile race in my hometown in Minnesota. In the winter, I enjoy backcountry skiing and outdoor recreation. I am excited to work with a company that is making a real difference in the world and look forward to the opportunities and learning experiences that await after graduation.
                </p>
            </div>

            <div className="about-container">
      <div className="links">
      <h2 className="section-title">Links</h2>
      <ul className="links-list">
        <li>
        <a
            href="https://www.linkedin.com/in/naterengo"
            target="_blank"
            rel="noopener noreferrer"
        >
            linkedin.com/in/naterengo
        </a>
        </li>
        <li>
        <a
            href="https://github.com/Nate-Rengo"
            target="_blank"
            rel="noopener noreferrer"
        >
            github.com/Nate-Rengo
        </a>
        </li>
    </ul>
      </div>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <p className="school">Western Colorado University, Gunnison, CO</p>
        <div className="degree-container">
            <p>B.S. in Computer Science, B.S. in Mathematics</p>
            <p className="date">August 2022 - May 2025 (Expected)</p>
        </div>
        <p className="italic">Cumulative GPA: 3.92 / 4.0</p>
        <ul className="list">
          <li>Dean’s List for the last five semesters</li>
          <li>Presidential Honors Scholarship 2023/2024 and 2024/2025</li>
          <li>Nancy Chisholm Scholarship</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Technical Skills</h2>
        <p>
          <strong>Programming:</strong> Python, SQL, Java, C++, C, JavaScript,
          Python Flask, HTML, CSS, LaTeX, R, Pandas, React
        </p>
        <p>
          <strong>Version Control:</strong> GitHub
        </p>
        <p>
          <strong>Operating Systems:</strong> MacOS, Linux
        </p>
        <p>
          <strong>Development Tools & Environments:</strong> PyCharm, IntelliJ,
          Visual Studio Code, MySQL Workbench, Anaconda Navigator
        </p>
      </section>
    </div>
    <img src={`${process.env.PUBLIC_URL}/images/imAPilot.png`} alt="Nate Rengo standing in front of a plane"/>
        </div>
        
    );
  }