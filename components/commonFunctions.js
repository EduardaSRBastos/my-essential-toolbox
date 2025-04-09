export function restrictInput(event) {
  const inputValue = event.target.value;

  if (event.ctrlKey && event.key.length === 1) {
    return;
  }

  if (
    ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(
      event.key
    )
  )
    return;

  if (event.key === "." && inputValue.includes(".")) {
    event.preventDefault();
  }

  if (!/[0-9.]/.test(event.key)) {
    event.preventDefault();
  }
}

export function handleNewTabPage() {
  document.addEventListener("DOMContentLoaded", () => {
    if (window.opener) {
      document.body.classList.add("new-tab");

      document.querySelectorAll("input, textarea").forEach((el) => {
        el.value = "";
      });

      const path = window.location.pathname;
      const match = path.match(/\/([^\/]+)\.html$/);
      if (match) {
        const slug = match[1];

        const title = slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        document.title = title;

        const h1 = document.createElement("h1");
        h1.textContent = title;
        document.body.prepend(h1);
        
        const cleanUrl = `/${slug}`;
        window.history.replaceState(null, "", cleanUrl);
      }
    }
  });
}

