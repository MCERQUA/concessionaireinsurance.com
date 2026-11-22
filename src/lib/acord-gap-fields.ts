// ACORD 125/126 gap-fill: Y/N underwriting questions, ported from the donor quote schema (all optional).
export const YES_NO_QUESTIONS: { key: string; label: string; explain: boolean }[] = [
  { key: "buildingLeasedToOthers", label: "Is Building Leased to Others?", explain: false },
  { key: "applicantSubsidiary", label: "Is Applicant a Subsidiary?", explain: false },
  { key: "applicantHasSubsidiaries", label: "Does Applicant Have Subsidiaries?", explain: false },
  { key: "safetyProgramsExist", label: "Do Safety Programs Exist?", explain: false },
  { key: "exposureFlammables", label: "Any Exposure to Flammables, Explosives, Chemicals?", explain: true },
  { key: "otherInsurance", label: "Any Other Insurance with This Company?", explain: true },
  { key: "coverageTerminated", label: "Has a Policy Coverage Ever Been Terminated?", explain: true },
  { key: "pastAllegations", label: "Past Allegations of Abuse, Molestation, or Discrimination?", explain: true },
  { key: "indictedOrConvicted", label: "Any Indictments or Convictions?", explain: true },
  { key: "safetyViolations", label: "Any Uncorrected Fire and/or Safety Violations?", explain: true },
  { key: "negativeFinancialAction", label: "Any Past Negative Financial Action?", explain: true },
  { key: "judgementOrLien", label: "Any Judgement or Lien?", explain: true },
  { key: "businessInTrust", label: "Has the Business Been Placed in a Trust?", explain: true },
  { key: "foreignOperations", label: "Any Foreign Operations or Products?", explain: false },
  { key: "otherVentures", label: "Do Other Ventures Exist?", explain: true },
  { key: "possessDrones", label: "Does Applicant Possess Drones?", explain: true },
  { key: "hireDroneOperators", label: "Does Applicant Hire Drone Operators?", explain: true },
  { key: "priorExclusionUninsured", label: "Has Any Product, Work, Accident or Location Been Excluded, Uninsured or Self-Insured from Any Previous Coverage?", explain: true },
  { key: "tailCoveragePurchased", label: "Was Tail Coverage Purchased Under Any Previous Policy?", explain: true },
  { key: "drawsPlansForOthers", label: "Does Applicant Draw Plans, Designs or Specifications for Others?", explain: true },
  { key: "blastingOrExplosives", label: "Do Any Operations Include Blasting, or Utilize/Store Explosive Material?", explain: true },
  { key: "excavationOrEarthMoving", label: "Does Any Operation Involve Excavation, Tunneling, Underground Work or Earth Moving?", explain: true },
  { key: "subsRequireLowerLimits", label: "Do Subcontractors Carry Coverages or Limits Less Than Applicant?", explain: true },
  { key: "subsWorkWithoutCOI", label: "Are Subcontractors Allowed to Work Without Providing a Certificate of Insurance?", explain: true },
  { key: "leaseEquipmentToOthers", label: "Does Applicant Lease Equipment to Others, With or Without Operators?", explain: true },
  { key: "installServiceDemoProducts", label: "Does Applicant Install, Service or Demonstrate Products?", explain: true },
  { key: "foreignProducts", label: "Foreign Products Sold, Distributed, or Used as Components?", explain: false },
  { key: "researchAndDevelopment", label: "Research and Development Conducted, or New Products Planned?", explain: true },
  { key: "guaranteesWarranties", label: "Guarantees, Warranties, or Hold Harmless Agreements?", explain: true },
  { key: "aircraftSpaceProducts", label: "Products Related to the Aircraft/Space Industry?", explain: true },
  { key: "productsRecalled", label: "Products Recalled, Discontinued, or Changed?", explain: true },
  { key: "productsRepackagedUnderLabel", label: "Products of Others Sold or Repackaged Under Applicant Label?", explain: true },
  { key: "productsUnderOthersLabel", label: "Products Sold Under the Label of Others?", explain: true },
  { key: "vendorsCoverageRequired", label: "Vendors Coverage Required?", explain: true },
  { key: "sellsToOtherNamedInsured", label: "Does Any Named Insured Sell to Another Named Insured?", explain: true },
  { key: "medicalFacilities", label: "Any Medical Facilities Provided, or Medical Professionals Employed/Contracted?", explain: true },
  { key: "radioactiveExposure", label: "Any Exposure to Radioactive/Nuclear Materials?", explain: true },
  { key: "hazardousMaterialOps", label: "Do/Have Past, Present or Discontinued Operations Involved Storing, Treating, Discharging, Applying, Disposing or Transporting Hazardous Material?", explain: true },
  { key: "operationsSoldAcquired", label: "Any Operations Sold, Acquired or Discontinued in the Last 5 Years?", explain: true },
  { key: "rentOrLoanEquipment", label: "Do You Rent or Loan Equipment to Others?", explain: true },
  { key: "watercraftDocksFloats", label: "Any Watercraft, Docks or Floats Owned, Hired or Leased?", explain: true },
  { key: "parkingFacilities", label: "Any Parking Facilities Owned or Rented?", explain: true },
  { key: "parkingFeeCharged", label: "Is a Fee Charged for Parking?", explain: true },
  { key: "recreationFacilities", label: "Recreation Facilities Provided?", explain: true },
  { key: "lodgingOperations", label: "Are There Any Lodging Operations, Including Apartments?", explain: false },
  { key: "swimmingPool", label: "Is There a Swimming Pool on the Premises?", explain: false },
  { key: "socialEvents", label: "Are Social Events Sponsored?", explain: true },
  { key: "athleticTeams", label: "Are Athletic Teams Sponsored?", explain: false },
  { key: "structuralAlterations", label: "Any Structural Alterations Contemplated?", explain: true },
  { key: "demolitionExposure", label: "Any Demolition Exposure Contemplated?", explain: true },
  { key: "activeJointVentures", label: "Has Applicant Been Active in, or Is Currently Active in, Joint Ventures?", explain: true },
  { key: "leaseEmployees", label: "Do You Lease Employees to or from Other Employers?", explain: false },
  { key: "laborInterchange", label: "Is There a Labor Interchange with Any Other Business or Subsidiaries?", explain: true },
  { key: "dayCareFacilities", label: "Are Day Care Facilities Operated or Controlled?", explain: true },
  { key: "crimesOnPremises", label: "Have Any Crimes Occurred or Been Attempted on Your Premises Within the Last 3 Years?", explain: true },
  { key: "formalSafetyPolicy", label: "Is There a Formal, Written Safety and Security Policy in Effect?", explain: true },
  { key: "promotionalSafetyClaims", label: "Does the Business' Promotional Literature Make Any Representation About the Safety or Security of the Premises?", explain: true },
]

