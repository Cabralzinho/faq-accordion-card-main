const accordionsObject = [
  {
    title: "How many team members can I invite?",
    description: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    title: "What is the maximum file upload size?",
    description:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    description:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    title: "Can I cancel my subscription?",
    description:
    "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    description:
    "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const closeAllAccordions = () => {
  accordions.forEach((accordion) => {
    closeAccordion(accordion);
  });
};

const openAccordion = (accordion) => {
  const accordionParagraph = accordion.querySelector(".paragraph");
  const iconAccordion = accordion.querySelector("img");
  
  accordionParagraph.style.gridTemplateRows = "1fr";
  
  iconAccordion.classList.add("arrow-up");
};

const closeAccordion = (accordion) => {
  const accordionParagraph = accordion.querySelector(".paragraph");
  const iconAccordion = accordion.querySelector("img");

  accordionParagraph.style.gridTemplateRows = "0fr";

  iconAccordion.classList.remove("arrow-up");
};

const createAccordion = (title, description) => {
  const accordionHtml = `
    <li class="accordion flex flex-col py-5 cursor-pointer">
      <div class="flex items-center justify-between w-full">
        <h6 class="text-xs desktop:text-sm text-left text-gray-900 select-none transition-colors hover:text-orange-400">${title}</h6>
          <img style="transition: all .5s" class="select-none" src="./assets/images/icon-arrow-down.svg" alt="">
      </div>
      <div class="paragraph grid transition-1s " style="grid-template-rows: 0fr">
        <p class="overflow-hidden text-gray-500 text-xs text-left desktop:text-sm">
          ${description}
        </p>
      </div>
    </li>
  `;
  return accordionHtml
};

accordionsObject.forEach((accordionsObject) => {
  const accordionElement = createAccordion(
    accordionsObject.title,
    accordionsObject.description
  );
  const accordionList = document.querySelector(".accordion-list");
  

  accordionList.innerHTML += accordionElement;
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const accordionParagraph = accordion.querySelector(".paragraph");
    const isOpen = accordionParagraph.style.gridTemplateRows === "1fr";

    closeAllAccordions();

    if (isOpen) {
      closeAccordion(accordion);
    } else {
      openAccordion(accordion);
    }
  });
});

