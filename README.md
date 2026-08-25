# Paeds Calc • Pediatric Clinical Dosing Calculator

A rapid, zero-friction, minimalist pediatric dosing calculator designed specifically for **General Practitioners (GPs)** in private clinic practice and ambulatory care.

---

## ⚡ Key GP & Clinical Features

### 1. Real-Time Reactive Dosing Engine
- **Live Auto-Calculation:** Doses, volumes, and clinical safety ceilings update instantly on every weight keystroke or selection change—zero extra clicks needed.
- **Default Launch State:** Automatically opens with **Paracetamol (PCM)** selected and ready for immediate entry.
- **Quick Weight Steppers:** 1-tap adjustment buttons (`-1 kg`, `+1 kg`, `+5 kg`) for rapid weight titration.

### 2. 📦 Clinic Bottle Dispensing & Duration Helper
- Embedded course duration chips (`3 Days`, `5 Days`, `7 Days`, `10 Days`).
- Automatically computes total volume required and outputs dispensary packaging advice:
  - *e.g., Total: 63 mL • Pack: 1 × 100 mL bottle (or 2 × 60 mL)*
  - Automatically calculates total sachets or suppositories to dispense for the prescribed duration.

### 3. 📱 Dual Prescription Clipboard Actions
- **`📋 Copy Rx` (EMR / CMS):** Standard formatted prescription text for your clinic management software.
- **`📱 For Parent` (WhatsApp / Label):** Formatted, parent-friendly instructions ready to copy-paste directly to parents:
  ```text
  👶 *Patient Weight:* 14.5 kg
  💊 *Medication:* Paracetamol (Syrup PCM) (250mg/5mL (50mg/mL))
  👉 *Give:* *4.5 mL* (225 mg)
  ⏱ *Timing:* Q4–6H PRN — Every 4–6 hourly (Max 4 doses/24h)
  📦 *Course:* 5 Days (Total Volume: 79 mL • Pack: 1 × 100 mL bottle)
  ⚠️ *Note:* Maximum 60mg/kg/day or adult ceiling 4000mg/day.
  ```

### 4. 🛡️ Clinical Safety Ceilings & Contraindication Alerts
- Automatically enforces hard single-dose and daily-dose maximums:
  - **Paracetamol:** Max $1000\,\text{mg}$ single dose / max $4000\,\text{mg/day}$.
  - **Ibuprofen:** Max $400\,\text{mg}$ single dose / max $1200\text{--}2400\,\text{mg/day}$.
  - **Piriton (Chlorpheniramine):** Max $4\,\text{mg}$ single dose.
  - **Cetirizine / Loratadine:** Max $10\,\text{mg/day}$.
  - **Prednisolone:** Max $40\text{--}60\,\text{mg/day}$.
  - **Buscopan (Hyoscine):** Max $10\,\text{mg}$ single dose.
  - **Tussidex (DXM):** Max $15\,\text{mg}$ single dose.
- **Visual Safety Banner:** Displays `⚠️ Capped at max single dose: X mg (Y mL)` when a ceiling is active.
- **Hard Contraindication Warnings:** Prominent alerts for high-risk drugs (e.g., Promethazine $< 2\text{ yrs}$ due to fatal respiratory depression risk; Dicyclomine $< 6\text{ months}$).

### 5. 🎯 1-Tap Quick-Access Favorite Chips & Search
- Top horizontal chips bar for your most prescribed medications (`PCM`, `Ibuprofen`, `Augmentin`, `Amox`, `Cetirizine`, `Prednisolone`, `Supp PCM`, `Domperidone`, `Bisolvon`, `Smecta`).
- Live fuzzy search bar to filter by brand name, generic name, category, or indication (*"croup"*, *"asthma"*, *"uti"*, *"fever"*, *"diarrhea"*, *"constipation"*).

### 6. 🍼 Precision Infant Volume Guidance
- Sub-milliliter volumes ($< 1.0\,\text{mL}$) display with 2 decimal places (e.g., `0.35 mL`) along with a `(Use 1 mL oral syringe)` guide.

### 7. ⚖️ Emergency Weight Estimation (APLS)
- Built-in calculator to estimate weight from age when scales are unavailable:
  - **$< 12\text{ months}$:** $\text{Weight (kg)} = (\text{Age in months} \times 0.5) + 4$
  - **$1\text{--}5\text{ years}$:** $\text{Weight (kg)} = (\text{Age in years} \times 2) + 8$
  - **$6\text{--}12\text{ years}$:** $\text{Weight (kg)} = (\text{Age in years} \times 3) + 7$

### 8. 🌙 Minimalist Dark Mode & PWA Offline Support
- Toggle between Light and Dark themes (🌙 / ☀️) for on-call night duty.
- 100% offline Progressive Web App (installable directly to iPhone or Android home screen).

---

## 💊 Private GP Formulary Coverage

| Category | Medications Included |
| :--- | :--- |
| **Analgesics & Antipyretics** | Paracetamol (PCM), Ibuprofen, Ponstan (Mefenamic Acid), **Suppository Paracetamol (125mg / 250mg)**, **Suppository Voltaren / Voren (12.5mg / 25mg)** |
| **Steroids & Respiratory** | Prednisolone Syrup ($3\,\text{mg/mL}$ & $5\,\text{mg/5mL}$), Dexamethasone Oral Solution (Croup protocol), **Singulair / Montelukast (4mg / 5mg chewable/sachet)** |
| **Antibiotics** | Amoxicillin (Standard & High-Dose AOM), Augmentin (Standard & ES), Cloxacillin, Cefixime, Cephalexin, Cefuroxime Axetil, Azithromycin |
| **Antihistamines & Allergy** | Cetirizine, Loratadine, Chlorpheniramine (Piriton), Promethazine (Phenergan), Diphenhydramine (Benadryl) |
| **Gastrointestinal** | Domperidone, Kaolin (Mist Kaolin Pedia), **Smecta (Diosmectite 3g sachet)**, **Duphalac / Lactulose Syrup**, Hyoscine Butylbromide (Buscopan), Dicyclomine + Simethicone (Colimix), Metoclopramide (Maxalon) |
| **Cough & Decongestants** | Bisolvon (Bromhexine), **Fluimucil (Acetylcysteine 100mg sachet)**, Salbutamol + Bromhexine (Salmodil), Dextromethorphan (Tussidex), DXM + Phenylephrine (Cough-En), Pseudoephedrine (Paedicof) |
| **Nebulizer Therapy** | Salbutamol Nebuliser Solution, Ipratropium Nebuliser Solution, Combivent UDV |

---

## 🚀 Getting Started

1. Open [`index.html`](index.html) in any modern web browser.
2. Install as a standalone PWA on your iPhone by opening in Safari and tapping **Share** → **Add to Home Screen**.
3. No server or node installation required—runs 100% offline.
