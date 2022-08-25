let guestList = [];
const input = document.querySelector('input[name="guestFullName"]');
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "push":
        guestList.push(input.value);
        break;
      case "unshift":
        guestList.unshift(input.value);
        break;
      case "shift":
        guestList.shift();
        break;
      case "pop":
        guestList.pop();
        break;
      case "reverse":
        const reversedArray = guestList.reverse();
        guestList = reversedArray;
        break;
        case "sort-a-z":
            guestList.sort((a,z) =>
             a.localeCompare(z)
            );
        case "sort-z-a":
            guestList.sort((a,z) =>
            z.localeCompare(a)
            );
     }
     window.localStorage.setItem("guestList", JSON.stringify(guestList));
    updateGuestList();
} )});
function updateGuestList() {
    if (document.querySelector("body > main > div.guest-list > ol")) {
      document.querySelector("body > main > div.guest-list > ol").remove();
    }
    const guestListOl = document.createElement("ol");
    guestList.forEach((guest) => {
      const singleGuest = document.createElement("li");
      singleGuest.textContent = guest;
      guestListOl.appendChild(singleGuest);
    });
  
    document.querySelector(".guest-list").appendChild(guestListOl);
  }
  
  window.addEventListener("load", () => {
    if (window.localStorage.getItem("guestList")) {
      const guestListData = JSON.parse(window.localStorage.getItem("guestList"));
      guestList = guestListData;
      updateGuestList();
    }
  });