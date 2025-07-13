/* THIS FILE SHOULD BE REPLACED WHEN THE DATA BASE IS IMPLEMENTED */

export class UserMedDB implements Iterable<Medication> {
  private readonly _medArray: Array<Medication>;
  constructor() {
    this._medArray = [];
  }

  _index(medID: number): number {
    let i: number;
    for (i = 0; i < this.size(); i++) {
      if (this._medArray[i].id === medID) {
        return i;
      }
    }
    return -1;
  }

  size(): number {
    return this._medArray.length;
  }

  get(index: number): Medication | undefined {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    return Medication.copyOf(this._medArray[index]);
  }

  addMore(medID: number, quantity: number = 1): boolean {
    let index: number = this._index(medID);
    if (index === -1) {
      return false;
    }
    this._medArray[index].remaining += quantity;
    return true;
  }

  consume(medID: number, quantity: number = 1): boolean {
    let index: number = this._index(medID);
    if (index === -1 || quantity > this._medArray[index].remaining) {
      return false;
    }
    this._medArray[index].remaining -= quantity;
    return true;
  }

  add(medID: number, hour: number, minute: number, remaining: number) {
    if (this._index(medID) === -1) {
      this._medArray.push(new Medication(medID, hour, minute, remaining));
      return true;
    }
    return false;
  }

  remove(medID: number): boolean {
    let indexToRemove: number = this._index(medID);
    if (indexToRemove === -1) {
      return false;
    }
    this._medArray.splice(indexToRemove, 1);
    return true;
  }

  [Symbol.iterator](): Iterator<Medication> {
    let index: number = 0;
    return {
      next: (): IteratorResult<Medication> => {
        if (index < this._medArray.length) {
          return {
            value: Medication.copyOf(this._medArray[index++]),
            done: false,
          };
        } else {
          return {done: true, value: undefined as any};
        }
      },
    };
  }
}

class Medication {
  _id: number;
  _hour: number;
  _minute: number;
  _remaining: number;
  constructor(id: number, hour: number, minute: number, remaining: number) {
    this._id = id;
    this._hour = hour;
    this._minute = minute;
    this._remaining = remaining;
  }

  get id() {
    return this._id;
  }

  get hour() {
    return this._hour;
  }

  get minute() {
    return this._minute;
  }

  get remaining() {
    return this._remaining;
  }

  set remaining(value: number) {
    this._remaining = value;
  }

  static copyOf(med: Medication): Medication {
    return new Medication(med.id, med.hour, med.minute, med.remaining);
  }
}

