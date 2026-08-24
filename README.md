# Paeds-Calc-V2

## Pediatric Dose Calculator

A simple, fast, mobile-friendly pediatric dosing calculator designed for daily clinical use.

The interface is intentionally kept minimal so common calculations can be performed quickly during consultation.

---

## Features

### Patient Input

- Patient Weight (kg)
- Patient Age

Weight and age are entered as standard patient inputs.

The calculator determines internally whether a medication uses:

- Weight-based dosing
- Age-based dosing
- Age + weight-based dosing
- Weight-band dosing

The user does not need to select the dosing method manually.

---

## Medication Categories

### Analgesic / Antipyretic

- Paracetamol
- Ibuprofen

### Antibiotics

- Amoxicillin
- Augmentin
- Cephalexin
- Cefuroxime
- Azithromycin

### Allergy / Antihistamine

- Piriton
- Cetirizine
- Loratadine
- Benadryl

### Cough / Respiratory

- Salmodil
- Tussidex
- Cough-En
- Paedicof

### GI

- Bisacodyl syrup
- Buscopan syrup
- Colimix
- Kaolin
- Maxalon

### Nebulizer

- Salbutamol Neb
- Ipratropium Neb
- Salbutamol + Ipratropium Neb
- Budesonide Neb

---

## Interface

The main workflow is intentionally simple:

1. Enter patient weight
2. Enter patient age
3. Select medication
4. Select concentration
5. Select dosing regimen
6. Press Calculate

The calculator displays the final dose and, where applicable, the calculated volume in mL.

---

## Dosing Engine

The calculator supports several dosing models.

### 1. Weight-Based

Example:

```text
15 mg/kg/dose × patient weight
