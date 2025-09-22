import { PersonalCTAButton } from "./personal-cta-button";

// Demo component to showcase all button variants
export function CTAButtonShowcase() {
  return (
    <div className="space-y-8 p-8 bg-background">
      <h2 className="text-2xl font-bold text-center mb-8">
        Personal CTA Button Variants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Outline Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Outline</h3>
          <PersonalCTAButton variant="outline" size="md">
            Outline Button
          </PersonalCTAButton>
        </div>

        {/* Filled Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Filled</h3>
          <PersonalCTAButton variant="filled" size="md">
            Filled Button
          </PersonalCTAButton>
        </div>

        {/* Minimal Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Minimal</h3>
          <PersonalCTAButton variant="minimal" size="md">
            Minimal Button
          </PersonalCTAButton>
        </div>

        {/* Arrow Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Arrow</h3>
          <PersonalCTAButton variant="arrow" size="md">
            Arrow Button
          </PersonalCTAButton>
        </div>

        {/* Icon Left Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Icon Left</h3>
          <PersonalCTAButton
            variant="filled"
            size="md"
            image="/assets/icons/project-icon.svg"
            imageAlt="Project icon"
          >
            Icon Left
          </PersonalCTAButton>
        </div>

        {/* Icon Right Variant */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Icon Right</h3>
          <PersonalCTAButton
            variant="filled"
            size="md"
            image="/assets/icons/project-icon.svg"
            imageAlt="Project icon"
          >
            Icon Right
          </PersonalCTAButton>
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Sizes</h3>
          <div className="space-y-2">
            <PersonalCTAButton variant="outline" size="sm">
              Small
            </PersonalCTAButton>
            <PersonalCTAButton variant="outline" size="md">
              Medium
            </PersonalCTAButton>
            <PersonalCTAButton variant="outline" size="lg">
              Large
            </PersonalCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
