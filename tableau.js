const elements = [
  { number: 1, symbol: "H", name: "Hydrogene", period: 1, group: 1, category: "nonmetal" },
  { number: 2, symbol: "He", name: "Helium", period: 1, group: 18, category: "noble-gas" },
  { number: 3, symbol: "Li", name: "Lithium", period: 2, group: 1, category: "alkali-metal" },
  { number: 4, symbol: "Be", name: "Beryllium", period: 2, group: 2, category: "alkaline-earth-metal" },
  { number: 5, symbol: "B", name: "Bore", period: 2, group: 13, category: "metalloid" },
  { number: 6, symbol: "C", name: "Carbone", period: 2, group: 14, category: "nonmetal" },
  { number: 7, symbol: "N", name: "Azote", period: 2, group: 15, category: "nonmetal" },
  { number: 8, symbol: "O", name: "Oxygene", period: 2, group: 16, category: "nonmetal" },
  { number: 9, symbol: "F", name: "Fluor", period: 2, group: 17, category: "halogen" },
  { number: 10, symbol: "Ne", name: "Neon", period: 2, group: 18, category: "noble-gas" },
  { number: 11, symbol: "Na", name: "Sodium", period: 3, group: 1, category: "alkali-metal" },
  { number: 12, symbol: "Mg", name: "Magnesium", period: 3, group: 2, category: "alkaline-earth-metal" },
  { number: 13, symbol: "Al", name: "Aluminium", period: 3, group: 13, category: "post-transition-metal" },
  { number: 14, symbol: "Si", name: "Silicium", period: 3, group: 14, category: "metalloid" },
  { number: 15, symbol: "P", name: "Phosphore", period: 3, group: 15, category: "nonmetal" },
  { number: 16, symbol: "S", name: "Soufre", period: 3, group: 16, category: "nonmetal" },
  { number: 17, symbol: "Cl", name: "Chlore", period: 3, group: 17, category: "halogen" },
  { number: 18, symbol: "Ar", name: "Argon", period: 3, group: 18, category: "noble-gas" },
  { number: 19, symbol: "K", name: "Potassium", period: 4, group: 1, category: "alkali-metal" },
  { number: 20, symbol: "Ca", name: "Calcium", period: 4, group: 2, category: "alkaline-earth-metal" },
  { number: 21, symbol: "Sc", name: "Scandium", period: 4, group: 3, category: "transition-metal" },
  { number: 22, symbol: "Ti", name: "Titane", period: 4, group: 4, category: "transition-metal" },
  { number: 23, symbol: "V", name: "Vanadium", period: 4, group: 5, category: "transition-metal" },
  { number: 24, symbol: "Cr", name: "Chrome", period: 4, group: 6, category: "transition-metal" },
  { number: 25, symbol: "Mn", name: "Manganese", period: 4, group: 7, category: "transition-metal" },
  { number: 26, symbol: "Fe", name: "Fer", period: 4, group: 8, category: "transition-metal" },
  { number: 27, symbol: "Co", name: "Cobalt", period: 4, group: 9, category: "transition-metal" },
  { number: 28, symbol: "Ni", name: "Nickel", period: 4, group: 10, category: "transition-metal" },
  { number: 29, symbol: "Cu", name: "Cuivre", period: 4, group: 11, category: "transition-metal" },
  { number: 30, symbol: "Zn", name: "Zinc", period: 4, group: 12, category: "transition-metal" },
  { number: 31, symbol: "Ga", name: "Gallium", period: 4, group: 13, category: "post-transition-metal" },
  { number: 32, symbol: "Ge", name: "Germanium", period: 4, group: 14, category: "metalloid" },
  { number: 33, symbol: "As", name: "Arsenic", period: 4, group: 15, category: "metalloid" },
  { number: 34, symbol: "Se", name: "Selenium", period: 4, group: 16, category: "nonmetal" },
  { number: 35, symbol: "Br", name: "Brome", period: 4, group: 17, category: "halogen" },
  { number: 36, symbol: "Kr", name: "Krypton", period: 4, group: 18, category: "noble-gas" },
  { number: 37, symbol: "Rb", name: "Rubidium", period: 5, group: 1, category: "alkali-metal" },
  { number: 38, symbol: "Sr", name: "Strontium", period: 5, group: 2, category: "alkaline-earth-metal" },
  { number: 39, symbol: "Y", name: "Yttrium", period: 5, group: 3, category: "transition-metal" },
  { number: 40, symbol: "Zr", name: "Zirconium", period: 5, group: 4, category: "transition-metal" },
  { number: 41, symbol: "Nb", name: "Niobium", period: 5, group: 5, category: "transition-metal" },
  { number: 42, symbol: "Mo", name: "Molybdene", period: 5, group: 6, category: "transition-metal" },
  { number: 43, symbol: "Tc", name: "Technetium", period: 5, group: 7, category: "transition-metal" },
  { number: 44, symbol: "Ru", name: "Ruthenium", period: 5, group: 8, category: "transition-metal" },
  { number: 45, symbol: "Rh", name: "Rhodium", period: 5, group: 9, category: "transition-metal" },
  { number: 46, symbol: "Pd", name: "Palladium", period: 5, group: 10, category: "transition-metal" },
  { number: 47, symbol: "Ag", name: "Argent", period: 5, group: 11, category: "transition-metal" },
  { number: 48, symbol: "Cd", name: "Cadmium", period: 5, group: 12, category: "transition-metal" },
  { number: 49, symbol: "In", name: "Indium", period: 5, group: 13, category: "post-transition-metal" },
  { number: 50, symbol: "Sn", name: "Etain", period: 5, group: 14, category: "post-transition-metal" },
  { number: 51, symbol: "Sb", name: "Antimoine", period: 5, group: 15, category: "metalloid" },
  { number: 52, symbol: "Te", name: "Tellure", period: 5, group: 16, category: "metalloid" },
  { number: 53, symbol: "I", name: "Iode", period: 5, group: 17, category: "halogen" },
  { number: 54, symbol: "Xe", name: "Xenon", period: 5, group: 18, category: "noble-gas" },
  { number: 55, symbol: "Cs", name: "Cesium", period: 6, group: 1, category: "alkali-metal" },
  { number: 56, symbol: "Ba", name: "Baryum", period: 6, group: 2, category: "alkaline-earth-metal" },
  { number: 57, symbol: "La", name: "Lanthane", period: 9, group: 3, category: "lanthanide" },
  { number: 58, symbol: "Ce", name: "Cerium", period: 9, group: 4, category: "lanthanide" },
  { number: 59, symbol: "Pr", name: "Praseodyme", period: 9, group: 5, category: "lanthanide" },
  { number: 60, symbol: "Nd", name: "Neodyme", period: 9, group: 6, category: "lanthanide" },
  { number: 61, symbol: "Pm", name: "Promethium", period: 9, group: 7, category: "lanthanide" },
  { number: 62, symbol: "Sm", name: "Samarium", period: 9, group: 8, category: "lanthanide" },
  { number: 63, symbol: "Eu", name: "Europium", period: 9, group: 9, category: "lanthanide" },
  { number: 64, symbol: "Gd", name: "Gadolinium", period: 9, group: 10, category: "lanthanide" },
  { number: 65, symbol: "Tb", name: "Terbium", period: 9, group: 11, category: "lanthanide" },
  { number: 66, symbol: "Dy", name: "Dysprosium", period: 9, group: 12, category: "lanthanide" },
  { number: 67, symbol: "Ho", name: "Holmium", period: 9, group: 13, category: "lanthanide" },
  { number: 68, symbol: "Er", name: "Erbium", period: 9, group: 14, category: "lanthanide" },
  { number: 69, symbol: "Tm", name: "Thulium", period: 9, group: 15, category: "lanthanide" },
  { number: 70, symbol: "Yb", name: "Ytterbium", period: 9, group: 16, category: "lanthanide" },
  { number: 71, symbol: "Lu", name: "Lutetium", period: 9, group: 17, category: "lanthanide" },
  { number: 72, symbol: "Hf", name: "Hafnium", period: 6, group: 4, category: "transition-metal" },
  { number: 73, symbol: "Ta", name: "Tantale", period: 6, group: 5, category: "transition-metal" },
  { number: 74, symbol: "W", name: "Tungstene", period: 6, group: 6, category: "transition-metal" },
  { number: 75, symbol: "Re", name: "Rhenium", period: 6, group: 7, category: "transition-metal" },
  { number: 76, symbol: "Os", name: "Osmium", period: 6, group: 8, category: "transition-metal" },
  { number: 77, symbol: "Ir", name: "Iridium", period: 6, group: 9, category: "transition-metal" },
  { number: 78, symbol: "Pt", name: "Platine", period: 6, group: 10, category: "transition-metal" },
  { number: 79, symbol: "Au", name: "Or", period: 6, group: 11, category: "transition-metal" },
  { number: 80, symbol: "Hg", name: "Mercure", period: 6, group: 12, category: "transition-metal" },
  { number: 81, symbol: "Tl", name: "Thallium", period: 6, group: 13, category: "post-transition-metal" },
  { number: 82, symbol: "Pb", name: "Plomb", period: 6, group: 14, category: "post-transition-metal" },
  { number: 83, symbol: "Bi", name: "Bismuth", period: 6, group: 15, category: "post-transition-metal" },
  { number: 84, symbol: "Po", name: "Polonium", period: 6, group: 16, category: "post-transition-metal" },
  { number: 85, symbol: "At", name: "Astate", period: 6, group: 17, category: "halogen" },
  { number: 86, symbol: "Rn", name: "Radon", period: 6, group: 18, category: "noble-gas" },
  { number: 87, symbol: "Fr", name: "Francium", period: 7, group: 1, category: "alkali-metal" },
  { number: 88, symbol: "Ra", name: "Radium", period: 7, group: 2, category: "alkaline-earth-metal" },
  { number: 89, symbol: "Ac", name: "Actinium", period: 10, group: 3, category: "actinide" },
  { number: 90, symbol: "Th", name: "Thorium", period: 10, group: 4, category: "actinide" },
  { number: 91, symbol: "Pa", name: "Protactinium", period: 10, group: 5, category: "actinide" },
  { number: 92, symbol: "U", name: "Uranium", period: 10, group: 6, category: "actinide" },
  { number: 93, symbol: "Np", name: "Neptunium", period: 10, group: 7, category: "actinide" },
  { number: 94, symbol: "Pu", name: "Plutonium", period: 10, group: 8, category: "actinide" },
  { number: 95, symbol: "Am", name: "Americium", period: 10, group: 9, category: "actinide" },
  { number: 96, symbol: "Cm", name: "Curium", period: 10, group: 10, category: "actinide" },
  { number: 97, symbol: "Bk", name: "Berkelium", period: 10, group: 11, category: "actinide" },
  { number: 98, symbol: "Cf", name: "Californium", period: 10, group: 12, category: "actinide" },
  { number: 99, symbol: "Es", name: "Einsteinium", period: 10, group: 13, category: "actinide" },
  { number: 100, symbol: "Fm", name: "Fermium", period: 10, group: 14, category: "actinide" },
  { number: 101, symbol: "Md", name: "Mendelevium", period: 10, group: 15, category: "actinide" },
  { number: 102, symbol: "No", name: "Nobelium", period: 10, group: 16, category: "actinide" },
  { number: 103, symbol: "Lr", name: "Lawrencium", period: 10, group: 17, category: "actinide" },
  { number: 104, symbol: "Rf", name: "Rutherfordium", period: 7, group: 4, category: "transition-metal" },
  { number: 105, symbol: "Db", name: "Dubnium", period: 7, group: 5, category: "transition-metal" },
  { number: 106, symbol: "Sg", name: "Seaborgium", period: 7, group: 6, category: "transition-metal" },
  { number: 107, symbol: "Bh", name: "Bohrium", period: 7, group: 7, category: "transition-metal" },
  { number: 108, symbol: "Hs", name: "Hassium", period: 7, group: 8, category: "transition-metal" },
  { number: 109, symbol: "Mt", name: "Meitnerium", period: 7, group: 9, category: "unknown" },
  { number: 110, symbol: "Ds", name: "Darmstadtium", period: 7, group: 10, category: "unknown" },
  { number: 111, symbol: "Rg", name: "Roentgenium", period: 7, group: 11, category: "unknown" },
  { number: 112, symbol: "Cn", name: "Copernicium", period: 7, group: 12, category: "post-transition-metal" },
  { number: 113, symbol: "Nh", name: "Nihonium", period: 7, group: 13, category: "unknown" },
  { number: 114, symbol: "Fl", name: "Flerovium", period: 7, group: 14, category: "post-transition-metal" },
  { number: 115, symbol: "Mc", name: "Moscovium", period: 7, group: 15, category: "unknown" },
  { number: 116, symbol: "Lv", name: "Livermorium", period: 7, group: 16, category: "unknown" },
  { number: 117, symbol: "Ts", name: "Tennessine", period: 7, group: 17, category: "unknown" },
  { number: 118, symbol: "Og", name: "Oganesson", period: 7, group: 18, category: "unknown" }
];

