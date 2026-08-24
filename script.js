const DATA = {
  paracetamol: {
    name: "Paracetamol",
    category: "Analgesic / Antipyretic",
    type: "weight",
    concentrations: [
      { label: "120mg/5mL", mgPerMl: 24 },
      { label: "125mg/5mL", mgPerMl: 25 },
      { label: "250mg/5mL", mgPerMl: 50 }
    ],
    regimens: [
      {
        label: "15mg/kg/dose every 4–6 hourly",
        mgkg: 15,
        frequency: "Every 4–6 hourly PRN",
        maxMgKgDay: 60
      }
    ]
  },

  ibuprofen: {
    name: "Ibuprofen",
    category: "Analgesic / Antipyretic",
    type: "weight",
    concentrations: [
      { label: "100mg/5mL", mgPerMl: 20 }
    ],
    regimens: [
      {
        label: "10mg/kg/dose every 6–8 hourly",
        mgkg: 10,
        frequency: "Every 6–8 hourly PRN"
      }
    ]
  },

  amoxicillin: {
    name: "Amoxicillin",
    category: "Antibiotics",
    type: "weight",
    concentrations: [
      { label: "125mg/5mL", mgPerMl: 25 },
      { label: "250mg/5mL", mgPerMl: 50 }
    ],
    regimens: [
      {
        label: "25mg/kg/dose BD",
        mgkg: 25,
        frequency: "BD"
      }
    ]
  },

  augmentin: {
    name: "Augmentin",
    category: "Antibiotics",
    type: "weightDay",
    concentrations: [
      {
        label: "125/31.25mg/5mL",
        mgPerMl: 25
      },
      {
        label: "200/28.5mg/5mL",
        mgPerMl: 40
      },
      {
        label: "400/57mg/5mL",
        mgPerMl: 80
      },
      {
        label: "600/42.9mg/5mL",
        mgPerMl: 120
      }
    ],
    regimens: [
      {
        label: "25mg/kg/day (amoxicillin component) BD",
        mgkgDay: 25,
        divided: 2,
        frequency: "BD"
      }
    ]
  },

  cephalexin: {
    name: "Cephalexin",
    category: "Antibiotics",
    type: "weightDay",
    concentrations: [
      { label: "125mg/5mL", mgPerMl: 25 },
      { label: "250mg/5mL", mgPerMl: 50 }
    ],
    regimens: [
      {
        label: "25mg/kg/day divided QID",
        mgkgDay: 25,
        divided: 4,
        frequency: "QID"
      }
    ]
  },

  cefuroxime: {
    name: "Cefuroxime",
    category: "Antibiotics",
    type: "weightDay",
    concentrations: [
      { label: "125mg/5mL", mgPerMl: 25 }
    ],
    regimens: [
      {
        label: "30mg/kg/day in 2 divided doses",
        mgkgDay: 30,
        divided: 2,
        frequency: "BD",
        maxDaily: 500
      }
    ]
  },

  azithromycin: {
    name: "Azithromycin",
    category: "Antibiotics",
    type: "band",
    concentrations: [
      { label: "200mg/5mL", mgPerMl: 40 }
    ],
    regimens: [
      {
        label: "<15kg: 10mg/kg/day × 3 days",
        maxWeight: 14.999,
        mgkgDay: 10,
        divided: 1,
        frequency: "OD × 3 days"
      },
      {
        label: "15–25kg: 200mg OD × 3 days",
        minWeight: 15,
        maxWeight: 25,
        fixedMg: 200,
        frequency: "OD × 3 days"
      },
      {
        label: "26–35kg: 300mg OD × 3 days",
        minWeight: 26,
        maxWeight: 35,
        fixedMg: 300,
        frequency: "OD × 3 days"
      },
      {
        label: "36–45kg: 400mg OD × 3 days",
        minWeight: 36,
        maxWeight: 45,
        fixedMg: 400,
        frequency: "OD × 3 days"
      },
      {
        label: ">45kg: adult regimen",
        minWeight: 45.001,
        fixedMg: 500,
        frequency: "OD × 3 days"
      }
    ]
  },

  piriton: {
    name: "Piriton",
    category: "Allergy / Antihistamine",
    type: "brand"
  },

  cetirizine: {
    name: "Cetirizine",
    category: "Allergy / Antihistamine",
    type: "brandAge"
  },

  loratadine: {
    name: "Loratadine",
    category: "Allergy / Antihistamine",
    type: "brandAge"
  },

  benadryl: {
    name: "Benadryl",
    category: "Allergy / Antihistamine",
    type: "brand"
  },

  salmodil: {
    name: "Salmodil",
    category: "Cough / Respiratory",
    type: "brand"
  },

  tussidex: {
    name: "Tussidex",
    category: "Cough / Respiratory",
    type: "brand"
  },

  coughen: {
    name: "Cough-En",
    category: "Cough / Respiratory",
    type: "brand"
  },

  paedicof: {
    name: "Paedicof",
    category: "Cough / Respiratory",
    type: "brand"
  },

  bisacodyl: {
    name: "Bisacodyl syrup",
    category: "GI",
    type: "brand"
  },

  buscopan: {
    name: "Buscopan syrup",
    category: "GI",
    type: "brand"
  },

  colimix: {
    name: "Colimix",
    category: "GI",
    type: "brand"
  },

  kaolin: {
    name: "Kaolin",
    category: "GI",
    type: "brand"
  },

  maxalon: {
    name: "Maxalon",
    category: "GI",
    type: "brand"
  },

  salbutamolNeb: {
    name: "Salbutamol Neb",
    category: "Nebulizer",
    type: "neb",
    concentrations: [
      {
        label: "0.5% (5mg/mL)",
        mgPerMl: 5
      }
    ],
    regimens: [
      {
        label: "2.5mg per nebulisation",
        fixedMg: 2.5,
        frequency: "PRN / according to clinical response"
      },
      {
        label: "5mg per nebulisation",
        fixedMg: 5,
        frequency: "PRN / according to clinical response"
      }
    ]
  },

  ipratropiumNeb: {
    name: "Ipratropium Neb",
    category: "Nebulizer",
    type: "nebAge",
    concentrations: [
      {
        label: "0.0125% (125mcg/mL)",
        mcgPerMl: 125
      },
      {
        label: "0.025% (250mcg/mL)",
        mcgPerMl: 250
      }
    ],
    regimens: [
      {
        label: "<6 years: 100–250mcg/dose",
        ageMin: 0,
        ageMax: 5.999,
        rangeMcg: [100, 250],
        frequency: "According to clinical response/protocol"
      },
      {
        label: "6–12 years: 250mcg/dose",
        ageMin: 6,
        ageMax: 11.999,
        fixedMcg: 250,
        frequency: "According to clinical response/protocol"
      },
      {
        label: ">12 years: 500mcg/dose",
        ageMin: 12,
        ageMax: 200,
        fixedMcg: 500,
        frequency: "According to clinical response/protocol"
      }
    ]
  },

  comboNeb: {
    name: "Salbutamol + Ipratropium Neb",
    category: "Nebulizer",
    type: "nebFixed",
    concentrations: [
      {
        label: "Ipratropium 0.5mg + Salbutamol 2.5mg / UDV",
        fixedMl: 1
      }
    ],
    regimens: [
      {
        label: "1 unit-dose vial",
        fixedMl: 1,
        frequency: "According to acute/clinical protocol"
      }
    ]
  }
};


