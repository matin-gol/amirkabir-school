const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// باز و بسته کردن منوی موبایل
menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "بستن منو" : "باز کردن منو"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// بستن منو پس از انتخاب یک بخش
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "باز کردن منو");
    menuToggle.textContent = "☰";
  });
});

// نمایش سال جاری
document.getElementById("currentYear").textContent =
  new Intl.DateTimeFormat("fa-IR-u-ca-gregory", {
    year: "numeric"
  }).format(new Date());
  document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const workshopCards = document.querySelectorAll(".workshop-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedField = button.dataset.filter;

      filterButtons.forEach(function (item) {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      workshopCards.forEach(function (card) {
        const shouldShow =
          selectedField === "all" ||
          card.dataset.field === selectedField;

        card.hidden = !shouldShow;
      });
    });
  });
});
function toggleFieldInfo(button) {
    const info = button.nextElementSibling;

    if (!info || !info.classList.contains("field-more")) {
        return;
    }

    const isHidden = info.hidden;
    info.hidden = !isHidden;

    button.setAttribute("aria-expanded", String(isHidden));
    button.textContent = isHidden
        ? "بستن توضیحات ↑"
        : "بیشتر بدانید ←";
}
