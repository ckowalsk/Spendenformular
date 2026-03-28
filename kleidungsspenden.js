//var veraltet const verwenden 
//Speichern der HTML Elemente als Variable 
//id keine Umlaute erlaubt 
// Einlesen bedeutet ich deklariere varname und gebe es einen HTML ELement Wert über HTML-Element-ID 
// welche einzigartig ist, dabei muss varname und ID des Elements eindeutig sein 
// Der Wert Variable ist der datavalue des HTML-Elements 
//const bekommt einen Wert der nicht mehr änderbar ist
// let muss kein Wert deklariert werden und Wert kann jederzeit neu zugewiesen werden
// var nie verwenden
//Erstens Auslesen aller Werte und speichern in Variable 
//Auslesen Dropdown-Menü Abgabeart Geschäftsstelle oder Abholung
//Achtung das ganze HTML Objekt wird gespeichert nicht nur data-value des HTML Elements sondern alle Werte = Ganze Objekt 
const dropdownGeschaft = document.getElementById('Geschaft');
const dropdownTruck = document.getElementById('Truck');
//Auslesen Krisengebiet Werte 
const dropdownGhana = document.getElementById('Ghana');
const dropdownPhilippinen = document.getElementById('Philippinen');
const dropdownKolumbien = document.getElementById('Kolumbien');
const dropdownMexiko = document.getElementById('Mexiko');
//Auslesen Art Kleidung 
const dropdownSommerkleidung = document.getElementById('Sommerkleidung');
const dropdownWinterkleidung = document.getElementById('Winterkleidung');
const dropdownSchuhe = document.getElementById('Schuhe');
//Auslesen Ort Werte  
const inputStraßenname = document.getElementById('InputStraßenname');
const inputHausnummer = document.getElementById('InputHausnummer');
const inputPLZ = document.getElementById('InputPLZ');
const inputOrt = document.getElementById('InputOrt');
// Auslesen der Textfelder die für Eingabe Addresse benötigt werden, auch möglich Definition einer div Gruppe mit ID, die alle Elemente hat HTML
const txtStartSatz = document.getElementById('TxtBitteAdresse');
const txtStraßenname = document.getElementById('TxtStraßenname');
const txtHausnummer = document.getElementById('TxtHausnummer');
const txtPLZ = document.getElementById('TxtPLZ');
const txtOrt = document.getElementById('TxtOrt');
// Auslesen Bild welches nur erscheint, wenn Übergabe an Geschäftsstelle ausgewählt
const imgspendenbild = document.getElementById('ImgSpendenbild');
//Auslesen der Button Werte + speichern in einer variable 
const abgabeartbutton = document.getElementById('AbgabeartButton');
const krisengebietbutton = document.getElementById('ButtonKleidungsart');
const kleidungsartbutton = document.getElementById('KleidungsartButton')
// I Auslesen der Dropdown Klasse HTML und speichern in var benötigt für dynamische Reaktionen der Dropdowns für II benötigt 
const dropdownAbgabeart = document.getElementById('Abgabeart');
const dropdownKrisengebiet = document.getElementById('KrisengebietDropdown');
const dropdownKleidungsart = document.getElementById('DropdownKleidungsart');
//Einlesen der Abgabeart 
//Variablen werden benötigt um das Anzeigen der ausgewälten Dropdown Elemente anzuzeigen, sind null ohne Eingabe sonst Rerference Error
//Chrome, selected Value = ausgewählter Dropdown Wert Anwender 
let selectedValueAbgabeart = null;
let selectedValueKrisengebiet = null;
let selectedValueKleidungsart = null;
// II document durchsucht alle Werte wir brauchen nicht document.querySelectorAll sondern Var.querySelectorAll (Var = Objekt davor eingelesen (I))
dropdownAbgabeart.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    //selcted value holt sich data_value von HTML Objekt Dropdown-Element welches ausgewählt wurde 
      selectedValueAbgabeart = item.dataset.value;
    //Speichern des Selected Wertes in Variable selectedValue 
    //setzt ausgewählten Text als text.content Button 
    abgabeartbutton.textContent = item.textContent;
          //Wenn Ausgewählt Abgabe Geschäftsstelle => Addresse und alle Felder sollen verschwinden und ein großes Bild erscheinen mit
          // wir freuen uns auf Ihre Spende mit glücklichen Strichmenschen 
          // entfernen immer über variable nie über id (id um Variable wert zuzuweisen)
          // const dürfen removed werden, da das Objekt in Hintergrund bleibt nur die Eigenschaft entfernt wird 
          if (selectedValueAbgabeart==="Übergabe an Geschäftsstelle") { 
          //text Felder removed, wichtig variable nicht ID 
          //damit Code bei null nicht abbricht unsicher Element.remove()
              txtStartSatz.classList.add("d-none"); 
              txtStraßenname.classList.add("d-none");
              txtHausnummer.classList.add("d-none");
              txtPLZ.classList.add("d-none");
              txtOrt.classList.add("d-none");
          //Inputfelder entfernt mit add("d-none") .remnove oder safeRemove(Var) löschen das Objekt für immer wir wollen nur Sichtbarkeit
          //ändern => add.("d-none") oder remove("d-none")
              inputStraßenname.classList.add("d-none");
              inputHausnummer.classList.add("d-none");
              inputPLZ.classList.add("d-none");
              inputOrt.classList.add("d-none");
              imgspendenbild.classList.add("d-none");
              //anzeigen eines Bildes da die Eigenschaft d-none von Objekt Bild (siehe HTML) entfernt wird welche erscheinen Bild deaktiviert    
              imgspendenbild.classList.remove("d-none")
          } else {
          //Alle Elemente kommen zum Vorschein, wenn nicht Abgabe an Geschäftsstelle angegeben ist + Bild wird nicht mehr sichtbar
                //Text wieder erscheinen lassen 
                txtStartSatz.classList.remove("d-none");
                txtStraßenname.classList.remove("d-none");
                txtHausnummer.classList.remove("d-none");
                txtPLZ.classList.remove("d-none");
                txtOrt.classList.remove("d-none");
                //Inputfelder wieder erscheinen lassen
                inputStraßenname.classList.remove("d-none");
                inputHausnummer.classList.remove("d-none");
                inputPLZ.classList.remove("d-none");
                inputOrt.classList.remove("d-none");
                imgspendenbild.classList.add("d-none");
                }
  });
});

