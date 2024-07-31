import userauthentication from "../../img/projects/userauthentication.png";
import recipe from "../../img/projects/recipe.jpg";
import studentmanagement from "../../img/projects/person-studying-online.png";
import termasandconditions from "../../img/projects/termsandconditions.jpg";
const ProjectsData = [
  {
    title: "Terms and Conditions Summarizer",
    image: termasandconditions,
    codelink: "https://github.com/LeelaRohith/Terms-and-Conditions-Summarizer",
    description:
      "The project is a Chrome extension that uses Natural Language Processing (NLP) and machine learning to summarize and classify website terms and conditions.",
    technologies: [
      { tech: "Python" },
      { tech: "Natural Language Processing" },
      { tech: "Machine Learning" },
    ],
    features: [
      {
        feature:
          "NLP-based Summarization: Utilizes NLP to extract and condense key information from terms and conditions, prioritizing critical terms for a focused summary.",
      },
      {
        feature:
          "Customized Classification Model: Employs an ensemble of Multinomial Naive Bayes, Random Forest, Logistic Regression, and Support Vector Machines to categorize summarized content into relevant legal topics.",
      },
      {
        feature:
          "Specialized Categories for Terms and Conditions: Classifies extracted sentences into specific legal categories such as permissions, age restrictions, copyrights, and privacy policies to address unique aspects of legal documents.",
      },
      {
        feature:
          "User-friendly Presentation of Information: Condenses terms and conditions into the top 20 key sentences, categorizing them for easy understanding and improved user accessibility.",
      },
    ],
  },
  {
    title: "User Authentication",
    image: userauthentication,
    codelink:
      "https://github.com/LeelaRohith/Spring-Security-JWT-Authentication",
    description:
      "JWT (Jason Web Token) based Authentication system using Spring Security ",
    technologies: [
      { tech: "Springboot" },
      { tech: "Spring Security" },
      { tech: "My SQL Database" },
    ],
    features: [
      {
        feature:
          "JWT-based Authentication: Leveraging JSON Web Tokens for secure user authentication and authorization.",
      },
      {
        feature:
          "User Registration: Created a user registration API using springboot that allows users to create an account securely.",
      },
      {
        feature:
          "User Login: Created a user login API for seamless authentication and access to protected resources.",
      },
      {
        feature:
          "React.js Frontend Integration: Integrated the frontend with the backend Springboot application using axios.",
      },
      {
        feature:
          "Enhanced Security: Implementing 256-bit encryption key for password encryption, ensuring high level data security",
      },
    ],
  },
  {
    title: "Recipe Sharing App",
    image: recipe,
    codelink: "https://github.com/LeelaRohith/Recipe-sharing-app",
    description:
      "A dynamic web application where users can seamlessly share their recipes and view others recipes ",
    technologies: [
      { tech: "ReactJS" },
      { tech: "Springboot" },
      { tech: "My SQL Database (AWS RDS)" },
    ],
    features: [
      {
        feature:
          "User Registration: Streamline onboarding with a user-friendly registration process. Employing secure practices, users can easily create accounts, enabling them to contribute to the RecipeShare community by sharing their culinary creations and engaging in the platform's features",
      },
      {
        feature:
          "Forgot Password Feature: Enhance user experience with a Forgot Password functionality, allowing users to securely reset their passwords. Utilizing email verification or other secure methods, this feature ensures a streamlined and secure process for account recovery",
      },
      {
        feature:
          "JWT-Based Authentication: Ensure secure user access with JSON Web Token (JWT) authentication implemented through Spring Security, offering a robust and reliable authentication mechanism",
      },
      {
        feature:
          "MySQL Database on AWS RDS: Leverage the scalability and reliability of Amazon RDS to host a MySQL database, ensuring efficient storage and retrieval of recipe data while benefiting from the cloud's advantages.",
      },
      {
        feature:
          "Utilize Amazon S3 buckets to efficiently store and manage images associated with recipes, ensuring reliable and scalable storage solutions for the visual components of the culinary creations",
      },
      {
        feature:
          "RESTful Recipe APIs: Enable users to seamlessly share, edit, and view recipes through well-designed RESTful APIs using Springboot, providing a smooth and standardized interface for interacting with recipe-related functionalities",
      },

      {
        feature:
          "Enhanced Security: Implementing 256-bit encryption key for password encryption, ensuring high level data security",
      },
    ],
  },

  {
    title: "Student Management System",
    image: studentmanagement,
    codelink: "https://github.com/LeelaRohith/Student-Management-System",
    description:
      "Implemented CRUD operations using REST API's to manage student data",
    technologies: [
      { tech: "Springboot" },
      { tech: "Spring Security" },
      { tech: "React JS" },
    ],
    features: [
      {
        feature:
          " Frontend: Developed using ReactJS, ensuring a modern and intuitive user interface that enables easy navigation and a delightful user experience.",
      },
      {
        feature:
          "Backend: Developed by Spring Boot, delivering a secure, scalable, and high-performance foundation for the application.",
      },
      {
        feature:
          "Authentication and Authorization: Implemented JWT (JSON Web Token) based authentication and authorization mechanisms using Spring Security. This ensures secure access to the system's functionalities, safeguarding sensitive data.",
      },
      {
        feature:
          "Forgot Password Feature: A user-friendly password recovery feature allows faculty members to reset their passwords. An OTP (One-Time Password) is securely sent to their registered email for authentication.",
      },
      {
        feature:
          "CRUD Operations: Faculty members have complete control over student records, with the ability to add, view, edit, and delete student information effortlessly.",
      },
      {
        feature:
          " MySQL Database : Utilized MySQL Database for efficient data storage and retrieval.",
      },
    ],
  },
];
export default ProjectsData;
