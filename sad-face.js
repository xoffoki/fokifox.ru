const copyListener = (event) => {
    const range = window.getSelection().getRangeAt(0),
      rangeContents = range.cloneContents(),
      pageLink = `:(`,
      helper = document.createElement("div");
  
    helper.appendChild(rangeContents);
  
    event.clipboardData.setData("text/plain", `${pageLink}`);
    event.clipboardData.setData("text/html", `${pageLink}`);
    event.preventDefault();
  };
  document.addEventListener("copy", copyListener);