export const GL_LIMIT_FIELDS: { name: string; label: string; options: string[] }[] = [
  {
    "name": "glEachOccurrence",
    "label": "GL each occurrence limit",
    "options": [
      "$300,000",
      "$500,000",
      "$1,000,000",
      "$2,000,000"
    ]
  },
  {
    "name": "glGeneralAggregate",
    "label": "GL general aggregate limit",
    "options": [
      "$600,000",
      "$1,000,000",
      "$2,000,000",
      "$4,000,000"
    ]
  },
  {
    "name": "glProductsCompOpsAggregate",
    "label": "GL products / completed operations aggregate limit",
    "options": [
      "$600,000",
      "$1,000,000",
      "$2,000,000",
      "$4,000,000"
    ]
  },
  {
    "name": "glPersonalAdvertisingInjury",
    "label": "GL personal & advertising injury limit",
    "options": [
      "$300,000",
      "$500,000",
      "$1,000,000",
      "$2,000,000"
    ]
  },
  {
    "name": "glDamageToRentedPremises",
    "label": "GL damage to rented premises (each occurrence) limit",
    "options": [
      "$50,000",
      "$100,000",
      "$300,000",
      "$500,000"
    ]
  },
  {
    "name": "glMedicalExpense",
    "label": "GL medical expense (each person) limit",
    "options": [
      "$5,000",
      "$10,000",
      "$15,000",
      "$25,000"
    ]
  }
]

export const LOSS_LINES = ['General Liability', 'Property', 'Commercial Auto', "Workers' Compensation", 'Umbrella / Excess', 'Other']
export const LOSS_STATUS = ['Open', 'Closed']

