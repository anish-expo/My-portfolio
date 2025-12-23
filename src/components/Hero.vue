
<template>
    <section id="home" class="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div class="flex items-center space-x-10">
        <!-- About Me  -->
        <div class="text-left">
          <h2 class="text-4xl font-bold">Hello, I'm Anish</h2>
          <p class="text-lg text-gray-200 mt-2">A passionate web developer.</p>
          <h6 class="text-lg text-gray-400"> Studying Data Science and Programming at IIT Madras.</h6>
          <a href="#contactme" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">Contact Me</a>
        </div>
  
        <!-- Profile Image  -->
        <img src="../assets/img.jpg" alt="Profile" class="w-64 h-64 rounded-full shadow-lg">
  
        <!-- Social Links (Right Side) -->
        <div class="flex flex-col space-y-4">
          <a href="https://www.linkedin.com/in/anish-expo/" target="_blank"><i class="fab fa-linkedin fa-2x text-blue-400"></i></a>
          <a href="https://github.com/anish-expo" target="_blank"><i class="fab fa-github fa-2x text-gray-300"></i></a>
        </div>
      </div>
  
      <!-- Scroll Down Arrow -->
      <div class="absolute bottom-10">
        <a href="#about" class="animate-bounce">
          <i class="fas fa-arrow-down fa-2x text-gray-300"></i>
        </a>
      </div>
    </section>

    <section id="about" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
  <div class="text-center max-w-2xl">
    <h2 class="text-4xl font-bold mb-4">About Me</h2>
    <p class="text-lg text-gray-400">
      Aspiring data science and web development professional with hands-on experience in building web applications and implementing machine learning models. 
      Skilled in data analysis, Python, and modern web technologies. 
      Passionate about solving real-world problems with data-driven solutions.
    </p>

    <!-- Wrapper div to push the button further down -->
    <div class="mt-10 flex justify-center">
      <a href="/Anish _Maity.pdf" download="Anish_CV.pdf"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
        📄 Download CV
      </a>
    </div>
  </div>
</section>

<section id="skills" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 class="text-4xl font-bold mb-6">Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <!-- Languages -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Python</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">JavaScript</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Java</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">SQL</span>

        <!-- Frameworks -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Flask</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Vue.js</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Bootstrap</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">SQLAlchemy</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Jinja2</span>

        <!-- Tools & Platforms -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Git</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Google Cloud Platform</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">VS Code</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">PyCharm</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Celery</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Docker</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Kubernetes</span>

        <!-- AI & Data Management -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">RAG</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Fine-Tuning LLMs</span>

        <!-- Databases -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">SQLite</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Redis</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">PostgreSQL</span>

        <!-- Data Science & Analytics -->
        <span class="bg-gray-800 px-6 py-2 rounded-lg">scikit-learn</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">NumPy</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Pandas</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Pytorch</span>
        <span class="bg-gray-800 px-6 py-2 rounded-lg">Matplotlib</span>
    </div>
</section>

  