/* ==========================================
   QUICK BUTTONS
   ========================================== */

const quick = [
  "paracetamol",
  "ibuprofen",
  "augmentin",
  "salmodil",
  "piriton",
  "nebMenu"
];


/* ==========================================
   DOM
   ========================================== */

const meds = document.getElementById("medication");
const concentration = document.getElementById("concentration");
const regimen = document.getElementById("regimen");
const protocol = document.getElementById("protocol");

const weightInput = document.getElementById("weight");
const ageInput = document.getElementById("age");


/* ==========================================
   QUICK BUTTONS
   ========================================== */

function buildQuick(){

  const box =
    document.getElementById("quickChips");

  box.innerHTML = "";

  quick.forEach(key => {

    const button =
      document.createElement("button");

    button.textContent =
      key === "nebMenu"
      ? "Nebulizer"
      : DATA[key].name;

    button.dataset.key = key;

    button.onclick = () => {

      if(key === "nebMenu"){
        meds.value = "salbutamolNeb";
      }else{
        meds.value = key;
      }

      update();
    };

    box.appendChild(button);

  });
}


/* ==========================================
   MEDICATION LIST
   ========================================== */

function buildMedications(){

  meds.innerHTML = "";

  const categories = [
    "Analgesic / Antipyretic",
    "Antibiotics",
    "Allergy / Antihistamine",
    "Cough / Respiratory",
    "GI",
    "Nebulizer"
  ];

  categories.forEach(category => {

    const group =
      document.createElement("optgroup");

    group.label = category;

    Object.entries(DATA)
      .filter(
        ([_, drug]) =>
          drug.category === category
      )
      .forEach(([key, drug]) => {

        const option =
          document.createElement("option");

        option.value = key;
        option.textContent = drug.name;

        group.appendChild(option);

      });

    meds.appendChild(group);

  });
}


