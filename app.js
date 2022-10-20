//Accordion Logic
const arrowButtons = document.querySelectorAll(".accordion__chevron");
const toggleAccordionBoxVisibility = (targetArrow) => {
  const parentBox = targetArrow.parentElement;
  console.log(parentBox);
};

arrowButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    toggleAccordionBoxVisibility(e.target);
  })
);
