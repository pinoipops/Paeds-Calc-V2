/*
====================================================
PAEDS CALC V4.1 (Weight-Based Edition)
====================================================
*/

const DATA = {

  /* ================= ANALGESIC ================= */
  paracetamol: {
    name:"Paracetamol",
    category:"Analgesic / Antipyretic",
    dosing:"weight",
    concentrations:[
      {label:"250mg/5mL",mgPerMl:50,default:true},
      {label:"120mg/5mL",mgPerMl:24},
      {label:"125mg/5mL",mgPerMl:25}
    ],
    regimens:[
      {label:"15mg/kg/dose every 4–6 hourly",mgkg:15,frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 60mg/kg/day."]}
    ]
  },
  ibuprofen: {
    name:"Ibuprofen",
    category:"Analgesic / Antipyretic",
    dosing:"weight",
    concentrations:[
      {label:"100mg/5mL",mgPerMl:20}
    ],
    regimens:[
      {label:"10mg/kg/dose every 6–8 hourly",mgkg:10,frequency:"Every 6–8 hourly",frequencySub:"PRN"}
    ]
  },

  /* ================= ANTIBIOTICS ================= */
  amoxicillin:{
    name:"Amoxicillin",
    category:"Antibiotics",
    dosing:"weight",
    concentrations:[
      {label:"125mg/5mL",mgPerMl:25},
      {label:"250mg/5mL",mgPerMl:50}
    ],
    regimens:[
      {label:"25mg/kg/dose BD",mgkg:25,frequency:"BD",frequencySub:"twice daily"}
    ]
  },
  augmentin:{
    name:"Augmentin",
    category:"Antibiotics",
    dosing:"weightDay",
    concentrations:[
      {label:"125/31.25mg/5mL",mgPerMl:25},
      {label:"200/28.5mg/5mL",mgPerMl:40},
      {label:"400/57mg/5mL",mgPerMl:80},
      {label:"600/42.9mg/5mL",mgPerMl:120}
    ],
    regimens:[
      {label:"25mg/kg/day BD",mgkgDay:25,divided:2,frequency:"BD",frequencySub:"twice daily"}
    ]
  },
  cephalexin:{
    name:"Cephalexin",
    category:"Antibiotics",
    dosing:"weightDay",
    concentrations:[
      {label:"125mg/5mL",mgPerMl:25},
      {label:"250mg/5mL",mgPerMl:50}
    ],
    regimens:[
      {label:"25mg/kg/day divided QID",mgkgDay:25,divided:4,frequency:"QID",frequencySub:"four times daily"}
    ]
  },
  cefuroxime:{
    name:"Cefuroxime",
    category:"Antibiotics",
    dosing:"weightDay",
    concentrations:[
      {label:"125mg/5mL",mgPerMl:25}
    ],
    regimens:[
      {label:"30mg/kg/day divided BD",mgkgDay:30,divided:2,frequency:"BD",frequencySub:"twice daily",maxDaily:500}
    ]
  },
  azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    dosing:"weightBand",
    concentrations:[
      {label:"200mg/5mL",mgPerMl:40}
    ],
    regimens:[
      {label:"<15kg: 10mg/kg/day × 3 days",maxWeight:14.999,mgkgDay:10,divided:1,frequency:"OD × 3 days",frequencySub:"once daily"},
      {label:"15–25kg: 200mg OD × 3 days",minWeight:15,maxWeight:25,fixedMg:200,frequency:"OD × 3 days",frequencySub:"once daily"},
      {label:"26–35kg: 300mg OD × 3 days",minWeight:26,maxWeight:35,fixedMg:300,frequency:"OD × 3 days",frequencySub:"once daily"},
      {label:"36–45kg: 400mg OD × 3 days",minWeight:36,maxWeight:45,fixedMg:400,frequency:"OD × 3 days",frequencySub:"once daily"},
      {label:">45kg: 500mg OD × 3 days",minWeight:45.001,fixedMg:500,frequency:"OD × 3 days",frequencySub:"once daily"}
    ]
  },

  /* ================= ALLERGY ================= */
  piriton:{
    name:"Piriton (Chlorpheniramine)",
    category:"Allergy / Antihistamine",
    dosing:"weight",
    concentrations:[
      {label:"2mg/5mL",mgPerMl:0.4}
    ],
    regimens:[
      {label:"0.1 mg/kg/dose TDS",mgkg:0.1,frequency:"TDS",frequencySub:"three times daily",notes:["Maximum 4 doses in 24h. Cap at 4mg (10mL) per dose."]}
    ]
  },
  benadryl:{
    name:"Benadryl (Diphenhydramine)",
    category:"Allergy / Antihistamine",
    dosing:"weight",
    concentrations:[
      {label:"12.5mg/5mL",mgPerMl:2.5}
    ],
    regimens:[
      {label:"1.25 mg/kg/dose Q6H",mgkg:1.25,frequency:"Every 6 hourly",frequencySub:"PRN",notes:["Maximum 300mg/day."]}
    ]
  },

  /* ================= COUGH ================= */
  tussidex:{
    name:"Tussidex (Dextromethorphan)",
    category:"Cough / Respiratory",
    dosing:"weight",
    concentrations:[
      {label:"15mg/5mL",mgPerMl:3}
    ],
    regimens:[
      {label:"0.3 mg/kg/dose TDS",mgkg:0.3,frequency:"TDS",frequencySub:"PRN",notes:["Not recommended for children under 2 years. Cap at 15mg (5mL) per dose."]}
    ]
  },
  coughen:{
    name:"Cough-En RX",
    category:"Cough / Respiratory",
    dosing:"weight",
    concentrations:[
      {label:"15mg DXM + 5mg Phenylephrine /5mL",mgPerMl:3}
    ],
    regimens:[
      {label:"0.3 mg/kg/dose (Based on DXM)",mgkg:0.3,frequency:"TDS",frequencySub:"three times daily",notes:["Not for children under 2 years."]}
    ]
  },
  paedicof:{
    name:"Paedicof",
    category:"Cough / Respiratory",
    dosing:"weight",
    concentrations:[
      {label:"15mg Pseudoephedrine /5mL",mgPerMl:3}
    ],
    regimens:[
      {label:"1 mg/kg/dose (Based on Pseudoephedrine)",mgkg:1.0,frequency:"TDS",frequencySub:"three times daily",notes:["Avoid in severe hypertension."]}
    ]
  },
  salmodil:{
    name:"Salmodil",
    category:"Cough / Respiratory",
    dosing:"weight",
    concentrations:[
      {label:"Salbutamol 2mg + Bromhexine 4mg /5mL",mgPerMl:0.4}
    ],
    regimens:[
      {label:"0.1 mg/kg/dose (Based on Salbutamol)",mgkg:0.1,frequency:"TDS",frequencySub:"three times daily",notes:["Monitor for tachycardia."]}
    ]
  },

  /* ================= GI ================= */
  buscopan:{
    name:"Buscopan syrup",
    category:"GI",
    dosing:"weight",
    concentrations:[
      {label:"5mg/5mL",mgPerMl:1}
    ],
    regimens:[
      {label:"0.5 mg/kg/dose TDS",mgkg:0.5,frequency:"TDS",frequencySub:"three times daily",notes:["Cap at 10mg (10mL) per dose."]}
    ]
  },
  colimix:{
    name:"Colimix",
    category:"GI",
    dosing:"weight",
    concentrations:[
      {label:"Dicyclomine 5mg /5mL",mgPerMl:1}
    ],
    regimens:[
      {label:"0.5 mg/kg/dose QID",mgkg:0.5,frequency:"QID",frequencySub:"four times daily",notes:["Contraindicated in infants under 6 months."]}
    ]
  },
  maxalon:{
    name:"Maxalon (Metoclopramide)",
    category:"GI",
    dosing:"weightBand",
    concentrations:[
      {label:"5mg/5mL (1mg/mL)",mgPerMl:1}
    ],
    regimens:[
      {label:"10–14kg: 1mg",minWeight:10,maxWeight:14,fixedMg:1,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"15–19kg: 2mg",minWeight:15,maxWeight:19,fixedMg:2,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"20–29kg: 2.5mg",minWeight:20,maxWeight:29,fixedMg:2.5,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"30–60kg: 5mg",minWeight:30,maxWeight:60,fixedMg:5,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:">60kg: 10mg",minWeight:60.01,fixedMg:10,frequency:"Up to TDS",frequencySub:"minimum 6h interval"}
    ],
    notes:[
      "Second-line paediatric use only.",
      "Contraindicated below 1 year.",
      "Minimum 6-hour interval between doses.",
      "Use the shortest duration necessary."
    ]
  },

  /* ================= NEBULIZER ================= */
  salbutamolNeb:{
    name:"Salbutamol Neb",
    category:"Nebulizer",
    dosing:"fixed",
    concentrations:[
      {label:"0.5% (5mg/mL)",mgPerMl:5}
    ],
    regimens:[
      {label:"2.5mg per nebulisation",fixedMg:2.5,frequency:"PRN",frequencySub:"according to clinical response"},
      {label:"5mg per nebulisation",fixedMg:5,frequency:"PRN",frequencySub:"according to clinical response"}
    ]
  },
  ipratropiumNeb:{
    name:"Ipratropium Neb",
    category:"Nebulizer",
    dosing:"fixed",
    concentrations:[
      {label:"250mcg/mL",mcgPerMl:250}
    ],
    regimens:[
      {label:"250mcg per nebulisation",fixedMcg:250,frequency:"PRN",frequencySub:"according to clinical response"}
    ]
  },
  comboNeb:{
    name:"Salbutamol + Ipratropium Neb",
    category:"Nebulizer",
    dosing:"fixed",
    concentrations:[
      {label:"Ipratropium 0.5mg + Salbutamol 2.5mg / UDV",fixedMl:1}
    ],
    regimens:[
      {label:"1 unit-dose vial",fixedMl:1,frequency:"PRN",frequencySub:"according to acute protocol"}
    ]
  }
};