//Einlesen des Krisengebietes 
dropdownKrisengebiet.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
      selectedValueKrisengebiet = item.dataset.value;
      krisengebietbutton.textContent = item.textContent;
  });
});
//Einlesen der Kleidungsart 
dropdownKleidungsart.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
      selectedValueKleidungsart = item.dataset.value;
      kleidungsartbutton.textContent = item.textContent;
  });
});



//Buton Speichern wird gedrückt, Werte werden nur gespeichert wenn benötigt (Fallunterscheidung)
ButtonSpeichern.addEventListener("click",() => {               
//Es müssen immer die ersten drei Dropdowns ausgefüllt werden Abgabeart, Kriesengebiet, Art Kleidung sonst alert !var = var darf net leer sein
          if (!selectedValueAbgabeart || !selectedValueKrisengebiet || !selectedValueKleidungsart)
          { alert("Bitte alle Dropdownelemente auswählen")
            return;
          } 
                    
//Speichern der Werte in ein Objekt und Ausgabe der gespeichertern Werte                   
      if (selectedValueAbgabeart==="Übergabe an Geschäftsstelle") {
          const now = new Date();
          let Daten = {
              status: "erfolgreich gespeichert",
              Kleidungserhalt: selectedValueAbgabeart,
              Kriesengebiet: selectedValueKrisengebiet,
              Zeit:now,
              Kleidungsart: selectedValueKleidungsart
            };

            //localStorage Speichert Daten um diese in neuer Webseite zu haben löschen über localStorage.removeItem();
            localStorage.setItem("Daten", JSON.stringify(Daten));
            window.location.replace("Registrierungsbestaetigung.html");
            
            //Ausgabe über Window oberhalb 
            //alert(
              //"status: " + Daten.status + "\n" +
              //"Kleidungerhalt: " + Daten.Kleidungserhalt + "\n" +
              //"Kriesengebiet: " + Daten.Kriesengebiet + "\n" +
              //"Zeit:" + Daten.Zeit + "\n" +
              //"Kleidungsart: " + Daten.Kleidungsart
            //);
            

      } else {
 //Einlesen der Addresswerte nur nötig, wenn Kunde Abholung auswählt, deswegen nur im else 
          const txtStraßenname = document.getElementById("InputStraßenname").value.trim();  
          const txtHausnummer = document.getElementById("InputHausnummer").value.trim();
          const txtPLZ = document.getElementById("InputPLZ").value.trim();
          const txtOrt = document.getElementById("InputOrt").value.trim();

//Kontrolle ob aller Eingabewerte auf mindestens größer eine Ziffer
//ganz sauber wäre es gegen Karten Datenbank zu prüfen gibt es überhaupt die Eingabe 
          if (!txtStraßenname || !txtHausnummer || !txtPLZ || !txtOrt )
          { alert("Bitte alle Addressefelder ausfüllen")
            return;
          } 

//Welche Stelle ist verantwortlich? Nur nötig wenn Kunde Abholung auswählt.
          let standortberlin = "10176";
          const erstezweizahlenber = String(standortberlin).slice(0,2);
          let standorthqhannover = "30173";
          const erstezweizahlenhqhannover = String(standorthqhannover).slice(0,2);
          let standortAugsburg ="86154";
          const erstezweizahlenaug = String(standortAugsburg).slice(0,2);
//verantwortliche Stelle darf nicht nur im case definiert sein, sondern muss davor deklariert werden 
//Vergleich erste 2 PLZ Zahlen, Methode slice nur für String erlaubt => umwandeln 
          const erstezweizahlen = String(txtPLZ).slice(0,2);
//switch und case = Select case von JavaScript :D     
          switch (erstezweizahlen){
            case erstezweizahlenber:
              verantwortlichestelle = standortberlin;
              break;
            case erstezweizahlenaug:
              verantwortlichestelle = standortAugsburg;
              break;
            //kein anderer Standort? Headquater muss sich darum kümmern :) 
            default:
              verantwortlichestelle = standorthqhannover;
                break;
          }    

          const now = new Date();
          let Daten= {
              status: "erfolgreich gespeichert",
              Kleidungserhalt: selectedValueAbgabeart,
              Kriesengebiet: selectedValueKrisengebiet,
              Kleidungsart: selectedValueKleidungsart,
              Straßenname: txtStraßenname,
              Hausnummer: txtHausnummer,
              Postleitzahl: txtPLZ,
              Ort:txtOrt,
              Zeit:now,
              ZuständigeStellePLZ: verantwortlichestelle
              };


            localStorage.setItem("Daten", JSON.stringify(Daten));
            window.location.replace("Registrierungsbestaetigung.html");

            //alert(
                //"status: " + Daten.status + "\n" +
                //"Kleidungerhalt: " + Daten.Kleidungserhalt + "\n" +
                //"Kriesengebiet: " + Daten.Kriesengebiet + "\n" +
                //"Kleidungsart: " + Daten.Kleidungsart + "\n" +
                //"Straßenname: " + Daten.Straßenname + "\n" +
                //"Hausnummer: " + Daten.Hausnummer + "\n" +
                //"Postleitzahl:" + Daten.Postleitzahl + "\n" +
                //"Zeit:" + Daten.Zeit + "\n" +
                //"Ort: " + Daten.Ort
              //);
            }



            

          
})
//JSON Speichern nur mit Server möglich Browser kommuniziert mit Server 
              

