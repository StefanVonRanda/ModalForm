// Encapsulated language logic
(() => {
  // translation objects
  const englishLang = [
    [langHeader, "Modalform in Action"],
    [langRevealButton, "Reveal"],
    [langRevealHint, "Click to activate the modal."],
    [langModalHeader, "Sign Me Up"],
    [langFirstName, "First Name"],
    [langLastName, "Last Name"],
    [langGenderHeader, "Gender"],
    [langGenderFemale, "Female"],
    [langGenderMale, "Male"],
    [langGenderNone, "None-binary"],
    [langPhone, "Phone Number"],
    [langEmail, "Email"],
    [langPromo, "Receive promotional emails"],
    [langSubmit, "Sign up"],
    [langLoading, "Loading"],
    [langThanks, "Thanks for signing up"],
    [langError, "Unable to sign you up"],
    [langErrorSub, "Please try again later"],
  ];
  const danishLang = [
    [langHeader, "Modalform i aktion"],
    [langRevealButton, "Vis modalen"],
    [langRevealHint, "<b>Klik for at vise modalen frem</b>"],
    [langModalHeader, "Tilmeld dig her"],
    [langFirstName, "Fornavn"],
    [langLastName, "Efternavn"],
    [langGenderHeader, "Køn"],
    [langGenderFemale, "Kvinde"],
    [langGenderMale, "Mand"],
    [langGenderNone, "Ikke Binær"],
    [langPhone, "Tlf. Nummer"],
    [langEmail, "Email"],
    [langPromo, "Modtag tilbud på mail"],
    [langSubmit, "Tilmeld mig"],
    [langLoading, "Indlæser"],
    [langThanks, "Tusind tak, du er nu tilmeldt"],
    [langError, "Kan desværre ikke registrer dig nu"],
    [langErrorSub, "Prøv venligst senere"],
  ];
  // set language according to browser lang
  let activeLang;
  if (window.navigator.language === "da") {
    activeLang = danishLang;
  } else {
    activeLang = englishLang;
  }
  let i = 0;
  document.querySelectorAll(".translate").forEach((e) => {
    e.innerText = activeLang[i][1];
    i++;
  });
})();