/* ==================================================
   FAVOURITES & STATE
   ================================================== */
const FAV_KEY = "paedsCalcFavourites";
let favourites = loadFavourites();

/* ==================================================
   DOM
   ================================================== */
const weightInput = document.getElementById("weight");
const medicationSelect = document.getElementById("medication");
const globalFavouriteBtn = document.getElementById("globalFavouriteBtn");
const concentrationSelect = document.getElementById("concentration");
const regimenSelect = document.getElementById("regimen");

const resultCard = document.getElementById("resultCard");
const doseValue = document.getElementById("doseValue");
const volumeValue = document.getElementById("volumeValue");
const frequencyValue = document.getElementById("frequencyValue");
const frequencySub = document.getElementById("frequencySub");
const calculationText = document.getElementById("calculationText");

const noteCard = document.getElementById("noteCard");
const noteList = document.getElementById("noteList");

const favouriteToggle = document.getElementById("favouriteToggle");
const favouritesCard = document.getElementById("favouritesCard");
const favouritesList = document.getElementById("favouritesList");
const closeFavourites = document.getElementById("closeFavourites");

/* ==================================================
   FAVOURITES
   ================================================== */
function loadFavourites(){
  try{
    const saved = localStorage.getItem(FAV_KEY);
    return saved ? JSON.parse(saved) : ["paracetamol", "ibuprofen", "augmentin", "amoxicillin"];
  }catch{
    return ["paracetamol", "ibuprofen"];
  }
}

