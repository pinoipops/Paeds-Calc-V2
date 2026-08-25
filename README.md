# Paeds Calc • Pediatric Clinical Dosing Calculator

A rapid, zero-friction, minimalist pediatric dosing calculator designed for point-of-care clinical practice by medical doctors and healthcare professionals.

---

## ⚡ Key Features

### 1. Real-Time Reactive Dosing Engine
- **Live Auto-Calculation:** Doses, volumes, and clinical safety ceilings update instantly on every weight keystroke or selection change—zero extra clicks needed.
- **Quick Weight Steppers:** 1-tap adjustment buttons (`-1 kg`, `+1 kg`, `+5 kg`) for rapid titration.
- **Session Memory:** Automatically saves and restores last entered weight and medication via `localStorage`.

### 2. Clinical Safety Ceilings & Contraindication Alerts
- **Enforced Maximum Ceilings:** Automatically clamps calculations to standard maximum single and daily doses to prevent overdosage:
  - **Paracetamol:** Max $1000\,\text{mg}$ single dose / max $4000\,\text{mg/day}$ ($60\,\text{mg/kg/day}$).
  - **Ibuprofen:** Max $400\,\text{mg}$ single dose / max $1200\text{--}2400\,\text{mg/day}$.
  - **Piriton (Chlorpheniramine):** Max $4\,\text{mg}$ single dose.
  - **Cetirizine / Loratadine:** Max $10\,\text{mg/day}$.
  - **Prednisolone:** Max $40\text{--}60\,\text{mg/day}$.
  - **Buscopan (Hyoscine):** Max $10\,\text{mg}$ single dose.
  - **Tussidex (DXM):** Max $15\,\text{mg}$ single dose.
- **Visual Safety Banner:** Displays `⚠️ Capped at max single dose: X mg (Y mL)` when a limit is active.
- **Hard Contraindication Warnings:** Prominent alerts for high-risk drugs (e.g., Promethazine $< 2\text{ yrs}$ due to fatal respiratory depression risk; Dicyclomine $< 6\text{ months}$).

### 3. 1-Tap Quick-Access Favorite Chips
- Top horizontal chip bar for immediate 1-tap switching between high-frequency prescriptions (`PCM`, `Ibuprofen`, `Augmentin`, `Amox`, `Cetirizine`, `Prednisolone`, `Domperidone`).
- Star button to add or remove any drug from the quick-access bar.

### 4. Fast Medication & Indication Search
- Live fuzzy search bar to instantly filter by brand name, generic name, category, or indication (e.g., *"fever"*, *"croup"*, *"asthma"*, *"uti"*, *"vomiting"*).

### 5. 1-Click "Copy Rx" Clipboard Action
- Formats standard, ready-to-paste prescription text for hospital EMRs, clinic notes, or messaging:
  ```text
  Rx: Paracetamol (Syrup PCM) (250mg/5mL (50mg/mL))
  Dose: 7.5 mL (375 mg) Q4–6H PRN
  Patient Weight: 25 kg [15mg/kg/dose Q4–6H PRN (Standard Antipyretic)]
  ```

### 6. Precision Infant Volume Guidance
- Sub-milliliter volumes ($< 1.0\,\text{mL}$) display with 2 decimal places (e.g., `0.35 mL`) along with a `(Use 1 mL oral syringe)` reminder.
- Volumes $\ge 1.0\,\text{mL}$ round to 1 decimal place.

### 7. Emergency Weight Estimation (APLS)
- Built-in calculator to estimate weight when scales are unavailable:
  - **$< 12\text{ months}$:** $\text{Weight (kg)} = (\text{Age in months} \times 0.5) + 4$
  - **$1\text{--}5\text{ years}$:** $\text{Weight (kg)} = (\text{Age in years} \times 2) + 8$
  - **$6\text{--}12\text{ years}$:** $\text{Weight (kg)} = (\text{Age in years} \times 3) + 7$

### 8. Dark Mode Support
- Toggle between Light and Dark themes (🌙 / ☀️) to reduce glare and preserve battery during night calls and dark hospital ward rounds.

---

## 💊 Formulary Coverage

| Category | Medications Included |
| :--- | :--- |
| **Analgesics & Antipyretics** | Paracetamol (PCM), Ibuprofen, Mefenamic Acid (Ponstan) |
| **Steroids & Respiratory** | Prednisolone Syrup ($3\,\text{mg/mL}$ & $5\,\text{mg/5mL}$), Dexamethasone Oral Solution (Croup protocol) |
| **Antibiotics** | Amoxicillin (Standard & High-Dose AOM), Augmentin (Standard & ES), Cloxacillin, Cefixime, Cephalexin, Cefuroxime Axetil, Azithromycin |
| **Antihistamines & Allergy** | Cetirizine, Loratadine, Chlorpheniramine (Piriton), Promethazine (Phenergan), Diphenhydramine (Benadryl) |
| **Gastrointestinal** | Domperidone, Kaolin (Mist Kaolin Pedia), Hyoscine Butylbromide (Buscopan), Dicyclomine + Simethicone (Colimix), Metoclopramide (Maxalon) |
| **Cough & Decongestants** | Bisolvon (Bromhexine), Salbutamol + Bromhexine (Salmodil), Dextromethorphan (Tussidex), DXM + Phenylephrine (Cough-En), Pseudoephedrine (Paedicof) |
| **Nebulizer Therapy** | Salbutamol Nebuliser Solution, Ipratropium Nebuliser Solution, Combivent UDV |

---

## 🚀 Getting Started

1. Clone or download this repository.
2. Open [`index.html`](index.html) in any modern web browser on desktop, tablet, or mobile.
3. No server, node installation, or build tools required—runs 100% offline directly in the browser.

---

## 📄 License & Disclaimer

**Clinical Tool Reference Only:** This application is intended to assist medical professionals with dosage calculations. Always verify dosages against local clinical guidelines, institutional protocols, and patient-specific factors before administering medications.
