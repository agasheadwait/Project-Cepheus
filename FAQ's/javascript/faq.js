function handleclick(value) {
  let questionDiv = document.getElementById("q" + value);
  if (questionDiv.classList.contains("faq__question__visible")) {
    questionDiv.classList.remove("faq__question__visible");
    questionDiv.classList.add("faq__answer__visible");
  } else {
    questionDiv.classList.add("faq__question__visible");
    questionDiv.classList.remove("faq__answer__visible");
  }
  let textList = questionDiv.getElementsByTagName("p");
  for (let idx = 0; idx < 2; idx++) {
    const element = textList[idx];
    if (element.classList.contains("visible")) {
      element.classList.remove("visible");
      element.classList.add("invisible");
    } else {
      element.classList.remove("invisible");
      element.classList.add("visible");
    }
    console.log(element);
  }
}
