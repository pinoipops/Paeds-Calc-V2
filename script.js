/*
====================================================
PAEDS CALC V4
====================================================

- Weight is always available.
- Age field appears ONLY when selected medication
  requires age.
- Age-based medicines therefore do not clutter
  the normal PCM/NSAID/antibiotic workflow.
- Only currently locked medicines are included.
- Bisacodyl syrup and Kaolin remain HOLD.
- Paracetamol defaults to 250mg/5mL.
- Favourites are stored locally.
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
      {
        label:"15mg/kg/dose every 4–6 hourly",
        mgkg:15,
        frequency:"Every 4–6 hourly",
        frequencySub:"PRN",
        notes:["Maximum 60mg/kg/day."]
      }
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
      {
        label:"10mg/kg/dose every 6–8 hourly",
        mgkg:10,
        frequency:"Every 6–8 hourly",
        frequencySub:"PRN"
      }
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
      {
        label:"25mg/kg/dose BD",
        mgkg:25,
        frequency:"BD",
        frequencySub:"twice daily"
      }
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
      {
        label:"25mg/kg/day BD",
        mgkgDay:25,
        divided:2,
        frequency:"BD",
        frequencySub:"twice daily"
      }
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
      {
        label:"25mg/kg/day divided QID",
        mgkgDay:25,
        divided:4,
        frequency:"QID",
        frequencySub:"four times daily"
      }
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
      {
        label:"30mg/kg/day divided BD",
        mgkgDay:30,
        divided:2,
        frequency:"BD",
        frequencySub:"twice daily",
        maxDaily:500
      }
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
      {
        label:"<15kg: 10mg/kg/day × 3 days",
        maxWeight:14.999,
        mgkgDay:10,
        divided:1,
        frequency:"OD × 3 days",
        frequencySub:"once daily"
      },
      {
        label:"15–25kg: 200mg OD × 3 days",
        minWeight:15,maxWeight:25,
        fixedMg:200,
        frequency:"OD × 3 days",
        frequencySub:"once daily"
      },
      {
        label:"26–35kg: 300mg OD × 3 days",
        minWeight:26,maxWeight:35,
        fixedMg:300,
        frequency:"OD × 3 days",
        frequencySub:"once daily"
      },
      {
        label:"36–45kg: 400mg OD × 3 days",
        minWeight:36,maxWeight:45,
        fixedMg:400,
        frequency:"OD × 3 days",
        frequencySub:"once daily"
      },
      {
        label:">45kg: 500mg OD × 3 days",
        minWeight:45.001,
        fixedMg:500,
        frequency:"OD × 3 days",
        frequencySub:"once daily"
      }
    ]
  },


  /* ================= ALLERGY ================= */

  piriton:{
    name:"Piriton",
    category:"Allergy / Antihistamine",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"2mg/5mL",mgPerMl:0.4}
    ],
    regimens:[
      {label:"1–2y: 2.5mL BD",ageMin:1,ageMax:1.99,fixedMl:2.5,frequency:"BD",frequencySub:"twice daily",notes:["Maximum 5mL/24h."]},
      {label:"2–6y: 2.5mL every 4–6h",ageMin:2,ageMax:5.99,fixedMl:2.5,frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 15mL/24h."]},
      {label:"6–12y: 5mL every 4–6h",ageMin:6,ageMax:11.99,fixedMl:5,frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 30mL/24h."]},
      {label:">12y: 10mL every 4–6h",ageMin:12,ageMax:99,fixedMl:10,frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 60mL/24h."]}
    ]
  },

  benadryl:{
    name:"Benadryl",
    category:"Allergy / Antihistamine",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"12.5mg/5mL",mgPerMl:2.5}
    ],
    regimens:[
      {label:"<6y: do not auto-dose",ageMin:0,ageMax:5.99,blocked:true,frequency:"—",notes:["Use only when specifically directed; product labelling varies by formulation."]},
      {label:"6–11y: 5–10mL every 4–6h",ageMin:6,ageMax:11.99,rangeMl:[5,10],frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 6 doses in 24h."]},
      {label:"≥12y: 10–20mL every 4–6h",ageMin:12,ageMax:99,rangeMl:[10,20],frequency:"Every 4–6 hourly",frequencySub:"PRN",notes:["Maximum 6 doses in 24h."]}
    ]
  },


  /* ================= COUGH ================= */

  tussidex:{
    name:"Tussidex",
    category:"Cough / Respiratory",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"15mg/5mL",mgPerMl:3}
    ],
    regimens:[
      {label:"<6y: no automatic dose",ageMin:0,ageMax:5.99,blocked:true,frequency:"—",notes:["Product information advises medical assessment for children below 6 years."]},
      {label:"≥6y: 5mL up to TDS",ageMin:6,ageMax:99,fixedMl:5,frequency:"Up to TDS",frequencySub:"PRN"}
    ]
  },

  coughen:{
    name:"Cough-En RX",
    category:"Cough / Respiratory",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"15mg/5mL dextromethorphan + 5mg/5mL phenylephrine + 1.25mg/5mL triprolidine",mgPerMl:3}
    ],
    regimens:[
      {label:"<2y: contraindicated",ageMin:0,ageMax:1.99,blocked:true,frequency:"—",notes:["Not for children below 2 years."]},
      {label:"2–5y: 2.5mL TDS",ageMin:2,ageMax:5.99,fixedMl:2.5,frequency:"TDS",frequencySub:"three times daily"},
      {label:"6–12y: 5mL TDS",ageMin:6,ageMax:11.99,fixedMl:5,frequency:"TDS",frequencySub:"three times daily"},
      {label:">12y: 10mL TDS",ageMin:12,ageMax:99,fixedMl:10,frequency:"TDS",frequencySub:"three times daily"}
    ]
  },

  paedicof:{
    name:"Paedicof",
    category:"Cough / Respiratory",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"5mg dextromethorphan + 15mg pseudoephedrine + 1mg dexchlorpheniramine /5mL",mgPerMl:1}
    ],
    regimens:[
      {label:"<2y: not recommended",ageMin:0,ageMax:1.99,blocked:true,frequency:"—",notes:["Not recommended below 2 years."]},
      {label:"2–5y: 5mL every 4–6h",ageMin:2,ageMax:5.99,fixedMl:5,frequency:"Every 4–6 hourly",frequencySub:"PRN"},
      {label:"6–11y: 10mL every 4–6h",ageMin:6,ageMax:11.99,fixedMl:10,frequency:"Every 4–6 hourly",frequencySub:"PRN"}
    ]
  },

  salmodil:{
    name:"Salmodil",
    category:"Cough / Respiratory",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"Salbutamol 2mg + Bromhexine 4mg /5mL",mgPerMl:0.4}
    ],
    regimens:[
      {label:"<6y: 1.25–2.5mL TDS–QID",ageMin:0,ageMax:5.99,rangeMl:[1.25,2.5],frequency:"TDS–QID",frequencySub:"as directed",notes:["Use the lower end initially in smaller children."]},
      {label:"≥6y: 2.5–5mL TDS–QID",ageMin:6,ageMax:99,rangeMl:[2.5,5],frequency:"TDS–QID",frequencySub:"as directed"}
    ]
  },


  /* ================= GI ================= */

  buscopan:{
    name:"Buscopan syrup",
    category:"GI",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"5mg/5mL",mgPerMl:1}
    ],
    regimens:[
      {label:"<1y: 2.5–5mL TDS",ageMin:0.084,ageMax:0.999,rangeMl:[2.5,5],frequency:"TDS",frequencySub:"three times daily"},
      {label:"1–3y: 5–10mL TDS",ageMin:1,ageMax:2.99,rangeMl:[5,10],frequency:"TDS",frequencySub:"three times daily"},
      {label:"3–6y: 10mL TDS",ageMin:3,ageMax:5.99,fixedMl:10,frequency:"TDS",frequencySub:"three times daily"},
      {label:"6–12y: 10–20mL TDS",ageMin:6,ageMax:11.99,rangeMl:[10,20],frequency:"TDS",frequencySub:"three times daily"},
      {label:">12y: 20mL QID",ageMin:12,ageMax:99,fixedMl:20,frequency:"QID",frequencySub:"four times daily"}
    ]
  },

  colimix:{
    name:"Colimix",
    category:"GI",
    dosing:"age",
    ageUnit:"years",
    concentrations:[
      {label:"Dicyclomine 5mg + Simethicone 50mg /5mL",mgPerMl:1}
    ],
    regimens:[
      {label:"<0.5y: contraindicated",ageMin:0,ageMax:0.49,blocked:true,frequency:"—",notes:["Dicyclomine is not recommended below 6 months."]},
      {label:"0.5–4y: 5mL before feeds, max QID",ageMin:0.5,ageMax:3.99,fixedMl:5,frequency:"Before feeds, max QID",frequencySub:"maximum 4 doses/24h"},
      {label:"4–12y: 5–10mL QID",ageMin:4,ageMax:11.99,rangeMl:[5,10],frequency:"QID",frequencySub:"four times daily"}
    ]
  },

  maxalon:{
    name:"Maxalon (Metoclopramide)",
    category:"GI",
    dosing:"ageWeight",
    ageUnit:"years",
    concentrations:[
      {label:"5mg/5mL (1mg/mL)",mgPerMl:1}
    ],
    regimens:[
      {label:"1–3y / 10–14kg: 1mg",ageMin:1,ageMax:2.99,minWeight:10,maxWeight:14,fixedMg:1,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"3–5y / 15–19kg: 2mg",ageMin:3,ageMax:4.99,minWeight:15,maxWeight:19,fixedMg:2,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"5–9y / 20–29kg: 2.5mg",ageMin:5,ageMax:8.99,minWeight:20,maxWeight:29,fixedMg:2.5,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"9–18y / 30–60kg: 5mg",ageMin:9,ageMax:17.99,minWeight:30,maxWeight:60,fixedMg:5,frequency:"Up to TDS",frequencySub:"minimum 6h interval"},
      {label:"15–18y />60kg: 10mg",ageMin:15,ageMax:17.99,minWeight:60.01,fixedMg:10,frequency:"Up to TDS",frequencySub:"minimum 6h interval"}
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
    dosing:"weight",
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
   QUICK SHORTCUTS
   ================================================== */

const QUICK_SHORTCUTS = [
  "paracetamol",
  "ibuprofen",
  "augmentin",
  "amoxicillin",
  "salbutamolNeb"
];

const FAV_KEY = "paedsCalcFavourites";

let favourites = loadFavourites();


/* ==================================================
   DOM
   ================================================== */

const weightInput = document.getElementById("weight");
const ageInput = document.getElementById("age");
const ageField = document.getElementById("ageField");
const ageHelp = document.getElementById("ageHelp");

const medicationSelect = document.getElementById("medication");
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

const shortcutGrid = document.getElementById("shortcutGrid");
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
    return saved ? JSON.parse(saved) : [...QUICK_SHORTCUTS];
  }catch{
    return [...QUICK_SHORTCUTS];
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

  const categories=[
    "Analgesic / Antipyretic",
    "Antibiotics",
    "Allergy / Antihistamine",
    "Cough / Respiratory",
    "GI",
    "Nebulizer"
  ];

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


/* ==================================================
   QUICK SHORTCUTS
   ================================================== */

function buildShortcuts(){

  shortcutGrid.innerHTML="";

  QUICK_SHORTCUTS.forEach(key=>{

    const button=document.createElement("button");
    button.type="button";
    button.className="shortcut-btn";
    button.dataset.key=key;

    button.innerHTML=`
      <span class="star">☆</span>
      <span>${escapeHtml(DATA[key].name)}</span>
    `;

    button.addEventListener("click",()=>{
      selectMedication(key);
    });

    button.addEventListener("contextmenu",event=>{
      event.preventDefault();
      toggleFavourite(key);
    });

    shortcutGrid.appendChild(button);

  });

  refreshShortcutState();
}

function refreshShortcutState(){

  shortcutGrid
    .querySelectorAll(".shortcut-btn")
    .forEach(button=>{

      const key=button.dataset.key;

      button.classList.toggle(
        "is-selected",
        key===medicationSelect.value
      );

      button.classList.toggle(
        "is-favourite",
        favourites.includes(key)
      );

    });

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
   AGE FIELD LOGIC
   ================================================== */

function updateAgeVisibility(drug){

  const needsAge =
    drug.dosing==="age" ||
    drug.dosing==="ageWeight";

  ageField.classList.toggle(
    "hidden",
    !needsAge
  );

  if(needsAge){

    ageHelp.textContent =
      drug.dosing==="ageWeight"
      ? "Age and weight are both used for this medication."
      : "Age is used automatically for this medication.";

  }else{

    ageHelp.textContent="";
    ageInput.value="";

  }

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

    const defaultIndex =
      drug.concentrations.findIndex(
        item=>item.default===true
      );

    if(defaultIndex>=0){
      concentrationSelect.value=defaultIndex;
    }

  }


  updateAgeVisibility(drug);
}


/* ==================================================
   MATCHING
   ================================================== */

function matchesAge(rule,age){

  if(
    rule.ageMin!==undefined &&
    age<rule.ageMin
  ) return false;

  if(
    rule.ageMax!==undefined &&
    age>rule.ageMax
  ) return false;

  return true;
}

function matchesWeight(rule,weight){

  if(
    rule.minWeight!==undefined &&
    weight<rule.minWeight
  ) return false;

  if(
    rule.maxWeight!==undefined &&
    weight>rule.maxWeight
  ) return false;

  return true;
}


/* ==================================================
   CALCULATION
   ================================================== */

function calculateDose(){

  const weight=parseFloat(weightInput.value);
  const age=parseFloat(ageInput.value);

  const drug=DATA[medicationSelect.value];


  if(!Number.isFinite(weight)||weight<=0){
    showError("Enter patient weight.");
    return;
  }


  const needsAge =
    drug.dosing==="age" ||
    drug.dosing==="ageWeight";


  if(
    needsAge &&
    (!Number.isFinite(age)||age<0)
  ){
    showError("Enter patient age.");
    return;
  }


  let rule =
    drug.regimens[
      parseInt(regimenSelect.value,10)||0
    ];


  /*
    Auto-select age / age+weight rule.
  */

  if(drug.dosing==="age"){

    const matching =
      drug.regimens.find(
        candidate=>matchesAge(candidate,age)
      );

    if(matching){

      rule=matching;

      regimenSelect.value =
        drug.regimens.indexOf(matching);

    }

  }


  if(drug.dosing==="ageWeight"){

    const matching =
      drug.regimens.find(
        candidate =>
          matchesAge(candidate,age) &&
          matchesWeight(candidate,weight)
      );

    if(matching){

      rule=matching;

      regimenSelect.value =
        drug.regimens.indexOf(matching);

    }

  }


  if(drug.dosing==="weightBand"){

    const matching =
      drug.regimens.find(
        candidate=>matchesWeight(candidate,weight)
      );

    if(matching){

      rule=matching;

      regimenSelect.value =
        drug.regimens.indexOf(matching);

    }

  }


  if(rule.blocked){

    showError(
      rule.notes?.[0] ||
      "This medication is not configured for automatic dosing."
    );

    showNotes(drug,rule);

    return;
  }


  const concentration =
    drug.concentrations[
      parseInt(
        concentrationSelect.value,
        10
      )||0
    ];


  let mgDose=null;
  let mlDose=null;
  let calculation="";


  /* FIXED mL */

  if(rule.fixedMl!==undefined){

    doseValue.textContent =
      `${round(rule.fixedMl)} mL`;

    volumeValue.textContent="";
    frequencyValue.textContent=
      rule.frequency||"—";
    frequencySub.textContent=
      rule.frequencySub||"";

    calculationText.textContent=
      "Use the selected age-specific dose.";

    showNotes(drug,rule);

    resultCard.classList.remove("hidden");

    return;
  }


  /* RANGE mL */

  if(rule.rangeMl){

    doseValue.textContent =
      `${formatRange(rule.rangeMl)} mL`;

    volumeValue.textContent="";
    frequencyValue.textContent=
      rule.frequency||"—";
    frequencySub.textContent=
      rule.frequencySub||"";

    calculationText.textContent=
      "Use an appropriate dose within the displayed range.";

    showNotes(drug,rule);

    resultCard.classList.remove("hidden");

    return;
  }


  /* FIXED mcg */

  if(rule.fixedMcg!==undefined){

    const mlDose =
      rule.fixedMcg /
      concentration.mcgPerMl;

    doseValue.textContent =
      `${rule.fixedMcg} mcg`;

    volumeValue.textContent =
      `( ${round(mlDose)} mL )`;

    frequencyValue.textContent=
      rule.frequency||"—";

    frequencySub.textContent=
      rule.frequencySub||"";

    calculationText.innerHTML=
      `${rule.fixedMcg} mcg ÷ `+
      `${concentration.mcgPerMl} mcg/mL = `+
      `${round(mlDose)} mL`;

    showNotes(drug,rule);

    resultCard.classList.remove("hidden");

    return;
  }


  /* FIXED mg */

  if(rule.fixedMg!==undefined){

    mgDose=rule.fixedMg;

    mlDose=
      mgDose/
      concentration.mgPerMl;

    calculation=
      `${mgDose} mg ÷ `+
      `${concentration.mgPerMl} mg/mL = `+
      `${round(mlDose)} mL`;

  }


  /* mg/kg/dose */

  else if(rule.mgkg!==undefined){

    mgDose=
      rule.mgkg*
      weight;

    mlDose=
      mgDose/
      concentration.mgPerMl;

    calculation=
      `${rule.mgkg} mg/kg × `+
      `${weight} kg = `+
      `${round(mgDose)} mg per dose<br>`+
      `${round(mgDose)} mg ÷ `+
      `${concentration.mgPerMl} mg/mL = `+
      `${round(mlDose)} mL`;

  }


  /* mg/kg/day */

  else if(rule.mgkgDay!==undefined){

    mgDose=
      (
        rule.mgkgDay*
        weight
      )/
      (rule.divided||1);

    if(
      rule.maxDaily!==undefined &&
      (
        mgDose*
        (rule.divided||1)
      )>
      rule.maxDaily
    ){

      mgDose=
        rule.maxDaily/
        (rule.divided||1);

    }

    mlDose=
      mgDose/
      concentration.mgPerMl;

    calculation=
      `${rule.mgkgDay} mg/kg/day × `+
      `${weight} kg ÷ ${rule.divided||1} = `+
      `${round(mgDose)} mg per dose<br>`+
      `${round(mgDose)} mg ÷ `+
      `${concentration.mgPerMl} mg/mL = `+
      `${round(mlDose)} mL`;

  }


  if(mgDose===null){

    showError(
      "Dose rule is not configured."
    );

    return;
  }


  doseValue.textContent=
    `${round(mgDose)} mg`;

  volumeValue.textContent=
    `( ${round(mlDose)} mL )`;

  frequencyValue.textContent=
    rule.frequency||"—";

  frequencySub.textContent=
    rule.frequencySub||"";

  calculationText.innerHTML=
    calculation;

  showNotes(drug,rule);

  resultCard.classList.remove("hidden");

}


/* ==================================================
   NOTES
   ================================================== */

function showNotes(drug,rule){

  noteList.innerHTML="";

  const notes=[
    ...(drug.notes||[]),
    ...(rule.notes||[])
  ];

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

    favouritesList.innerHTML=
      "<p>No favourites yet.</p>";

    return;
  }


  favourites.forEach(key=>{

    if(!DATA[key]) return;

    const row=document.createElement("div");
    row.className="favourite-row";

    row.innerHTML=`
      <strong>${escapeHtml(DATA[key].name)}</strong>
      <button type="button" data-key="${key}">
        Open
      </button>
    `;

    row.querySelector("button")
      .addEventListener("click",()=>{

        selectMedication(key);

        favouritesCard.classList.add(
          "hidden"
        );

      });

    favouritesList.appendChild(row);

  });

}


favouriteToggle.addEventListener(
  "click",
  ()=>{

    favouritesCard.classList.toggle(
      "hidden"
    );

    favouriteToggle.classList.toggle(
      "active"
    );

    renderFavourites();

  }
);


closeFavourites.addEventListener(
  "click",
  ()=>{

    favouritesCard.classList.add(
      "hidden"
    );

    favouriteToggle.classList.remove(
      "active"
    );

  }
);


/* ==================================================
   HELPERS
   ================================================== */

function round(number){
  return Math.round(number*10)/10;
}

function formatRange(range){
  return `${range[0]}–${range[1]}`;
}

function escapeHtml(value){

  return String(value).replace(
    /[&<>"']/g,
    char=>({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[char])
  );

}


/* ==================================================
   EVENTS
   ================================================== */

document
  .getElementById("calculate")
  .addEventListener(
    "click",
    calculateDose
  );

medicationSelect.addEventListener(
  "change",
  ()=>{
    updateMedicationFields();
    clearResult();
    refreshShortcutState();
  }
);

weightInput.addEventListener(
  "keydown",
  event=>{
    if(event.key==="Enter"){
      calculateDose();
    }
  }
);

ageInput.addEventListener(
  "keydown",
  event=>{
    if(event.key==="Enter"){
      calculateDose();
    }
  }
);


/* ==================================================
   INIT
   ================================================== */

buildMedicationList();
buildShortcuts();

medicationSelect.value="paracetamol";

updateMedicationFields();
refreshShortcutState();
