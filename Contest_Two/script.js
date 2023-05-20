// Array of initial employees
let array = [
    { id: 1, name: "John", age: 18, profession: "developer" },
    { id: 2, name: "Jack", age: 20, profession: "developer" },
    { id: 3, name: "Karen", age: 19, profession: "admin" }
  ];
  
  // Function to render the employee cards
  function renderEmployees(array) {
    const employeeContainer = document.getElementById("employee-container");
    employeeContainer.innerHTML = "";
  
    array.forEach(employee => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<p> ${employee.id}.&nbsp&nbsp&nbspName: ${employee.name} &nbsp&nbsp&nbsp   Profession: ${employee.profession} &nbsp&nbsp&nbsp  Age: ${employee.age}</p>`;
     
      employeeContainer.appendChild(card);
    });
  }
  
  // Function to filter employees by profession
  function filterEmployees() {
    const selectedProfession = document.getElementById("profession-select").value;
    
    if (selectedProfession === "") {
      alert("Please select a profession from the dropdown menu.");
      return;
    }
    
    const filteredEmployees = array.filter(employee => employee.profession === selectedProfession);
    renderEmployees(filteredEmployees);
  }
  
  // Function to add a new employee
  function addUser() {
    const nameInput = document.getElementById("name-input");
    const professionInput = document.getElementById("profession-input");
    const ageInput = document.getElementById("age-input");
    
    const name = nameInput.value;
    const profession = professionInput.value;
    const age = parseInt(ageInput.value);
    
    if (name === "" || profession === "" || isNaN(age)) {
      alert("Please fill the employee details properly.");
      return;
    }
    
    const newEmployee = { id: array.length + 1, name, age, profession };
    array.push(newEmployee);
    
    renderEmployees(array);
    
    // Clear input fields
    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";
  }
  
  // Event listeners
  document.getElementById("filter-button").addEventListener("click", filterEmployees);
  document.getElementById("add-button").addEventListener("click", addUser);
  
  // Initial rendering of employees
  renderEmployees(array);