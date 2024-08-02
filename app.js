document.addEventListener("DOMContentLoaded",() => {
  const lift = document.querySelector(".lift");
  const buttons = document.querySelectorAll(".btn");
  const doors = document.querySelectorAll(".door");
  const welcomeMessage = document.querySelector(".welcome-message");
  let floors = [];
  let isMoving = false;
  let doorsOpen = false;

  function closeDoors(callback) {
    doors.forEach((door) => door.classList.remove("open-left", "open-right"));
    setTimeout(() => {
      doorsOpen = false;
      if (callback) callback();
    }, 1000); }

  function openDoors() {
    doors.forEach((door, index) => {
      if (index === 0) {
        door.classList.add("open-left");
      } else if (index === 1) {
        door.classList.add("open-right");
      }
    });
    doorsOpen = true;
  }

  function moveLift(targetFloor) {
    lift.style.transform = `translateY(${targetFloor * -25}vh)`;
  }

  function processNextFloor() {
    if (floors.length === 0 || isMoving) return;
    isMoving = true;
    
    const targetFloor = floors.shift();
    
    moveLift(targetFloor);
    
    setTimeout(() => {
      
      openDoors();
      

      welcomeMessage.textContent = `Welcome to ${targetFloor + 1} floor !`; 

      setTimeout(() => {
        closeDoors(() => {
          isMoving = false;
          processNextFloor(); 
        });
      }, 2000); 
    }, 1500); 
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!isMoving && !doorsOpen) {
        floors.push(index);
        processNextFloor();
      } else if (!floors.includes(index)) { 
        floors.push(index);
      }
    });
  });

  closeDoors(); 
});