<section id="projects" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 class="text-4xl font-bold mb-6">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        

        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">AI Agent for Academic Guidance</h3>
            
            <p class="text-gray-400">Python | Flask | VueJS, | SQLite | LLM | RESTful APIs | RAG architecture | Vector DB | Apr 2025</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Developed an AI-based virtual learning guide tailored for the IITM BS program, enhancing student engagement on the SEEK portal..</li>
                <li>Engineered an AI-based virtual guide using RAG + Vector DB to answer course-related queries efficiently.</li>
                <li>Implemented Flask RESTful APIs for dynamic recommendations, reducing LLM dependency.</li>
                
            </ul>
            <a href="https://github.com/anish-expo/Ai-integrated-Study-Portal---Software-Engg" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>
        <!-- Grocery Store Shopping Web App -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Grocery Store Shopping Web App</h3>
            
            <p class="text-gray-400">Python | Flask | Jinja2 | HTML | SQLite | May 2023</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Developed a full-stack web app using Flask (backend) and Jinja2 templates.</li>
                <li>Created an efficient static shopping web app with SQLite as the database.</li>
                
            </ul>
            <a href="https://github.com/anish-expo/Grocery-app-V1" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>

        <!-- Influencer Engagement & Sponsorship Platform -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Influencer Engagement & Sponsorship Platform</h3>
            <p class="text-gray-400">Python | Flask | VueJS | SQLite | Celery | Redis | MailHog | Sep 2024</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Developed a platform to connect Sponsors & Influencers for brand promotion.</li>
                <li>Implemented chat-based negotiation and automated email reminders/reports.</li>
            </ul>
            <a href="https://github.com/anish-expo/Influencer-Engage-app" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>

        <!-- Music Streaming App -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Music Streaming App</h3>
            <p class="text-gray-400">Python | Flask | VueJS | SQLite | Celery | Redis | MailHog | Jan 2023</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Implemented role-based access: Admin (manage songs/albums), Users (playlist features), and Creators (add/edit content).</li>
                <li>Used Celery for daily reminders and monthly reports via email.</li>
            </ul>
            <a href="https://github.com/anish-expo/Music_streaming_web_app" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>

        <!-- Predict the Success of Bank Telemarketing -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Predict the Success of Bank Telemarketing</h3>
            <p class="text-gray-400">Python | scikit-learn | Sep 2024</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Developed predictive models (Logistic Regression & Random Forest) to analyze telemarketing success.</li>
                <li>Achieved an accuracy of 72% in predicting bank customer responses.</li>
            </ul>
            <a href="https://github.com/anish-expo/MLP-Project-" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>

        <!-- Business Data Management Capstone Project -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold">Business Data Management Capstone Project</h3>
            <p class="text-gray-400">Python | Excel | Analysis | Sep 2024</p>
            <ul class="text-gray-300 text-sm mt-2 list-disc pl-4">
                <li>Conducted in-depth data analysis to support business decision-making.</li>
                <li>Used Excel and Python for data visualization and performance insights.</li>
            </ul>
            <a href="https://github.com/anish-expo/BDM-capstone-Project" target="_blank" class="text-blue-400 hover:underline text-sm">
                  View on GitHub
              </a>
        </div>

    </div>
</section>


    <section id="qualification" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 class="text-4xl font-bold mb-6">Qualifications</h2>
    <ul class="space-y-4 w-full max-w-2xl">
        <li class="bg-gray-800 px-6 py-4 rounded-lg shadow">
            <h3 class="text-xl font-semibold">BS in Data Science and Applications</h3>
            <p class="text-gray-400">Indian Institute of Technology, Chennai, Tamil Nadu</p>
            <p class="text-gray-500">2022 – 2026</p>
        </li>
        <li class="bg-gray-800 px-6 py-4 rounded-lg shadow">
            <h3 class="text-xl font-semibold">B.Sc. in Physics</h3>
            <p class="text-gray-400">P.K College, Contai, West Bengal</p>
            <p class="text-gray-500">2017 – 2020</p>
        </li>
        <li class="bg-gray-800 px-6 py-4 rounded-lg shadow">
            <h3 class="text-xl font-semibold">M.Sc. in Electronics</h3>
            <p class="text-gray-400">Vidyasagar University, Midnapur, West Bengal</p>
            <p class="text-gray-500">2020 – 2022</p>
        </li>
    </ul>
</section>

<section id="contactme" class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <h2 class="text-4xl font-bold mb-6">Contact Me</h2>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md text-center w-full max-w-lg">
        <p class="text-lg mb-4">
            <i class="fas fa-envelope text-red-400"></i> 
            Email: <a href="mailto:21f3000417@ds.study.iitm.ac.in" class="text-blue-400 hover:underline">21f3000417@ds.study.iitm.ac.in</a>
        </p>
        <p class="text-lg mb-4">
            <i class="fab fa-linkedin text-blue-500"></i> 
            LinkedIn: <a href="https://www.linkedin.com/in/anish-expo/" target="_blank" class="text-blue-400 hover:underline">linkedin.com/in/anish-expo</a>
        </p>
        <p class="text-lg mb-4">
            <i class="fab fa-twitter text-cyan-400"></i> 
            Twitter: <a href="https://x.com/anish_expo" target="_blank" class="text-blue-400 hover:underline">@anish_expo</a>
        </p>
        <p class="text-lg mb-4">
            <i class="fab fa-instagram text-pink-500"></i> 
            Instagram: <a href="https://www.instagram.com/anish_expo/" target="_blank" class="text-blue-400 hover:underline">@anish_expo</a>
        </p>
    </div>
</section>





  </template>
  
  <style scoped>
  section {
    padding-top: 80px;
  }
  </style>
