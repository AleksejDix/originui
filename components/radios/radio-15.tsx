import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  { id: "radio-15-r1", value: "r1", label: "Hobby", price: "$9/mo" },
  { id: "radio-15-r2", value: "r2", label: "Plus", price: "$29/mo" },
  { id: "radio-15-r3", value: "r3", label: "Team", price: "$49/mo" },
  { id: "radio-15-r4", value: "r4", label: "Enterprise", price: "Custom" },
];

export default function Radio15() {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium leading-none text-foreground">Choose plan</legend>
      <RadioGroup className="gap-0 -space-y-px" defaultValue="r2">
        {items.map((item) => (
          <div key={item.id} className="relative items-top p-4 border border-input first:rounded-t-lg last:rounded-b-lg shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-muted-foreground flex flex-col gap-4 has-[[data-state=checked]]:z-10 has-[[data-state=checked]]:bg-accent">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  id={item.id}
                  value={item.value}
                  className="after:absolute after:inset-0"
                  aria-describedby={`${item.id}-price`}
                />
                <Label className="inline-flex items-start" htmlFor={item.id}>
                  {item.label}
                  {item.label === "Plus" && (
                    <span className="ml-2 -mt-1 inline-flex items-center rounded-full text-[10px] uppercase bg-emerald-50 border border-emerald-500/50 px-1 py-0.5 font-medium text-emerald-500" aria-label="Hot deal">
                      Hot
                    </span>
                  )}
                </Label>
              </div>
              <div id={`${item.id}-price`} className="text-xs leading-[inherit] text-muted-foreground">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </fieldset>
  )
}