const table = document.getElementById("periodicTable");
const assembledWord = document.getElementById("assembledWord");
const selectionMeta = document.getElementById("selectionMeta");
const selectedList = document.getElementById("selectedList");
const resetButton = document.getElementById("resetSelection");
const successMessage = document.getElementById("successMessage");

const selectedNumbers = [];
const selectedSet = new Set();
const elementMap = new Map(elements.map((element) => [element.number, element]));
const buttonMap = new Map();
const siphonSequence = [14, 15, 1, 8, 7];
const redirectDelayMs = 3200;

let puzzleSolved = false;

const seriesAnchors = [
  { label: "57-71", detail: "Lanthanides", row: 6, column: 3 },
  { label: "89-103", detail: "Actinides", row: 7, column: 3 }
];

const seriesLabels = [
  { title: "Lanthanides", detail: "57 a 71", row: 9, column: 1 },
  { title: "Actinides", detail: "89 a 103", row: 10, column: 1 }
];

function createSeriesAnchor(anchor) {
  const cell = document.createElement("div");
  cell.className = "series-anchor";
  cell.style.gridRow = String(anchor.row);
  cell.style.gridColumn = String(anchor.column);
  cell.innerHTML = `<div><strong>${anchor.label}</strong><br>${anchor.detail}</div>`;
  return cell;
}

