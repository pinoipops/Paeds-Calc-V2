const DATA = {

  paracetamol:{
    name:"Paracetamol",
    category:"Analgesic / Antipyretic",
    type:"syrup",

    concentrations:[
      {label:"120mg/5mL",mgPerMl:24},
      {label:"125mg/5mL",mgPerMl:25},
      {label:"250mg/5mL",mgPerMl:50}
    ],

    regimens:[
      {
        label:"15mg/kg/dose every 4–6 hourly",
        mgkg:15,
        frequency:"Every 4–6 hourly PRN",
        maxMgKgDay:60
      }
    ]
  },

  ibuprofen:{
    name:"Ibuprofen",
    category:"Analgesic / Antipyretic",
    type:"syrup",

    concentrations:[
      {
        label:"100mg/5mL",
        mgPerMl:20
      }
    ],

    regimens:[
      {
        label:"10mg/kg/dose every 6–8 hourly",
        mgkg:10,
        frequency:"Every 6–8 hourly PRN"
      }
    ]
  },

  amoxicillin:{
    name:"Amoxicillin",
    category:"Antibiotics",
    type:"syrup",

    concentrations:[
      {
        label:"125mg/5mL",
        mgPerMl:25
      },
      {
        label:"250mg/5mL",
        mgPerMl:50
      }
    ],

    regimens:[
      {
        label:"25mg/kg/dose BD",
        mgkg:25,
        frequency:"BD"
      }
    ]
  },

  augmentin:{
    name:"Augmentin",
    category:"Antibiotics",
    type:"syrup",

    concentrations:[
      {
        label:"125/31.25mg/5mL",
        mgPerMl:25,
        component:"amoxicillin"
      },
      {
        label:"200/28.5mg/5mL",
        mgPerMl:40,
        component:"amoxicillin"
      },
      {
        label:"400/57mg/5mL",
        mgPerMl:80,
        component:"amoxicillin"
      },
      {
        label:"600/42.9mg/5mL",
        mgPerMl:120,
        component:"amoxicillin"
      }
    ],

    regimens:[
      {
        label:"25mg/kg/day (amoxicillin component) BD",
        mgkgDay:25,
        divided:2,
        frequency:"BD"
      }
    ]
  },

  cephalexin:{
    name:"Cephalexin",
    category:"Antibiotics",
    type:"syrup",

    concentrations:[
      {
        label:"125mg/5mL",
        mgPerMl:25
      },
      {
        label:"250mg/5mL",
        mgPerMl:50
      }
    ],

    regimens:[
      {
        label:"25–100mg/kg/day divided QID",
        mgkgDay:25,
        divided:4,
        frequency:"QID"
      }
    ]
  },

  cefuroxime:{
    name:"Cefuroxime",
    category:"Antibiotics",
    type:"syrup",

    concentrations:[
      {
        label:"125mg/5mL",
        mgPerMl:25
      }
    ],

    regimens:[
      {
        label:"30mg/kg/day in 2 divided doses",
        mgkgDay:30,
        divided:2,
        frequency:"BD",
        maxDaily:500
      }
    ]
  },

  azithromycin:{
    name:"Azithromycin",
    category:"Antibiotics",
    type:"syrup",

    concentrations:[
      {
        label:"200mg/5mL",
        mgPerMl:40
      }
    ],

    regimens:[
      {
        label:"12mg/kg/day for 5 days",
        mgkgDay:12,
        divided:1,
        frequency:"OD × 5 days"
      }
    ]
  },

  piriton:{
    name:"Piriton",
    category:"Allergy / Antihistamine",
    type:"brand"
  },

  cetirizine:{
    name:"Cetirizine",
    category:"Allergy / Antihistamine",
    type:"brand"
  },

  loratadine:{
    name:"Loratadine",
    category:"Allergy / Antihistamine",
    type:"brand"
  },

  benadryl:{
    name:"Benadryl",
    category:"Allergy / Antihistamine",
    type:"brand"
  },

  salmodil:{
    name:"Salmodil",
    category:"Cough / Respiratory",
    type:"brand"
  },

  tussidex:{
    name:"Tussidex",
    category:"Cough / Respiratory",
    type:"brand"
  },

  coughen:{
    name:"Cough-En",
    category:"Cough / Respiratory",
    type:"brand"
  },

  paedicof:{
    name:"Paedicof",
    category:"Cough / Respiratory",
    type:"brand"
  },

  bromhexine:{
    name:"Bromhexine",
    category:"Cough / Respiratory",
    type:"brand"
  },

  bisacodyl:{
    name:"Bisacodyl syrup",
    category:"GI",
    type:"brand"
  },

  buscopan:{
    name:"Buscopan syrup",
    category:"GI",
    type:"brand"
  },

  colimix:{
    name:"Colimix",
    category:"GI",
    type:"brand"
  },

  kaolin:{
    name:"Kaolin",
    category:"GI",
    type:"brand"
  },

  maxalon:{
    name:"Maxalon",
    category:"GI",
    type:"brand"
  },

  salbutamolNeb:{
    name:"Salbutamol Neb",
    category:"Nebulizer",
    type:"neb",

    concentrations:[
      {
        label:"0.5% (5mg/mL)",
        mgPerMl:5
      }
    ],

    regimens:[
      {
        label:"2.5mg (0.5mL) per nebulisation",
        fixedMg:2.5,
        frequency:"Repeat according to response/tolerability"
      },
      {
        label:"5mg (1mL) per nebulisation",
        fixedMg:5,
        frequency:"Repeat according to response/tolerability"
      }
    ]
  },

  ipratropiumNeb:{
    name:"Ipratropium Neb",
    category:"Nebulizer",
    type:"nebAge",

    concentrations:[
      {
        label:"0.0125% (125mcg/mL)",
        mcgPerMl:125
      },
      {
        label:"0.025% (250mcg/mL)",
        mcgPerMl:250
      }
    ],

    regimens:[
      {
        label:"<6 years: 100–250mcg/dose",
        ageMin:0,
        ageMax:5.999,
        rangeMcg:[100,250],
        frequency:"3–4 times daily / acute interval per clinical response"
      },
      {
        label:"6–12 years: 250mcg/dose",
        ageMin:6,
        ageMax:11.999,
        fixedMcg:250,
        frequency:"3–4 times daily / acute interval per clinical response"
      },
      {
        label:">12 years: 500mcg/dose",
        ageMin:12,
        ageMax:200,
        fixedMcg:500,
        frequency:"3–4 times daily / acute interval per clinical response"
      }
    ]
  },

  comboNeb:{
    name:"Salbutamol + Ipratropium Neb",
    category:"Nebulizer",
    type:"nebFixed",

    concentrations:[
      {
        label:"Ipratropium 0.5mg + Salbutamol 2.5mg / UDV",
        fixedMl:1
      }
    ],

    regimens:[
      {
        label:"1 unit-dose vial",
        fixedMl:1,
        frequency:"Acute / maintenance according to clinical protocol"
      }
    ]
  },

  budesonideNeb:{
    name:"Budesonide Neb",
    category:"Nebulizer",
    type:"nebAge",

    concentrations:[
      {
        label:"500mcg/2mL",
        mcgPerMl:250
      },
      {
        label:"1mg/2mL",
        mcgPerMl:500
      }
    ],

    regimens:[
      {
        label:"3 months–12 years: 500mcg–1mg",
        ageMin:.25,
        ageMax:12,
        rangeMcg:[500,1000],
        frequency:"According to indication / protocol"
      }
    ]
  }
};


