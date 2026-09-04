# PaedsCalc • Pediatric Clinical Dosing Calculator

A rapid, zero-friction, medical-grade pediatric dosing calculator and clinical growth reference suite designed specifically for point-of-care medical practice by General Practitioners, Pediatricians, and Healthcare Professionals.

---

## ⚡ Core Features

### 1. 📸 Save as Image (PNG Export)
- Converts any calculated dose into a clean, high-resolution PNG prescription slip using `html2canvas`.
- **Top Clinic Header Area:** Blank customizable area with subtle outline for clinic stamp / doctor name.
- **Complete Details:** Includes Patient Weight, Drug Name, Dose mL & mg, Frequency, Duration, Total mL, and Total Dispensed Bottles.
- **Mandatory Medical Disclaimer:** Features the bold red warning:
  > **WARNING: For Medical Professionals Only. Always verify dose with BNFc/MIMS. This is not a substitute for clinical judgment. The developer is not liable for any errors.**
- Auto-downloads the PNG and copies the image to clipboard (supported browsers).

### 2. 📖 Reference & Growth Estimator Tab
Add-on reference tab alongside the main Calculator:
- **Tab A: Age → Weight Estimator:**
  - Formula ($1\text{--}5\text{ yrs}$): $\text{Weight} = \text{Age} \times 2 + 8$
  - Infants ($<1\text{ yr}$): $(\text{Months} \times 0.5) + 4$
  - $>5\text{ yrs}$: WHO Average standard growth reference table.
  - 1-tap **"Use This Weight in Calculator"** button to immediately auto-fill the main calculator.
- **Tab B: Weight → Age Range:**
  - Converts weight back to estimated age range with WHO development staging.

### 3. ⚠️ Permanent Sticky Disclaimer Banner
- Prominent yellow sticky banner anchored to the bottom of the viewport:
  > **WARNING: Calculation aid only. Not medical advice. Always verify all doses before administering to patient.**

### 4. 📦 Clinic Bottle Dispensing & Duration Helper
- Embedded course duration chips (`3 Days`, `5 Days`, `7 Days`, `10 Days`).
- Automatically computes total volume required and outputs dispensary packaging recommendations (e.g., `Total: 79 mL • Pack: 1 × 100 mL bottle`).

### 5. 📱 Dual Prescription Clipboard Actions
- **`📋 Copy Rx` (EMR / CMS):** Formatted prescription text for electronic medical records.
- **`📱 For Parent` (WhatsApp / Label):** Parent-friendly emoji-formatted instructions.

### 6. 🛡️ Clinical Safety Ceilings & Contraindication Alerts
- Automatically enforces hard single-dose and daily-dose maximums (e.g., Paracetamol max $1000\,\text{mg}$ single, $4000\,\text{mg/day}$; Ibuprofen max $400\,\text{mg}$ single; Piriton max $4\,\text{mg}$ single).
- Prominent contraindication banners for high-risk age groups (e.g., Promethazine $<2\text{ yrs}$, Dicyclomine $<6\text{ months}$).

---

## 💊 Formulary Coverage

| Category | Medications Included |
| :--- | :--- |
| **Analgesics & Antipyretics** | Paracetamol (PCM), Ibuprofen, Ponstan (Mefenamic Acid), **Suppository Paracetamol (125mg / 250mg)**, **Suppository Voltaren / Voren (12.5mg / 25mg)** |
| **Steroids & Respiratory** | Prednisolone Syrup ($3\,\text{mg/mL}$ & $5\,\text{mg/5mL}$), Dexamethasone Oral Solution (Croup protocol), **Singulair / Montelukast (4mg / 5mg)** |
| **Antibiotics** | Amoxicillin (Standard & High-Dose AOM), Augmentin (Standard & ES), Cloxacillin, Cefixime, Cephalexin, Cefuroxime Axetil, Azithromycin |
| **Antihistamines & Allergy** | Cetirizine, Loratadine, Chlorpheniramine (Piriton), Promethazine (Phenergan), Diphenhydramine (Benadryl) |
| **Gastrointestinal** | Domperidone, Kaolin (Mist Kaolin Pedia), **Smecta (Diosmectite 3g sachet)**, **Duphalac / Lactulose Syrup**, Hyoscine Butylbromide (Buscopan), Dicyclomine + Simethicone (Colimix), Metoclopramide (Maxalon) |
| **Cough & Decongestants** | Bisolvon (Bromhexine), **Fluimucil (Acetylcysteine 100mg sachet)**, Salbutamol + Bromhexine (Salmodil), Dextromethorphan (Tussidex), DXM + Phenylephrine (Cough-En), Pseudoephedrine (Paedicof) |
| **Nebulizer Therapy** | Salbutamol Nebuliser Solution, Ipratropium Nebuliser Solution, Combivent UDV |

---

## 🚀 Getting Started

1. Open [`index.html`](index.html) in any modern browser.
2. Install as a standalone PWA on iOS/Android via **Add to Home Screen**.
3. Runs 100% offline.