function saveFavourites(){
  localStorage.setItem(FAV_KEY,JSON.stringify(favourites));
}

function toggleFavourite(key){
  if(favourites.includes(key)){
    favourites = favourites.filter(item=>item!==key);
  }else{
    favourites.push(key);
  }
  saveFavourites();
  refreshShortcutState();
  renderFavourites();
}

/* ==================================================
   MEDICATION LIST
   ================================================== */
function buildMedicationList(){
  medicationSelect.innerHTML="";
  const categories=["Analgesic / Antipyretic", "Antibiotics", "Allergy / Antihistamine", "Cough / Respiratory", "GI", "Nebulizer"];
  
  categories.forEach(category=>{
    const group=document.createElement("optgroup");
    group.label=category;
    Object.entries(DATA)
      .filter(([,drug])=>drug.category===category)
      .forEach(([key,drug])=>{
        const option=document.createElement("option");
        option.value=key;
        option.textContent=drug.name;
        group.appendChild(option);
      });
    medicationSelect.appendChild(group);
  });
}

function refreshShortcutState(){
  if (globalFavouriteBtn) {
    const currentMed = medicationSelect.value;
    const isFav = favourites.includes(currentMed);
    globalFavouriteBtn.style.color = isFav ? "#f1ad22" : "#b9c0cb";
    globalFavouriteBtn.textContent = isFav ? "★" : "☆";
  }
}