/* QUICK BUTTONS */

const quick = [
  "paracetamol",
  "ibuprofen",
  "augmentin",
  "salmodil",
  "piriton",
  "nebMenu"
];


/* DOM ELEMENTS */

const meds = document.getElementById("medication");
const concentration = document.getElementById("concentration");
const regimen = document.getElementById("regimen");
const protocol = document.getElementById("protocol");

const ageField = document.getElementById("ageField");
const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");


/* QUICK CHIPS */

function buildQuick(){

  const box = document.getElementById("quickChips");

  box.innerHTML = "";

  quick.forEach(k => {

    const b = document.createElement("button");

    b.textContent =
      k === "nebMenu"
      ? "Nebulizer"
      : DATA[k].name;

    b.dataset.key = k;

    b.onclick = () => {

      if(k === "nebMenu"){

        meds.value = "salbutamolNeb";
        update();

      }else{

        meds.value = k;
        update();

      }

    };

    box.appendChild(b);

  });

}


/* MEDICATION DROPDOWN */

function buildMedications(){

  meds.innerHTML = "";

  const order = [
    "Analgesic / Antipyretic",
    "Antibiotics",
    "Allergy / Antihistamine",
    "Cough / Respiratory",
    "GI",
    "Nebulizer"
  ];

  order.forEach(cat => {

    const og = document.createElement("optgroup");

    og.label = cat;

    Object.entries(DATA)
      .filter(([_,d]) => d.category === cat)
      .forEach(([k,d]) => {

        const o = document.createElement("option");

        o.value = k;
        o.textContent = d.name;

        og.appendChild(o);

      });

    meds.appendChild(og);

  });

}