// Every NEW name added by the ACORD intake pass (all optional). Used to register the fields in public/__forms.html.
export const ACORD_GAP_FIELD_NAMES: string[] = [
  'dba', 'entityTypeOther', 'physicalCounty', 'premisesCityLimits', 'premisesInterest',
  'mailingSameAsPhysical', 'mailingAddress', 'mailingCity', 'mailingState', 'mailingZip',
  'partTimeEmployees', 'annualPayroll', 'annualRevenueExact',
  'glTrigger', ...GL_LIMIT_FIELDS.map((f) => f.name),
  'lossLineOfBusiness', 'lossDate', 'lossAmountPaid', 'lossAmountReserved', 'lossHistoryStatus', 'lossAdditional',
  'additionalInsuredName', 'certificateHolderName', 'certificateHolderAddress',
  'percentSubcontracted', 'subsProvideCOI',
  ...YES_NO_QUESTIONS.flatMap((q) => (q.explain ? [`yn_${q.key}`, `ynExplain_${q.key}`] : [`yn_${q.key}`])),
]

// ---- Structured follow-ups shown when a question is answered Yes (same schema as the shared quote component;
// ADD-ONLY: the ynExplain_<q> textareas above stay). Names: general_<q>__<field>, plus the single-name groups below.
export interface DetailField { key: string; label: string; kind?: "text" | "date" | "percent" }
export const detailName = (q: string, f: string) => `general_${q}__${f}`
const LOSS_DETAIL: DetailField[] = [
  { key: "occurenceDate", label: "Occurrence Date", kind: "date" },
  { key: "explanation", label: "Explanation" },
  { key: "resolution", label: "Resolution" },
  { key: "resolutionDate", label: "Resolution Date", kind: "date" },
]
export const GENERAL_DETAILS: Record<string, DetailField[]> = {
  applicantSubsidiary: [
    { key: "parentName", label: "Parent Company Name" },
    { key: "relationship", label: "Relationship Description" },
    { key: "ownershipPercentage", label: "Ownership Percentage", kind: "percent" },
  ],
  applicantHasSubsidiaries: [
    { key: "subsidiaryName", label: "Subsidiary Company Name" },
    { key: "relationship", label: "Relationship Description" },
    { key: "ownershipPercentage", label: "Ownership Percentage", kind: "percent" },
  ],
  otherInsurance: [{ key: "lineOfBusiness", label: "Line of Business" }],
  negativeFinancialAction: LOSS_DETAIL,
  judgementOrLien: LOSS_DETAIL,
  safetyViolations: LOSS_DETAIL,
  exposureFlammables: [{ key: "description", label: "Exposure Description" }],
  pastAllegations: [{ key: "description", label: "Past Allegations Description" }],
  indictedOrConvicted: [{ key: "description", label: "Indicted or Convicted Description" }],
  businessInTrust: [{ key: "name", label: "Trust Name" }],
  otherVentures: [{ key: "description", label: "Description of Other Ventures" }],
  possessDrones: [{ key: "description", label: "Description of Drone Possession" }],
  hireDroneOperators: [{ key: "description", label: "Description of Drone Hiring" }],
}
export const SAFETY_ELEMENTS = ["Safety Manual", "Safety Position", "Monthly Meetings", "OSHA Compliance", "Other"]
export const POOL_FEATURES = ["Approved Fence", "Limited Access", "Diving Board", "Slide", "Life Guard"]
export const RENT_EQUIPMENT_TYPES = ["Small Tools", "Large Equipment"]
export const TERMINATION_REASONS: { key: string; label: string }[] = [
  { key: "nonPayment", label: "Non-Payment" },
  { key: "nonRenewal", label: "Non-Renewal" },
  { key: "agentStopRepresenting", label: "Agent No Longer Represents Carrier" },
  { key: "underwriting", label: "Underwriting" },
]
// Checkbox groups that post ONE comma-joined value under a single name.
export const CHECK_GROUP_FIELDS = ["safetyProgramElements", "poolSafetyFeatures", "rentEquipmentTypes"]

export const FOLLOW_UP_FIELD_NAMES: string[] = [
  ...Object.entries(GENERAL_DETAILS).flatMap(([q, fs]) => fs.map((f) => detailName(q, f.key))),
  ...TERMINATION_REASONS.map((r) => detailName("coverageTerminated", r.key)),
  detailName("coverageTerminated", "conditionCorrected"),
  detailName("coverageTerminated", "conditionCorrectedDescription"),
  "safetyProgramElements", "safetyOtherText",
  "athleticSportDescription", "athleticContactSport", "athleticSponsorshipExtent", "athleticTeamAgeGroup",
  "poolConstruction", "poolSafetyFeatures",
  "rentEquipmentTypes", "rentEquipmentInstructionGiven", "leaseEmployeesWorkersCompCarried",
]