/* ==========================================
   UPDATE DROPDOWNS
   ========================================== */

function update(){

  const drug = DATA[meds.value];

  concentration.innerHTML = "";
  regimen.innerHTML = "";


  (drug.concentrations || [])
    .forEach((item,index) => {

      const option =
        document.createElement("option");

      option.value = index;
      option.textContent = item.label;

      concentration.appendChild(option);

    });


  (drug.regimens || [])
    .forEach((item,index) => {

      const option =
        document.createElement("option");

      option.value = index;
      option.textContent = item.label;

      regimen.appendChild(option);

    });


  if(!drug.concentrations?.length){

    concentration.innerHTML =
      "<option>Formulation not configured</option>";

  }


  if(!drug.regimens?.length){

    regimen.innerHTML =
      "<option>Regimen not configured</option>";

  }


  document
    .querySelectorAll(".quick-chips button")
    .forEach(button => {

      const active =
        button.dataset.key === meds.value ||
        (
          button.dataset.key === "nebMenu" &&
          drug.category === "Nebulizer"
        );

      button.classList.toggle(
        "active",
        active
      );

    });


  protocol.classList.add("hidden");
}


/* ==========================================
   HELPERS
   ========================================== */

function round(number){

  return Math.round(number * 10) / 10;

}


function show(html,warning=false){

  protocol.innerHTML = html;

  protocol.classList.remove("hidden");

  protocol.classList.toggle(
    "warning",
    warning
  );

}


function matchesWeight(rule,weight){

  if(
    rule.minWeight !== undefined &&
    weight < rule.minWeight
  ){
    return false;
  }

  if(
    rule.maxWeight !== undefined &&
    weight > rule.maxWeight
  ){
    return false;
  }

  return true;
}


function matchesAge(rule,age){

  if(
    rule.ageMin !== undefined &&
    age < rule.ageMin
  ){
    return false;
  }

  if(
    rule.ageMax !== undefined &&
    age > rule.ageMax
  ){
    return false;
  }

  return true;
}


/* ==========================================
   CALCULATE
   ========================================== */