/* UPDATE FORM */

function update(){

  const d = DATA[meds.value];

  const neb = d.category === "Nebulizer";

  ageField.classList.toggle(
    "hidden",
    !neb ||
    d.type === "nebFixed" ||
    d.type === "neb"
  );

  concentration.innerHTML = "";

  (d.concentrations || []).forEach((c,i) => {

    const o = document.createElement("option");

    o.value = i;
    o.textContent = c.label;

    concentration.appendChild(o);

  });

  regimen.innerHTML = "";

  (d.regimens || []).forEach((r,i) => {

    const o = document.createElement("option");

    o.value = i;
    o.textContent = r.label;

    regimen.appendChild(o);

  });

  if(!d.concentrations?.length){

    concentration.innerHTML =
      '<option>Formulation not configured</option>';

  }

  if(!d.regimens?.length){

    regimen.innerHTML =
      '<option>Regimen not configured</option>';

  }

  document
    .querySelectorAll(".quick-chips button")
    .forEach(b => {

      b.classList.toggle(
        "active",

        (b.dataset.key === "nebMenu" && neb)
        ||
        b.dataset.key === meds.value
      );

    });

  protocol.classList.add("hidden");

}


/* ROUNDING */

function round(n){

  return Math.round(n * 10) / 10;

}


/* CALCULATE */

function calc(){

  const w = parseFloat(weightInput.value);

  const d = DATA[meds.value];

  if(!w || w <= 0){

    show(
      "Please enter a valid patient weight.",
      true
    );

    return;

  }

  /*
    Brand-specific medications are currently
    routed to Regimen Builder.
  */

  if(d.type === "brand"){

    show(
      `<strong>Protocol:</strong>
      <div class="main">
        ${d.name} is listed for your Regimen Builder.
      </div>
      <div class="sub">
        Brand-specific concentration and paediatric dosing
        have not been hard-coded until the exact
        formulation/regimen is locked.
      </div>`,
      true
    );

    return;

  }

  const c =
    d.concentrations[
      parseInt(concentration.value) || 0
    ];

  const r =
    d.regimens[
      parseInt(regimen.value) || 0
    ];

  let doseText = "";
  let volumeText = "";
  let formula = "";


  /* NEBULIZER — AGE BASED */

  if(d.type === "nebAge"){

    const age = parseFloat(ageInput.value);

    if(Number.isNaN(age)){

      show(
        "Enter patient age for this nebulizer regimen.",
        true
      );

      return;

    }

    if(
      r.ageMin !== undefined &&
      (
        age < r.ageMin ||
        age > r.ageMax
      )
    ){

      show(
        "Selected regimen does not match the entered age.",
        true
      );

      return;

    }

    let mcg = r.fixedMcg;

    if(r.rangeMcg){

      mcg = r.rangeMcg[0];

    }

    const ml =
      c.mcgPerMl
      ? mcg / c.mcgPerMl
      : null;

    doseText =
      r.rangeMcg
      ? `${r.rangeMcg[0]}–${r.rangeMcg[1]} mcg/dose`
      : `${mcg} mcg/dose`;

    volumeText =
      ml !== null
      ? `${round(ml)} mL`
      : "";

    formula =
      ml !== null
      ? `${mcg} mcg ÷ ${c.mcgPerMl} mcg/mL = ${round(ml)} mL`
      : "";

  }


  /* COMBINATION NEBULIZER */

  else if(d.type === "nebFixed"){

    doseText = "1 unit-dose vial";

    volumeText = "1 UDV";

  }


  /* STANDARD WEIGHT BASED */

  else{

    let mgDose;

    if(r.fixedMg){

      mgDose = r.fixedMg;

    }

    else if(r.mgkg){

      mgDose = r.mgkg * w;

    }

    else if(r.mgkgDay){

      mgDose =
        (r.mgkgDay * w) /
        (r.divided || 1);

    }

    else{

      show(
        "Dose rule not configured.",
        true
      );

      return;

    }


    /* DAILY MAXIMUM */

    if(
      r.maxMgKgDay &&
      mgDose * (r.divided || 1)
      >
      r.maxMgKgDay * w
    ){

      show(
        "Calculated dose exceeds the configured daily maximum.",
        true
      );

      return;

    }


    /* ABSOLUTE MAXIMUM */

    if(
      r.maxDaily &&
      mgDose * (r.divided || 1)
      >
      r.maxDaily
    ){

      mgDose =
        r.maxDaily /
        (r.divided || 1);

    }


    const ml =
      mgDose / c.mgPerMl;

    doseText =
      `${round(mgDose)} mg`;

    volumeText =
      `${round(ml)} mL`;

    formula =
      r.mgkgDay
      ?
      `${r.mgkgDay} mg/kg/day × ${w} kg ÷ ${r.divided || 1} = ${round(mgDose)} mg/dose`
      :
      `${r.mgkg} mg/kg × ${w} kg = ${round(mgDose)} mg/dose`;

  }


  show(
    `<strong>Protocol:</strong>
    <div class="main">
      ${doseText}
      ${volumeText ? ` (${volumeText})` : ""}
      ${r.frequency ? ` ${r.frequency}` : ""}
    </div>
    ${formula ? `<div class="sub">${formula}</div>` : ""}`
  );

}