/* ==================================================
   SELECT MEDICATION
   ================================================== */
function selectMedication(key){
  medicationSelect.value=key;
  updateMedicationFields();
  clearResult();
  refreshShortcutState();
}

/* ==================================================
   FORMULATION + REGIMEN
   ================================================== */
function updateMedicationFields(){
  const drug=DATA[medicationSelect.value];
  
  concentrationSelect.innerHTML="";
  regimenSelect.innerHTML="";

  drug.concentrations.forEach((item,index)=>{
    const option=document.createElement("option");
    option.value=index;
    option.textContent=item.label;
    concentrationSelect.appendChild(option);
  });

  drug.regimens.forEach((item,index)=>{
    const option=document.createElement("option");
    option.value=index;
    option.textContent=item.label;
    regimenSelect.appendChild(option);
  });

  if(medicationSelect.value==="paracetamol"){
    const defaultIndex = drug.concentrations.findIndex(item=>item.default===true);
    if(defaultIndex>=0){
      concentrationSelect.value=defaultIndex;
    }
  }
}

/* ==================================================
   MATCHING
   ================================================== */
function matchesWeight(rule,weight){
  if(rule.minWeight!==undefined && weight<rule.minWeight) return false;
  if(rule.maxWeight!==undefined && weight>rule.maxWeight) return false;
  return true;
}

/* ==================================================
   CALCULATION
   ================================================== */
function calculateDose(){
  const weight=parseFloat(weightInput.value);
  const drug=DATA[medicationSelect.value];
  
  const needsWeight = drug.dosing !== "fixed";

  if(needsWeight && (!Number.isFinite(weight)||weight<=0)){
    showError("Enter patient weight.");
    return;
  }

  let rule = drug.regimens[parseInt(regimenSelect.value,10)||0];

  /* Auto-select weight band rule */
  if(drug.dosing==="weightBand"){
    const matching = drug.regimens.find(candidate=>matchesWeight(candidate,weight));
    if(matching){
      rule=matching;
      regimenSelect.value = drug.regimens.indexOf(matching);
    } else {
      showError("Weight is out of range for this medication.");
      return;
    }
  }

  if(rule.blocked){
    showError(rule.notes?.[0] || "This medication is not configured for automatic dosing.");
    showNotes(drug,rule);
    return;
  }

  const concentration = drug.concentrations[parseInt(concentrationSelect.value,10)||0];

  let mgDose=null;
  let mlDose=null;
  let calculation="";

  /* FIXED mL */
  if(rule.fixedMl!==undefined){
    doseValue.textContent = `${round(rule.fixedMl)} mL`;
    volumeValue.textContent="";
    frequencyValue.textContent=rule.frequency||"—";
    frequencySub.textContent=rule.frequencySub||"";
    calculationText.textContent="Fixed volume dose.";
    showNotes(drug,rule);
    resultCard.classList.remove("hidden");
    return;
  }

  /* FIXED mcg */
  if(rule.fixedMcg!==undefined){
    const mlDose = rule.fixedMcg / concentration.mcgPerMl;
    doseValue.textContent = `${rule.fixedMcg} mcg`;
    volumeValue.textContent = `( ${round(mlDose)} mL )`;
    frequencyValue.textContent=rule.frequency||"—";
    frequencySub.textContent=rule.frequencySub||"";
    calculationText.innerHTML=`${rule.fixedMcg} mcg ÷ ${concentration.mcgPerMl} mcg/mL = ${round(mlDose)} mL`;
    showNotes(drug,rule);
    resultCard.classList.remove("hidden");
    return;
  }

  /* FIXED mg */
  if(rule.fixedMg!==undefined){
    mgDose=rule.fixedMg;
    mlDose=mgDose/concentration.mgPerMl;
    calculation=`${mgDose} mg ÷ ${concentration.mgPerMl} mg/mL = ${round(mlDose)} mL`;
  }
  /* mg/kg/dose */
  else if(rule.mgkg!==undefined){
    mgDose=rule.mgkg*weight;
    mlDose=mgDose/concentration.mgPerMl;
    calculation=`${rule.mgkg} mg/kg × ${weight} kg = ${round(mgDose)} mg per dose<br>${round(mgDose)} mg ÷ ${concentration.mgPerMl} mg/mL = ${round(mlDose)} mL`;
  }
  /* mg/kg/day */
  else if(rule.mgkgDay!==undefined){
    mgDose=(rule.mgkgDay*weight)/(rule.divided||1);
    if(rule.maxDaily!==undefined && (mgDose*(rule.divided||1))>rule.maxDaily){
      mgDose=rule.maxDaily/(rule.divided||1);
    }
    mlDose=mgDose/concentration.mgPerMl;
    calculation=`${rule.mgkgDay} mg/kg/day × ${weight} kg ÷ ${rule.divided||1} = ${round(mgDose)} mg per dose<br>${round(mgDose)} mg ÷ ${concentration.mgPerMl} mg/mL = ${round(mlDose)} mL`;
  }

  if(mgDose===null){
    showError("Dose rule is not configured.");
    return;
  }

  doseValue.textContent=`${round(mgDose)} mg`;
  volumeValue.textContent=`( ${round(mlDose)} mL )`;
  frequencyValue.textContent=rule.frequency||"—";
  frequencySub.textContent=rule.frequencySub||"";
  calculationText.innerHTML=calculation;
  showNotes(drug,rule);
  resultCard.classList.remove("hidden");
}

