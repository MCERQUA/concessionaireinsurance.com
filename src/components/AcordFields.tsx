import { GL_LIMIT_FIELDS, LOSS_LINES, LOSS_STATUS, YES_NO_QUESTIONS } from "@/lib/acord-gap-fields";

// ACORD 125/126 intake fields. Every control is OPTIONAL and uncontrolled (read with FormData on submit).
// Y/N are radio pairs or placeholder selects.
const inputCls = "w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white";
const lbl = "block text-sm font-medium text-slate-700 mb-1";

function Text({ name, label, type = "text", ...rest }: { name: string; label: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className={lbl}>{label}</label>
      <input id={name} type={type} name={name} className={inputCls} {...rest} />
    </div>
  );
}

function Sel({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className={lbl}>{label}</label>
      <select id={name} name={name} defaultValue="" className={inputCls}>
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function AcordFields() {
  return (
    <div className="space-y-5">
      <h3 className="font-heading font-semibold text-slate-900 pt-2">Additional underwriting details (optional)</h3>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">Business and location</legend>
        <Text name="dba" label="DBA / trade name (if any)" />
        <Text name="entityTypeOther" label="Entity type, if Other (please describe)" />
        <Text name="physicalCounty" label="County of physical address" />
        <Sel name="premisesCityLimits" label="Premises location" options={["Inside City Limits", "Outside City Limits"]} />
        <Sel name="premisesInterest" label="Do you own or rent the premises?" options={["Owner", "Tenant"]} />
        <Sel name="mailingSameAsPhysical" label="Is your mailing address the same as the physical address?" options={["Yes", "No"]} />
        <Text name="mailingAddress" label="Mailing street address (if different)" />
        <Text name="mailingCity" label="Mailing city" />
        <Text name="mailingState" label="Mailing state" />
        <Text name="mailingZip" label="Mailing ZIP code" />
      </fieldset>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">Size and revenue</legend>
        <Text name="partTimeEmployees" label="Part-time employees (exact number)" type="number" min={0} />
        <Text name="annualPayroll" label="Annual payroll ($)" type="number" min={0} step="any" />
        <Text name="annualRevenueExact" label="Annual revenue, exact ($)" type="number" min={0} step="any" />
      </fieldset>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">General liability limits requested</legend>
        <Sel name="glTrigger" label="Coverage trigger" options={["Occurrence", "Claims-made", "Not sure"]} />
        {GL_LIMIT_FIELDS.map((f) => <Sel key={f.name} name={f.name} label={f.label} options={f.options} />)}
      </fieldset>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">Certificate holder and additional insured</legend>
        <Text name="certificateHolderName" label="Certificate holder name" />
        <div>
          <label htmlFor="certificateHolderAddress" className={lbl}>Certificate holder address</label>
          <textarea id="certificateHolderAddress" name="certificateHolderAddress" rows={2} className={inputCls}></textarea>
        </div>
        <Text name="additionalInsuredName" label="Additional insured name (if any)" />
      </fieldset>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">Subcontractors</legend>
        <Text name="percentSubcontracted" label="Percent of work subcontracted" type="number" min={0} max={100} />
        <Sel name="subsProvideCOI" label="Do your subcontractors provide certificates of insurance?" options={["Yes", "No"]} />
      </fieldset>

      <fieldset className="border rounded-lg p-4 space-y-4">
        <legend className="px-2 text-sm font-bold">Loss history, last 3 years (most recent loss)</legend>
        <Text name="lossDate" label="Loss: date of occurrence" type="date" />
        <Sel name="lossLineOfBusiness" label="Loss: line of business" options={LOSS_LINES} />
        <Text name="lossAmountPaid" label="Loss: amount paid ($)" inputMode="decimal" />
        <Text name="lossAmountReserved" label="Loss: amount reserved ($)" inputMode="decimal" />
        <Sel name="lossHistoryStatus" label="Loss: status" options={LOSS_STATUS} />
        <div>
          <label htmlFor="lossAdditional" className={lbl}>Any additional losses (date, line, amounts)</label>
          <textarea id="lossAdditional" name="lossAdditional" rows={2} className={inputCls}></textarea>
        </div>
      </fieldset>

      <details className="border rounded-lg p-4">
        <summary className="cursor-pointer text-sm font-bold">General underwriting questions ({YES_NO_QUESTIONS.length}, optional)</summary>
        <div className="mt-4 space-y-4">
          {YES_NO_QUESTIONS.map((q) => (
            <fieldset key={q.key} className="border-b pb-3">
              <legend className="text-sm mb-1">{q.label}</legend>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2"><input type="radio" name={`yn_${q.key}`} value="Yes" className="h-4 w-4" /> Yes</label>
                <label className="flex items-center gap-2"><input type="radio" name={`yn_${q.key}`} value="No" className="h-4 w-4" /> No</label>
              </div>
              {q.explain && (
                <textarea name={`ynExplain_${q.key}`} rows={2} maxLength={136} placeholder="If yes, please explain" aria-label={`${q.label} - explanation`} className={inputCls + " mt-2"}></textarea>
              )}
            </fieldset>
          ))}
        </div>
      </details>
    </div>
  );
}
