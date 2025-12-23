<<<<<<< HEAD



   <template>
    <nav class="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 class="text-xl font-bold ">Anish</h1>
        <ul class="flex space-x-6">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="cursor-pointer"
            :class="{ 'text-blue-400 font-bold': activeSection === item.id }"
          >
            <a :href="'#' + item.id" @click.prevent="scrollToSection(item.id)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    setup() {
      const menuItems = ref([
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" },
        { id: "qualification", name: "Qualification" },
        { id: "contactme", name: "Contact Me" },
      ]);
  
      const activeSection = ref("home");
  
      const highlightSection = () => {
        menuItems.value.forEach((item) => {
          const section = document.getElementById(item.id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              activeSection.value = item.id;
            }
          }
        });
      };
  
      const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };
  
      onMounted(() => {
        window.addEventListener("scroll", highlightSection);
      });
  
      onUnmounted(() => {
        window.removeEventListener("scroll", highlightSection);
      });
  
      return { menuItems, activeSection, scrollToSection };
    },
  };
  </script>
  
  <style scoped>
  nav {
    transition: background 0.3s ease;
  }
  </style>
=======



   <template>
    <nav class="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 class="text-xl font-bold ">Anish</h1>
        <ul class="flex space-x-6">
          <li
            v-for="item in menuItems"
            :key="item.id"
            class="cursor-pointer"
            :class="{ 'text-blue-400 font-bold': activeSection === item.id }"
          >
            <a :href="'#' + item.id" @click.prevent="scrollToSection(item.id)">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    setup() {
      const menuItems = ref([
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" },
        { id: "qualification", name: "Qualification" },
        { id: "contactme", name: "Contact Me" },
      ]);
  
      const activeSection = ref("home");
  
      const highlightSection = () => {
        menuItems.value.forEach((item) => {
          const section = document.getElementById(item.id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              activeSection.value = item.id;
            }
          }
        });
      };
  
      const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };
  
      onMounted(() => {
        window.addEventListener("scroll", highlightSection);
      });
  
      onUnmounted(() => {
        window.removeEventListener("scroll", highlightSection);
      });
  
      return { menuItems, activeSection, scrollToSection };
    },
  };
  </script>
  
  <style scoped>
  nav {
    transition: background 0.3s ease;
  }
  </style>
>>>>>>> abe7342e9e6f1bd6e7a84178dfa0c792b222decb
  