export const MedDataBase = {
  0: {
    commercialName: 'Ibupirac',
    name: 'Ibuprofeno',
    dosage: '600mg',
    description: 'Analgésico, antifebril, antiinflamatorio.',
  },
  1: {
    commercialName: 'Tafirol',
    name: 'Paracetamol',
    dosage: '1g',
    description:
      'Analgésico y antipirético, inhibidor de la síntesis de prostaglandinas.',
  },
  2: {
    commercialName: 'Aspirina',
    name: 'Ácido acetilsalicílico',
    dosage: '500mg',
    description:
      'Analgésico, antipirético, antiinflamatorio y antiagregante plaquetario.',
  },
  3: {
    commercialName: 'Amoxicilina',
    name: 'Amoxicilina',
    dosage: '500mg',
    description:
      'Antibiótico del grupo de las penicilinas, utilizado para tratar infecciones bacterianas.',
  },
  4: {
    commercialName: 'Loratadina',
    name: 'Loratadina',
    dosage: '10mg',
    description:
      'Antihistamínico utilizado para aliviar los síntomas de la alergia.',
  },
  5: {
    commercialName: 'Omeprazol',
    name: 'Omeprazol',
    dosage: '20mg',
    description:
      'Inhibidor de la bomba de protones utilizado para tratar problemas relacionados con el ácido estomacal.',
  },
  6: {
    commercialName: 'Atorvastatina',
    name: 'Atorvastatina',
    dosage: '40mg',
    description: 'Estatina utilizada para reducir los niveles de colesterol.',
  },
  7: {
    commercialName: 'Metformina',
    name: 'Metformina',
    dosage: '500mg',
    description:
      'Antidiabético oral utilizado para el tratamiento de la diabetes tipo 2.',
  },
  8: {
    commercialName: 'Simvastatina',
    name: 'Simvastatina',
    dosage: '20mg',
    description: 'Estatina utilizada para reducir los niveles de colesterol.',
  },
  9: {
    commercialName: 'Metoprolol',
    name: 'Metoprolol',
    dosage: '50mg',
    description:
      'Betabloqueante utilizado para tratar la hipertensión y enfermedades cardiovasculares.',
  },
  10: {
    commercialName: 'Fluoxetina',
    name: 'Fluoxetina',
    dosage: '20mg',
    description:
      'Antidepresivo inhibidor selectivo de la recaptación de serotonina.',
  },
  11: {
    commercialName: 'Ciprofloxacina',
    name: 'Ciprofloxacina',
    dosage: '500mg',
    description:
      'Antibiótico de amplio espectro utilizado para tratar infecciones bacterianas.',
  },
  12: {
    commercialName: 'Furosemida',
    name: 'Furosemida',
    dosage: '40mg',
    description:
      'Diurético utilizado para tratar la retención de líquidos y la hipertensión.',
  },
  13: {
    commercialName: 'Sertralina',
    name: 'Sertralina',
    dosage: '50mg',
    description:
      'Antidepresivo inhibidor selectivo de la recaptación de serotonina.',
  },
  14: {
    commercialName: 'Losartan',
    name: 'Losartan',
    dosage: '50mg',
    description:
      'Antagonista del receptor de angiotensina II utilizado para tratar la hipertensión.',
  },
  15: {
    commercialName: 'Ramipril',
    name: 'Ramipril',
    dosage: '5mg',
    description:
      'Inhibidor de la enzima convertidora de angiotensina utilizado para tratar la hipertensión.',
  },
  16: {
    commercialName: 'Pantoprazol',
    name: 'Pantoprazol',
    dosage: '40mg',
    description:
      'Inhibidor de la bomba de protones utilizado para tratar problemas gastrointestinales.',
  },
  17: {
    commercialName: 'Diclofenaco',
    name: 'Diclofenaco',
    dosage: '50mg',
    description:
      'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor y la inflamación.',
  },
  18: {
    commercialName: 'Hidroclorotiazida',
    name: 'Hidroclorotiazida',
    dosage: '25mg',
    description:
      'Diurético tiazídico utilizado para tratar la hipertensión y la retención de líquidos.',
  },
  19: {
    commercialName: 'Levotiroxina',
    name: 'Levotiroxina',
    dosage: '100mcg',
    description:
      'Hormona tiroidea utilizada para tratar trastornos de la tiroides.',
  },
  20: {
    commercialName: 'Montelukast',
    name: 'Montelukast',
    dosage: '10mg',
    description:
      'Antagonista del receptor de leucotrienos utilizado para tratar el asma y las alergias.',
  },
  21: {
    commercialName: 'Escitalopram',
    name: 'Escitalopram',
    dosage: '10mg',
    description:
      'Antidepresivo inhibidor selectivo de la recaptación de serotonina.',
  },
  22: {
    commercialName: 'Warfarina',
    name: 'Warfarina',
    dosage: '5mg',
    description:
      'Anticoagulante utilizado para prevenir la formación de coágulos sanguíneos.',
  },
  23: {
    commercialName: 'Atenolol',
    name: 'Atenolol',
    dosage: '50mg',
    description:
      'Betabloqueante utilizado para tratar la hipertensión y enfermedades cardiovasculares.',
  },
  24: {
    commercialName: 'Acetaminofén',
    name: 'Acetaminofén',
    dosage: '500mg',
    description: 'Analgésico y antipirético, similar al paracetamol.',
  },
};
