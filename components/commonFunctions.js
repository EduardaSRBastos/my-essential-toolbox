 function restrictInput(event) {
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