/* DISPLAY RESULT */

function show(html,warning=false){

  protocol.innerHTML = html;

  protocol.classList.remove("hidden");

  protocol.classList.toggle(
    "warning",
    warning
  );

}


/* EVENT LISTENERS */

meds.addEventListener(
  "change",
  update
);

document
  .getElementById("calculate")
  .addEventListener(
    "click",
    calc
  );


/* REGIMEN BUILDER */

let regimenItems = [];


function renderRegimen(){

  const list =
    document.getElementById("regimenList");

  document.getElementById("savedCount")
    .textContent =
      localStorage.getItem("paedSavedRegimens")
      ? "1"
      : "0";


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
          Tap “+ Add Medication”
          to start building the regimen.
        </span>

      </div>
    `;

    return;

  }


  list.innerHTML =
    regimenItems
      .map((x,i) => `
        <div class="regimen-row">

          <div>

            <strong>
              ${escapeHtml(x.med)}
            </strong>

            <small>
              ${escapeHtml(x.form)}
              •
              ${escapeHtml(x.dose)}
              •
              ${escapeHtml(x.freq)}
            </small>

          </div>

          <button
            class="remove"
            data-i="${i}"
          >
            ×
          </button>

        </div>
      `)
      .join("");


  list
    .querySelectorAll(".remove")
    .forEach(b => {

      b.onclick = () => {

        regimenItems.splice(
          +b.dataset.i,
          1
        );

        renderRegimen();

      };

    });

}


/* HTML ESCAPE */

function escapeHtml(s){

  return String(s).replace(
    /[&<>"']/g,

    m => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[m])
  );

}


/* MODAL */

const modal =
  document.getElementById("modal");


document
  .getElementById("addMedication")
  .onclick = () => {

    modal.classList.remove("hidden");

  };


document
  .getElementById("closeModal")
  .onclick = () => {

    modal.classList.add("hidden");

  };


/* SAVE CUSTOM MEDICATION */

document
  .getElementById("saveCustom")
  .onclick = () => {

    const med =
      document
        .getElementById("customMed")
        .value
        .trim();

    if(!med) return;


    regimenItems.push({

      med,

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
    ]
    .forEach(id => {

      document.getElementById(id).value = "";

    });


    modal.classList.add("hidden");

    renderRegimen();

  };


/* SAVE REGIMEN */

document
  .getElementById("savedRegimens")
  .onclick = () => {

    localStorage.setItem(
      "paedSavedRegimens",
      JSON.stringify(regimenItems)
    );

    document.getElementById("savedCount")
      .textContent = "1";

    alert(
      "Current regimen saved on this device."
    );

  };


/* INITIALISE */

buildQuick();

buildMedications();

meds.value = "paracetamol";

update();

renderRegimen();