/* ==================================================
   NOTES
   ================================================== */
function showNotes(drug,rule){
  noteList.innerHTML="";
  const notes=[...(drug.notes||[]), ...(rule.notes||[])];
  if(!notes.length){
    noteCard.classList.add("hidden");
    return;
  }
  [...new Set(notes)].forEach(note=>{
    const li=document.createElement("li");
    li.textContent=note;
    noteList.appendChild(li);
  });
  noteCard.classList.remove("hidden");
}

/* ==================================================
   ERROR
   ================================================== */
function showError(message){
  resultCard.classList.remove("hidden");
  noteCard.classList.add("hidden");
  doseValue.textContent="—";
  volumeValue.textContent="";
  frequencyValue.textContent="—";
  frequencySub.textContent="";
  calculationText.textContent=message;
}

/* ==================================================
   CLEAR
   ================================================== */
function clearResult(){
  resultCard.classList.add("hidden");
  noteCard.classList.add("hidden");
}

/* ==================================================
   FAVOURITES PANEL
   ================================================== */
function renderFavourites(){
  favouritesList.innerHTML="";
  if(!favourites.length){
    favouritesList.innerHTML="<p>No favourites yet.</p>";
    return;
  }
  favourites.forEach(key=>{
    if(!DATA[key]) return;
    const row=document.createElement("div");
    row.className="favourite-row";
    row.innerHTML=`
      <strong>${escapeHtml(DATA[key].name)}</strong>
      <button type="button" data-key="${key}">Open</button>
    `;
    row.querySelector("button").addEventListener("click",()=>{
      selectMedication(key);
      favouritesCard.classList.add("hidden");
    });
    favouritesList.appendChild(row);
  });
}

favouriteToggle.addEventListener("click",()=>{
  favouritesCard.classList.toggle("hidden");
  favouriteToggle.classList.toggle("active");
  renderFavourites();
});

closeFavourites.addEventListener("click",()=>{
  favouritesCard.classList.add("hidden");
  favouriteToggle.classList.remove("active");
});

/* ==================================================
   HELPERS
   ================================================== */
function round(number){
  return Math.round(number*10)/10;
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char=>({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}

/* ==================================================
   EVENTS
   ================================================== */
document.getElementById("calculate").addEventListener("click", calculateDose);

medicationSelect.addEventListener("change",()=>{
  updateMedicationFields();
  clearResult();
  refreshShortcutState();
});

if(globalFavouriteBtn){
  globalFavouriteBtn.addEventListener("click", () => {
    toggleFavourite(medicationSelect.value);
  });
}

weightInput.addEventListener("keydown", event=>{
  if(event.key==="Enter"){ calculateDose(); }
});

/* ==================================================
   INIT
   ================================================== */
buildMedicationList();
medicationSelect.value="paracetamol";
updateMedicationFields();
refreshShortcutState();