function calculateDose(){

  const weight =
    parseFloat(weightInput.value);

  const age =
    parseFloat(ageInput.value);

  const drug =
    DATA[meds.value];


  if(!weight || weight <= 0){

    show(`
      <strong>Protocol:</strong>
      <div class="main">
        Enter patient weight.
      </div>
    `,true);

    return;
  }


  if(!Number.isFinite(age) || age < 0){

    show(`
      <strong>Protocol:</strong>
      <div class="main">
        Enter patient age.
      </div>
    `,true);

    return;
  }


  /*
    Brand-specific medicines are intentionally
    not auto-calculated until their exact
    formulation and dosing rules are configured.
  */

  if(
    drug.type === "brand" ||
    drug.type === "brandAge"
  ){

    show(`
      <strong>Protocol:</strong>

      <div class="main">
        ${escapeHtml(drug.name)}
        is ready for Regimen Builder.
      </div>

      <div class="sub">
        Exact local formulation and dosing
        rule must be configured before
        automatic mL calculation is enabled.
      </div>
    `,true);

    return;
  }


  const selectedConcentration =
    drug.concentrations[
      parseInt(concentration.value) || 0
    ];


  let rule =
    drug.regimens[
      parseInt(regimen.value) || 0
    ];


  /*
    Automatically select age/weight band.
  */

  const automaticRule =
    drug.regimens.find(candidate =>
      matchesWeight(candidate,weight) &&
      matchesAge(candidate,age)
    );


  if(
    automaticRule &&
    (
      drug.type === "band" ||
      drug.type === "nebAge"
    )
  ){

    rule = automaticRule;

    regimen.value =
      drug.regimens.indexOf(
        automaticRule
      );
  }


  let doseText = "";
  let volumeText = "";
  let formula = "";


  /* ========================================
     AGE-BASED NEBULIZER
     ======================================== */

  if(drug.type === "nebAge"){

    if(!matchesAge(rule,age)){

      show(`
        <strong>Protocol:</strong>

        <div class="main">
          Selected regimen does not match
          the patient's age.
        </div>
      `,true);

      return;
    }


    let micrograms =
      rule.fixedMcg;


    if(rule.rangeMcg){
      micrograms =
        rule.rangeMcg[0];
    }


    const ml =
      selectedConcentration.mcgPerMl
      ? micrograms /
        selectedConcentration.mcgPerMl
      : null;


    doseText =
      rule.rangeMcg
      ? `${rule.rangeMcg[0]}–${rule.rangeMcg[1]} mcg/dose`
      : `${micrograms} mcg/dose`;


    volumeText =
      ml !== null
      ? `${round(ml)} mL`
      : "";


    formula =
      ml !== null
      ? `${micrograms} mcg ÷ ${selectedConcentration.mcgPerMl} mcg/mL = ${round(ml)} mL`
      : "";

  }


  /* ========================================
     FIXED COMBINATION NEB
     ======================================== */

  else if(drug.type === "nebFixed"){

    doseText =
      "1 unit-dose vial";

    volumeText =
      "1 UDV";

  }


  /* ========================================
     SALBUTAMOL NEB
     ======================================== */

  else if(drug.type === "neb"){

    const mg =
      rule.fixedMg;

    const ml =
      mg /
      selectedConcentration.mgPerMl;

    doseText =
      `${mg} mg/dose`;

    volumeText =
      `${round(ml)} mL`;

    formula =
      `${mg} mg ÷ ${selectedConcentration.mgPerMl} mg/mL = ${round(ml)} mL`;

  }


  /* ========================================
     WEIGHT-BASED
     ======================================== */

  else{

    if(!matchesWeight(rule,weight)){

      show(`
        <strong>Protocol:</strong>

        <div class="main">
          This dosing regimen does not
          match the patient's weight.
        </div>
      `,true);

      return;
    }


    let mgDose = null;


    if(rule.fixedMg !== undefined){

      mgDose =
        rule.fixedMg;

    }


    else if(rule.mgkg !== undefined){

      mgDose =
        rule.mgkg * weight;

    }


    else if(rule.mgkgDay !== undefined){

      mgDose =
        (
          rule.mgkgDay *
          weight
        ) /
        (rule.divided || 1);

    }


    if(mgDose === null){

      show(`
        <strong>Protocol:</strong>

        <div class="main">
          Dose rule not configured.
        </div>
      `,true);

      return;
    }


    /* Daily maximum */

    if(
      rule.maxMgKgDay !== undefined &&
      (
        mgDose *
        (rule.divided || 1)
      ) >
      (
        rule.maxMgKgDay *
        weight
      )
    ){

      mgDose =
        (
          rule.maxMgKgDay *
          weight
        ) /
        (rule.divided || 1);

    }


    /* Absolute maximum */

    if(
      rule.maxDaily !== undefined &&
      (
        mgDose *
        (rule.divided || 1)
      ) >
      rule.maxDaily
    ){

      mgDose =
        rule.maxDaily /
        (rule.divided || 1);

    }


    const ml =
      mgDose /
      selectedConcentration.mgPerMl;


    doseText =
      `${round(mgDose)} mg/dose`;

    volumeText =
      `${round(ml)} mL/dose`;


    if(rule.mgkgDay !== undefined){

      formula =
        `${rule.mgkgDay} mg/kg/day × ` +
        `${weight} kg ÷ ` +
        `${rule.divided || 1} = ` +
        `${round(mgDose)} mg/dose`;

    }

    else if(rule.mgkg !== undefined){

      formula =
        `${rule.mgkg} mg/kg × ` +
        `${weight} kg = ` +
        `${round(mgDose)} mg/dose`;

    }

  }


  /* ========================================
     DISPLAY RESULT
     ======================================== */

  show(`
    <strong>Protocol:</strong>

    <div class="main">

      ${doseText}

      ${
        volumeText
        ? ` (${volumeText})`
        : ""
      }

      ${
        rule.frequency
        ? ` ${rule.frequency}`
        : ""
      }

    </div>

    ${
      formula
      ? `<div class="sub">${formula}</div>`
      : ""
    }
  `);
}