function createSeriesLabel(label) {
  const cell = document.createElement("div");
  cell.className = "series-label";
  cell.style.gridRow = String(label.row);
  cell.style.gridColumn = `${label.column} / span 2`;
  cell.innerHTML = `<strong>${label.title}</strong><span>${label.detail}</span>`;
  return cell;
}

function createElementButton(element) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `element ${element.category}`;
  button.style.gridRow = String(element.period);
  button.style.gridColumn = String(element.group);
  button.setAttribute("role", "gridcell");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${element.name}, symbole ${element.symbol}, numero atomique ${element.number}`);
  button.title = `${element.name} (${element.symbol})`;

  button.innerHTML = `
    <span class="element-number">${element.number}</span>
    <span class="element-symbol">${element.symbol}</span>
    <span class="element-name">${element.name}</span>
  `;

  button.addEventListener("click", () => toggleElement(element.number));
  buttonMap.set(element.number, button);
  return button;
}

function renderTable() {
  seriesAnchors.forEach((anchor) => table.appendChild(createSeriesAnchor(anchor)));
  seriesLabels.forEach((label) => table.appendChild(createSeriesLabel(label)));
  elements.forEach((element) => table.appendChild(createElementButton(element)));
}

function updateSelectedList(selectedElements) {
  selectedList.innerHTML = "";

  if (!selectedElements.length) {
    const emptyState = document.createElement("span");
    emptyState.className = "empty-selection";
    emptyState.textContent = "Les symboles choisis s'afficheront ici.";
    selectedList.appendChild(emptyState);
    return;
  }

  selectedElements.forEach((element, index) => {
    const item = document.createElement("span");
    item.className = "selected-item";
    item.innerHTML = `
      <span class="selected-item-index">${index + 1}</span>
      <span>${element.symbol}</span>
    `;
    selectedList.appendChild(item);
  });
}

function updateSelectionDisplay() {
  const selectedElements = selectedNumbers.map((number) => elementMap.get(number));
  const formedWord = selectedElements.map((element) => element.symbol).join("");

  assembledWord.textContent = formedWord || "...";
  selectionMeta.textContent = selectedElements.length
    ? `${selectedElements.length} element${selectedElements.length > 1 ? "s" : ""} selectionne${selectedElements.length > 1 ? "s" : ""}.`
    : "Aucun element selectionne.";
  resetButton.disabled = selectedElements.length === 0;

  buttonMap.forEach((button, number) => {
    const isSelected = selectedSet.has(number);
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  updateSelectedList(selectedElements);
}

function completePuzzle() {
  puzzleSolved = true;
  successMessage.hidden = false;
  selectionMeta.textContent = "SIPHON trouve. Redirection en cours...";
  resetButton.disabled = true;

  buttonMap.forEach((button) => {
    button.disabled = true;
  });

  window.setTimeout(() => {
    window.location.href = "index.html";
  }, redirectDelayMs);
}

function toggleElement(number) {
  if (puzzleSolved) {
    return;
  }

  if (selectedSet.has(number)) {
    selectedSet.delete(number);
    const index = selectedNumbers.indexOf(number);
    if (index >= 0) {
      selectedNumbers.splice(index, 1);
    }
  } else {
    selectedSet.add(number);
    selectedNumbers.push(number);
  }

  updateSelectionDisplay();

  const hasSolvedSequence =
    selectedNumbers.length === siphonSequence.length &&
    selectedNumbers.every((selectedNumber, index) => selectedNumber === siphonSequence[index]);

  if (hasSolvedSequence) {
    completePuzzle();
  }
}

function resetSelection() {
  if (puzzleSolved) {
    return;
  }

  selectedSet.clear();
  selectedNumbers.length = 0;
  updateSelectionDisplay();
}

renderTable();
resetButton.addEventListener("click", resetSelection);
updateSelectionDisplay();