/* ==========================================
   ESCAPE HTML
   ========================================== */

function escapeHtml(value){

  return String(value).replace(
    /[&<>"']/g,

    character => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[character])
  );
}


/* ==========================================
   REGIMEN BUILDER
   ========================================== */

let regimenItems = [];


function renderRegimen(){

  const list =
    document.getElementById(
      "regimenList"
    );


  const saved =
    localStorage.getItem(
      "paedSavedRegimens"
    );


  document.getElementById(
    "savedCount"
  ).textContent =
    saved ? "1" : "0";


  if(!regimenItems.length){

    list.innerHTML = `
      <div class="empty-state">

        <div class="plus-circle">
          +
        </div>

        <strong>
          No medications added yet.
        </strong>

        <span>
          Tap “+ Add Medication” to start
          building the regimen.
        </span>

      </div>
    `;

    return;
  }


  list.innerHTML =
    regimenItems.map(
      (item,index) => `

        <div class="regimen-row">

          <div>

            <strong>
              ${escapeHtml(item.med)}
            </strong>

            <small>
              ${escapeHtml(item.form)}
              •
              ${escapeHtml(item.dose)}
              •
              ${escapeHtml(item.freq)}
            </small>

          </div>

          <button
            class="remove"
            data-i="${index}"
          >
            ×
          </button>

        </div>
      `
    ).join("");


  list
    .querySelectorAll(".remove")
    .forEach(button => {

      button.onclick = () => {

        regimenItems.splice(
          Number(button.dataset.i),
          1
        );

        renderRegimen();

      };

    });
}


/* ==========================================
   MODAL
   ========================================== */

const modal =
  document.getElementById(
    "modal"
  );


document
  .getElementById(
    "addMedication"
  )
  .onclick = () => {

    modal.classList.remove(
      "hidden"
    );

  };


document
  .getElementById(
    "closeModal"
  )
  .onclick = () => {

    modal.classList.add(
      "hidden"
    );

  };


/* ==========================================
   ADD CUSTOM MEDICATION
   ========================================== */

document
  .getElementById(
    "saveCustom"
  )
  .onclick = () => {

    const med =
      document
        .getElementById("customMed")
        .value
        .trim();


    if(!med){
      return;
    }


    regimenItems.push({

      med: med,

      form:
        document
          .getElementById("customForm")
          .value
          .trim(),

      dose:
        document
          .getElementById("customDose")
          .value
          .trim(),

      freq:
        document
          .getElementById("customFreq")
          .value
          .trim()

    });


    [
      "customMed",
      "customForm",
      "customDose",
      "customFreq"
    ].forEach(id => {

      document.getElementById(id).value = "";

    });


    modal.classList.add(
      "hidden"
    );


    renderRegimen();

  };


/* ==========================================
   SAVE REGIMEN
   ========================================== */

document
  .getElementById(
    "savedRegimens"
  )
  .onclick = () => {

    localStorage.setItem(
      "paedSavedRegimens",
      JSON.stringify(
        regimenItems
      )
    );


    document
      .getElementById(
        "savedCount"
      )
      .textContent = "1";


    alert(
      "Current regimen saved on this device."
    );

  };


/* ==========================================
   ENTER KEY
   ========================================== */

[
  weightInput,
  ageInput
].forEach(input => {

  input.addEventListener(
    "keydown",
    event => {

      if(event.key === "Enter"){
        calculateDose();
      }

    }
  );

});


/* ==========================================
   INITIALISE
   ========================================== */

document
  .getElementById("calculate")
  .addEventListener(
    "click",
    calculateDose
  );


meds.addEventListener(
  "change",
  update
);


buildQuick();

buildMedications();

meds.value =
  "paracetamol";

update();

renderRegimen();
